// Textos de la landing en español e inglés. El asistente se llama Beto
// (sin nombres propios). Sin menciones de precio (preferencia del equipo).
export type Locale = "es" | "en";

export const DICT = {
  es: {
    lang: { switchTo: "/en", switchLabel: "English", htmlLang: "es" },
    nav: {
      entities: "Para entidades",
      login: "Ingresar",
      themeLabel: "Cambiar entre modo claro y oscuro",
    },
    cta: { whatsapp: "Escribir por WhatsApp" },
    waText: "Hola Beto, quiero revisar un mensaje que me llegó.",
    hero: {
      titleA: "Antes de darle clic,",
      titleB: "pásemelo.",
      sub: "Reenvíe ese mensaje o enlace dudoso a Beto por WhatsApp y sepa en segundos si es seguro.",
    },
    chat: {
      name: "Beto",
      status: "en línea",
      hint: "Pegue aquí un mensaje dudoso y véalo funcionar",
      welcome:
        "Hola 👋 Pegue el mensaje o enlace que le llegó y le digo si es seguro.",
      tryExample: "Probar con un ejemplo real",
      example:
        "Banco Industrial: Su cuenta será bloqueada hoy. Verifique sus datos aquí: http://banco-industrial-seguro.top/login",
      placeholder: "Pegue aquí el mensaje o enlace…",
      send: "Revisar mensaje",
      attach: "Adjuntar imagen o audio",
      sentImage: "📷 Imagen enviada",
      sentAudio: "🎤 Audio enviado",
      checking: "Revisando el mensaje",
      unavailable:
        "La demostración web está descansando. En WhatsApp le respondo a toda hora:",
      errorNet: "No pude conectarme. Intente de nuevo en un momento.",
      note: "",
      bands: { red: "Fraude", yellow: "Sospechoso", green: "Se ve seguro" },
    },
    how: {
      title: "Así de simple, sin instalar nada",
      steps: [
        {
          title: "Reenvíe",
          body: "Cuando le llegue algo dudoso, reenvíelo a nuestro WhatsApp como reenvía cualquier mensaje.",
        },
        {
          title: "Espere unos segundos",
          body: "Beto revisa el enlace y el mensaje por usted. Usted no toca nada mientras tanto.",
        },
        {
          title: "Reciba el veredicto",
          body: "Le decimos si es seguro, sospechoso o fraude, por qué, y qué hacer a continuación.",
        },
      ],
    },
    bands: {
      title: "Una respuesta que se entiende a la primera",
      rows: [
        {
          key: "red",
          name: "Fraude",
          copy: "«No lo abra ni ponga sus claves.» Le explicamos el engaño y avisamos a su persona de confianza si usted quiere.",
        },
        {
          key: "yellow",
          name: "Sospechoso",
          copy: "«Mejor no lo abra.» Le decimos cómo verificar por el canal oficial de su banco, sin riesgo.",
        },
        {
          key: "green",
          name: "Se ve seguro",
          copy: "«Puede seguir.» Aun así, si le piden claves o dinero, desconfíe: se lo recordamos siempre.",
        },
      ],
    },
    formats: {
      title: "Mándelo como le sea más cómodo",
      sub: "No necesita escribir bien ni saber términos técnicos. Beto entiende todo esto, y si usted le habla, le responde con voz.",
      items: [
        "Mensajes y cadenas",
        "Enlaces y promociones",
        "Pantallazos y fotos",
        "Notas de voz",
      ],
    },
    trust: {
      title: "Su información, cuidada",
      sub: "Protegerle también significa cuidar sus datos.",
      items: [
        {
          title: "Nunca le pedimos claves",
          body: "Beto jamás le pedirá contraseñas, códigos ni datos de su tarjeta. Si alguien lo hace, es fraude.",
        },
        {
          title: "El enlace lo abrimos nosotros",
          body: "Los enlaces peligrosos se examinan en un entorno protegido y aislado. Su teléfono nunca toca la página.",
        },
        {
          title: "Usted manda sobre sus datos",
          body: "Guardamos solo lo necesario para el análisis. Escriba BORRAR en el chat y eliminamos todo.",
        },
        {
          title: "Su familia puede acompañarle",
          body: "Si usted quiere, vinculamos a una persona de confianza para avisarle cuando haya riesgo alto.",
        },
      ],
    },
    alliance: {
      badge: "Fintech de Guatemala",
      title: "Una alianza para cuidar a quienes más quiere",
      body: "Beto es una iniciativa de TuConsejería AI dentro del ecosistema fintech de Guatemala, para proteger a las personas mayores de 50 del fraude digital en el momento justo: antes del clic.",
      role_tuconsejeria: "Inteligencia artificial y experiencia conversacional",
      role_tubanc: "Respaldo financiero y cercanía con las personas",
      cta: "Conocer más",
    },
    stats: {
      title: "Por qué importa",
      source: "Piloto de Beto · Fintech de Guatemala.",
      items: [
        { n: "Segundos", label: "es lo que tarda Beto en revisar un mensaje o enlace por usted" },
        { n: "Sus quetzales", label: "protegidos: le avisamos antes de que entregue sus datos o su dinero" },
        { n: "50+", label: "pensado para personas mayores de 50, y listo para los bancos de Guatemala" },
      ],
    },
    entities: {
      eyebrow: "Bancos, cooperativas y fintechs",
      title: "Registre sus dominios oficiales",
      body: "Con su registro verificado, Beto no confunde sus comunicaciones legítimas con fraude y detecta con certeza a quien intente suplantar su marca.",
      countries:
        "Abierto para entidades financieras de Guatemala: registre sus dominios oficiales y active el servicio.",
      cta: "Registrar mi entidad",
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          q: "¿Necesito instalar una aplicación?",
          a: "No. Beto funciona dentro de su WhatsApp de siempre. Solo guarda el número y reenvía lo que le genere duda.",
        },
        {
          q: "¿Qué hago si ya le di clic al enlace?",
          a: "Escríbanos de una vez. Le preguntamos si llegó a poner sus claves y le guiamos paso a paso: bloquear, cambiar clave y hablar con una persona si hace falta. Sin regaños.",
        },
        {
          q: "¿Puedo mandar notas de voz?",
          a: "Sí. Si usted le habla, Beto le responde también con una nota de voz, y siempre acompaña una línea de texto corta por si prefiere leer.",
        },
        {
          q: "¿Qué pasa con mis mensajes?",
          a: "Se usan solo para el análisis y quedan guardados de forma segura para poder ayudarle después. Usted puede escribir BORRAR en cualquier momento y eliminamos sus datos.",
        },
        {
          q: "¿En qué países funciona?",
          a: "Las entidades financieras de Guatemala ya pueden registrar sus dominios oficiales para que sus mensajes legítimos no disparen alarmas y las imitaciones se detecten con certeza.",
        },
        {
          q: "Represento a un banco, ¿cómo participo?",
          a: "Cree la cuenta de su entidad con un correo corporativo, declare sus dominios oficiales y verifique la propiedad con un registro DNS. Un analista revisa y aprueba.",
        },
      ],
    },
    closing: {
      title:
        "Guarde el número hoy. El día que llegue el mensaje raro, ya sabe qué hacer.",
    },
    footer: {
      brand: "Beto",
      brandLine: "es un servicio de TuConsejería AI.",
      privacy:
        "No pedimos claves ni datos de tarjetas. Escriba BORRAR en el chat para eliminar sus datos.",
    },
  },
  en: {
    lang: { switchTo: "/", switchLabel: "Español", htmlLang: "en" },
    nav: {
      entities: "For institutions",
      login: "Sign in",
      themeLabel: "Toggle light and dark mode",
    },
    cta: { whatsapp: "Chat on WhatsApp" },
    waText: "Hi Beto, I want to check a message I received.",
    hero: {
      titleA: "About to tap a link?",
      titleB: "Send it to me first.",
      sub: "Forward that suspicious message or link to Beto on WhatsApp and know in seconds if it is safe.",
    },
    chat: {
      name: "Beto",
      status: "online",
      hint: "Paste a suspicious message and watch it work",
      welcome:
        "Hi 👋 Paste the message or link you received and I will tell you if it is safe.",
      tryExample: "Try a real example",
      example:
        "Banco Industrial: Your account will be blocked today. Verify your details here: http://banco-industrial-seguro.top/login",
      placeholder: "Paste the message or link here…",
      send: "Check message",
      attach: "Attach image or audio",
      sentImage: "📷 Image sent",
      sentAudio: "🎤 Audio sent",
      checking: "Checking the message",
      unavailable:
        "The web demo is resting. On WhatsApp I reply around the clock:",
      errorNet: "I could not connect. Please try again in a moment.",
      note: "During the pilot, analysis replies arrive in Spanish.",
      bands: { red: "Fraud", yellow: "Suspicious", green: "Looks safe" },
    },
    how: {
      title: "This simple, nothing to install",
      steps: [
        {
          title: "Forward it",
          body: "When something doubtful arrives, forward it to our WhatsApp like any other message.",
        },
        {
          title: "Wait a few seconds",
          body: "Beto checks the link and the message for you. You do not touch anything meanwhile.",
        },
        {
          title: "Get the verdict",
          body: "We tell you if it is safe, suspicious or fraud, why, and what to do next.",
        },
      ],
    },
    bands: {
      title: "An answer you understand at first glance",
      rows: [
        {
          key: "red",
          name: "Fraud",
          copy: "“Do not open it or enter your passwords.” We explain the scam and can alert your trusted contact if you wish.",
        },
        {
          key: "yellow",
          name: "Suspicious",
          copy: "“Better not to open it.” We tell you how to verify through your bank's official channel, risk free.",
        },
        {
          key: "green",
          name: "Looks safe",
          copy: "“You may proceed.” Still, if anyone asks for passwords or money, be wary: we always remind you.",
        },
      ],
    },
    formats: {
      title: "Send it however feels natural",
      sub: "No tech terms or perfect spelling needed. Beto understands all of this, and if you speak to it, it replies with voice.",
      items: [
        "Messages and chain texts",
        "Links and promotions",
        "Screenshots and photos",
        "Voice notes",
      ],
    },
    trust: {
      title: "Your information, protected",
      sub: "Protecting you also means protecting your data.",
      items: [
        {
          title: "We never ask for passwords",
          body: "Beto will never ask for passwords, codes or card details. If someone does, that is fraud.",
        },
        {
          title: "We open the link, not you",
          body: "Dangerous links are examined in a protected, isolated environment. Your phone never touches the page.",
        },
        {
          title: "You control your data",
          body: "We keep only what the analysis needs. Type BORRAR in the chat and we delete everything.",
        },
        {
          title: "Your family can be there",
          body: "If you wish, we link a trusted contact and alert them whenever there is high risk.",
        },
      ],
    },
    alliance: {
      badge: "Silver Economy program",
      title: "An alliance to protect the ones you love",
      body: "Beto is born within the Silver Economy —the approach that puts people over 50 at the center— as an alliance between TuConsejería AI and TuBanc to protect them from digital fraud at the right moment: before the tap.",
      role_tuconsejeria: "AI and conversational experience",
      role_tubanc: "Financial backing and closeness to people",
      cta: "Learn more",
    },
    stats: {
      title: "Why it matters",
      source: "Digital scams in Colombia, 2025 · Cyber Center, National Police.",
      items: [
        { n: "64,628", label: "digital scam reports in Colombia in 2025" },
        { n: "$5.8M", label: "the typical loss of a victim in Colombia (COP)" },
        { n: "All Colombia", label: "for all ages, ready for its banks and fintechs" },
      ],
    },
    entities: {
      eyebrow: "Banks, credit unions and fintechs",
      title: "Register your official domains",
      body: "With a verified registry, Beto never mistakes your legitimate communications for fraud and detects with certainty anyone impersonating your brand.",
      countries:
        "Open to financial institutions in Colombia: register your official domains and activate the service.",
      cta: "Register my institution",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "Do I need to install an app?",
          a: "No. Beto works inside your everyday WhatsApp. Just save the number and forward whatever raises doubt.",
        },
        {
          q: "What if I already tapped the link?",
          a: "Message us right away. We ask whether you entered any passwords and guide you step by step: block, change your password and talk to a person if needed. No blame.",
        },
        {
          q: "Can I send voice notes?",
          a: "Yes. If you talk to it, Beto replies with a voice note too, always with a short text line in case you prefer reading.",
        },
        {
          q: "What happens to my messages?",
          a: "They are used only for the analysis and stored safely so we can help you afterwards. Type BORRAR at any time and we delete your data.",
        },
        {
          q: "In which countries does it work?",
          a: "Financial institutions in Colombia can already register their official domains so their legitimate messages don't trigger alarms and impersonations are caught with certainty.",
        },
        {
          q: "I represent a bank, how do I join?",
          a: "Create your institution's account with a corporate email, declare your official domains and prove ownership with a DNS record. An analyst reviews and approves.",
        },
      ],
    },
    closing: {
      title:
        "Save the number today. The day the strange message arrives, you will know what to do.",
    },
    footer: {
      brand: "Beto",
      brandLine: "is a service by TuConsejería AI.",
      privacy:
        "We never ask for passwords or card details. Type BORRAR in the chat to delete your data.",
    },
  },
} as const;

export type Dict = (typeof DICT)[Locale];
