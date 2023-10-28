const {draftMail} = require('../service/mailService')

let querymail = async(req, res,next)=>
{
    try{
        let {name, email, query, mobileNo} = req.body
        if(!email){
            res.status(404).json("email not sent")
        }
        console.log("mail")
        draftMail(name, email, query, mobileNo)
        res.status(200).json({error:false,message:"mail sent"})
    }
    catch(err){
        next(err)
    }

}

module.exports = {
    querymail
}