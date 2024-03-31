import {Response, Request} from 'express'
class Exeption {
    NotValidData(res:Response) {
        return res.json({sucsess: false, message: "Data are not valid", status: 303})
    }
    UserNOtFound(res:Response) {
        return res.json({sucsess: false, message: "User not found", status: 404})
    }
    UserWasCreated(res:Response) {
        return res.json({sucsess: false, message: "User was created", status: 406})
    }
    NotAuth(res:Response) {
        return res.json({sucsess: false, message: "Unauthorized", status: 401})
    }
}

export default Exeption