import React from 'react';
import { User, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-10 px-4 w-full relative">
      <div className="text-center mb-10">
        <h2 className="font-hand text-4xl sm:text-5xl font-bold text-sketch-charcoal mb-4 scribble-underline inline-block">
          Contact Me
        </h2>
        <p className="font-sans text-sketch-charcoal/80 text-lg mt-2">
          Feel free to reach out to me directly through any of the channels below!
        </p>
      </div>

      {/* Contact Details Board */}
      <div 
        className="w-full max-w-lg mx-auto bg-notebook border-3 border-sketch-charcoal p-8 sketch-shadow relative overflow-hidden"
        style={{
          borderRadius: "15px 255px 15px 225px/225px 15px 255px 15px"
        }}
      >
        {/* Binder red margin line */}
        <div className="absolute left-[38px] top-0 bottom-0 w-[2px] bg-red-400/40 pointer-events-none"></div>
        
        {/* Taped decoration */}
        <div className="absolute -top-3 left-[30%] w-24 h-6 bg-tape opacity-85 z-10"></div>

        <div className="pl-8 sm:pl-10 space-y-6 font-hand">
          <h3 className="text-3xl font-extrabold text-sketch-charcoal border-b-2 border-dashed border-sketch-charcoal/20 pb-2 mb-4">
            say hello! 👋
          </h3>
          
          <div className="space-y-4 text-xl sm:text-2xl text-sketch-charcoal/95">
            <div className="flex items-center gap-3 hover-wobble">
              <User size={24} className="text-sketch-orange shrink-0" />
              <div>
                <span className="text-xs font-sans font-bold block opacity-50 uppercase tracking-wider">name</span>
                <span className="font-bold">Lam Van Di</span>
              </div>
            </div>

            <div className="flex items-center gap-3 hover-wobble select-all cursor-pointer">
              <Mail size={24} className="text-sketch-orange shrink-0" />
              <div>
                <span className="text-xs font-sans font-bold block opacity-50 uppercase tracking-wider">email</span>
                <span className="font-bold underline decoration-wavy decoration-sketch-green-dark">lamvandi11@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center gap-3 hover-wobble select-all cursor-pointer">
              <Phone size={24} className="text-sketch-orange shrink-0" />
              <div>
                <span className="text-xs font-sans font-bold block opacity-50 uppercase tracking-wider">phone</span>
                <span className="font-bold">0365933624</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
