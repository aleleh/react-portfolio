require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

const app = express();

app.use(cors());
app.use(bodyParser.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

aapp.post('/sendmail', async (req, res) => {
    const { name, email, message } = req.body;
  
    const msg = {
      to: 'alexander.lehnbom@gmail.com', 
      from: 'alexander.lehnbom@gmail.com', 
      subject: `New message from ${name} via Portfolio`,
      text: message,
      html: `<strong>${name}</strong> (${email}) says: <br/><br/>${message}`,
    };
  
    try {
      await sgMail.send(msg);
      res.status(200).send('Email sent');
    } catch (error) {
      console.error('Error sending email', error);
      if (error.response) {
        console.error('Error response body', error.response.body)
      }
      res.status(500).send('Error sending email');
    }
  });
  

app.listen(3000, () => {
    console.log('Server is running at port 3000');
});
