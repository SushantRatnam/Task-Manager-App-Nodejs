const sgMail = require('@sendgrid/mail')

const sgAPIKey = process.env.SENDGRIP_API_KEY

sgMail.setApiKey(sgAPIKey)

const sendWelcomeMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sushant.ratnam@gmail.com',
        subject: 'Thanks for trying our app',
        text: `Welcome to Task Manager App, ${name}. We are extremely delighted to have you on board.`
    })
}

const sendGoodByeMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sushant.ratnam@gmail.com',
        subject: 'We are unhappy to see you leave',
        text: `Hi ${name}, please tell us why you decided to leave`
    })
}


module.exports = {
    sendWelcomeMail,
    sendGoodByeMail
}