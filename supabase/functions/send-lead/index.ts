import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface LeadData {
  staircaseType: string;
  floors: string;
  taxable: string;
  over70: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const leadData: LeadData = await req.json();
    console.log("Received lead data:", leadData);

    const staircaseLabel = leadData.staircaseType === "straight" ? "Droit" : "Tournant";
    const taxableLabel = leadData.taxable === "yes" ? "Oui" : "Non";
    const over70Label = leadData.over70 === "yes" ? "Oui" : "Non";

    const emailResponse = await resend.emails.send({
      from: "MaPrimeAdapt <onboarding@resend.dev>",
      to: ["monaideauxsenior@gmail.com"],
      subject: `Nouveau lead MaPrimeAdapt' - ${leadData.firstName} ${leadData.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            Nouveau Lead MaPrimeAdapt'
          </h1>
          
          <h2 style="color: #059669;">Informations de contact</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Prénom</strong></td>
              <td style="padding: 8px; border: 1px solid #e5e7eb;">${leadData.firstName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Nom</strong></td>
              <td style="padding: 8px; border: 1px solid #e5e7eb;">${leadData.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Email</strong></td>
              <td style="padding: 8px; border: 1px solid #e5e7eb;"><a href="mailto:${leadData.email}">${leadData.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Téléphone</strong></td>
              <td style="padding: 8px; border: 1px solid #e5e7eb;"><a href="tel:${leadData.phone}">${leadData.phone}</a></td>
            </tr>
          </table>

          <h2 style="color: #059669;">Qualification</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Type d'escalier</strong></td>
              <td style="padding: 8px; border: 1px solid #e5e7eb;">${staircaseLabel}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Nombre d'étages</strong></td>
              <td style="padding: 8px; border: 1px solid #e5e7eb;">${leadData.floors}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Imposable</strong></td>
              <td style="padding: 8px; border: 1px solid #e5e7eb;">${taxableLabel}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Plus de 70 ans</strong></td>
              <td style="padding: 8px; border: 1px solid #e5e7eb;">${over70Label}</td>
            </tr>
          </table>

          <p style="color: #6b7280; font-size: 12px; margin-top: 30px;">
            Ce lead a été généré via le formulaire MaPrimeAdapt' le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}.
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-lead function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
