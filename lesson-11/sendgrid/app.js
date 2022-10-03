const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const mail = {
    to: "arestovich@gmail.com",
    from: "bogdan.lyamzin.d@gmail.com",
    subject: "Погадали на новое наступление ВСУ",
    html: "<p>Оно будет через 2-3 недели</p>"
};

sgMail.send(mail)
    .then(()=> console.log("Mail send success"))
    .catch(error => console.log(error.message))