/**
 * Landing copy, English and Spanish.
 *
 * Every product statement mirrors the dashboard's public "About Pipesor" pages
 * (how it works, AI transparency, security, privacy and terms), which describe
 * the implemented system. Figures from the thesis evaluation are quoted with
 * their caveats, exactly as the AI transparency page states them. Run, incident
 * and log values come from the public Chaomeum/pipesor-demo repository.
 */
const dashboard = 'https://dashboard.bravepond-f9f279f5.westus3.azurecontainerapps.io';

export const links = {
  dashboard,
  signIn: `${dashboard}/login`,
  howItWorks: `${dashboard}/about/how-it-works`,
  ai: `${dashboard}/about/ai`,
  security: `${dashboard}/about/security`,
  privacy: `${dashboard}/about/privacy`,
  terms: `${dashboard}/about/terms`,
  githubApp: 'https://github.com/apps/pipesor-dev/installations/new',
  demoRepository: 'https://github.com/Chaomeum/pipesor-demo',
  demoRun: 'https://github.com/Chaomeum/pipesor-demo/actions/runs/45538080390/attempts/1',
} as const;

/** The failed run replayed in the hero: lines of the protected excerpt of run #45538080390. */
export const replay = {
  repository: 'Chaomeum/pipesor-demo',
  workflow: 'Deploy',
  run: '#45538080390',
  incident: 'INC-1084',
  lines: [
    { time: '03:10:19', text: 'Run bash scripts/deploy.sh deploy/orders-api.env' },
    { time: '03:10:19', text: 'Effective settings:' },
    { time: '03:10:19', text: '  SERVICE_PORT=8080' },
    { time: '03:10:19', text: '  HEALTHCHECK_URL=http://localhost:8081/health' },
    { time: '03:10:19', text: '  DB_HOST=[redacted]', raw: '  DB_HOST=10.20.4.15' },
    { time: '03:10:19', text: '  [redacted]', raw: '  DB_PASSWORD=demo-only-not-a-real-secret' },
    { time: '03:10:21', text: '  [orders-api] listening on http://localhost:8080' },
    { time: '03:10:21', text: 'Verifying deployment: GET http://localhost:8081/health' },
    { time: '03:10:21', text: 'curl: (7) Failed to connect to localhost port 8081 after 0 ms: Could not connect to server' },
    { time: '03:10:27', text: 'Error: post-deployment verification could not reach orders-api at http://localhost:8081/health' },
  ],
  cause: 'The health-check URL targets localhost:8081, while the service log reports listening on localhost:8080. This port mismatch likely explains why the health check cannot connect.',
} as const;

