import { Router, Request, Response } from "express";
import { check, validationResult } from "express-validator";
import * as jwt from 'jsonwebtoken';
const secretKey = '7y8hua78dg981729huyg0';
import Exeption from "../Exeption";
let router = Router(); 
let exeption = new Exeption();
const validateUserData = [
    check("login", "Login must be at least 5 characters long").isLength({ min: 4 }),
    check("password", "Password must be at least 5 characters long").isLength({ min: 4 }),
    check("replyPassword", "Reply password must be at least 5 characters long").isLength({ min: 4 })
];

router.post('/registrationUser',validateUserData, (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return exeption.NotValidData(res);
    }
    // Дополнительная логика обработки запроса
    let {login, password, replyPassword } = req.body
    if (password !== replyPassword) {
        return exeption.NotValidData(res);
    }
    const options = { expiresIn: '1h' }; // Опции токена, например, срок действия
    let userData = {
        login,  
        password, 
        chats: [], 
        replyPassword
    }
    let token = jwt.sign(userData,secretKey)
    console.log(token);
});

export default router;
