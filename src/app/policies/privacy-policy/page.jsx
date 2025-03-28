import Link from "next/link"

export const metadata = {
  title: "Política de privacidad | Wolf Gym",
  description: "Aprenda cómo recopilamos, utilizamos y protegemos su información personal en Wolf Gym.",
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
          <p className="mb-3">
          Esta Política de privacidad describe cómo Wolf Gym (en adelante, el "Sitio", "nosotros" o "nuestro") recopila, utiliza y divulga
          su información personal al visitar o utilizar nuestros servicios, al realizar una compra en umagym.com (en adelante, el "Sitio" ) o 
          al comunicarse con nosotros de cualquier otra manera con respecto al Sitio (denominado de manera colectiva como, los "Servicios"). A los efectos de la presente Política de privacidad, 
          los términos "usted" y "su" hacen referencia a usted como usuario de los Servicios, ya sea en calidad de cliente, 
          visitante del sitio web o como cualquier otro individuo cuya información hayamos recopilado de conformidad con la presente Política de privacidad.
          
          Lea atentamente la presente Política de privacidad.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Cambios en la presente Política de privacidad</h2>
          <p className="mb-3">
            Esta Política de privacidad se podrá actualizar puntualmente para reflejar cambios en nuestras prácticas o por cualesquiera otras razones operativas, 
            legales o normativas. Publicaremos la Política de privacidad revisada en el Sitio, actualizaremos la fecha de "Última actualización" y tomaremos cualquier 
            otra medida que pueda exigir la ley aplicable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Recopilación y utilización de su información personal</h2>
          <p className="mb-3">
            Para prestar los Servicios, recopilamos información personal sobre usted de una variedad de fuentes, 
            como se indica a continuación. La información que recopilamos y utilizamos varía en función de cómo interactúa con nosotros.
            Además de los usos específicos que se establecen a continuación, podremos usar la información que recopilamos para comunicarnos con usted, 
            proporcionarle o mejorar los Servicios, cumplir con cualquier obligación legal aplicable, hacer cumplir los términos de servicio aplicables 
            y proteger o defender los Servicios, nuestros derechos, los de nuestros usuarios y los de otros.
          </p>
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
