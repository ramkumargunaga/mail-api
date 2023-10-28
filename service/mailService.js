const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:"ramkumarparameshwargunaga@gmail.com",
        pass:"qqmcmabzjumqtvjw"
    }
})

let draftMail = async (name, email, query, mobileNo)=>
{
    let mailOptions={
        from:"ramkumarparameshwargunaga@gmail.com",
        to:email,
        subject:"Query mail",
        html:`<h3>Hi team,</h3> <br/>
        we have received a query from ${name}. the query is as follows, ${query}.
        Mobile number of ${name} is ${mobileNo}`
    }
    transporter.sendMail(mailOptions, ()=>{console.log(`mail sent successfully to email ${email}`)})
}


module.exports = {
    draftMail
}

