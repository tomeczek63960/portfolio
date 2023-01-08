import type { NextApiRequest, NextApiResponse } from "next";
import { isFalsy } from "src/helpers/checkFalsyType";
import nodemailer from "nodemailer";

interface IResponse {
  success: boolean;
  errors: string[];
}
interface IReqBody {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const emailRegex =
  /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

const validation = (body: IReqBody): string[] => {
  const { firstName, lastName, email, message } = body;
  const errors = [];
  if (isFalsy(firstName)) {
    errors.push("Name is required");
  }
  if (isFalsy(lastName)) {
    errors.push("Lastname is required");
  }
  if (isFalsy(email)) {
    errors.push("Email is required");
  } else if (!emailRegex.test(email) || email.length > 254) {
    errors.push("Invalid email");
  }
  if (isFalsy(message)) {
    errors.push("Message is required");
  }
  return errors;
};

async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
): Promise<void> {
  const body: IReqBody = req.body;
  const errors = validation(body);
  if (errors.length > 0) {
    return res.status(400).json({ errors, success: false });
  }

  try {
    const credentials = {
      host: process.env.SMTP_HOST,
      port: isFalsy(process.env.SMTP_PORT)
        ? 0
        : parseInt(process.env.SMTP_PORT),
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    };
    const transporter = nodemailer.createTransport({
      host: credentials.host,
      port: credentials.port,
      auth: {
        user: credentials.user,
        pass: credentials.pass,
      },
    });
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: "Portfolio contact form",
      html: `
        <h1>Wiadomość od ${body.firstName} ${body.lastName}</h1>
        <p>
          <strong>Dane kontaktowe</strong></br>
          <strong>Imię i nazwisko:</strong> ${body.firstName} ${body.lastName}</br>
          <strong>Email:</strong> ${body.email}
        </p>
        <p><strong>Wiadomość:</strong> ${body.message}</p>
      `,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ errors: ["something went wrong"], success: false });
  }

  return res.status(200).json({ errors: [], success: true });
}

export default sendEmail;
