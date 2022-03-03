const { redirect } = require("express/lib/response");

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


exports.postEmail = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;
    const message = req.body.extareaID;
    const subjectConstructor = name + " email via Cash Traders website";
    console.log(message);
    const fullMessage = "Name: " + name + "\nContact number: " + number + "\nEmail: " + email;
    const msg = {
        to: email, // Change to your recipient
        from: 'ejelwin.nadar@gmail.com', // Change to your verified sender
        subject: subjectConstructor,
        text: fullMessage,
        // html: '<strong>${name}</strong>',
    }

    sgMail
        .send(msg)
        .then((response) => {
            console.log(response[0].statusCode)
            console.log(response[0].headers)
        })
        .catch((error) => {
            console.error(error)
        })
        
    console.log(name);
    console.log("mail sent");
    res.redirect('/contact-us');
}