export const content = {
  en: {
    title: 'Pipesor — Why your GitHub Actions run failed, with evidence',
    description: 'Pipesor reads the failed step of a GitHub Actions run, masks its secrets and proposes a probable cause with its evidence. Your team confirms, corrects or rejects it. Academic prototype.',
    socialImageAlt: 'Pipesor: why it failed, with evidence. A protected log excerpt and a probable cause from a GitHub Actions run.',
    skip: 'Skip to content', home: 'Pipesor home', navLabel: 'Main navigation',
    nav: ['Diagnosis', 'Protection', 'Results', 'Questions'],
    language: 'Language', theme: 'Theme', themes: ['System', 'Light', 'Dark'],
    signIn: 'Sign in with GitHub', headerSignIn: 'Sign in', opensDashboard: 'opens the Pipesor dashboard',
    headline: ['Why it failed,', 'with evidence.'],
    subhead: 'Pipesor reads the failed step of a GitHub Actions run, masks its secrets and proposes a probable cause with its evidence. Your team confirms, corrects or rejects it.',
    secondary: 'See one incident, start to finish',
    heroNote: 'Academic prototype. Read-only access to GitHub.',
    replay: {
      label: 'Replay of a failed GitHub Actions run',
      caption: 'A real run from the public pipesor-demo repository. Its host and password are demo values.',
      stages: ['Run fails', 'Secrets masked', 'Probable cause', 'Confirmed'],
      cause: 'Probable cause',
      ready: 'Diagnosis ready 30 s after detection',
      verdict: 'Confirmed by a person',
      verdictDetail: 'Revision 1, after a green verification run',
      replay: 'Replay',
    },
    showcase: {
      heading: 'Every diagnosis shows its work',
      legend: 'Choose a part of incident INC-1084',
      views: [
        { tab: 'Diagnosis', title: 'The cause, and its limits', text: 'A probable cause comes with the limitations the model declares, the model and prompt version, and the incident’s facts. Pipesor shows no confidence percentage: uncertainty is stated in words.' },
        { tab: 'Evidence', title: 'Observations, not conclusions', text: 'The protected excerpt the diagnosis cites, with the job, file and lines it came from. The host and the password in this run read [redacted].' },
        { tab: 'Review', title: 'Resolved, then validated', text: 'A green verification run resolves the incident. The diagnosis is confirmed in a separate review, recorded with its revision.' },
        { tab: 'Correction', title: 'When the model is wrong', text: 'In INC-1083 a reviewer rejected the proposed cause and recorded the actual one. Reviews are append-only and never rewritten.' },
      ],
      captions: [
        'INC-1084 in the Pipesor dashboard: probable cause, limitations and incident details.',
        'The evidence INC-1084’s diagnosis cites, sanitized before any processing.',
        'INC-1084: lifecycle completed by people, and its diagnosis confirmed.',
        'INC-1083: the diagnosis rejected with the actual cause.',
      ],
      transparency: 'How the AI works',
    },
    screenshot: 'Pipesor dashboard', openImage: 'Enlarge screenshot', closeImage: 'Close', lightboxTitle: 'Pipesor dashboard', zoomImage: 'Actual size', fitImage: 'Fit to screen',
    protection: {
      heading: 'Secrets never reach the model',
      intro: 'Protection runs before any processing or AI. This is what happens to every failed run Pipesor reads.',
      items: [
        ['At most 40 lines leave GitHub.', 'Ingestion reads the first failed step only. The full log stays on GitHub and is never stored in Pipesor.'],
        ['Secrets are masked first.', 'Emails, IP addresses, GitHub tokens, JWTs and secret values become [redacted]. Excerpts with private keys are refused.'],
        ['The model never learns who you are.', 'It never receives your identity, your repository or workflow names, tokens, or reviewers’ data.'],
        ['Your repository is never changed.', 'The GitHub App reads Actions and metadata only. Pipesor never changes code, workflows, secrets, permissions or settings.'],
        ['No model is trained on your data.', 'Models are used through the Azure OpenAI API, and reviews never feed the model or its knowledge corpus.'],
      ],
      security: 'Read the security page',
      evidenceCaption: 'The evidence of INC-1084 as Pipesor keeps it: the host and the password were masked before any processing.',
    },
    timeline: {
      heading: 'One incident, start to finish',
      label: 'Time to resolve incident INC-1084: Pipesor’s part, then the people’s part',
      segments: [
        ['30 s', 'First, Pipesor captures the failed run, masks it and proposes the cause.'],
        ['2 min 58 s', 'Then a person fixes the port in GitHub, and a green verification run resolves the incident.'],
      ],
      total: 'INC-1084 was resolved 3 min 28 s after detection. A person confirmed its diagnosis about a minute later.',
      historyCaption: 'History keeps each resolved incident with its validation, diagnosis time and resolution time.',
      journey: 'Follow the full data journey',
    },
    results: {
      heading: 'Measured, with its limits',
      text: 'From the thesis evaluation of Pipesor’s diagnoses.',
      tiles: [
        ['17 of 20', 'diagnoses judged correct in human review (85 %)'],
        ['64–95 %', '95 % confidence interval for that rate: it does not support claiming 80 % or more'],
        ['33 s', 'median time to a diagnosis'],
        ['4 of 20', 'recommendations judged actionable'],
        ['10', 'failure scenarios from three repositories; results do not generalize to every pipeline'],
        ['1', 'reviewer per case, and the reviewers were the system’s authors'],
      ],
      link: 'Read the AI transparency page',
    },
    questionsHeading: 'Questions',
    questions: [
      ['Which CI/CD platforms does Pipesor support?', 'GitHub Actions only. Pipesor is not affiliated with, endorsed by or certified by GitHub.'],
      ['Does Pipesor fix incidents automatically?', 'No. A recommendation is a manual check for a person; Pipesor never runs fixes. Recording remediation documents human work, and resolving an incident requires a successful verification run.'],
      ['Why is there no confidence score?', 'A model’s self-reported confidence is not a reliable probability, so Pipesor states uncertainty in words, in the limitations of each diagnosis.'],
      ['Where is my data processed?', 'In Microsoft’s US data zone (Azure West US 3). Diagnoses come from GPT-6 Luna through Azure OpenAI, and GitHub hosts your repositories. The privacy policy explains what is kept and for how long.'],
      ['Who can see my incidents?', 'Only people with an explicit grant on a pipeline: View, Operate or Configure. Each request also checks your current access to the repository on GitHub.'],
      ['Is Pipesor ready for production?', 'Not yet. It is an academic prototype running in a development environment on Azure. It has no multi-factor authentication of its own, sessions last at most one hour, and there is no web application firewall.'],
    ],
    start: {
      heading: 'Your next failed run, explained.',
      steps: [
        ['Give Pipesor read access', 'A repository administrator installs the Pipesor GitHub App and selects the repositories.'],
        ['Register a workflow', 'Choose the workflow to monitor and its criticality.'],
        ['Validate the diagnosis', 'Failed runs are captured as they happen. Confirm, correct or reject each probable cause.'],
      ],
      note: 'Any GitHub account can sign in. Repositories appear once their administrator selects them in the Pipesor GitHub App.',
      install: 'Install the GitHub App',
    },
    footer: {
      description: 'Evidence-backed diagnosis for GitHub Actions. An AIOps thesis project.',
      product: 'On this page', about: 'About Pipesor', legal: 'Legal', contributors: 'Contributors',
      aboutLinks: ['How it works', 'AI transparency', 'Security'],
      privacy: 'Privacy policy', terms: 'Terms of use',
      licensing: 'Source code is licensed under MIT. The Pipesor name, logo, branding, visual identity, product screenshots, and social media artwork are excluded; all rights reserved for those assets. Third-party materials retain their own licenses.',
      copyright: 'Jhon Alexander Galvez Chambi and Ramiro Alexander Guzman Chavez.',
    },
    top: 'Back to top', newTab: 'opens in a new tab',
  },
  es: {
    title: 'Pipesor — Por qué falló tu ejecución de GitHub Actions, con evidencias',
    description: 'Pipesor lee el paso fallido de una ejecución de GitHub Actions, enmascara sus secretos y propone una causa probable con su evidencia. Tu equipo la confirma, corrige o rechaza. Prototipo académico.',
    socialImageAlt: 'Pipesor: por qué falló, con evidencias. Un extracto de log protegido y una causa probable de una ejecución de GitHub Actions.',
    skip: 'Saltar al contenido', home: 'Inicio de Pipesor', navLabel: 'Navegación principal',
    nav: ['Diagnóstico', 'Protección', 'Resultados', 'Preguntas'],
    language: 'Idioma', theme: 'Tema', themes: ['Sistema', 'Claro', 'Oscuro'],
    signIn: 'Entrar con GitHub', headerSignIn: 'Entrar', opensDashboard: 'abre el dashboard de Pipesor',
    headline: ['Por qué falló,', 'con evidencias.'],
    subhead: 'Pipesor lee el paso fallido de una ejecución de GitHub Actions, enmascara sus secretos y propone una causa probable con su evidencia. Tu equipo la confirma, corrige o rechaza.',
    secondary: 'Ver un incidente de principio a fin',
    heroNote: 'Prototipo académico. Acceso de solo lectura a GitHub.',
    replay: {
      label: 'Repetición de una ejecución fallida de GitHub Actions',
      caption: 'Una ejecución real del repositorio público pipesor-demo. Su host y su contraseña son valores de demostración.',
      stages: ['Falla la ejecución', 'Secretos enmascarados', 'Causa probable', 'Confirmado'],
      cause: 'Causa probable',
      ready: 'Diagnóstico listo 30 s después de la detección',
      verdict: 'Confirmado por una persona',
      verdictDetail: 'Revisión 1, tras una ejecución de verificación en verde',
      replay: 'Repetir',
    },
    showcase: {
      heading: 'Cada diagnóstico muestra su trabajo',
      legend: 'Elige una parte del incidente INC-1084',
      views: [
        { tab: 'Diagnóstico', title: 'La causa y sus límites', text: 'Una causa probable llega con las limitaciones que declara el modelo, la versión del modelo y de las instrucciones, y los datos del incidente. Pipesor no muestra un porcentaje de confianza: la incertidumbre se expresa con palabras.' },
        { tab: 'Evidencia', title: 'Observaciones, no conclusiones', text: 'El extracto protegido que cita el diagnóstico, con el job, el archivo y las líneas de donde salió. El host y la contraseña de esta ejecución aparecen como [redacted].' },
        { tab: 'Revisión', title: 'Resuelto y, después, validado', text: 'Una ejecución de verificación en verde resuelve el incidente. El diagnóstico se confirma en una revisión aparte, registrada con su revisión.' },
        { tab: 'Corrección', title: 'Cuando el modelo se equivoca', text: 'En INC-1083 una persona rechazó la causa propuesta y registró la real. Las revisiones solo se añaden y nunca se reescriben.' },
      ],
      captions: [
        'INC-1084 en el dashboard de Pipesor: causa probable, limitaciones y datos del incidente.',
        'La evidencia que cita el diagnóstico de INC-1084, saneada antes de cualquier procesamiento.',
        'INC-1084: ciclo de vida completado por personas y diagnóstico confirmado.',
        'INC-1083: el diagnóstico rechazado con la causa real.',
      ],
      transparency: 'Cómo funciona la IA',
    },
    screenshot: 'Dashboard de Pipesor', openImage: 'Ampliar captura', closeImage: 'Cerrar', lightboxTitle: 'Dashboard de Pipesor', zoomImage: 'Tamaño real', fitImage: 'Ajustar a la pantalla',
    protection: {
      heading: 'Ningún secreto llega al modelo',
      intro: 'La protección ocurre antes de cualquier procesamiento o IA. Esto es lo que pasa con cada ejecución fallida que lee Pipesor.',
      items: [
        ['Como máximo salen 40 líneas de GitHub.', 'Ingestión solo lee el primer paso fallido. El log completo queda en GitHub y nunca se guarda en Pipesor.'],
        ['Los secretos se enmascaran primero.', 'Correos, direcciones IP, tokens de GitHub, JWT y valores secretos pasan a ser [redacted]. Los extractos con claves privadas se rechazan.'],
        ['El modelo nunca sabe quién eres.', 'Nunca recibe tu identidad, los nombres de tu repositorio o workflow, tokens ni datos de quienes revisan.'],
        ['Tu repositorio nunca cambia.', 'La GitHub App solo lee Actions y metadatos. Pipesor nunca cambia código, workflows, secretos, permisos ni configuración.'],
        ['Ningún modelo se entrena con tus datos.', 'Los modelos se usan a través de la API de Azure OpenAI, y las revisiones nunca alimentan al modelo ni a su corpus de conocimiento.'],
      ],
      security: 'Leer la página de seguridad',
      evidenceCaption: 'La evidencia de INC-1084 tal como la guarda Pipesor: el host y la contraseña se enmascararon antes de cualquier procesamiento.',
    },
    timeline: {
      heading: 'Un incidente, de principio a fin',
      label: 'Tiempo hasta resolver el incidente INC-1084: la parte de Pipesor y la de las personas',
      segments: [
        ['30 s', 'Primero, Pipesor captura la ejecución fallida, la enmascara y propone la causa.'],
        ['2 min 58 s', 'Después, una persona corrige el puerto en GitHub y una ejecución de verificación en verde resuelve el incidente.'],
      ],
      total: 'INC-1084 se resolvió 3 min 28 s después de su detección. Una persona confirmó su diagnóstico alrededor de un minuto más tarde.',
      historyCaption: 'El historial guarda cada incidente resuelto con su validación, el tiempo hasta el diagnóstico y el tiempo de resolución.',
      journey: 'Seguir el recorrido completo de los datos',
    },
    results: {
      heading: 'Medido, con sus límites',
      text: 'De la evaluación de tesis de los diagnósticos de Pipesor.',
      tiles: [
        ['17 de 20', 'diagnósticos dados por correctos en la revisión humana (85 %)'],
        ['64–95 %', 'intervalo de confianza del 95 % para esa tasa: no permite afirmar un 80 % o más'],
        ['33 s', 'mediana hasta tener un diagnóstico'],
        ['4 de 20', 'recomendaciones consideradas accionables'],
        ['10', 'escenarios de fallo de tres repositorios; los resultados no se generalizan a cualquier pipeline'],
        ['1', 'persona revisora por caso, y quienes revisaron fueron los autores del sistema'],
      ],
      link: 'Leer la página de transparencia de la IA',
    },
    questionsHeading: 'Preguntas',
    questions: [
      ['¿Qué plataformas CI/CD admite Pipesor?', 'Solo GitHub Actions. Pipesor no está afiliado a GitHub ni cuenta con su aprobación o certificación.'],
      ['¿Pipesor soluciona incidentes automáticamente?', 'No. Una recomendación es una comprobación manual para una persona; Pipesor nunca ejecuta correcciones. Registrar la remediación documenta trabajo humano, y resolver un incidente exige una ejecución de verificación correcta.'],
      ['¿Por qué no hay un nivel de confianza?', 'La confianza que un modelo declara de sí mismo no es una probabilidad fiable, así que Pipesor expresa la incertidumbre con palabras, en las limitaciones de cada diagnóstico.'],
      ['¿Dónde se procesan mis datos?', 'En la zona de datos de Microsoft en Estados Unidos (Azure West US 3). Los diagnósticos vienen de GPT-6 Luna a través de Azure OpenAI, y GitHub aloja tus repositorios. La política de privacidad explica qué se guarda y durante cuánto tiempo.'],
      ['¿Quién puede ver mis incidentes?', 'Solo las personas con un permiso explícito sobre un pipeline: Ver, Operar o Configurar. Cada solicitud comprueba además tu acceso actual al repositorio en GitHub.'],
      ['¿Pipesor está listo para producción?', 'Todavía no. Es un prototipo académico que funciona en un entorno de desarrollo en Azure. No tiene autenticación multifactor propia, las sesiones duran como máximo una hora y no hay un firewall de aplicaciones web.'],
    ],
    start: {
      heading: 'Tu próximo fallo, explicado.',
      steps: [
        ['Da acceso de lectura a Pipesor', 'Quien administra el repositorio instala la GitHub App de Pipesor y selecciona los repositorios.'],
        ['Registra un workflow', 'Elige el workflow que quieres monitorizar y su criticidad.'],
        ['Valida el diagnóstico', 'Las ejecuciones fallidas se capturan en cuanto ocurren. Confirma, corrige o rechaza cada causa probable.'],
      ],
      note: 'Cualquier cuenta de GitHub puede entrar. Los repositorios aparecen cuando su administrador los selecciona en la GitHub App de Pipesor.',
      install: 'Instalar la GitHub App',
    },
    footer: {
      description: 'Diagnóstico con evidencias para GitHub Actions. Un proyecto de tesis AIOps.',
      product: 'En esta página', about: 'Sobre Pipesor', legal: 'Legal', contributors: 'Colaboradores',
      aboutLinks: ['Cómo funciona', 'Transparencia de la IA', 'Seguridad'],
      privacy: 'Política de privacidad', terms: 'Términos de uso',
      licensing: 'El código fuente tiene licencia MIT. El nombre, logotipo, marca, identidad visual, capturas del producto y material gráfico para redes sociales de Pipesor quedan excluidos; todos los derechos reservados sobre esos elementos. Los materiales de terceros conservan sus propias licencias.',
      copyright: 'Jhon Alexander Galvez Chambi y Ramiro Alexander Guzman Chavez.',
    },
    top: 'Volver al inicio', newTab: 'se abre en una pestaña nueva',
  },
} as const;
export type Locale = keyof typeof content;
