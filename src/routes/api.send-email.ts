import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import nodemailer from "nodemailer";

// Where form submissions should land in your inbox.
// (The Gmail account below is only used to SEND the email via SMTP —
// it does not have to be the same as the receiving address.)
const RECEIVING_EMAIL = "info@digitalyze.tech";

export const Route = createFileRoute("/api/send-email")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const { name, email, phone, project_type, budget, message } = body as {
            name?: string;
            email?: string;
            phone?: string;
            project_type?: string;
            budget?: string;
            message?: string;
          };

          if (!name || !email || !message) {
            return new Response(
              JSON.stringify({ success: false, error: "Missing required fields." }),
              { status: 400, headers: { "Content-Type": "application/json" } },
            );
          }

          const gmailUser = process.env.GMAIL_USER;
          const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

          if (!gmailUser || !gmailAppPassword) {
            console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables.");
            return new Response(
              JSON.stringify({ success: false, error: "Email service not configured." }),
              { status: 500, headers: { "Content-Type": "application/json" } },
            );
          }

          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: gmailUser,
              pass: gmailAppPassword,
            },
          });

          await transporter.sendMail({
            from: `"Digitalyze Website" <${gmailUser}>`,
            to: RECEIVING_EMAIL,
            replyTo: email,
            subject: `New enquiry from ${name} — Digitalyze website`,
            html: `
              <h2 style="font-family: sans-serif;">New contact form submission</h2>
              <table style="font-family: sans-serif; border-collapse: collapse;">
                <tr><td style="padding:4px 12px 4px 0;"><b>Name</b></td><td>${escapeHtml(name)}</td></tr>
                <tr><td style="padding:4px 12px 4px 0;"><b>Email</b></td><td>${escapeHtml(email)}</td></tr>
                <tr><td style="padding:4px 12px 4px 0;"><b>Phone</b></td><td>${escapeHtml(phone || "-")}</td></tr>
                <tr><td style="padding:4px 12px 4px 0;"><b>Project type</b></td><td>${escapeHtml(project_type || "-")}</td></tr>
                <tr><td style="padding:4px 12px 4px 0;"><b>Budget</b></td><td>${escapeHtml(budget || "-")}</td></tr>
                <tr><td style="padding:4px 12px 4px 0; vertical-align:top;"><b>Message</b></td><td>${escapeHtml(message).replace(/\n/g, "<br/>")}</td></tr>
              </table>
            `,
          });

          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (err) {
          console.error("Failed to send contact email:", err);
          return new Response(
            JSON.stringify({ success: false, error: "Failed to send email." }),
            { status: 500, headers: { "Content-Type": "application/json" } },
          );
        }
      },
    },
  },
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}