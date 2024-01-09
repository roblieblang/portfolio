import * as sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

    if (req.method === "POST") {
        const body = await req.json();
        const {visitorEmail, visitorName, message} = body;

        const content = {
            to: "robertlieblang@gmail.com",
            from: "robertlieblang+no-reply@gmail.com",
            replyTo: visitorEmail,
            subject: `New contact request from ${visitorName} - ${visitorEmail}`,
            text: `Message: ${message}`,
            html: `<p>From: ${visitorName}</p><p>Email: <a href='mailto:${visitorEmail}'>${visitorEmail}</a></p><p>Message: ${message}</p>`
        };

        try {
            await sgMail.send(content);
            return new Response(JSON.stringify({ status: "Email sent successfully" }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            console.error(error);
            return new Response(JSON.stringify({ status: "Message not sent" }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    }
}