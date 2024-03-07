import nodemailer from 'nodemailer'

// configure email and send it

async function sendmail() {
  // now creat email transporter
  // SMPT (simple mail transpor port)
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "7bfe7e9e91a500",
      pass: "df4948e37f2c5c"
    }
  })
  var mailoption = {
    from: '7bfe7e9e91a500',
    to: '7bfe7e9e91a500',
    subject: 'welcome to nodejs',
    text: 'this is simple email',
  }
  // send email using try function
  try {
    const result = await transport.sendMail(mailoption)
    console.log('email send succsesfully');
  } catch (error) {
    console.log('email error', error);
  }
}
export default sendmail