const sgMail=require('@sendgrid/mail');
sgMail.setApiKey("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");

function sendMail(to,randomString){
    const msg={
        to,
        from: 'logisticsSocial@gmail.com',
        subject: 'Logistics Social Email Verification',
        html: `<h3>Logistics Social Email Verification</h3>
                <p>Someone used your email to signup to our website. 
                If that was you click the link below to verify your email address</p>
                <a href='http://localhost:5000/user/email/${randomString}'>Link to email address verification</a>`,
    }
    return sgMail.send(msg)
}
module.exports=sendMail;