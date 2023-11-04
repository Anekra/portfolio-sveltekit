import nodemailer from 'nodemailer';
import { GMAIL_ACCOUNT, GMAIL_PASSWORD } from '$env/static/private';

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_ACCOUNT,
    pass: GMAIL_PASSWORD
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.error(error);
  } else {
    console.log('send message ready: ', success);
  }
});

export default transporter;