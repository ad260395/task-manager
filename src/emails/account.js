const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ashish.deshpande1995@gmail.com',
        subject: 'Welcome to the app',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendDeleteEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ashish.deshpande1995@gmail.com',
        subject: 'User deleted successfully !',
        text: 'Sorry to see you go!'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendDeleteEmail
}


// sgMail.send({
//     to : 'apoorva.rasal@gmail.com',
//     from : 'ashish.deshpande1995@gmail.com',
//     subject : 'This is your DM id',
//     text : 'kushalkumar.jaiswal@infosys.com'
// })