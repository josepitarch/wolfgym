import Link from "next/link"

export const metadata = {
  title: "Política de privacidad | Wolf Gym",
  description: "Aprenda cómo recopilamos, utilizamos y protegemos su información personal en Wolf Gym.",
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Política de privacidad</h1>
        <p className="text-muted-foreground">Última actualización: Marzo 27, 2025</p>
      </div>

      <div className="space-y-8">
        <section>
          <p className="mb-3">
            Esta Política de privacidad describe cómo Wolf Gym (en adelante, el "Sitio", "nosotros" o "nuestro") recopila, utiliza y divulga
            su información personal al visitar o utilizar nuestros servicios, al realizar una compra en wolfgyms.es (en adelante, el "Sitio" ) o 
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
          <h2 className="text-2xl font-semibold mb-3">Información personal que recopilamos</h2>
          <p>
          Los tipos de información personal que obtenemos sobre usted dependen de cómo interactúa con nuestro Sitio y 
          cómo utiliza nuestros Servicios. El término "información personal" se utiliza para hacer referencia a la información que 
          le identifica o describe individualmente, así como a la información que puede relacionarse o asociarse a usted. 
          Las secciones siguientes describen las categorías y tipos específicos de información personal que recopilamos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Información que recopilamos directamente de usted</h2>
          <p className="mb-3">
            La información que nos envía directamente a través de nuestros Servicios puede incluir lo siguiente:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Detalles de contacto: incluye su nombre, dirección, número de teléfono y correo electrónico.</li>
            <li>Información del pedido: incluye su nombre, dirección de facturación, dirección de envío, confirmación de pago, dirección de correo electrónico y número de teléfono.</li>
            <li>Información de la cuenta: incluye su nombre de usuario, contraseña, preguntas de seguridad y otra información utilizada con fines de seguridad de la cuenta.</li>
            <li>Información de atención al cliente: incluye la información que usted elige incluir en las comunicaciones con nosotros, como, por ejemplo, al enviar un mensaje a través de los Servicios.</li>
            <li>Request restriction of processing your personal data.</li>
          </ul>
          <p className="mt-3">
            Algunas características de los Servicios pueden requerir que nos proporcione directamente cierta información sobre usted. 
            Puede optar por no proporcionar estos datos; sin embargo, ello puede impedirle usar o acceder a estas funciones.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Información que recopilamos sobre su uso</h2>
          <p>
            También podemos recopilar automáticamente cierta información sobre su interacción con los Servicios 
            (en adelante, "Datos de uso"). Para ello, podemos utilizar cookies, píxeles y tecnologías similares 
            (en adelante, "Cookies"). Los Datos de uso pueden incluir información sobre cómo accede y utiliza nuestro Sitio y su cuenta, incluida información del dispositivo, 
            información del navegador, información sobre su conexión de red, su dirección IP y otra información sobre su interacción con los Servicios.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Información que obtenemos de terceros</h2>
          <p className="mb-3">
            Por último, podemos obtener información sobre usted de terceros, entre los que se incluyen vendedores y proveedores de servicios 
            que pueden recopilar información en nuestro nombre, como por ejemplo:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Empresas que respaldan nuestro Sitio y Servicios, como Shopify.</li>
            <li>Nuestros procesadores de pagos, que recopilan información de pago (por ejemplo, cuenta bancaria, información de tarjeta de crédito o débito, 
              dirección de facturación) para procesar su pago con el fin de preparar sus pedidos y proporcionar los productos o servicios que ha solicitado y, 
              de este modo, poder cumplir con nuestro contrato con usted.
            </li>
            <li>
              Al visitar nuestro Sitio, al abrir o hacer clic en los correos electrónicos que le enviamos o al interactuar con nuestros Servicios o anuncios, 
              nosotros, o los terceros con los que trabajamos, podremos recopilar automáticamente determinada información mediante tecnologías de seguimiento online, 
              como, por ejemplo, píxeles, balizas web, kits de desarrolladores de software, bibliotecas externas y cookies.</li>
          </ul>
          <p className="mt-3">
            Toda información que obtengamos de terceros se tratará de conformidad con la presente Política de privacidad. Consulte también la siguiente sección, Sitios web y enlaces de terceros.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Utilización de su información personal</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
            Prestación de servicios y productos. Usamos su información personal para prestarle los Servicios y, de este modo, cumplir con nuestro contrato con usted, lo que incluye el procesamiento de sus pagos, la preparación de los pedidos, el envío de notificaciones relacionadas con su cuenta, así como con sus compras, devoluciones, cambios u otras transacciones, con el fin de crear, mantener y administrar su cuenta, organizar el envío, facilitar las devoluciones o los cambios, además de otras características y funcionalidades relacionadas con su cuenta. También podemos mejorar su experiencia de compra al permitir que Shopify vincule su cuenta a otros servicios de Shopify que usted elija utilizar. En este caso, Shopify procesará su información según lo establecido en su Política de privacidad y su Política de privacidad del consumidor.
            </li>
            <li>
            Marketing y publicidad. Podemos utilizar su información personal con fines promocionales y de marketing, como, por ejemplo, al enviarle comunicaciones promocionales, publicitarias y de marketing por correo electrónico, mensaje de texto o correo postal, así como para mostrarle anuncios de productos o servicios. Esto puede incluir el uso de su información personal para adaptar mejor los Servicios y la publicidad tanto en nuestro Sitio con en otros sitios web. Si es residente del EEE, la base legal de estas actividades de procesamiento de los datos es de nuestro interés legítimo para la venta de nuestros productos, de conformidad con el art. 6 (1) (f) del RGPD.
            </li>
            <li>
            Seguridad y prevención de fraude. Utilizamos su información personal para detectar, investigar o tomar medidas respecto a posibles actividades fraudulentas, ilegales o maliciosas. Si elige utilizar los Servicios y registrar una cuenta, usted será responsable de mantener seguras las credenciales de su cuenta. Recomendamos encarecidamente que no comparta con nadie su nombre de usuario, su contraseña u otros detalles. Si cree que su cuenta se ha visto comprometida, póngase en contacto con nosotros de inmediato. Si es residente del EEE, la base legal de estas actividades de procesamiento de los datos es de nuestro interés legítimo para mantener la seguridad de nuestro sitio web, tanto para usted como para otros clientes, de conformidad con el art. 6 (1) (f) del RGPD.
            </li>
            <li>
            Comunicaciones y mejora del servicio. Utilizamos su información personal para prestarle servicios de atención al cliente y mejorar nuestros Servicios. Esto es de nuestro interés legítimo para poder responder ante usted, así como para prestar servicios efectivos y mantener nuestra relación comercial con usted de conformidad con el art. 6 (1) (f) del RGPD.
            </li>
          </ul>
        </section>

        <section>
        <h2 className="text-2xl font-semibold mb-3">Cookies</h2>
        <p>
          Al igual que ocurre con muchos otros sitios web, nuestro Sitio también utiliza cookies. Para obtener información específica sobre las Cookies que utilizamos relacionadas con el funcionamiento de nuestra tienda con Shopify, consulte https://www.shopify.com/legal/cookies. Usamos Cookies para operar y mejorar nuestro Sitio y nuestros Servicios (lo que incluye recordar sus acciones y preferencias), así como para realizar informes y estadísticas y comprender mejor la interacción del usuario con los Servicios (en nuestro interés legítimo de administrar, mejorar y optimizar los Servicios). También podemos permitir que terceros y proveedores de servicios utilicen Cookies en nuestro Sitio para personalizar mejor los servicios, productos y la publicidad de nuestro Sitio y otros sitios web.
        </p>
        <p className="mt-3">
        La mayoría de los navegadores aceptan las Cookies automáticamente de forma predeterminada, pero usted puede optar por configurar su navegador para que elimine o rechace las cookies a través de los controles de su navegador. Tenga en cuenta que eliminar o bloquear las Cookies puede afectar negativamente a su experiencia de usuario y puede hacer que algunos de los Servicios, incluidas ciertas características y funcionalidades generales, funcionen de manera incorrecta o dejen de estar disponibles. Además, es posible que el bloqueo de Cookies no impida por completo compartir la información con terceros, como nuestros socios publicitarios.
        </p>
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
