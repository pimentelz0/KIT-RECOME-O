import React from 'react';

export function KitCoverShowcase() {
  return (
    <div className="w-full flex flex-col rounded-2xl overflow-hidden border border-[#0B343F]/15 bg-[#FAF6EE] shadow-sm select-none">
      {/* Studio Stage */}
      <div className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FAF6EE] to-[#F1E9DA] px-2.5 sm:px-6 pt-7 sm:pt-10 pb-5 sm:pb-8">
        
        {/* Soft Ambient Glow */}
        <div className="absolute w-72 h-36 bg-[#E18B42]/12 rounded-full blur-3xl pointer-events-none" />

        {/* 3 Guide Covers in Clear Layout - No overlap or 3D distortion */}
        <div className="relative z-10 w-full flex items-end justify-center gap-1.5 sm:gap-3.5">
          
          {/* ========================================================
              CARD 2 (LEFT - "COMO PERCEBER QUE VOCÊ ESTÁ EVOLUINDO")
              ======================================================== */}
          <div className="w-[31%] max-w-[155px] aspect-[1/1.48] rounded-xl bg-[#0B343F] text-white p-2 sm:p-3.5 flex flex-col justify-between shadow-md border border-white/10 hover:shadow-lg transition-transform duration-200 hover:-translate-y-1">
            {/* Top Brand */}
            <div className="text-center">
              <span className="text-[6.5px] sm:text-[9px] font-bold tracking-widest text-[#F3ECDF]/70 uppercase block">
                KIT RECOMEÇO
              </span>
            </div>

            {/* Orange Number 2 & Chart Icon */}
            <div className="flex flex-col items-center justify-center my-0.5">
              <span className="text-2xl sm:text-4xl md:text-5xl font-black text-[#E18B42] leading-none">
                2
              </span>
              <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#E18B42] mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 19h16v2H4v-2zm3-4h2v3H7v-3zm4-4h2v7h-2v-7zm4-4h2v11h-2V7zm3-4l3 3h-2v2h-2V6h-2l3-3z"/>
              </svg>
            </div>

            {/* Title - Fully visible, never cut */}
            <div className="text-center my-0.5 px-0.5">
              <h4 className="text-[7.5px] sm:text-[11px] md:text-xs font-black text-white leading-tight uppercase tracking-tight">
                COMO PERCEBER QUE VOCÊ ESTÁ EVOLUINDO
              </h4>
            </div>

            {/* Orange Divider */}
            <div className="w-6 sm:w-10 h-0.5 sm:h-1 bg-[#E18B42] rounded-full mx-auto my-0.5" />

            {/* Subtitle */}
            <div className="text-center pb-0.5">
              <p className="text-[5.5px] sm:text-[8px] md:text-[9px] text-[#F3ECDF]/80 leading-tight line-clamp-2">
                Reconheça o progresso mesmo quando ainda não é visível
              </p>
            </div>
          </div>

          {/* ========================================================
              CARD 1 (CENTER - "COMO SAIR DO FUNDO DO POÇO") - FLAGSHIP
              ======================================================== */}
          <div className="w-[34%] max-w-[170px] aspect-[1/1.48] rounded-xl bg-[#0B343F] text-white p-2.5 sm:p-4 flex flex-col justify-between shadow-xl border border-white/20 ring-2 ring-[#E18B42]/40 relative -translate-y-2 sm:-translate-y-3.5 hover:shadow-2xl transition-transform duration-200 hover:-translate-y-4 z-20">
            {/* Top Brand */}
            <div className="text-center">
              <span className="text-[7px] sm:text-[10px] font-black tracking-widest text-[#E18B42] uppercase block">
                KIT RECOMEÇO
              </span>
            </div>

            {/* Orange Number 1 & Steps Icon */}
            <div className="flex flex-col items-center justify-center my-0.5">
              <span className="text-3xl sm:text-5xl md:text-6xl font-black text-[#E18B42] leading-none">
                1
              </span>
              <svg className="w-4 h-4 sm:w-6 sm:h-6 text-[#E18B42] mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20h4v-4h4v-4h4V8" />
                <path d="M16 4v4l4-2-4-2z" fill="#E18B42" />
              </svg>
            </div>

            {/* Title */}
            <div className="text-center my-0.5 px-0.5">
              <h3 className="text-[8.5px] sm:text-[12px] md:text-sm font-black text-white leading-tight uppercase tracking-tight">
                COMO SAIR DO FUNDO DO POÇO
              </h3>
            </div>

            {/* Orange Divider */}
            <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-[#E18B42] rounded-full mx-auto my-0.5 sm:my-1" />

            {/* Subtitle */}
            <div className="text-center pb-0.5">
              <p className="text-[6px] sm:text-[8.5px] md:text-[10px] text-[#F3ECDF]/90 leading-tight font-medium line-clamp-2">
                O passo a passo que usei pra recomeçar do zero
              </p>
            </div>
          </div>

          {/* ========================================================
              CARD 3 (RIGHT - "CHECKLIST DE 21 DIAS")
              ======================================================== */}
          <div className="w-[31%] max-w-[155px] aspect-[1/1.48] rounded-xl bg-[#0B343F] text-white p-2 sm:p-3.5 flex flex-col justify-between shadow-md border border-white/10 hover:shadow-lg transition-transform duration-200 hover:-translate-y-1">
            {/* Top Brand */}
            <div className="text-center">
              <span className="text-[6.5px] sm:text-[9px] font-bold tracking-widest text-[#F3ECDF]/70 uppercase block">
                KIT RECOMEÇO
              </span>
            </div>

            {/* Orange Number 3 & Checkbox Icon */}
            <div className="flex flex-col items-center justify-center my-0.5">
              <span className="text-2xl sm:text-4xl md:text-5xl font-black text-[#E18B42] leading-none">
                3
              </span>
              <div className="w-3.5 h-3.5 sm:w-5 sm:h-5 border-1.5 border-[#E18B42] rounded flex items-center justify-center mt-0.5 bg-[#0B343F]">
                <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#E18B42]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>

            {/* Title - Fully visible, never cut */}
            <div className="text-center my-0.5 px-0.5">
              <h4 className="text-[7.5px] sm:text-[11px] md:text-xs font-black text-white leading-tight uppercase tracking-tight">
                CHECKLIST DE 21 DIAS
              </h4>
            </div>

            {/* Orange Divider */}
            <div className="w-6 sm:w-10 h-0.5 sm:h-1 bg-[#E18B42] rounded-full mx-auto my-0.5" />

            {/* Subtitle */}
            <div className="text-center pb-0.5">
              <p className="text-[5.5px] sm:text-[8px] md:text-[9px] text-[#F3ECDF]/80 leading-tight line-clamp-2">
                Um passo por dia para recomeçar sem complicação
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Orange Brand Stripe */}
      <div className="w-full bg-[#E18B42] py-2 sm:py-2.5 px-4 text-center">
        <span className="text-xs sm:text-sm md:text-base font-black tracking-widest text-white uppercase drop-shadow-xs">
          KIT RECOMEÇO · 3 GUIAS PRÁTICOS
        </span>
      </div>
    </div>
  );
}
