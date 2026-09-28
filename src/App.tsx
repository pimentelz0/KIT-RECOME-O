import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Lock, 
  Clock, 
  BookOpen, 
  CreditCard,
  ChevronDown
} from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { KitCoverShowcase } from './components/KitCoverShowcase';

const KIT_ITEMS = [
  {
    num: 1,
    title: 'Como Sair do Fundo do Poço',
    desc: 'O passo a passo que o Paulo usou pra recomeçar do zero.',
  },
  {
    num: 2,
    title: 'Como Perceber Que Você Está Evoluindo',
    desc: 'Como reconhecer o seu progresso, mesmo quando a balança e o espelho ainda não mostram.',
  },
  {
    num: 3,
    title: 'Checklist de 21 Dias',
    desc: 'Um passo por dia para recomeçar, sem pressão e sem complicação.',
  },
];

const CHECKOUT_URL = 'https://pay.kiwify.com.br/N6TEoxs';

export default function App() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  const offerRef = useRef<HTMLDivElement>(null);

  // Scroll detection for sticky header elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 24-hour countdown timer with persistence
  useEffect(() => {
    const STORAGE_KEY = 'kit_recomeco_countdown_target';
    const TWENTY_FOUR_HOURS_MS = 24 * 60 * 60 * 1000;

    const getStoredTarget = (): number => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const target = parseInt(stored, 10);
          if (!isNaN(target) && target > Date.now()) {
            return target;
          }
        }
      } catch {
        // Ignore localStorage error
      }
      const newTarget = Date.now() + TWENTY_FOUR_HOURS_MS;
      try {
        localStorage.setItem(STORAGE_KEY, newTarget.toString());
      } catch {
        // Ignore localStorage error
      }
      return newTarget;
    };

    let targetTime = getStoredTarget();

    const interval = setInterval(() => {
      const now = Date.now();
      let diff = targetTime - now;

      if (diff <= 0) {
        targetTime = Date.now() + TWENTY_FOUR_HOURS_MS;
        try {
          localStorage.setItem(STORAGE_KEY, targetTime.toString());
        } catch {
          // Ignore
        }
        diff = TWENTY_FOUR_HOURS_MS;
      }

      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToOffer = () => {
    offerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="min-h-screen bg-[#F3ECDF] text-[#0B343F] font-sans antialiased selection:bg-[#E18B42] selection:text-white flex flex-col">
      
      {/* Top Value Banner */}
      <div className="w-full bg-[#0B343F] text-[#F3ECDF] text-xs py-1.5 px-4 border-b border-[#0B343F]/20 flex items-center justify-center text-center font-medium whitespace-nowrap">
        <span>Acesso imediato · <strong>Apenas R$ 9,90</strong></span>
      </div>

      {/* Header Sticky */}
      <header 
        className={`w-full sticky top-0 z-50 bg-[#F3ECDF]/95 backdrop-blur-md transition-all duration-200 py-2.5 sm:py-3.5 px-4 sm:px-6 lg:px-8 ${
          isScrolled 
            ? 'shadow-[0_4px_24px_rgba(11,52,63,0.08)] border-b border-[#0B343F]/12' 
            : 'border-b border-[#0B343F]/8'
        }`}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 select-none">
            <div className="w-8 h-8 rounded-xl bg-[#0B343F] text-[#E18B42] flex items-center justify-center shadow-xs">
              <BookOpen className="w-4 h-4 text-[#E18B42]" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-black text-base sm:text-lg tracking-tight text-[#0B343F] leading-none">
                KIT RECOMEÇO
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#0B343F]/65 hidden xs:inline leading-tight mt-0.5">
                Método Prático de Recomeço
              </span>
            </div>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E18B42] hover:bg-[#d07a33] active:scale-95 transition-all duration-150 text-white text-xs font-bold py-1.5 px-3.5 sm:px-4 rounded-xl shadow-xs cursor-pointer no-underline inline-flex items-center justify-center"
          >
            Quero o meu
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-12 flex flex-col gap-8 sm:gap-12 flex-1">
        
        {/* ========================================================
            1. HERO SECTION
            ======================================================== */}
        <section className="w-full bg-gradient-to-b from-[#0B343F] via-[#0B343F] to-[#082831] text-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-lg border border-[#0B343F] relative overflow-hidden text-center">
          {/* Ambient glow effects */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#E18B42]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#E18B42]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-white leading-[1.14] mb-4 tracking-tight text-balance">
              Você tá cansado de se sentir travado?
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#F3ECDF]/90 font-normal leading-relaxed mb-8 max-w-xl text-balance">
              O passo a passo simples e direto que o Paulo usou pra sair do zero, destravar a rotina e começar a reconstruir a própria vida.
            </p>

            <button
              onClick={scrollToOffer}
              type="button"
              className="w-full sm:w-auto min-w-[280px] bg-[#E18B42] hover:bg-[#d07a33] active:scale-[0.98] transition-all text-white font-extrabold text-base sm:text-lg py-4 sm:py-4.5 px-8 rounded-2xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer touch-manipulation group"
            >
              <span>Quero meu Kit Recomeço</span>
              <ChevronDown className="w-5 h-5 shrink-0 transition-transform group-hover:translate-y-0.5" />
            </button>

            {/* Prova Social */}
            <p className="text-xs sm:text-sm text-[#F3ECDF]/75 mt-4 font-normal tracking-wide">
              A história que já alcançou mais de 700 mil pessoas no TikTok.
            </p>
          </div>
        </section>

        {/* ========================================================
            2. OFERTA LOGO EM SEGUIDA
            ======================================================== */}
        <section 
          ref={offerRef}
          id="oferta"
          aria-label="Oferta Kit Recomeço"
          className="w-full bg-white border border-[#0B343F]/15 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm flex flex-col gap-8 scroll-mt-20"
        >
          {/* Cabeçalho da Oferta */}
          <div className="flex flex-col gap-2 text-center max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E18B42]">
              Acesso Imediato
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B343F] tracking-tight">
              Kit Recomeço
            </h2>
            <p className="text-sm sm:text-base text-[#0B343F]/80">
              O caminho prático para destravar sua rotina sem complicação.
            </p>
          </div>

          {/* Grid de Conteúdo da Oferta */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Coluna Esquerda: Showcase Visual e Lista dos 3 Itens */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Visual das Capas do Kit */}
              <KitCoverShowcase />

              {/* Os 3 Itens do Kit */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B343F]/60 mb-0.5">
                  O que você recebe no kit:
                </h3>

                {KIT_ITEMS.map((item) => (
                  <div 
                    key={item.num}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F3ECDF]/40 border border-[#0B343F]/10 hover:border-[#0B343F]/25 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#0B343F] text-[#E18B42] font-black text-sm flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      {item.num}
                    </div>

                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="text-sm sm:text-base font-bold text-[#0B343F] leading-snug">
                        {item.title}
                      </span>
                      <p className="text-xs sm:text-sm text-[#0B343F]/75 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna Direita: Preço, Cronômetro, Botão de Compra, Pagamentos e Segurança */}
            <div className="lg:col-span-5 flex flex-col gap-4 lg:sticky lg:top-24">
              
              {/* Card de Preço */}
              <div className="bg-[#0B343F] text-white rounded-2xl p-6 sm:p-7 text-center flex flex-col gap-2 relative overflow-hidden shadow-md">
                <span className="inline-block self-center px-3 py-1 rounded-full bg-[#E18B42]/20 text-[#E18B42] text-xs font-bold uppercase tracking-wider">
                  Condição Especial
                </span>

                <p className="text-sm sm:text-base font-medium text-[#F3ECDF]">
                  Tudo isso por apenas:
                </p>

                <div className="flex items-baseline justify-center gap-1.5 my-1">
                  <span className="text-4xl sm:text-5xl font-black text-[#E18B42] tracking-tight font-mono tabular-nums">
                    R$ 9,90
                  </span>
                </div>

                <p className="text-[11px] text-[#F3ECDF]/70">
                  pagamento único · sem mensalidades
                </p>
              </div>

              {/* Cronômetro Regressivo */}
              <div className="flex flex-col items-center justify-center gap-2 bg-[#F3ECDF]/60 border border-[#0B343F]/10 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0B343F]">
                  <Clock className="w-4 h-4 text-[#E18B42]" />
                  <span>Oferta por tempo limitado</span>
                </div>

                {/* Display do Countdown */}
                <div className="flex items-center gap-2 font-mono tabular-nums text-base sm:text-lg font-extrabold text-[#0B343F]">
                  <div className="bg-white border border-[#0B343F]/15 px-3 py-1.5 rounded-xl min-w-11 text-center shadow-xs">
                    {pad(timeLeft.hours)}h
                  </div>
                  <span className="text-[#0B343F]/40 font-normal">:</span>
                  <div className="bg-white border border-[#0B343F]/15 px-3 py-1.5 rounded-xl min-w-11 text-center shadow-xs">
                    {pad(timeLeft.minutes)}m
                  </div>
                  <span className="text-[#0B343F]/40 font-normal">:</span>
                  <div className="bg-white border border-[#0B343F]/15 px-3 py-1.5 rounded-xl min-w-11 text-center text-[#E18B42] shadow-xs">
                    {pad(timeLeft.seconds)}s
                  </div>
                </div>
              </div>

              {/* Botão de Compra Principal */}
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#E18B42] hover:bg-[#d07a33] active:scale-[0.98] transition-all text-white font-extrabold text-base sm:text-lg py-4 sm:py-5 px-6 rounded-2xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-center cursor-pointer touch-manipulation no-underline"
              >
                <span>Quero meu Kit Recomeço agora</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>

              {/* Ícones de Formas de Pagamento: Pix e Cartão de Crédito */}
              <div className="flex items-center justify-center gap-3.5 text-[#0B343F] text-xs font-semibold pt-1">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.5L3.5 11l8.5 8.5 8.5-8.5L12 2.5z"/>
                    <path d="M12 7.5L7.5 12l4.5 4.5 4.5-4.5L12 7.5z"/>
                  </svg>
                  <span>Pix</span>
                </div>
                <span className="text-[#0B343F]/30 select-none" aria-hidden="true">·</span>
                <div className="flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 shrink-0" />
                  <span>Cartão de Crédito</span>
                </div>
              </div>

              {/* Selo de Confiança */}
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#0B343F]/85 text-center px-2 pt-1">
                <Lock className="w-4 h-4 text-[#0B343F] shrink-0" />
                <span>Compra 100% segura, acesso imediato após confirmação.</span>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================
            3. RODAPÉ
            ======================================================== */}
        <footer className="w-full text-center py-6 px-4 border-t border-[#0B343F]/10 mt-2">
          <p className="text-xs sm:text-sm text-[#0B343F]/65 leading-relaxed max-w-lg mx-auto">
            Kit Recomeço © 2026. Este produto não substitui acompanhamento médico ou nutricional profissional.
          </p>
        </footer>

      </main>

      <Analytics />
    </div>
  );
}
