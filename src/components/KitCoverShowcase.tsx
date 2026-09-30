import React from 'react';

export function KitCoverShowcase() {
  return (
    <div className="w-full max-w-[480px] mx-auto flex flex-col rounded-2xl overflow-hidden border border-[#CBD5E1] bg-white shadow-lg select-none">
      {/* Studio Stage */}
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] p-3 sm:p-5">
        
        {/* Soft Petroleum Ambient Glow */}
        <div className="absolute inset-0 bg-[#0B343F]/5 blur-2xl pointer-events-none" />

        {/* 3 Guide Covers in a 100% Perfectly Leveled Grid */}
        <div className="relative z-10 w-full grid grid-cols-3 gap-2 sm:gap-3 items-stretch">
          
          {/* ========================================================
              CARD 1: PRODUTO PRINCIPAL ("COMO SAIR DO FUNDO DO POÇO")
              ======================================================== */}
          <div className="h-full flex flex-col justify-between rounded-xl bg-gradient-to-b from-[#0F172A] via-[#0B343F] to-[#07242C] text-white p-2 sm:p-3 shadow-md border-2 border-[#0B343F] ring-2 ring-[#0B343F]/25 hover:border-white/40 transition-all duration-200">
            {/* Top Tag */}
            <div className="h-5 flex items-center justify-center">
              <span className="bg-[#0B343F] border border-white/20 px-1.5 py-0.5 rounded text-[6.5px] sm:text-[7.5px] font-black tracking-wider text-white uppercase text-center">
                PRINCIPAL
              </span>
            </div>

            {/* Big Number 1 & Icon */}
            <div className="h-14 sm:h-16 flex flex-col items-center justify-center my-0.5">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-none">
                1
              </span>
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20h4v-4h4v-4h4V8" />
                <path d="M16 4v4l4-2-4-2z" fill="#FFFFFF" />
              </svg>
            </div>

            {/* Title */}
            <div className="h-11 sm:h-13 flex items-center justify-center text-center px-0.5">
              <h3 className="text-[7.5px] sm:text-[9.5px] md:text-[10px] font-black text-white leading-snug uppercase tracking-tight line-clamp-3">
                COMO SAIR DO FUNDO DO POÇO
              </h3>
            </div>

            {/* Divider */}
            <div className="w-6 sm:w-8 h-0.5 bg-white/70 rounded-full mx-auto my-1 shrink-0" />

            {/* Subtitle */}
            <div className="h-9 sm:h-10 flex items-center justify-center text-center">
              <p className="text-[6px] sm:text-[7.5px] text-[#E2E8F0] leading-tight font-medium line-clamp-2">
                O passo a passo para recomeçar do zero
              </p>
            </div>
          </div>

          {/* ========================================================
              CARD 2: GUIA COMPLEMENTAR ("COMO PERCEBER QUE VOCÊ ESTÁ EVOLUINDO")
              ======================================================== */}
          <div className="h-full flex flex-col justify-between rounded-xl bg-gradient-to-b from-[#0B343F] to-[#07242C] text-white p-2 sm:p-3 shadow-md border border-white/15 hover:border-white/30 transition-all duration-200">
            {/* Top Tag */}
            <div className="h-5 flex items-center justify-center">
              <span className="text-[6.5px] sm:text-[7.5px] font-bold tracking-widest text-[#E2E8F0] uppercase text-center">
                GUIA 2
              </span>
            </div>

            {/* Big Number 2 & Chart Icon */}
            <div className="h-14 sm:h-16 flex flex-col items-center justify-center my-0.5">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-none">
                2
              </span>
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90 mt-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 19h16v2H4v-2zm3-4h2v3H7v-3zm4-4h2v7h-2v-7zm4-4h2v11h-2V7zm3-4l3 3h-2v2h-2V6h-2l3-3z"/>
              </svg>
            </div>

            {/* Title */}
            <div className="h-11 sm:h-13 flex items-center justify-center text-center px-0.5">
              <h4 className="text-[7.5px] sm:text-[9.5px] md:text-[10px] font-black text-white leading-snug uppercase tracking-tight line-clamp-3">
                COMO PERCEBER SUA EVOLUÇÃO
              </h4>
            </div>

            {/* Divider */}
            <div className="w-6 sm:w-8 h-0.5 bg-white/50 rounded-full mx-auto my-1 shrink-0" />

            {/* Subtitle */}
            <div className="h-9 sm:h-10 flex items-center justify-center text-center">
              <p className="text-[6px] sm:text-[7.5px] text-[#CBD5E1] leading-tight line-clamp-2">
                Reconheça o progresso mesmo nos dias difíceis
              </p>
            </div>
          </div>

          {/* ========================================================
              CARD 3: PLANO DE AÇÃO ("CHECKLIST DE 21 DIAS")
              ======================================================== */}
          <div className="h-full flex flex-col justify-between rounded-xl bg-gradient-to-b from-[#0B343F] to-[#07242C] text-white p-2 sm:p-3 shadow-md border border-white/15 hover:border-white/30 transition-all duration-200">
            {/* Top Tag */}
            <div className="h-5 flex items-center justify-center">
              <span className="text-[6.5px] sm:text-[7.5px] font-bold tracking-widest text-[#E2E8F0] uppercase text-center">
                GUIA 3
              </span>
            </div>

            {/* Big Number 3 & Checkbox Icon */}
            <div className="h-14 sm:h-16 flex flex-col items-center justify-center my-0.5">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-none">
                3
              </span>
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-1.5 border-white rounded flex items-center justify-center mt-1 bg-white/10">
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <div className="h-11 sm:h-13 flex items-center justify-center text-center px-0.5">
              <h4 className="text-[7.5px] sm:text-[9.5px] md:text-[10px] font-black text-white leading-snug uppercase tracking-tight line-clamp-3">
                CHECKLIST DE 21 DIAS
              </h4>
            </div>

            {/* Divider */}
            <div className="w-6 sm:w-8 h-0.5 bg-white/50 rounded-full mx-auto my-1 shrink-0" />

            {/* Subtitle */}
            <div className="h-9 sm:h-10 flex items-center justify-center text-center">
              <p className="text-[6px] sm:text-[7.5px] text-[#CBD5E1] leading-tight line-clamp-2">
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
