import { Mail, Phone, MapPin, Download } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function CV() {

  return (
    <section id="cv" className="py-10 px-4 w-full relative">
      
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="font-hand text-4xl sm:text-5xl font-bold text-sketch-charcoal mb-4 scribble-underline inline-block">
          curriculum vitae
        </h2>
        <p className="font-sans text-sketch-charcoal/80 text-lg mt-2">
          Read my detailed professional background below or print it out.
        </p>
      </div>

      {/* CV Sheet Container (designed as notebook paper with ring binder slots) */}
      <div 
        className="w-full max-w-4xl mx-auto bg-[#fafafa] border-3 border-sketch-charcoal p-6 sm:p-10 md:p-12 sketch-shadow relative overflow-hidden print:border-none print:shadow-none print:bg-white print:p-0"
        style={{
          borderRadius: "15px 255px 15px 225px/225px 15px 255px 15px"
        }}
      >
        {/* Ring binder slots on the left (hidden in print) */}
        <div className="absolute left-3 top-0 bottom-0 flex flex-col justify-around py-8 pointer-events-none print:hidden">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-5 h-5 rounded-full bg-sketch-bg border-2 border-sketch-charcoal flex items-center justify-center shadow-inner">
              <div className="w-2 h-2 rounded-full bg-sketch-charcoal/20"></div>
            </div>
          ))}
        </div>

        {/* Binder margin indicator line */}
        <div className="absolute left-[45px] top-0 bottom-0 w-[2px] bg-red-400/30 pointer-events-none print:hidden"></div>

        {/* Main Content Area */}
        <div className="pl-6 sm:pl-10 print:pl-0">
          
          {/* Print Button (hidden in print) */}
          <div className="flex justify-end mb-6 print:hidden">
            <a
              href="/LamVanDi_Fullstack_CV.pdf"
              download="LamVanDi_Fullstack_CV.pdf"
              className="flex items-center gap-2 px-4 py-2 border-2 border-sketch-charcoal font-hand text-lg sm:text-xl font-bold bg-sketch-yellow-pale hover:bg-sketch-yellow transition-all hover:-translate-y-0.5 sketch-shadow-sm cursor-pointer"
              style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
            >
              <Download size={18} />
              download CV
            </a>
          </div>

          {/* Header Name & Title */}
          <div className="text-center md:text-left border-b-2 border-dashed border-sketch-charcoal/30 pb-6 mb-6">
            <h1 className="font-hand text-4xl sm:text-5xl md:text-6xl font-extrabold text-sketch-charcoal tracking-wide mb-2">
              LAM VAN DI
            </h1>
            <h3 className="font-sans text-xl sm:text-2xl font-semibold text-sketch-green-dark tracking-wide uppercase">
              Fullstack Developer Intern
            </h3>

            {/* Contact Info Row */}
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4 text-sm sm:text-base text-sketch-charcoal/80 font-sans">
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-sketch-orange" />
                Ho Chi Minh City, Vietnam
              </span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Phone size={16} className="text-sketch-orange" />
                0365933624
              </span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Mail size={16} className="text-sketch-orange" />
                lamvandi11@gmail.com
              </span>
              <span className="hidden md:inline">•</span>
              <a href="https://github.com/diiego05" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-sketch-orange transition-colors">
                <GithubIcon className="text-sketch-orange w-4 h-4" />
                github.com/diiego05
              </a>
            </div>
          </div>

          {/* CV Grid Layout */}
          <div className="space-y-6 text-sketch-charcoal font-sans text-sm sm:text-base">
            
            {/* Summary */}
            <div className="space-y-2">
              <h4 className="font-hand text-2xl font-bold text-sketch-orange-dark border-b border-sketch-charcoal/20 pb-1">
                Summary
              </h4>
              <p className="leading-relaxed text-sketch-charcoal/90">
                Software Engineering student at HCMUTE focusing on FullStack Development. Hands-on project experience across frontend and backend. Quick learner, proactive, and comfortable working in team environments with Git-based workflows.
              </p>
            </div>

            {/* Project: UTEShop */}
            <div className="space-y-3">
              <h4 className="font-hand text-2xl font-bold text-sketch-orange-dark border-b border-sketch-charcoal/20 pb-1 flex justify-between items-end">
                <span>Featured Project</span>
                <span className="text-sm font-sans font-normal text-sketch-charcoal/60">Apr 2026 — Jul 2026</span>
              </h4>
              <div>
                <div className="flex flex-wrap justify-between items-baseline mb-2">
                  <span className="text-lg font-bold text-sketch-green-dark">UTEShop</span>
                  <a href="https://github.com/diiego05/Nhom02_DoAnCNPMM" target="_blank" rel="noreferrer" className="text-xs sm:text-sm text-sketch-orange hover:underline font-semibold">
                    github.com/diiego05/Nhom02_DoAnCNPMM
                  </a>
                </div>
                <div className="text-sm italic text-sketch-charcoal/70 mb-2">
                  Fullstack Developer | Team Size: 4
                </div>

                <ul className="list-disc pl-5 space-y-2 text-sketch-charcoal/90 leading-relaxed">
                  <li>
                    <strong className="text-sketch-charcoal font-semibold">Description:</strong> A comprehensive multi-vendor e-commerce ecosystem featuring a closed-loop cash flow system that seamlessly connects customers, vendors, shippers, and administrators.
                  </li>
                  <li>
                    <strong className="text-sketch-charcoal font-semibold">Technologies:</strong> React.js, TypeScript, Node.js, Express.js, Tailwind CSS, HTML5&CSS3, MySQL (Sequelize), Redis, Cloudinary, Git, Postman.
                  </li>
                  <li>
                    <strong className="text-sketch-charcoal font-semibold">Backend:</strong> Engineered a scalable system architecture by developing RESTful APIs with Node.js/Express.js, optimizing relational data models using MySQL, and implementing Redis for caching.
                  </li>
                  <li>
                    <strong className="text-sketch-charcoal font-semibold">Frontend:</strong> Built a dynamic, highly responsive single-page application using React.js and Tailwind CSS, utilizing TanStack Query to optimize data fetching and rendering.
                  </li>
                  <li>
                    <strong className="text-sketch-charcoal font-semibold">System Integrations:</strong> Successfully integrated 3rd-party services including VNPAY for secure online payments, VietQR for automated vendor bank withdrawals, and Cloudinary for media storage.
                  </li>
                  <li>
                    <strong className="text-sketch-charcoal font-semibold">State Management & Features:</strong> Developed comprehensive management dashboards (Admin/Vendor) and a real-time shopping cart system, utilizing Redux Toolkit for efficient global state management.
                  </li>
                  <li>
                    <strong className="text-sketch-charcoal font-semibold">Workflow Optimization:</strong> Streamlined team development and testing processes by utilizing Postman for API verification and Git/GitHub for source code version control.
                  </li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h4 className="font-hand text-2xl font-bold text-sketch-orange-dark border-b border-sketch-charcoal/20 pb-1">
                Education
              </h4>
              <div className="flex flex-wrap justify-between items-baseline">
                <span className="font-bold text-sketch-green-dark">Bachelor of Information Technology</span>
                <span className="text-sm text-sketch-charcoal/60 font-medium">2023 — 2027 (Expected)</span>
              </div>
              <div className="flex flex-wrap justify-between text-sm italic text-sketch-charcoal/70">
                <span>Ho Chi Minh City University of Technology and Education (HCMUTE)</span>
                <span className="font-semibold text-sketch-charcoal font-sans">GPA: 3.2</span>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-2">
              <h4 className="font-hand text-2xl font-bold text-sketch-orange-dark border-b border-sketch-charcoal/20 pb-1">
                Additional Information
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sketch-charcoal/90">
                <div>
                  <span className="font-semibold">Languages: </span> English
                </div>
                <div>
                  <span className="font-semibold">Certificates: </span> TOEIC 725/990
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Global CSS to optimize print layout */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body {
            background-color: white !important;
            background-image: none !important;
            color: black !important;
          }
          nav, footer, button, .print\\:hidden {
            display: none !important;
          }
          main {
            padding: 0 !important;
            margin: 0 !important;
          }
          #cv {
            padding: 0 !important;
            margin: 0 !important;
          }
          #about, #portfolio, #contact, header {
            display: none !important;
          }
        }
      `}} />

    </section>
  );
}
