const nodemailer = require('nodemailer');

const sendEmail = async ()=>{


    let testAccount = await nodemailer.createTestAccount();

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'kale.gottlieb@ethereal.email',
        pass: 'yP85gFQ7W32EWy6J8w'
    }
});
let info = await transporter.sendMail({
    from:'"David" <david@gmail.com>',
    to:'bar@example.com',
    subject:"Hello",
    html:"<h2>Sending emails with Nodejs </h2>"
})


}

module.exports = sendEmail;