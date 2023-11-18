import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async () => {
  await resend.emails.send({
    from: "...", // domain
    to: "trianglek4nz@gmail.com",
    subject: "...",
    react: <WelcomeTemplate name="Pavel" />,
  });

  return NextResponse.json({ message: "Email sent" });
};
