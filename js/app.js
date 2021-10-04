window.onload = ev => {
    btnSend.addEventListener("click", (e) => {
        let email = gmail.value()

        fetch("http://codingstep.freevar.com/", {
            method: "post",
            body: {email: email}
        })
    })
}


var mandrill = require('node-mandrill') ('<your API Key>');

function sendEmail ( _name, _email, _subject, _message) {
    mandrill('/messages/send', {
        message: {
            to: [{email: _email , name: _name}],
            from_email: 'noreply@yourdomain.com',
            subject: _subject,
            text: _message
        }
    }, function(error, response){
        if (error) console.log( error );

        else console.log(response);
    });
}

// define sua própria API de e-mail que aponta para o seu servidor.

app.post( '/api/sendemail/', function(req, res){

    let _name = req.body.name;
    let _email = req.body.email;
    let _subject = req.body.subject;
    let _message = req.body.message;

// implemente sua proteção ou verificações de spam

    sendEmail ( _name, _email, _subject, _message );
});