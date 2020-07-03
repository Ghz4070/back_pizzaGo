import bcrypt from 'bcryptjs';
import validator from 'validator';
import JWT from 'jsonwebtoken';

import NodeMailer from '../Smtp/NodeMailer';
import { prisma } from '../generated/prisma-client';
import { success, error } from '../returnFunc';
import { getOnlyMailUser, getUser, getCurrentUser, getUserByActivateToken, getUserByResetToken } from '../Queries/GraphQLQueries';

class UserController {
    getAllUser() {
        return new Promise(async (next) => {
            const Users = await prisma.users()
            if(Users.length > 0) {
                next(success(Users));
            }else {
                next(success('no user'));
            }
        })
    }

    getUserById(id) {
        return new Promise(async (next) => {
            const User = await prisma.user({id: id});
            if(User) {
                next(success(User));
            }else {
                next(error('user doesnt exist'));
            }
        })
    }

    currentUser(email) {
        return new Promise(async next => {
            const User = await prisma.$graphql(getCurrentUser(email));
            if(User) {
                next(success(User));
            }else {
                next(error('ERROR USER'));
            }
        })
    }

    addUser(user) {
        return new Promise (async (next) => {
            if(!await this.existEmail(user.data.email)){
                const crypt = await this.encryptorData(user.data.password);
                await prisma.createUser({
                    firstname : user.data.firstname,
                    lastname: user.data.lastname,
                    address: user.data.address,
                    zip: user.data.zip,
                    city: user.data.city,
                    tel: user.data.tel,
                    email: user.data.email,
                    password: crypt,
                    role : {set: ['ROLE_USER']},
                    tokenActivate: crypt.split("/").join(""),
                    tokenResetPassword: null
                });

                const email = new NodeMailer({host: process.env.HOST, port: process.env.PORT_MAIL, secure: process.env.SECURE, auth: {email: process.env.MAIL, password: process.env.PWD_MAIL}});
                const modelMailActivate = email.modelMailDefault({to: user.data.email, subject: "Activate your account 💁🏻‍♂️", obj: {html: "mustActivate", token: crypt}});

                const transport = email.createTransport();
                const sendEmail = await transport.sendMail(modelMailActivate);

                next(success('user has been added'));
            } else {
                next(error("this email has been used"));
            }
        })
    }

    createAdminUser(user) {
        return new Promise(async next => {
            if(await this.existEmail(user.data.email)){
                const crypt = await this.encryptorData(user.data.password);
                await prisma.createUser({
                    firstname : user.data.firstname,
                    lastname: user.data.lastname,
                    address: "admin user",
                    zip: 99999,
                    city: "admin user",
                    tel: user.data.tel,
                    email: user.data.email,
                    password:crypt,
                    role : {set: ['ROLE_USER', 'ROLE_ADMIN']},
                    tokenActivate: null,
                    tokenResetPassword: null
                });
                next(success('Admin user created'));
            } else {
                next(error("Error, this mail has been used"));
            }
        })
    }

    deleteUser(id) {
        return new Promise(async (next) => {
            if(await this.checkUserExistByID(id)){
                console.log(id)
                await prisma.deleteUser({id: id});
                next(success('User has been deleted'));
            }else{
                next(error("Doesn't exist"));
            }
        })
    }
    
    updateUser(objectUser) {
        return new Promise(async next => {
            if(await this.checkUserExistByID(objectUser.where.id)){
                const updateUser = await prisma.updateUser(objectUser);
                next(success(updateUser));
            } else {
                next(error("Doesn't exist"))
            }
        })
    }

    updateCurrentUser(objectUser) {
        return new Promise (async next => {
            const {id, firstname, lastname, address, zip, city, tel } = objectUser;
            const objectToUpdate = {
                where: {id: id},
                data : {
                    firstname: firstname,
                    lastname : lastname,
                    address : address,
                    zip : zip,
                    city : city,
                    tel : tel
                }
            };

            next(success(await prisma.updateUser(objectToUpdate)))
        })
    }

    connection(user) {
        return new Promise(async (next) => {
            const checkMail = await this.existAccount(user.data.email);

            if(checkMail.result !== "not found"){
                const { password, tokenActivate } = checkMail.result.users[0];
                if(await this.checkAccountActivate(tokenActivate) || tokenActivate === null){
                    const decrypt = await this.decryptorData(user.data.password, password);
                    if(decrypt){
                        const token = await this.createTokenJWT(checkMail.result.users[0]);
                        next(success(token));
                    }else {
                        next(error('Error password'));
                    }
                }else{
                    next(error('Activate your account'));
                }
            }else {
                next(error('Account not exist'));
            }
        })
    }

