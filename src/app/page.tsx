'use client';
import { motion } from 'framer-motion';
import { Zap, Shield, Sparkles } from 'lucide-react';

export default function ForgedPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24 bg-gradient-to-b from-slate-950 to-blue-950 overflow-hidden font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl text-center space-y-12"
      >
        <div className="flex justify-center gap-6 mb-8">
           <Zap className="w-12 h-12 text-blue-400 animate-pulse" />
           <Shield className="w-12 h-12 text-blue-500" />
           <Sparkles className="w-12 h-12 text-cyan-400 animate-pulse" />
        </div>
        
        <h1 className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 tracking-tighter">
          BUILD A PREMIUM FULL FORGE
        </h1>
        
        <p className="text-xl text-slate-400 leading-relaxed italic">
          "Build a premium full-stack portfolio website for a developer named Satvendra. The website must look award-winning, modern, interactive, and visually stunning. Focus heavily on UI/UX interactions, smooth animations, and immersive experience.  Tech Stack  Frontend:  Next.js (App Router)  React  Tailwind CSS  Framer Motion  Three.js (for interactive hero)  Shadcn UI components  Backend:  Node.js  Express API routes  MongoDB database  Authentication:  Simple admin login to manage portfolio projects  Deployment ready for:  Vercel frontend  Node backend server  UI/UX DESIGN REQUIREMENTS  The UI must feel:  futuristic  minimal but powerful  smooth micro-interactions  modern glassmorphism  subtle gradients  cinematic scroll animations  Add:  animated cursor  hover glow effects  magnetic buttons  parallax scrolling  smooth page transitions  Color theme:  Dark base (#0f0f0f)  Neon purple  Electric blue  Gradient accents  Typography:  Large hero headings  Clean sans-serif  premium feel  WEBSITE STRUCTURE 1. Hero Section  Full screen immersive hero.  Include:  animated 3D background (Three.js particles or grid)  large text:  "Hi, I'm Satvendra"  subtitle:  "Full Stack Developer & Creative Builder"  Add animated typing text:  Web Developer  UI/UX Designer  Open Source Enthusiast  Problem Solver  Buttons:  View Projects  Contact Me  With glowing hover effects.  2. About Section  Stylish section with card layout.  Generate random but realistic info:  Name: Satvendra Singh Location: India Experience: 3+ years Specialization:  Full Stack Development  UI/UX Engineering  Performance Optimization  Bio:  "Passionate developer who loves building visually stunning and highly performant digital experiences. Focused on modern web technologies, clean architecture, and impactful design."  Add:  animated skill bars  floating icons  3. Skills Section  Interactive grid with hover animations.  Example skills:  Frontend  React  Next.js  Tailwind  TypeScript  Backend  Node.js  Express  MongoDB  REST APIs  Tools  Git  Docker  Figma  AWS  Each skill card should:  glow on hover  tilt effect  animated icon  4. Projects Section  Fetch projects dynamically from backend.  Each project card contains:  project image  title  description  tech stack  live demo button  github button  Example generated projects:  AI Resume Builder  Real-Time Chat Application  3D Product Landing Page  Crypto Dashboard  Smart Task Manager  Add:  animated project cards  3D hover tilt  smooth grid layout  5. Experience Timeline  Vertical animated timeline.  Random data:  2024 – Senior Full Stack Developer 2023 – Frontend Developer 2022 – Web Developer Intern  Animate entries on scroll.  6. Testimonials Section  Sliding carousel.  Random testimonials like:  "Satvendra is an incredibly talented developer who delivers amazing user experiences."  7. Contact Section  Beautiful contact form with:  Name  Email  Message  Backend API stores messages in MongoDB.  Add:  success animation  toast notifications  8. Admin Dashboard  Secure admin panel to:  add projects  edit projects  delete projects  Pages:  /admin/login /admin/dashboard  EXTRA INTERACTIONS  Add:  smooth scroll  page transition animations  animated loading screen  scroll progress bar  dynamic gradient backgrounds  PERFORMANCE  Optimize:  lazy loading images  code splitting  SEO meta tags  lighthouse score above 90"
        </p>
        
        <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-3xl">
            <h3 className="font-bold text-blue-400 mb-2">Neural Build</h3>
            <p className="text-xs text-slate-500">Zero-touch project materialization complete.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-3xl">
            <h3 className="font-bold text-cyan-400 mb-2">Antigravity Header</h3>
            <p className="text-xs text-slate-500">Pre-provisioned with security protocols.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-3xl">
            <h3 className="font-bold text-indigo-400 mb-2">Cloud Native</h3>
            <p className="text-xs text-slate-500">Atomic delivery to GitHub completed.</p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}