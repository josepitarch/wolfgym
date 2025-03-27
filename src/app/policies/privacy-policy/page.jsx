import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | FitLife Gym",
  description: "Learn about how we collect, use, and protect your personal information at FitLife Gym.",
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: March 27, 2025</p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
          <p className="mb-3">
            At FitLife Gym, we respect your privacy and are committed to protecting your personal data. This privacy
            policy will inform you about how we look after your personal data when you visit our website and tell you
            about your privacy rights and how the law protects you.
          </p>
          <p>Please read this privacy policy carefully before using our services.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
          <p className="mb-3">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped
            together as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Identity Data</strong> includes first name, last name, username or similar identifier.
            </li>
            <li>
              <strong>Contact Data</strong> includes email address, telephone number, and address.
            </li>
            <li>
              <strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time
              zone setting and location, browser plug-in types and versions, operating system and platform, and other
              technology on the devices you use to access this website.
            </li>
            <li>
              <strong>Usage Data</strong> includes information about how you use our website and services.
            </li>
            <li>
              <strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from
              us and our third parties and your communication preferences.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
          <p className="mb-3">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data
            in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To register you as a new member.</li>
            <li>To process and deliver your membership services.</li>
            <li>
              To manage our relationship with you including notifying you about changes to our terms or privacy policy.
            </li>
            <li>To administer and protect our business and this website.</li>
            <li>To deliver relevant website content and advertisements to you.</li>
            <li>
              To use data analytics to improve our website, products/services, marketing, customer relationships and
              experiences.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally
            lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your
            personal data to those employees, agents, contractors and other third parties who have a business need to
            know.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Data Retention</h2>
          <p>
            We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for,
            including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Your Legal Rights</h2>
          <p className="mb-3">
            Under certain circumstances, you have rights under data protection laws in relation to your personal data,
            including the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to your personal data.</li>
            <li>Request correction of your personal data.</li>
            <li>Request erasure of your personal data.</li>
            <li>Object to processing of your personal data.</li>
            <li>Request restriction of processing your personal data.</li>
            <li>Request transfer of your personal data.</li>
            <li>Right to withdraw consent.</li>
          </ul>
          <p className="mt-3">If you wish to exercise any of the rights set out above, please contact us.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Cookies</h2>
          <p>
            Our website uses cookies to distinguish you from other users of our website. This helps us to provide you
            with a good experience when you browse our website and also allows us to improve our site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Changes to This Privacy Policy</h2>
          <p>
            We may update our privacy policy from time to time. We will notify you of any changes by posting the new
            privacy policy on this page and updating the "last updated" date at the top of this privacy policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
          <div className="mt-3">
            <p>
              <strong>FitLife Gym</strong>
            </p>
            <p>Email: privacy@fitlifegym.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Fitness Street, Healthville, HV 12345</p>
          </div>
        </section>
      </div>

      <div className="mt-12 border-t pt-6">
        <Link href="/" className="text-primary hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
