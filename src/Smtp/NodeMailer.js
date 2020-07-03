import nodemailer from 'nodemailer';

export default class NodeMailer {

    constructor({host, port, secure, auth}) {
        this.host = host,
        this.port = port,
        this.secure = secure,
        this.auth = auth
    }

    createTransport() {
        return nodemailer.createTransport({
            host: this.host,
            port: this.port,
            secure: this.secure,
            auth: {
                user : this.auth.email,
                pass : this.auth.password
            }
        })
    }

    modelMailDefault({to, subject, obj}) {
        let futurHTML = "";
        if(obj.html === "mustActivate") futurHTML = this.templateActivateYourAccount(obj.token);
        if(obj.html === "TokenActivateDeleted") futurHTML = this.templateAccountActivate();
        if(obj.html === "forgetPassword") futurHTML = this.templateForgetPassword(obj.token);
        if(obj.html === "resetPassword") futurHTML = this.templateResetPassword();

        return  {
            from: `"Pizza GO 🍕" <${this.auth.email}>`, // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            html: futurHTML, // html body
        }
    }

    templateActivateYourAccount(token) {
        return `
            <div>
                <h1>Bienvenue sur Pizza GO </h1>
                <p>Avant d'utiliser votre compte veuillez l'activer en cliquant <a href="http://localhost:3000/activateAccount?token=${token}">ici</a></p>
            </div>
        `
    }

    templateAccountActivate() {
        return `
            <div>
                <h1>Bienvenue ! 🎉🎊</h1>
                <p>Votre compte a été activé avec succés !</p>
            </div>
        `
    } 

    templateForgetPassword(token) {
        return `
            <div>
                <h1>Vous avez oublié votre mot de passe ?</h1>
                <p>Pour réinitialiser votre mot de passe cliquez <a href="http://localhost:3000/password/update-password?id=${token}">ici</a></p>
            </div>
        `
    }

    templateResetPassword() {
        return `
            <div>
                <h1>Votre mot de passe a bien été réinitialisé</h1>
                <p>Pensez à l'avenir de ne pas l'oublier</p>
            </div>
        `
    }

}