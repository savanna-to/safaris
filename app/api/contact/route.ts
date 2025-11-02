import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, travelers, package: packageType, travelMonth, message } = await request.json()

    // Validate required fields
    if (!name || !email || !travelers) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if we have the API key
    if (!process.env.RESEND_API_KEY) {
      console.log("⚠️ RESEND_API_KEY not found, simulating email...")
      console.log("📧 Would send to: info@savannasafaris.com")
      console.log("📧 From:", email)
      console.log("📧 Subject: Safari Inquiry from", name)
      console.log("📧 Details:", { travelers, packageType, travelMonth, message })

      return NextResponse.json({
        message: "Email sent successfully (simulated - add RESEND_API_KEY for real emails)",
      })
    }

    // Send email to you using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "info@savannasafaris.com",
        to: "info@savannasafaris.com",
        subject: `Safari Inquiry from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #E67E22 0%, #D35400 100%); padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Savanna Safaris</h1>
              <p style="color: white; margin: 5px 0; opacity: 0.9;">New Safari Inquiry</p>
            </div>
            
            <div style="background-color: #fff; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
              <h2 style="color: #4A3728; margin-top: 0; border-bottom: 2px solid #E67E22; padding-bottom: 10px;">
                Contact Information
              </h2>
              
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 8px 0;"><strong>👤 Name:</strong> ${name}</p>
                <p style="margin: 8px 0;"><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #E67E22;">${email}</a></p>
                ${phone ? `<p style="margin: 8px 0;"><strong>📞 Phone:</strong> ${phone}</p>` : ""}
                <p style="margin: 8px 0;"><strong>👥 Travelers:</strong> ${travelers}</p>
                ${packageType ? `<p style="margin: 8px 0;"><strong>📦 Package:</strong> ${packageType}</p>` : ""}
                ${travelMonth ? `<p style="margin: 8px 0;"><strong>📅 Travel Month:</strong> ${travelMonth}</p>` : ""}
                <p style="margin: 8px 0;"><strong>📅 Received:</strong> ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
              </div>
              
              ${
                message
                  ? `
              <div style="background-color: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
                <h3 style="color: #4A3728; margin-top: 0;">💬 Message</h3>
                <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; border-left: 4px solid #E67E22;">
                  <p style="line-height: 1.6; color: #4b5563; margin: 0;">${message.replace(/\n/g, "<br>")}</p>
                </div>
              </div>
              `
                  : ""
              }
              
              <div style="margin-top: 30px; padding: 20px; background-color: #fef3c7; border-radius: 8px; border-left: 4px solid #E67E22;">
                <p style="margin: 0; color: #92400e; font-size: 14px;">
                  <strong>💡 Tip:</strong> Respond within 24 hours for the best customer experience. 
                  You can reply directly by clicking the email address above.
                </p>
              </div>
            </div>
            
            <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 12px; margin: 0;">
                This message was sent via the contact form on <strong>savannasafaris.com</strong>
              </p>
            </div>
          </div>
        `,
      }),
    })

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text()
      console.error("Resend API error:", errorData)
      throw new Error(`Failed to send email via Resend: ${emailResponse.status}`)
    }

    // Send auto-reply to user
    const autoReplyResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "info@savannasafaris.com",
        to: email,
        subject: `Thank You for Your Safari Inquiry - Savanna Safaris`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #E67E22 0%, #D35400 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px;">Savanna Safaris</h1>
              <p style="color: white; margin: 10px 0; opacity: 0.9; font-size: 16px;">Thank you for your interest!</p>
            </div>
            
            <div style="background-color: #fff; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
              <h2 style="color: #4A3728; margin-top: 0;">Hello ${name.split(" ")[0]}! 👋</h2>
              
              <p style="color: #4b5563; line-height: 1.6; font-size: 16px;">
                Thank you for your safari inquiry. We have received your message and will 
                contact you as soon as possible. Our team strives to respond within 
                <strong style="color: #E67E22;">24 hours</strong>.
              </p>
              
              <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #22c55e; margin: 25px 0;">
                <h3 style="color: #166534; margin-top: 0; font-size: 16px;">📋 Your Inquiry Summary:</h3>
                <p style="color: #166534; margin: 5px 0;"><strong>Travelers:</strong> ${travelers}</p>
                ${packageType ? `<p style="color: #166534; margin: 5px 0;"><strong>Package:</strong> ${packageType}</p>` : ""}
                ${travelMonth ? `<p style="color: #166534; margin: 5px 0;"><strong>Travel Month:</strong> ${travelMonth}</p>` : ""}
                <p style="color: #166534; margin: 5px 0;"><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
              </div>
              
              <p style="color: #4b5563; line-height: 1.6;">
                In the meantime, feel free to explore more about our safari packages 
                on our website or contact us directly:
              </p>
              
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <h3 style="color: #4A3728; margin-top: 0; font-size: 16px;">📞 Contact Information</h3>
                <p style="margin: 8px 0; color: #4A3728;"><strong>📧 Email:</strong> <a href="mailto:info@savannasafaris.com" style="color: #E67E22;">info@savannasafaris.com</a></p>
                <p style="margin: 8px 0; color: #4A3728;"><strong>📞 Phone:</strong> <a href="tel:+1234567890" style="color: #E67E22;">+1 (234) 567-890</a></p>
                <p style="margin: 8px 0; color: #4A3728;"><strong>🌐 Website:</strong> <a href="https://savannasafaris.com" style="color: #E67E22;">savannasafaris.com</a></p>
              </div>
              
              <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #E67E22; margin: 25px 0;">
                <h3 style="color: #92400e; margin-top: 0; font-size: 16px;">🦁 Why Choose Savanna Safaris?</h3>
                <ul style="color: #92400e; margin: 10px 0; padding-left: 20px;">
                  <li>Expert local guides with years of experience</li>
                  <li>Luxury accommodations in the heart of nature</li>
                  <li>Customizable packages for every adventure</li>
                  <li>Unforgettable wildlife encounters</li>
                </ul>
              </div>
              
              <p style="color: #4b5563; line-height: 1.6; margin-top: 30px;">
                Best regards,<br>
                <strong style="color: #E67E22;">The Savanna Safaris Team</strong> 🦁
              </p>
            </div>
            
            <div style="background-color: #4A3728; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                © ${new Date().getFullYear()} Savanna Safaris. All rights reserved.
              </p>
              <p style="color: #9ca3af; font-size: 12px; margin: 5px 0 0 0;">
                Your gateway to unforgettable African adventures 🌍
              </p>
            </div>
          </div>
        `,
      }),
    })

    if (!autoReplyResponse.ok) {
      console.error("Auto-reply failed, but main email sent successfully")
    }

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
