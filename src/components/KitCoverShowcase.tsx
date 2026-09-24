import React from 'react';
import capaRenderedImg from '../assets/images/capa_kit_recomeco_3d_1790286092242.jpg';

export function KitCoverShowcase() {
  return (
    <div className="w-full flex flex-col rounded-2xl overflow-hidden border border-[#0B343F]/15 bg-[#F3ECDF] shadow-md select-none">
      {/* 3D Mockup Stage matching CAPA KIT 3 */}
      <div className="relative w-full aspect-square max-h-[500px] flex items-center justify-center overflow-hidden bg-[#F3ECDF] p-3 sm:p-6">
        
        {/* Background Decorative Rings and Circle */}
        <div className="absolute w-[86%] aspect-square rounded-full bg-[#faf5ec] shadow-inner" />
        <div className="absolute w-[86%] aspect-square rounded-full border-2 border-[#0B343F]/25 pointer-events-none" />

        {/* Books Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-center px-1">
          
          {/* ========================================================
              BOOK 2 (LEFT - "COMO PERCEBER QUE VOCÊ ESTÁ EVOLUINDO")
              ======================================================== */}
          <div 
            className="w-[36%] h-[74%] -mr-4 rounded-md bg-[#0B343F] text-white p-2.5 sm:p-4 flex flex-col justify-between shadow-xl transform -rotate-5 translate-y-1 transition-transform hover:-translate-y-1 hover:rotate-[-2deg] duration-300 relative border-r-2 border-white/10 z-10"
            style={{
              boxShadow: '-8px 12px 24px rgba(11, 52, 63, 0.35), inset -2px 0 6px rgba(0, 0, 0, 0.4)'
            }}
          >
            {/* Spine Depth Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-3 bg-gradient-to-r from-black/40 via-white/10 to-transparent rounded-l-md pointer-events-none" />
            
            {/* Top Brand */}
            <div className="text-center">
              <span className="text-[7px] sm:text-[10px] md:text-xs font-semibold tracking-widest text-white/90 uppercase">
                KIT RECOMEÇO
              </span>
            </div>

            {/* Big Orange Number 2 & Icon */}
            <div className="flex flex-col items-center justify-center my-0.5 sm:my-1">
              <span className="text-3xl sm:text-5xl md:text-6xl font-black text-[#E18B42] leading-none">
                2
              </span>
              {/* Upward Trending Bar Chart Icon */}
              <svg className="w-5 h-5 sm:w-8 sm:h-8 text-[#E18B42] mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 19h16v2H4v-2zm3-4h2v3H7v-3zm4-4h2v7h-2v-7zm4-4h2v11h-2V7zm3-4l3 3h-2v2h-2V6h-2l3-3z"/>
              </svg>
            </div>

            {/* Title */}
            <div className="text-center my-0.5">
              <h4 className="text-[9px] sm:text-[12px] md:text-sm font-black text-white leading-tight uppercase tracking-tight">
                COMO PERCEBER QUE VOCÊ ESTÁ EVOLUINDO
              </h4>
            </div>

            {/* Orange Stripe */}
            <div className="w-full h-1 sm:h-1.5 bg-[#E18B42] rounded-full my-0.5 sm:my-1" />

            {/* Subtitle */}
            <div className="text-center pb-0.5">
              <p className="text-[6px] sm:text-[8.5px] md:text-[10px] text-[#F3ECDF]/85 leading-snug font-normal line-clamp-3">
                Como reconhecer o seu progresso, mesmo quando a balança e o espelho ainda não mostram
              </p>
            </div>
          </div>

          {/* ========================================================
              BOOK 1 (CENTER - "COMO SAIR DO FUNDO DO POÇO")
              ======================================================== */}
          <div 
            className="w-[40%] h-[82%] rounded-md bg-[#0B343F] text-white p-3 sm:p-5 flex flex-col justify-between shadow-2xl relative z-20 border-r-2 border-white/10 transition-transform hover:scale-[1.02] duration-300"
            style={{
              boxShadow: '0 18px 36px rgba(11, 52, 63, 0.45), inset -2px 0 8px rgba(0, 0, 0, 0.4), inset 2px 0 4px rgba(255, 255, 255, 0.15)'
            }}
          >
            {/* Spine Depth Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-2.5 sm:w-4 bg-gradient-to-r from-black/40 via-white/10 to-transparent rounded-l-md pointer-events-none" />

            {/* Top Brand */}
            <div className="text-center">
              <span className="text-[8px] sm:text-[11px] md:text-xs font-semibold tracking-widest text-white/90 uppercase">
                KIT RECOMEÇO
              </span>
            </div>

            {/* Big Orange Number 1 & Stairs/Flag Icon */}
            <div className="flex flex-col items-center justify-center my-0.5 sm:my-1">
              <span className="text-4xl sm:text-6xl md:text-7xl font-black text-[#E18B42] leading-none">
                1
              </span>
              {/* Steps with Flag Icon */}
              <svg className="w-6 h-6 sm:w-9 sm:h-9 text-[#E18B42] mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20h4v-4h4v-4h4V8" />
                <path d="M16 4v4l4-2-4-2z" fill="#E18B42" />
              </svg>
            </div>

            {/* Title */}
            <div className="text-center my-0.5">
              <h3 className="text-[11px] sm:text-[15px] md:text-base font-black text-white leading-tight uppercase tracking-tight">
                COMO SAIR DO FUNDO DO POÇO
              </h3>
            </div>

            {/* Orange Stripe */}
            <div className="w-full h-1.5 sm:h-2 bg-[#E18B42] rounded-full my-0.5 sm:my-1.5" />

            {/* Subtitle */}
            <div className="text-center pb-0.5">
              <p className="text-[7px] sm:text-[9.5px] md:text-[11px] text-[#F3ECDF]/90 leading-snug font-normal">
                O passo a passo que usei pra recomeçar do zero
              </p>
            </div>
          </div>

          {/* ========================================================
              BOOK 3 (RIGHT - "CHECKLIST DE 21 DIAS")
              ======================================================== */}
          <div 
            className="w-[36%] h-[74%] -ml-4 rounded-md bg-[#0B343F] text-white p-2.5 sm:p-4 flex flex-col justify-between shadow-xl transform rotate-5 translate-y-1 transition-transform hover:-translate-y-1 hover:rotate-[2deg] duration-300 relative border-r-2 border-white/10 z-10"
            style={{
              boxShadow: '8px 12px 24px rgba(11, 52, 63, 0.35), inset -2px 0 6px rgba(0, 0, 0, 0.4)'
            }}
          >
            {/* Spine Depth Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-3 bg-gradient-to-r from-black/40 via-white/10 to-transparent rounded-l-md pointer-events-none" />

            {/* Top Brand */}
            <div className="text-center">
              <span className="text-[7px] sm:text-[10px] md:text-xs font-semibold tracking-widest text-white/90 uppercase">
                KIT RECOMEÇO
              </span>
            </div>

            {/* Big Orange Number 3 & Checkbox Icon */}
            <div className="flex flex-col items-center justify-center my-0.5 sm:my-1">
              <span className="text-3xl sm:text-5xl md:text-6xl font-black text-[#E18B42] leading-none">
                3
              </span>
              {/* Checkbox Icon */}
              <div className="w-5 h-5 sm:w-8 sm:h-8 border-2 border-[#E18B42] rounded-sm flex items-center justify-center mt-0.5 bg-[#0B343F]">
                <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#E18B42]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <div className="text-center my-0.5">
              <h4 className="text-[9px] sm:text-[12px] md:text-sm font-black text-white leading-tight uppercase tracking-tight">
                CHECKLIST DE 21 DIAS
              </h4>
            </div>

            {/* Orange Stripe */}
            <div className="w-full h-1 sm:h-1.5 bg-[#E18B42] rounded-full my-0.5 sm:my-1" />

            {/* Subtitle */}
            <div className="text-center pb-0.5">
              <p className="text-[6px] sm:text-[8.5px] md:text-[10px] text-[#F3ECDF]/85 leading-snug font-normal line-clamp-3">
                Um passo por dia para recomeçar, sem pressão e sem complicação
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Orange Banner from CAPA KIT 3 */}
      <div className="w-full bg-[#E18B42] py-2.5 sm:py-3 px-4 text-center">
        <span className="text-sm sm:text-base md:text-lg font-black tracking-widest text-white uppercase drop-shadow-xs">
          KIT RECOMEÇO
        </span>
      </div>
    </div>
  );
}
