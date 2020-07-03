import JWT from 'jsonwebtoken';
import { error } from '../returnFunc';

export let checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'];

    if(token){
        JWT.verify(token, process.env.SECRET, (err, decoded) => {
            if(err){
                return res.json(error('Token is not valid'));
            }else{ 
                req.decoded = decoded;
                next();
            }
        })
    }else{
        return res.json(error('Auth token is not supplied'));
    }
}