import React, { useState } from 'react';

const skillsData = [
  { category: "Languages", items: "JavaScript, TypeScript, SQL, NoSQL, HTML&CSS" },
  { category: "Frameworks", items: "Node.js, React.js, Express.js, Tailwind CSS, HTML5&CSS3" },
  { category: "Core Concepts", items: "RESTful APIs, MVC, SOLID, Design Patterns, JWT/OAuth2" },
  { category: "Database", items: "MySQL, MongoDB, SQL Server, PostgreSQL, Redis" },
  { category: "Cloud & DevOps", items: "AWS (EC2, S3), Docker, Docker Compose, Nginx (Reverse Proxy), Linux Server Administration" },
  { category: "Tools", items: "Git, Postman, Swagger, n8n, Cloudinary, VNPay/SePay Integration" },
  { category: "AI Tools", items: "Claude, Antigravity, Cursor, ChatGPT, Copilot, Blackbox" },
  { category: "Libraries & State Management", items: "Redux Toolkit, React Context, Axios, TanStack Query, Mongoose, JWT" }
];

export default function About() {
  const [lang, setLang] = useState('en'); // 'vi' or 'en'

  return (
    <section id="about" className="relative w-full py-10 px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-start my-8">
      
      {/* Scrapbook Paper Content (Left side, takes 7 cols on md) */}
      <div className="md:col-span-7 bg-notebook border-sketch-2 sketch-shadow p-6 sm:p-8 relative min-h-[450px]">
        {/* Red Margined notebook line marker */}
        <div className="absolute left-[38px] top-0 bottom-0 w-[2px] bg-red-400/40 pointer-events-none"></div>

        {/* Paper tape decoration at the top */}
        <div className="absolute -top-3 left-[20%] w-32 h-7 bg-tape opacity-85 z-10"></div>

        {/* Language Switcher */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          <button 
            onClick={() => setLang('vi')}
            className={`font-hand text-lg font-bold px-2 py-0.5 border border-sketch-charcoal hover:-translate-y-0.5 transition-transform cursor-pointer
              ${lang === 'vi' ? 'bg-sketch-yellow text-sketch-charcoal border-sketch-3' : 'bg-white text-sketch-charcoal border-sketch-1'}
            `}
            style={{ borderRadius: "50% 20% 50% 20% / 20% 50% 20% 50%" }}
          >
            VI
          </button>
          <button 
            onClick={() => setLang('en')}
            className={`font-hand text-lg font-bold px-2 py-0.5 border border-sketch-charcoal hover:-translate-y-0.5 transition-transform cursor-pointer
              ${lang === 'en' ? 'bg-sketch-yellow text-sketch-charcoal border-sketch-3' : 'bg-white text-sketch-charcoal border-sketch-1'}
            `}
            style={{ borderRadius: "20% 50% 20% 50% / 50% 20% 50% 20%" }}
          >
            EN
          </button>
        </div>

        {/* Content starts with a margin left to clear the notebook margin line */}
        <div className="pl-8 sm:pl-10">
          <h2 className="font-hand text-3xl sm:text-4xl md:text-5xl text-sketch-charcoal mb-6 font-bold flex items-center gap-2">
            {lang === 'vi' ? 'về tôi' : 'about me'} 
            <span className="text-sketch-orange text-2xl font-normal">*</span>
          </h2>

          <div className="font-hand text-lg sm:text-xl md:text-2xl text-sketch-charcoal/95 leading-relaxed space-y-4">
            {lang === 'vi' ? (
              <>
                <p>
                  Tôi là sinh viên chuyên ngành Công nghệ Thông tin tại Đại học Sư phạm Kỹ thuật TP.HCM, định hướng trở thành lập trình viên <span className="font-bold text-sketch-green-dark underline decoration-wavy decoration-sketch-orange">Fullstack</span>.
                </p>
                <p>
                  Sở hữu kinh nghiệm thực tiễn triển khai linh hoạt cả Frontend và Backend thông qua quá trình xây dựng hệ sinh thái thương mại điện tử hoàn chỉnh. Nổi bật với tư duy thiết kế kiến trúc hệ thống, phát triển mạng lưới API, tối ưu hóa cơ sở dữ liệu và tích hợp các dịch vụ thanh toán trực tuyến.
                </p>
                <p>
                  Bản thân là người chủ động, học hỏi công nghệ mới rất nhanh và dễ dàng hòa nhập vào môi trường làm việc nhóm chuyên nghiệp. Mục tiêu luôn hướng tới việc tạo ra các sản phẩm phần mềm ổn định, có tính mở rộng cao và mang lại giá trị thực tế cho người dùng.
                </p>
              </>
            ) : (
              <>
                <p>
                  I am a Software Engineering student at HCMUTE focusing on <span className="font-bold text-sketch-green-dark underline decoration-wavy decoration-sketch-orange">Fullstack Development</span>.
                </p>
                <p>
                  I have hands-on experience seamlessly implementing both Frontend and Backend components through building a comprehensive e-commerce ecosystem. My core strengths lie in system architecture design, RESTful API development, database optimization, and integrating online payment services.
                </p>
                <p>
                  I am a proactive, fast learner who adapts quickly to professional team environments. My goal is to build stable, highly scalable software products that deliver practical value to users.
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Skills / Tech Doodles (Right side, takes 5 cols on md) */}
      <div className="md:col-span-5 bg-gridpaper border-sketch-3 sketch-shadow p-5 sm:p-6 relative">
        {/* Blue tape at the top corner */}
        <div className="absolute -top-3 right-[15%] w-24 h-6 bg-tape opacity-85 z-10"></div>

        <h3 className="font-hand text-2xl sm:text-3xl font-bold text-sketch-charcoal mb-4 scribble-underline inline-block">
          {lang === 'vi' ? 'kỹ năng chuyên môn' : 'technical skills'} ✏️
        </h3>

        <div className="space-y-4 max-h-[500px] overflow-y-auto no-scrollbar pr-1">
          {skillsData.map((skill, idx) => (
            <div key={skill.category} className="space-y-1">
              <span className="font-hand text-lg sm:text-xl font-bold text-sketch-orange-dark block underline decoration-dashed decoration-sketch-charcoal/20">
                {skill.category.toLowerCase()}:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {skill.items.split(', ').map((item, i) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 font-hand text-base sm:text-lg border border-sketch-charcoal bg-white sketch-shadow-sm select-none"
                    style={{
                      borderRadius: (idx + i) % 2 === 0 
                        ? "8px 25px 8px 20px/20px 8px 20px 8px" 
                        : "25px 8px 20px 8px/8px 20px 8px 25px"
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
