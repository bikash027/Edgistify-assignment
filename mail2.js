var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
  service: "SendinBlue",
  host: 'smtp-relay.sendinblue.com',
  port:587,
  // proxy: 'http://172.16.199.40:8080',
  auth: {
    user: 'singhab288@gmail.com',
    // pass: 'd8RQCrH7s6SBFVcO',
    pass: 'K8Ca4O0jSREyrtqg'
  }
}));


const sendMail=function(to,randomString){
    const msg={
        to,
        from: 'logisticsSocial@gmail.com',
        subject: 'Logistics Social Email Verification',
        html: `<h3>Logistics Social Email Verification</h3>
                <p>Someone used your email to signup to our website. 
                If that was you click the link below to verify your email address</p>
                <a href='http://localhost:5000/user/email/${randomString}'>Link to email address verification</a>`,
    }
    return transporter.sendMail(msg)
}

module.exports=sendMail;
