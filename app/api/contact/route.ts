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
      console.log("📧 Would send to: safaris@savanna.to")
      console.log("📧 From:", email)
      console.log("📧 Subject: Safari Inquiry from", name)
      console.log("📧 Details:", { travelers, packageType, travelMonth, message })

      return NextResponse.json({
        message: "Email sent successfully (simulated - add RESEND_API_KEY for real emails)",
      })
    }

    const fromEmail = "Savanna Safaris <safaris@savanna.to>"

    // Send inquiry email to business
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: "safaris@savanna.to",
        reply_to: email,
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
                <p style="margin: 8px 0;"><strong>📞 Phone:</strong> ${phone || '<span style="color: #9ca3af;">Not provided</span>'}</p>
                <p style="margin: 8px 0;"><strong>👥 Travelers:</strong> ${travelers}</p>
                <p style="margin: 8px 0;"><strong>📦 Package:</strong> ${packageType || '<span style="color: #9ca3af;">Not selected</span>'}</p>
                <p style="margin: 8px 0;"><strong>📅 Travel Month:</strong> ${travelMonth || '<span style="color: #9ca3af;">Not specified</span>'}</p>
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
                  : `
              <div style="background-color: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
                <h3 style="color: #4A3728; margin-top: 0;">💬 Message</h3>
                <p style="color: #9ca3af; margin: 0;">No message provided</p>
              </div>
              `
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
                This message was sent via the contact form on <strong>safaris.savanna.to</strong>
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

    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: email,
          subject: "Thank you for your Safari Inquiry",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #E67E22 0%, #D35400 100%); padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
                <h1 style="color: white; margin: 0; font-size: 24px;">Savanna Safaris</h1>
                <p style="color: white; margin: 5px 0; opacity: 0.9;">Thank You for Your Inquiry</p>
              </div>
              
              <div style="background-color: #fff; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
                <h2 style="color: #4A3728; margin-top: 0;">Hello ${name},</h2>
                
                <p style="color: #4b5563; line-height: 1.6;">
                  Thank you for your interest in Savanna Safaris! We've received your inquiry and our team will review it shortly.
                </p>
                
                <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #E67E22;">
                  <h3 style="color: #4A3728; margin-top: 0; font-size: 16px;">Your Inquiry Details:</h3>
                  <p style="margin: 8px 0; color: #4b5563;"><strong>Number of Travelers:</strong> ${travelers}</p>
                  <p style="margin: 8px 0; color: #4b5563;"><strong>Package:</strong> ${packageType || "Not selected"}</p>
                  <p style="margin: 8px 0; color: #4b5563;"><strong>Preferred Travel Month:</strong> ${travelMonth || "Not specified"}</p>
                </div>
                
                <p style="color: #4b5563; line-height: 1.6;">
                  One of our safari experts will get back to you within 24 hours to discuss your African adventure. 
                  In the meantime, feel free to explore our website for more information about our safari packages.
                </p>
                
                <div style="text-align: center; margin: 30px 0;">
                  <a href="https://safaris.savanna.to" style="background-color: #E67E22; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
                    Visit Our Website
                  </a>
                </div>
                
                <p style="color: #6b7280; font-size: 14px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                  If you have any urgent questions, please don't hesitate to contact us directly at 
                  <a href="mailto:safaris@savanna.to" style="color: #E67E22;">safaris@savanna.to</a>
                </p>
              </div>
              
              <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 12px; margin: 0;">
                  © 2025 Savanna Safaris. All rights reserved.
                </p>
              </div>
            </div>
          `,
        }),
      })
    } catch (autoReplyError) {
      console.error("Failed to send auto-reply:", autoReplyError)
      // Don't fail the whole request if auto-reply fails
    }

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
