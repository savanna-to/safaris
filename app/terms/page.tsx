export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-[family-name:var(--font-heading)]">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none space-y-8 text-foreground/80 leading-relaxed">
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provisions of
                this agreement. If you do not agree to these terms, please do not use this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Use of Website</h2>
              <p>
                You agree to use this website only for lawful purposes and in a way that does not infringe the rights
                of, restrict, or inhibit anyone else's use and enjoyment of the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Booking and Reservations</h2>
              <p>
                All safari bookings are subject to availability and confirmation. We reserve the right to refuse service
                to anyone for any reason at any time. Prices and availability are subject to change without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Payment Terms</h2>
              <p>
                Payment terms will be provided upon booking confirmation. Full payment may be required before services
                are rendered. Cancellation and refund policies will be communicated at the time of booking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the property of
                Savanna Safaris or its content suppliers and is protected by copyright and intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Limitation of Liability</h2>
              <p>
                Savanna Safaris shall not be liable for any indirect, incidental, special, consequential, or punitive
                damages resulting from your use of or inability to use the website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Travel Risks</h2>
              <p>
                Safari activities involve inherent risks. By booking with us, you acknowledge these risks and agree to
                follow all safety instructions provided by our guides. Travel insurance is strongly recommended.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                posting to the website. Your continued use of the website constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with applicable laws. Any disputes arising
                from these terms or your use of the website shall be subject to the exclusive jurisdiction of the
                appropriate courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at safaris@savanna.to
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
