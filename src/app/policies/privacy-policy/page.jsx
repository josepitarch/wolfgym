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
            Al igual que ocurre con muchos otros sitios web, nuestro Sitio también utiliza cookies. Para obtener información específica sobre las Cookies que 
            utilizamos relacionadas con el funcionamiento de nuestra tienda con Shopify, consulte https://www.shopify.com/legal/cookies. 
            Usamos Cookies para operar y mejorar nuestro Sitio y nuestros Servicios (lo que incluye recordar sus acciones y preferencias), 
            así como para realizar informes y estadísticas y comprender mejor la interacción del usuario con los Servicios 
            (en nuestro interés legítimo de administrar, mejorar y optimizar los Servicios). También podemos permitir que terceros y proveedores de servicios 
            utilicen Cookies en nuestro Sitio para personalizar mejor los servicios, productos y la publicidad de nuestro Sitio y otros sitios web.
          </p>
          <p className="mt-3">
            La mayoría de los navegadores aceptan las Cookies automáticamente de forma predeterminada, pero usted puede optar por configurar su navegador 
            para que elimine o rechace las cookies a través de los controles de su navegador. Tenga en cuenta que eliminar o bloquear las Cookies 
            puede afectar negativamente a su experiencia de usuario y puede hacer que algunos de los Servicios, incluidas ciertas características y 
            funcionalidades generales, funcionen de manera incorrecta o dejen de estar disponibles. Además, es posible que el bloqueo de Cookies no impida 
            por completo compartir la información con terceros, como nuestros socios publicitarios.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Divulgación de su información personal</h2>
          <p>
            En determinadas circunstancias, podemos divulgar su información personal a terceros con fines de cumplimiento de contratos, fines legítimos u otras razones en virtud de la presente Política de privacidad. Tales circunstancias pueden incluir las siguientes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Con proveedores u otros terceros que prestan servicios en nuestro nombre (por ejemplo, gestión de TI, procesamiento de pagos, informes y estadísticas de datos, servicios de atención al cliente, almacenamiento en la nube, preparación y envío).
            </li>
            <li>
              Con socios comerciales y de marketing para mostrarle publicidad y prestarle servicios a usted. Nuestros socios comerciales y de marketing utilizarán su información de acuerdo con sus propios avisos de privacidad.
            </li>
            <li>
              Cuando usted indica, solicita o consiente de cualquier otro modo que divulguemos cierta información a terceros, como, por ejemplo, para enviarle productos o mediante el uso de widgets de redes sociales o integraciones de inicio de sesión con su consentimiento.
            </li>
            <li>
              Con nuestras afiliados o de cualquier otro modo en el ámbito de nuestro grupo empresarial, en nuestro interés legítimo de dirigir un negocio con éxito.
            </li>
            <li>
              En relación con las transacciones comerciales, como, por ejemplo, fusiones o quiebras, para cumplir con las obligaciones legales aplicables (incluso responder a citaciones, órdenes de registro y solicitudes similares), hacer cumplir los términos de servicio aplicables y proteger o defender los Servicios, así como nuestros derechos, los de nuestros usuarios y de otros.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Sitios web y enlaces de terceros</h2>
          <p>
            Nuestro Sitio puede proporcionar enlaces a sitios web u otras plataformas online operadas por terceros. Si sigue enlaces 
            a sitios no afiliados o que no están bajo nuestro control, debe revisar sus políticas de privacidad y seguridad, así como 
            otros términos y condiciones. No garantizamos ni somos responsables de la privacidad o seguridad de dichos sitios, 
            incluida la exactitud, integridad o fiabilidad de la información que se encuentra en ellos. La información que usted 
            proporcione en sitios públicos o semipúblicos, incluida la información que comparta en plataformas de redes sociales 
            externas, también puede ser visible para otros usuarios de los Servicios y/o usuarios de dichas plataformas externas, 
            sin limitación en cuanto a su uso por nuestra parte o por la de terceros. Nuestra inclusión de dichos enlaces no implica, 
            por sí sola, ningún tipo de promoción del contenido de dichas plataformas o de sus propietarios u operadores, excepto el 
            divulgado en los Servicios.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Datos de niños</h2>
          <p>
            Los Servicios no están destinados al uso por parte de niños, por lo que no recopilamos de manera intencionada ninguna 
            información personal sobre niños. Si usted es padre o tutor de un niño que nos ha proporcionado su información personal, 
            puede comunicarse con nosotros a través de los detalles de contacto que se indican a continuación para solicitar su 
            eliminación.
          </p>
          <p className="mt-3">
            A la fecha de entrada en vigor de la presente Política de privacidad, no tenemos conocimiento real de que “compartamos” 
            o “vendamos” (entendiendo estos términos tal como se definen en la ley aplicable) información personal de menores de 16 años.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Seguridad y retención de su información</h2>
          <p>
            Tenga en cuenta que ninguna medida de seguridad es perfecta o impenetrable, por lo que no podemos garantizar una "seguridad perfecta". 
            Además, es posible que la información que nos envíe no esté segura mientras esté en tránsito. Por lo tanto, recomendamos que no utilice canales 
            inseguros para comunicar información sensible o confidencial.
          </p>
          <p className="mt-3">
            El tiempo de conservación de su información personal depende de diferentes factores, como, por ejemplo, si necesitamos la información 
            para mantener su cuenta, prestar los Servicios, cumplir con obligaciones legales, resolver disputas o hacer cumplir otros contratos y 
            políticas aplicables.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Sus derechos</h2>
          <p>
            Dependiendo de dónde viva, es posible que tenga algunos o todos los derechos que se enumeran a continuación con respecto a su 
            información personal. Sin embargo, tales derechos no son absolutos, por lo que pueden aplicarse solo en determinadas circunstancias, 
            lo que nos permitiría rechazar su solicitud en determinados casos y según lo permita la ley.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Derecho de acceso/conocimiento: Es posible que tenga derecho a solicitar acceso a la información personal que tenemos sobre usted, incluidos los detalles relacionados con las formas en que usamos y compartimos su información.
            </li>
            <li>
              Derecho de eliminación: Es posible que tenga derecho a solicitar la eliminación de la información personal que conservamos sobre usted.
            </li>
            <li>
              Derecho de corrección: Es posible que tenga derecho a solicitar la corrección de la información personal errónea que conservamos sobre usted.
            </li>
            <li>
              Derecho de portabilidad: Es posible que tenga derecho a recibir una copia de la información personal que conservamos sobre usted y a solicitar su transferencia a un tercero, en determinadas circunstancias y con determinadas excepciones.
            </li>
            <li>
              Derecho a darse de baja la venta, el uso compartido o el envío de publicidad dirigida: Es posible que tenga derecho a 
              solicitar que no "vendamos" ni "compartamos" su información personal o que optemos por no procesar su información 
              personal con fines de envío de "publicidad dirigida", tal como se define en las leyes de privacidad aplicables. 
              Tenga en cuenta que si visita nuestro Sitio con la señal de preferencia de cancelación del Control Global de Privacidad 
              habilitada, dependiendo de dónde se encuentre, esto se tratará como una solicitud de cancelación de participación en la 
              "venta" o el "uso compartido" de información para el dispositivo y el navegador que utiliza para visitar el Sitio.
            </li>
            <li>
              Restricción de procesamiento: Es posible que tenga derecho a solicitar que detengamos o restrinjamos el procesamiento de la información personal.
            </li>
            <li>
              Revocación del consentimiento: Siempre que dependamos de su consentimiento para procesar su información personal, es posible que tenga derecho a retirar dicho consentimiento.
            </li>
            <li>
              Apelación: Es posible que tenga derecho a apelar nuestra decisión si nos negamos a procesar su solicitud. Para ello, puede responder directamente a nuestra denegación.
            </li>
            <li>
              Gestión de las preferencias de comunicación: Podemos enviarle correos electrónicos promocionales y usted puede darse de baja en cualquier momento a través de la opción para cancelar la suscripción que está disponible en los correos electrónicos que enviamos. Si se da de baja, es posible que aún le enviemos correos electrónicos no promocionales, como los relacionados con su cuenta o con los pedidos que haya realizado.
            </li>
          </ul>
          <p className="mt-3">
            Puede ejercer cualquiera de estos derechos donde se indica en nuestro Sitio o al ponerse en contacto con nosotros mediante los detalles de contacto que se proporcionan a continuación.
          </p>
          <p className="mt-3">
            Sepa que el ejercicio de cualquiera de estos derechos no será motivo de ningún tipo de discriminación por nuestra parte. Es posible que necesitemos recopilar información de usted para verificar su identidad, como, por ejemplo, su dirección de correo electrónico o información de su cuenta, antes de proporcionar una respuesta sustancial a la solicitud. De acuerdo con las leyes aplicables, usted puede designar a un agente autorizado para realizar solicitudes en su nombre para ejercer sus derechos. Antes de aceptar solicitudes de un agente, le exigiremos que proporcione pruebas de que usted ha autorizado a dicho agente para actuar en su nombre. Asimismo, es posible que necesitemos que verifique su identidad directamente con nosotros. Responderemos a su solicitud de manera oportuna tal como lo exige la ley aplicable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Reclamaciones</h2>
          <p>
            Si tiene alguna reclamación sobre cómo procesamos su información personal, póngase en contacto con nosotros a través de 
            los detalles de contacto que se proporcionan a continuación. Si no está satisfecho con la respuesta que hemos proporcionado 
            a su reclamación, dependiendo de dónde viva, puede tener derecho a apelar nuestra decisión poniéndose en contacto con nosotros 
            a través de los detalles de contacto que se indican a continuación, o bien a presentar su reclamación ante la autoridad local 
            competente en materia de protección de datos. Para el EEE, encontrará una lista de las autoridades responsables de la supervisión 
            de la protección de datos aquí.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contacto</h2>
          <p>
            Si tiene alguna pregunta sobre nuestras prácticas de privacidad o sobre la presente Política de privacidad, o bien si 
            desea ejercer cualquiera de sus derechos, puede llamarnos por teléfono, enviar un correo electrónico a info@wolfgyms.es o 
            ponerse en contacto con nosotros a través de la dirección Carrer Francesc Tarrega 34, Villareal, Castellón, 6717, ES.
          </p>
        </section>
      </div>

      <div className="mt-12 border-t pt-6">
        <Link href="/" className="text-primary hover:underline">
          ← Volver a la página de inicio
        </Link>
      </div>
    </div>
  )
}
