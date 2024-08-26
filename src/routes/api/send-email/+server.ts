import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import * as nodemailer from 'nodemailer';

export async function POST(event: RequestEvent) {
  const { name, phone, email, concern } = await event.request.json();

  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.example.com", // Replace with your SMTP host
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: "your_email@example.com", // Replace with your email
      pass: "your_password", // Replace with your password
    },
  });

  // Email content
  const mailOptions = {
    from: '"Your Clinic Name" <your_email@example.com>',
    to: "aavyamediclinic@gmail.com", // The email address you want to send to
    subject: "New Consultation Enquiry",
    text: `
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Concern: ${concern}
    `,
    html: `
      <h2>New Consultation Enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Concern:</strong> ${concern}</p>
    `,
  };

  try {
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}