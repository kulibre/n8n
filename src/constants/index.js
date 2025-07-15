const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Satisfied Clients" },
  { value: 16, suffix: "+", label: "Completed Projects" },
  { value: 96, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Saad's expertise in n8n workflow automation has been invaluable to KisanMarkaz. His ability to create complex automation flows and integrate multiple tools seamlessly has significantly improved our operational efficiency.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "n8n Workflow Creator",
    date: "January 2025 - Present",
    responsibilities: [
      "Built custom workflows to automate business operations, lead capture, and task management",
      "Integrated tools like Airtable, Slack, Google Sheets, Gmail, OpenAI, and more",
      "Designed robust error handling and fallback systems for reliability",
      "Collaborated with business teams to analyze requirements and design automation flows",
    ],
  },
  {
    review: "Saad's contributions to BIT Technologies automation infrastructure have been outstanding. His systematic approach to workflow design and optimization has created scalable solutions that benefit the entire organization.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Automation Engineer",
    date: "March 2024 - January 2025",
    responsibilities: [
      "Designed scalable n8n-based backend workflows for internal systems",
      "Created reusable workflow templates for lead gen, CRM updates, and data syncing",
      "Introduced logging, monitoring, and optimization into automation pipelines",
    ],
  },
  {
    review: "Saad's freelance work with Tres Mind demonstrated exceptional problem-solving skills. His ability to understand complex business requirements and translate them into effective automation solutions was truly impressive.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Freelance n8n Consultant",
    date: "August 2023 - January 2024",
    responsibilities: [
      "Developed on-demand automations for marketing, operations, and sales",
      "Provided training sessions and documentation for clients' internal teams",
      "Helped teams migrate from Zapier/Make to n8n for self-hosted control and flexibility",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "Saad transformed our manual workflows into automated, error-free processes with n8n. Saved us countless hours weekly!",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "His automation strategy helped us scale without hiring more staff. Super professional and communicative.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Delivered a complex set of interlinked workflows with near-zero bugs. Just brilliant.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "His n8n workflows have become the backbone of our internal tools. Couldn't have asked for better.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Created a scalable automation framework that boosted our team's productivity significantly.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Saad's understanding of APIs and automation logic is unmatched. Highly recommended for n8n setups.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
