declare module 'nodemailer' {
  export function createTransport(options: never): never;
  export interface Transporter {
    sendMail(mailOptions: never): Promise<never>;
  }
}