export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-[family-name:var(--font-heading)]">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none space-y-8 text-foreground/80 leading-relaxed">
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including when you fill out our contact form,
                subscribe to our newsletter, or communicate with us. This may include your name, email address, phone
                number, and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide customer service</li>
                <li>Send you information about our services and safari packages</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                with trusted service providers who assist us in operating our website and conducting our business,
                provided they agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet or
                electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Cookies</h2>
              <p>
                Our website may use cookies to enhance your browsing experience. You can choose to disable cookies
                through your browser settings, though this may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. You may also opt out of
                receiving marketing communications from us at any time by contacting us directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at safaris@savanna.to</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
