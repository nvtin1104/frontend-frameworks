const nodemailer = require('nodemailer')
const { env } = require('~/configs/environment')

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: env.APP_EMAIL,
        pass: env.APP_PASSWORD
    }
})

// async..await is not allowed in global scope, must use a wrapper
export async function SendMail({ to, subject, text, html }) {
    // send mail with defined transport object
    await transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <camtinlqd123@gmail.com>', // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html // html body
    })

}