import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const CartDoodle = () => (
  <svg className="w-20 h-20 text-sketch-charcoal animate-float" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cart Basket */}
    <path 
      d="M20 25 H28 L38 65 H72 L80 35 H32" 
      stroke="currentColor" 
      strokeWidth="5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    {/* Wheels */}
    <circle cx="42" cy="76" r="6" fill="none" stroke="currentColor" strokeWidth="4" />
    <circle cx="68" cy="76" r="6" fill="none" stroke="currentColor" strokeWidth="4" />
    <circle cx="42" cy="76" r="2" fill="currentColor" />
    <circle cx="68" cy="76" r="2" fill="currentColor" />
    {/* Sparkle Orange Star inside the cart */}
    <path 
      d="M50 40 L53 45 L58 46 L54 50 L56 55 L50 52 L44 55 L46 50 L42 46 L47 45 Z" 
      fill="#e67e22" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinejoin="round" 
    />
  </svg>
);

export default function PortfolioGrid() {
  const [lang, setLang] = useState('en'); // Default to English

  const titleVi = "dự án của tôi";
  const titleEn = "my project";

  const project = {
    title: "uteshop",
    category: "dev",
    link: "https://uteshop.duckdns.org/",
    descEn: "Built with React, Node.js, and Docker, this multi-vendor e-commerce platform connects Customers, Vendors, and Shippers in a seamless ecosystem. Users can purchase products, register storefronts, make secure payments via VNPay, and track deliveries in real-time.",
    descVi: "Được xây dựng bằng React, Node.js và Docker, nền tảng thương mại điện tử đa gian hàng này kết nối Khách hàng, Người bán và Shipper trong một hệ sinh thái khép kín. Người dùng có thể mua sắm, đăng ký gian hàng riêng, thanh toán qua cổng VNPay và theo dõi đơn hàng theo thời gian thực.",
    detailsEn: "A comprehensive multi-vendor e-commerce ecosystem featuring a closed-loop cash flow system that seamlessly connects customers, vendors, shippers, and administrators. Integrated with VNPAY sandbox payment gate, VietQR payouts, and AWS hosting.",
    detailsVi: "Hệ sinh thái thương mại điện tử đa gian hàng toàn diện tích hợp luồng tiền khép kín liên kết Khách hàng, Người bán, Shipper và Quản trị viên. Tích hợp cổng thanh toán VNPAY Sandbox, rút tiền tự động qua VietQR và lưu trữ trên AWS.",
    tags: ["react", "node.js", "mysql", "docker", "aws ec2", "vnpay"]
  };

  return (
    <section id="portfolio" className="py-10 px-4 w-full relative">
      
      {/* Title */}
      <div className="text-center mb-10 relative">
        <h2 className="font-hand text-4xl sm:text-5xl font-bold text-sketch-charcoal mb-4 scribble-underline inline-block">
          {lang === 'vi' ? titleVi : titleEn}
        </h2>
        <p className="font-sans text-sketch-charcoal/80 text-lg mt-2 max-w-lg mx-auto">
          {lang === 'vi' 
            ? "Chi tiết dự án thương mại điện tử đa gian hàng tôi đã thực hiện." 
            : "Detailed information about my fullstack multi-vendor e-commerce project."}
        </p>

        {/* Local language switcher */}
        <div className="absolute top-0 right-4 flex items-center gap-2">
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
      </div>

      {/* Featured Project Card */}
      <div className="max-w-2xl mx-auto">
        <div 
          className="group bg-white border-2 border-sketch-charcoal p-6 pb-6 sketch-shadow relative transition-transform duration-300 rotate-[-0.5deg] hover:rotate-0"
          style={{ borderRadius: "15px 255px 15px 225px/225px 15px 255px 15px" }}
        >
          {/* Tape */}
          <div className="absolute -top-4 left-[40%] w-24 h-6 bg-tape opacity-85 z-10"></div>

          {/* Simple and Small Centered Cart Doodle */}
          <div 
            className="w-48 h-36 bg-sketch-yellow-pale border-2 border-sketch-dashed border-sketch-charcoal/30 flex items-center justify-center mx-auto mb-6 relative overflow-hidden"
            style={{ borderRadius: "20px 80px 20px 70px/70px 20px 70px 20px" }}
          >
            <CartDoodle />
          </div>

          {/* Project Title and Link */}
          <div className="flex justify-between items-center border-b border-dashed border-sketch-charcoal/20 pb-3">
            <h3 className="font-hand text-3xl font-bold text-sketch-charcoal group-hover:text-sketch-orange transition-colors">
              {project.title}
            </h3>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1 font-hand text-xl text-sketch-orange hover:underline font-bold"
            >
              visit website
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Description */}
          <p className="font-hand text-lg sm:text-xl text-sketch-charcoal/90 mt-4 leading-relaxed">
            {lang === 'vi' ? project.descVi : project.descEn}
          </p>

          <div className="font-hand text-base sm:text-lg text-sketch-charcoal/70 mt-3 italic leading-relaxed">
            {lang === 'vi' ? project.detailsVi : project.detailsEn}
          </div>
          
          {/* Tags list */}
          <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-dashed border-sketch-charcoal/20">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-sketch-yellow-pale border border-sketch-charcoal rounded-full font-hand text-sm font-bold text-sketch-charcoal/80"
              >
                #{tag}
              </span>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
