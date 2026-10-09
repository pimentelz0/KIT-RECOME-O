import React from 'react';

export function KitCoverShowcase() {
  return (
    <div className="w-full max-w-[490px] mx-auto flex flex-col rounded-2xl overflow-hidden border border-[#CBD5E1] bg-white shadow-xl select-none">
      
      {/* Studio Stage */}
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] p-3.5 sm:p-5">
        
        {/* Soft Ambient Radial Light */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/70 via-transparent to-transparent pointer-events-none" />

        {/* Top Header Badge */}
        <div className="relative z-10 flex items-center justify-center gap-1.5 mb-3 sm:mb-4">
          <span className="inline-flex items-center gap-1 bg-[#0B343F]/10 border border-[#0B343F]/20 text-[#0B343F] text-[9.5px] sm:text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0B343F] animate-pulse" />
            3 LIVROS DIGITAIS INCLUSOS NO PACOTE
          </span>
        </div>

        {/* 3 Realistic 3D Hardcover E-books in Leveled Grid */}
        <div className="relative z-10 w-full grid grid-cols-3 gap-2 sm:gap-3.5 items-stretch pt-1 pb-2">
          
          {/* ========================================================
              LIVRO 1: PRODUTO PRINCIPAL ("COMO SAIR DO FUNDO DO POÇO")
              ======================================================== */}
          <div className="group relative h-full flex flex-col justify-between rounded-r-xl rounded-l-xs bg-gradient-to-br from-[#0F172A] via-[#0B343F] to-[#07242C] text-white p-2 sm:p-3 border-r-4 border-r-slate-200 border-b-2 border-b-slate-300 shadow-[4px_8px_18px_rgba(11,52,63,0.35)] ring-2 ring-[#0B343F]/30 hover:-translate-y-1 transition-all duration-200 overflow-hidden">
            
            {/* 3D Book Spine (Left Edge Depth) */}
            <div className="w-2.5 sm:w-3.5 absolute left-0 inset-y-0 bg-gradient-to-r from-black/60 via-white/15 to-black/25 z-20 pointer-events-none shadow-inner" />
            <div className="w-px absolute left-2.5 sm:left-3.5 inset-y-0 bg-white/20 z-20 pointer-events-none" />

            {/* Glossy Specular Light Sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-10" />

            {/* Inner Decorative Book Border */}
            <div className="absolute inset-1.5 border border-white/20 rounded-r-lg pointer-events-none z-10" />

            {/* Top Foil Tag */}
            <div className="relative z-20 h-5 flex items-center justify-center pl-1 sm:pl-2">
              <span className="bg-amber-400/90 text-slate-950 font-black text-[6.5px] sm:text-[7.5px] tracking-wider uppercase px-1.5 py-0.5 rounded shadow-xs">
                ★ PRINCIPAL
              </span>
            </div>

            {/* Embossed Number 1 & Icon */}
            <div className="relative z-20 h-14 sm:h-16 flex flex-col items-center justify-center my-0.5 pl-1 sm:pl-2">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/30 flex flex-col items-center justify-center shadow-inner">
                <span className="text-xl sm:text-2xl font-black text-white leading-none">
                  1
                </span>
                <svg className="w-3 h-3 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 20h4v-4h4v-4h4V8" />
                  <path d="M16 4v4l4-2-4-2z" fill="#FCD34D" />
                </svg>
              </div>
            </div>

            {/* Book Title */}
            <div className="relative z-20 h-11 sm:h-13 flex items-center justify-center text-center px-1 pl-2 sm:pl-3">
              <h3 className="text-[7.5px] sm:text-[9.5px] md:text-[10px] font-black text-white leading-snug uppercase tracking-tight line-clamp-3 drop-shadow-sm">
                COMO SAIR DO FUNDO DO POÇO
              </h3>
            </div>

            {/* Gold/White Divider */}
            <div className="relative z-20 w-7 sm:w-9 h-0.5 bg-gradient-to-r from-transparent via-amber-300 to-transparent rounded-full mx-auto my-1 shrink-0" />

            {/* Book Subtitle & Author Tag */}
            <div className="relative z-20 h-9 sm:h-10 flex flex-col items-center justify-center text-center pl-1 sm:pl-2">
              <p className="text-[6px] sm:text-[7.5px] text-[#E2E8F0] leading-tight font-medium line-clamp-2">
                O passo a passo para recomeçar do zero
              </p>
              <span className="text-[5px] sm:text-[6px] font-bold tracking-widest text-white/50 uppercase mt-0.5">
                LIVRO DIGITAL
              </span>
            </div>
          </div>

          {/* ========================================================
              LIVRO 2: GUIA COMPLEMENTAR ("COMO PERCEBER SUA EVOLUÇÃO")
              ======================================================== */}
          <div className="group relative h-full flex flex-col justify-between rounded-r-xl rounded-l-xs bg-gradient-to-br from-[#0B343F] via-[#092B34] to-[#07242C] text-white p-2 sm:p-3 border-r-4 border-r-slate-200 border-b-2 border-b-slate-300 shadow-[3px_6px_14px_rgba(11,52,63,0.25)] border-t border-t-white/15 hover:-translate-y-1 transition-all duration-200 overflow-hidden">
            
            {/* 3D Book Spine */}
            <div className="w-2.5 sm:w-3.5 absolute left-0 inset-y-0 bg-gradient-to-r from-black/60 via-white/10 to-black/25 z-20 pointer-events-none shadow-inner" />
            <div className="w-px absolute left-2.5 sm:left-3.5 inset-y-0 bg-white/15 z-20 pointer-events-none" />

            {/* Glossy Sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-10" />

            {/* Inner Border */}
            <div className="absolute inset-1.5 border border-white/15 rounded-r-lg pointer-events-none z-10" />

            {/* Top Foil Tag */}
            <div className="relative z-20 h-5 flex items-center justify-center pl-1 sm:pl-2">
              <span className="bg-white/15 text-white font-bold text-[6.5px] sm:text-[7.5px] tracking-wider uppercase px-1.5 py-0.5 rounded border border-white/20">
                GUIA 2
              </span>
            </div>

            {/* Embossed Number 2 & Chart Icon */}
            <div className="relative z-20 h-14 sm:h-16 flex flex-col items-center justify-center my-0.5 pl-1 sm:pl-2">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/20 flex flex-col items-center justify-center shadow-inner">
                <span className="text-xl sm:text-2xl font-black text-white leading-none">
                  2
                </span>
                <svg className="w-3 h-3 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 19h16v2H4v-2zm3-4h2v3H7v-3zm4-4h2v7h-2v-7zm4-4h2v11h-2V7zm3-4l3 3h-2v2h-2V6h-2l3-3z"/>
                </svg>
              </div>
            </div>

            {/* Book Title */}
            <div className="relative z-20 h-11 sm:h-13 flex items-center justify-center text-center px-1 pl-2 sm:pl-3">
              <h4 className="text-[7.5px] sm:text-[9.5px] md:text-[10px] font-black text-white leading-snug uppercase tracking-tight line-clamp-3 drop-shadow-sm">
                COMO PERCEBER SUA EVOLUÇÃO
              </h4>
            </div>

            {/* Divider */}
            <div className="relative z-20 w-7 sm:w-9 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full mx-auto my-1 shrink-0" />

            {/* Book Subtitle */}
            <div className="relative z-20 h-9 sm:h-10 flex flex-col items-center justify-center text-center pl-1 sm:pl-2">
              <p className="text-[6px] sm:text-[7.5px] text-[#CBD5E1] leading-tight font-medium line-clamp-2">
                Reconheça o progresso mesmo nos dias difíceis
              </p>
              <span className="text-[5px] sm:text-[6px] font-bold tracking-widest text-white/50 uppercase mt-0.5">
                GUIA PRÁTICO
              </span>
            </div>
          </div>

          {/* ========================================================
              LIVRO 3: PLANO DE AÇÃO ("CHECKLIST DE 21 DIAS")
              ======================================================== */}
          <div className="group relative h-full flex flex-col justify-between rounded-r-xl rounded-l-xs bg-gradient-to-br from-[#0B343F] via-[#092B34] to-[#07242C] text-white p-2 sm:p-3 border-r-4 border-r-slate-200 border-b-2 border-b-slate-300 shadow-[3px_6px_14px_rgba(11,52,63,0.25)] border-t border-t-white/15 hover:-translate-y-1 transition-all duration-200 overflow-hidden">
            
            {/* 3D Book Spine */}
            <div className="w-2.5 sm:w-3.5 absolute left-0 inset-y-0 bg-gradient-to-r from-black/60 via-white/10 to-black/25 z-20 pointer-events-none shadow-inner" />
            <div className="w-px absolute left-2.5 sm:left-3.5 inset-y-0 bg-white/15 z-20 pointer-events-none" />

            {/* Glossy Sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-10" />

            {/* Inner Border */}
            <div className="absolute inset-1.5 border border-white/15 rounded-r-lg pointer-events-none z-10" />

            {/* Top Foil Tag */}
            <div className="relative z-20 h-5 flex items-center justify-center pl-1 sm:pl-2">
              <span className="bg-white/15 text-white font-bold text-[6.5px] sm:text-[7.5px] tracking-wider uppercase px-1.5 py-0.5 rounded border border-white/20">
                GUIA 3
              </span>
            </div>

            {/* Embossed Number 3 & Checkbox Icon */}
            <div className="relative z-20 h-14 sm:h-16 flex flex-col items-center justify-center my-0.5 pl-1 sm:pl-2">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/20 flex flex-col items-center justify-center shadow-inner">
                <span className="text-xl sm:text-2xl font-black text-white leading-none">
                  3
                </span>
                <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>

            {/* Book Title */}
            <div className="relative z-20 h-11 sm:h-13 flex items-center justify-center text-center px-1 pl-2 sm:pl-3">
              <h4 className="text-[7.5px] sm:text-[9.5px] md:text-[10px] font-black text-white leading-snug uppercase tracking-tight line-clamp-3 drop-shadow-sm">
                CHECKLIST DE 21 DIAS
              </h4>
            </div>

            {/* Divider */}
            <div className="relative z-20 w-7 sm:w-9 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full mx-auto my-1 shrink-0" />

            {/* Book Subtitle */}
            <div className="relative z-20 h-9 sm:h-10 flex flex-col items-center justify-center text-center pl-1 sm:pl-2">
              <p className="text-[6px] sm:text-[7.5px] text-[#CBD5E1] leading-tight font-medium line-clamp-2">
                Um passo por dia para recomeçar sem complicação
              </p>
              <span className="text-[5px] sm:text-[6px] font-bold tracking-widest text-white/50 uppercase mt-0.5">
                PLANO DE AÇÃO
              </span>
            </div>
          </div>

        </div>

        {/* Device Badges Strip */}
        <div className="relative z-10 flex items-center justify-center flex-wrap gap-2 pt-2 text-[10px] text-[#475569] font-medium">
          <span className="inline-flex items-center gap-1 bg-white/80 border border-[#CBD5E1] px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] text-[#1E293B]">
            📱 Celular
          </span>
          <span className="inline-flex items-center gap-1 bg-white/80 border border-[#CBD5E1] px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] text-[#1E293B]">
            💻 Tablet & PC
          </span>
          <span className="inline-flex items-center gap-1 bg-white/80 border border-[#CBD5E1] px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] text-[#1E293B]">
            📖 PDF de Alta Definição
          </span>
        </div>
      </div>

      {/* Bottom Brand Stripe em Verde Petróleo */}
      <div className="w-full bg-[#0B343F] py-2 px-4 text-center flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[11px] sm:text-xs font-black tracking-widest text-white uppercase">
          KIT RECOMEÇO · ACESSO DIGITAL IMEDIATO
        </span>
      </div>
    </div>
  );
}