    activateAccount(token) {
        return new Promise(async next => {
            const getUser = await prisma.$graphql(getUserByActivateToken(token));
            console.log(getUser)
            if(getUser.users.length > 0){
                const deleteActivateToken = await prisma.updateUser({where: {id: getUser.users[0].id}, data: {tokenActivate: ""}});
                
                const email = new NodeMailer({host: process.env.HOST, port: process.env.PORT_MAIL, secure: process.env.SECURE, auth: {email: process.env.MAIL, password: process.env.PWD_MAIL}});
                const modelMailAccountActivate = email.modelMailDefault({to: getUser.users[0].email, subject: "Account activate ! ✅", obj: {html: "TokenActivateDeleted"}});
                
                const transport = email.createTransport();
                const sendEmail = await transport.sendMail(modelMailAccountActivate);
                next(success('The token has been delete'));
            }else {
                next(error("Error with the token"));
            }
        })
    }

    forgetPassword(email) {
        return new Promise(async next => {
            const checkEmail = await this.existAccount(email);

            if(checkEmail){
                const lessCharSpecial = checkEmail.result.users[0].password.split('/').join('');
                console.log(lessCharSpecial);
                await prisma.updateUser({where: {id: checkEmail.result.users[0].id}, data:{tokenResetPassword: lessCharSpecial}});
                
                const email = new NodeMailer({host: process.env.HOST, port: process.env.PORT_MAIL, secure: process.env.SECURE, auth: {email: process.env.MAIL, password: process.env.PWD_MAIL}});
                const modelMailForgetPassword = email.modelMailDefault({to: checkEmail.result.users[0].email, subject: "Reset password 🖋", obj: {html: "forgetPassword", token: lessCharSpecial}});

                const transport = email.createTransport();
                const sendEmail = await transport.sendMail(modelMailForgetPassword);
                next(success(sendEmail));
            }else{
                next(error('Error, this email doesnt exist'))
            }
        })
    }

    resetPassword(objResetPassword) {
        return new Promise(async next => {
            const getUser = await prisma.$graphql(getUserByResetToken(objResetPassword.tokenReset))
            if(getUser.users.length > 0){
                const { id } = getUser.users[0];
                const cryptPassword = await this.encryptorData(objResetPassword.pwd)
                await prisma.updateUser({where:{id: id}, data: {password: cryptPassword, tokenResetPassword: null}});

                const email = new NodeMailer({host: process.env.HOST, port: process.env.PORT_MAIL, secure: process.env.SECURE, auth: {email: process.env.MAIL, password: process.env.PWD_MAIL}});
                const modelMailResetPassword = email.modelMailDefault({to: getUser.users[0].email, subject: "Password has been reset ✅", obj: {html: "resetPassword"}});

                const transport = email.createTransport();
                const sendEmail = await transport.sendMail(modelMailResetPassword);
                next(success(sendEmail));
            }else{
                next(error("Error this token doesnt exist"))
            }
            console.log(getUser);
        })
    }

    checkUserExistByID(userId){
        return new Promise(async (next) => {
            const checkuser = await prisma.user({id: userId});
            if(checkuser){
                next(true);
            }else{
                next(false);
            }
        })
    }

    existAccount(email) {
        return new Promise(async (next) => {
           const user = await prisma.$graphql(getUser(email));
           if(user){
               next(success(user));
           }else {
               next(error('not found'));
           }
        })
    }

    existEmail(email) {
        return new Promise (async (next) => {
            let check = true;
            const getUser = await prisma.$graphql(getOnlyMailUser(email));
            console.log(getUser)
            if(getUser.users.length > 0){
                await validator.isEmail(email) ? check = true : check = false;
                next(check);
            }else {
                check = false;
                next(check);
            }

            
        })
    }

    encryptorData(toEncrypt) {
        return new Promise (async (next) => {
           if(typeof(toEncrypt) === "string"){
                const salt = await bcrypt.genSalt(10);
                const hash = await bcrypt.hash(toEncrypt, salt);
                next(hash);
           }  
        })
    }

    decryptorData(compare,crypted) {
        return new Promise (async (next) => {
            if(compare.trim() !== null || compare.trim() !== "" && crypted.trim() !== null || crypted.trim() !== "" ){
                const decrypt = await bcrypt.compare(compare, crypted);
                next(decrypt);
            }
        })
    }

    createTokenJWT(user) {
        return new Promise(async (next) => {
            const token = await JWT.sign({role: user.role, email: user.email, id: user.id},process.env.SECRET,{algorithm: 'HS256',expiresIn: '24h'});
            next(token);
        })
    }

    checkAccountActivate(tokenActivate) {
        return new Promise(async (next) => {
            if(tokenActivate.trim() == "" || tokenActivate == null){
                next(true);
            }else {
                next(false);
            }
        })
    }
}

export default new UserController();