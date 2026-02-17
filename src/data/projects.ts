export interface Project {
  id: number;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  images: string[];
  viewUrl: string | null;
  githubUrl: string | null;
  iframeUrl: string | null;
  privacyNote?: string;
  accentColor: string;
}

export const projects: Project[] = [
  {
    id: 1,
    number: "01",
    title: "RankTitan",
    category: "AI SaaS Platform",
    description: "AI-powered local SEO platform that helps businesses improve their visibility in Google local search, Google Maps, and Google Business Profile results. Automates key local marketing and SEO tasks using artificial intelligence.",
    technologies: ["Next.js", "PostgreSQL", "n8n", "SendGrid", "Twilio", "Commio", "Google API", "Meta API", "Stripe", "PayArc", "Tailwind CSS"],
    features: [
      "AI-Powered SEO",
      "Google Maps Optimization",
      "Business Profile Management",
      "Automated Marketing",
      "Local Search Ranking",
      "Multi-Platform Integration",
      "Analytics Dashboard",
      "Payment Processing"
    ],
    images: [
      "/geeks5g.webp"
    ],
    viewUrl: "https://ranktitan.ai",
    githubUrl: null,
    iframeUrl: null,
    privacyNote: "Proprietary platform - demo available upon request.",
    accentColor: "#10B981"
  },
  {
    id: 2,
    number: "02",
    title: "ProAxis",
    category: "SaaS Platform",
    description: "White-label 'Marketing Agency in a Box' platform. Empowers entrepreneurs to launch digital marketing agencies with built-in CRM, training academy, and payment processing.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "n8n", "Stripe", "Twilio", "Ringba", "GHL", "OpenAI"],
    features: [
      "White-Label Platform",
      "Integrated CRM",
      "Training Academy",
      "Stripe Payments",
      "Form Builder",
      "Team Management",
      "Commission System",
      "AI Automations"
    ],
    images: [
      "/proaxislogo1.png",
      "/proaxis.png",
      "/proaxis2.png",
      "/proaxis3.png",
      "/proaxis4.png",
      "/proaxis5.png",
      "/proaxis6.png"
    ],
    viewUrl: null,
    githubUrl: null,
    iframeUrl: null,
    privacyNote: "Proprietary platform - demo available upon request.",
    accentColor: "#F59E0B"
  },
  {
    id: 3,
    number: "03",
    title: "Spa Management Dashboard",
    category: "Web App",
    description: "Enterprise-grade dashboard for a multi-location spa chain with 20+ US locations. Features real-time operations management, sales tracking, and HR automation.",
    technologies: ["Next.js", "Express.js", "PostgreSQL", "Chart.js", "JWT", "SendGrid", "Cloudinary"],
    features: [
      "Real-time multi-location availability",
      "Advanced sales analytics",
      "Automated payroll processing",
      "Employee management",
      "Integrated Point of Sale",
      "Financial reporting",
      "Biometric time tracking",
      "HIPAA-compliant"
    ],
    images: [
      "/spa.jpg",
      "/spa1.jpg",
      "/spa2.jpg",
      "/spa3.jpg",
      "/spa4.jpg"
    ],
    viewUrl: null,
    githubUrl: null,
    iframeUrl: null,
    privacyNote: "Private project - code and demo available upon request.",
    accentColor: "#EC4899"
  },
  {
    id: 4,
    number: "04",
    title: "Trading Bot",
    category: "Automation",
    description: "Python-based automated trading bot using Alpaca and EODHD APIs. Executes momentum strategies across 20+ symbols with tick-level precision.",
    technologies: ["Python", "Alpaca API", "EODHD API", "Pandas", "NumPy", "Matplotlib"],
    features: [
      "Real-time data processing",
      "Momentum strategy",
      "20+ trading symbols",
      "Tick-level analysis",
      "Performance tracking",
      "Auto order execution"
    ],
    images: [
      "/3d-configurator.jpg",
      "/alpaca.png",
      "/eodh.png"
    ],
    viewUrl: null,
    githubUrl: null,
    iframeUrl: null,
    privacyNote: "Private - proprietary algorithms.",
    accentColor: "#3B82F6"
  },
  {
    id: 5,
    number: "05",
    title: "Galaxy Generator",
    category: "3D & Graphics",
    description: "Interactive Three.js galaxy generator with custom GLSL shaders. Real-time parameter controls for stunning visual effects.",
    technologies: ["Three.js", "GLSL Shaders", "WebGL", "JavaScript"],
    features: [
      "Real-time generation",
      "Custom GLSL shaders",
      "Interactive controls",
      "Optimized performance",
      "Dynamic customization"
    ],
    images: [
      "/galaxy.png"
    ],
    viewUrl: "https://galaxy-generator-animated-amber.vercel.app/",
    githubUrl: "https://github.com/josevilla/galaxy-generator",
    iframeUrl: "https://galaxy-generator-animated-amber.vercel.app/",
    accentColor: "#8B5CF6"
  },
  {
    id: 6,
    number: "06",
    title: "Portal Entry",
    category: "3D & Graphics",
    description: "Immersive 3D gallery built with Three.js and Blender. Navigate a virtual environment with custom shaders.",
    technologies: ["Three.js", "Blender", "GLSL Shaders", "JavaScript"],
    features: [
      "Immersive 3D environment",
      "Custom shaders",
      "Intuitive navigation",
      "Dynamic loading",
      "Mobile-optimized"
    ],
    images: [
      "/portal.png"
    ],
    viewUrl: "https://portal-chi-five.vercel.app/",
    githubUrl: "https://github.com/josevilla/3d-gallery",
    iframeUrl: "https://portal-chi-five.vercel.app/",
    accentColor: "#14B8A6"
  }
];
