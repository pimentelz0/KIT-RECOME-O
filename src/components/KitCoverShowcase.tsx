import React from 'react';

export function KitCoverShowcase() {
  return (
    <div className="w-full flex flex-col rounded-2xl overflow-hidden border border-[#E2E8F0] bg-[#F8FAFC] shadow-md select-none">
      {/* Studio Stage */}
      <div className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] px-2.5 sm:px-5 pt-8 sm:pt-10 pb-6 sm:pb-8">
        
        {/* Soft Petroleum Ambient Glow */}
        <div className="absolute w-80 h-40 bg-[#0B343F]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 3 Guide Covers in Clear Layout */}
        <div className="relative z-10 w-full flex items-end justify-center gap-1.5 sm:gap-3">
          
          {/* ========================================================
              CARD 2 (LEFT - "COMO PERCEBER QUE VOCÊ ESTÁ EVOLUINDO")
              ======================================================== */}
          <div className="w-[31%] max-w-[150px] aspect-[1/1.5] rounded-xl bg-gradient-to-b from-[#0B343F] to-[#07242C] text-white p-2 sm:p-3 flex flex-col justify-between shadow-lg border border-white/15 hover:border-white/30 transition-all duration-200 hover:-translate-y-1">
            {/* Top Brand */}
            <div className="text-center">
              <span className="text-[6.5px] sm:text-[8.5px] font-bold tracking-widest text-[#E2E8F0] uppercase block">
                KIT RECOMEÇO
              </span>
            </div>

            {/* White Number 2 & Chart Icon */}
            <div className="flex flex-col items-center justify-center my-0.5">
              <span className="text-2xl sm:text-4xl font-black text-white leading-none">
                2
              </span>
              <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white/90 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 19h16v2H4v-2zm3-4h2v3H7v-3zm4-4h2v7h-2v-7zm4-4h2v11h-2V7zm3-4l3 3h-2v2h-2V6h-2l3-3z"/>
              </svg>
            </div>

            {/* Title */}
            <div className="text-center my-0.5 px-0.5">
              <h4 className="text-[7.5px] sm:text-[10px] md:text-[11px] font-black text-white leading-tight uppercase tracking-tight">
                COMO PERCEBER QUE VOCÊ ESTÁ EVOLUINDO
              </h4>
            </div>

            {/* White Divider */}
            <div className="w-6 sm:w-8 h-0.5 bg-white/60 rounded-full mx-auto my-0.5" />

            {/* Subtitle */}
            <div className="text-center pb-0.5">
              <p className="text-[5.5px] sm:text-[7.5px] text-[#CBD5E1] leading-tight line-clamp-2">
                Reconheça o progresso mesmo quando ainda não é visível
              </p>
            </div>
          </div>

          {/* ========================================================
              CARD 1 (CENTER - "COMO SAIR DO FUNDO DO POÇO") - PRINCIPAL
              ======================================================== */}
          <div className="w-[34%] max-w-[165px] aspect-[1/1.5] rounded-xl bg-gradient-to-b from-[#0F172A] to-[#0B343F] text-white p-2.5 sm:p-3.5 flex flex-col justify-between shadow-2xl border-2 border-[#0B343F] ring-2 ring-[#0B343F]/25 relative -translate-y-2 sm:-translate-y-3.5 hover:shadow-[0_10px_25px_rgba(11,52,63,0.35)] transition-all duration-200 z-20">
            {/* Top Brand */}
            <div className="text-center">
              <span className="text-[7px] sm:text-[9.5px] font-black tracking-widest text-[#E2E8F0] uppercase block">
                PRODUTO PRINCIPAL
              </span>
            </div>

            {/* White Number 1 & Steps Icon */}
            <div className="flex flex-col items-center justify-center my-0.5">
              <span className="text-3xl sm:text-5xl font-black text-white leading-none drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]">
                1
              </span>
              <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20h4v-4h4v-4h4V8" />
                <path d="M16 4v4l4-2-4-2z" fill="#FFFFFF" />
              </svg>
            </div>

            {/* Title */}
            <div className="text-center my-0.5 px-0.5">
              <h3 className="text-[8.5px] sm:text-[11.5px] md:text-xs font-black text-white leading-tight uppercase tracking-tight">
                COMO SAIR DO FUNDO DO POÇO
              </h3>
            </div>

            {/* Divider */}
            <div className="w-8 sm:w-10 h-0.5 bg-white rounded-full mx-auto my-0.5" />

            {/* Subtitle */}
            <div className="text-center pb-0.5">
              <p className="text-[6px] sm:text-[8px] text-[#F1F5F9] leading-tight font-medium line-clamp-2">
                O passo a passo que usei pra recomeçar do zero
              </p>
            </div>
          </div>

          {/* ========================================================
              CARD 3 (RIGHT - "CHECKLIST DE 21 DIAS")
              ======================================================== */}
          <div className="w-[31%] max-w-[150px] aspect-[1/1.5] rounded-xl bg-gradient-to-b from-[#0B343F] to-[#07242C] text-white p-2 sm:p-3 flex flex-col justify-between shadow-lg border border-white/15 hover:border-white/30 transition-all duration-200 hover:-translate-y-1">
            {/* Top Brand */}
            <div className="text-center">
              <span className="text-[6.5px] sm:text-[8.5px] font-bold tracking-widest text-[#E2E8F0] uppercase block">
                KIT RECOMEÇO
              </span>
            </div>

            {/* White Number 3 & Checkbox Icon */}
            <div className="flex flex-col items-center justify-center my-0.5">
              <span className="text-2xl sm:text-4xl font-black text-white leading-none">
                3
              </span>
              <div className="w-3.5 h-3.5 sm:w-5 sm:h-5 border-1.5 border-white rounded flex items-center justify-center mt-0.5 bg-white/10">
                <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <div className="text-center my-0.5 px-0.5">
              <h4 className="text-[7.5px] sm:text-[10px] md:text-[11px] font-black text-white leading-tight uppercase tracking-tight">
                CHECKLIST DE 21 DIAS
              </h4>
            </div>

            {/* Divider */}
            <div className="w-6 sm:w-8 h-0.5 bg-white/60 rounded-full mx-auto my-0.5" />

            {/* Subtitle */}
            <div className="text-center pb-0.5">
              <p className="text-[5.5px] sm:text-[7.5px] text-[#CBD5E1] leading-tight line-clamp-2">
                Um passo por dia para recomeçar sem complicação
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Brand Stripe em Verde Petróleo */}
      <div className="w-full bg-[#0B343F] py-2 px-4 text-center flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        <span className="text-[11px] sm:text-xs font-black tracking-widest text-white uppercase">
          KIT RECOMEÇO · ACESSO DIGITAL IMEDIATO
        </span>
      </div>
    </div>
  );
}
