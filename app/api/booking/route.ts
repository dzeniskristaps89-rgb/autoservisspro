import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!process.env.RESEND_API_KEY) {
      return new Response(JSON.stringify({ ok: false, error: "Missing RESEND_API_KEY" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    await resend.emails.send({
      from: "Autoserviss <onboarding@resend.dev>",
      to: "TAVS_EPASTS@gmail.com", // <-- nomaini uz SAVU e-pastu
      subject: "Jauns pieraksts autoservisā",
      html: `
        <h2>Jauns pieraksts</h2>
        <p><b>Vārds:</b> ${data?.name ?? ""}</p>
        <p><b>Telefons:</b> ${data?.phone ?? ""}</p>
        <p><b>Auto:</b> ${data?.car ?? ""}</p>
        <p><b>Numura zīme:</b> ${data?.plate ?? ""}</p>
        <p><b>Datums:</b> ${data?.date ?? ""}</p>
        <p><b>Laiks:</b> ${data?.time ?? ""}</p>
        <p><b>Apraksts:</b> ${data?.message ?? ""}</p>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error("BOOKING EMAIL ERROR:", err);
    return new Response(
      JSON.stringify({ ok: false, error: err?.message ?? "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
