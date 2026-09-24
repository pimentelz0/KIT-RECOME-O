import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Clock, 
  Sparkles, 
  TrendingUp, 
  CheckSquare, 
  ChevronDown,
  BookOpen,
  Zap
} from 'lucide-react';
import { KitCoverShowcase } from './components/KitCoverShowcase';

interface Question {
  id: number;
  title: string;
  options: string[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    title: 'Como está sua energia na maioria dos dias?',
    options: [
      'Ótima',
      'Cansado(a) na maior parte do tempo',
      'Não lembro a última vez que me senti bem',
    ],
  },
  {
    id: 2,
    title: 'Você já tentou mudar de hábito antes e não conseguiu manter?',
    options: [
      'Sim, várias vezes',
      'Só uma vez',
      'Nunca tentei',
    ],
  },
  {
    id: 3,
    title: 'O que mais te impede de começar hoje?',
    options: [
      'Falta de tempo',
      'Não sei por onde começar',
      'Já tentei de tudo e nada funcionou',
    ],
  },
];

// 3 itens principais que compõem o Kit Recomeço
const OFFER_ITEMS = [
  {
    num: 1,
    title: 'Como Sair do Fundo do Poço',
    desc: 'O passo a passo que usei pra recomeçar do zero.',
    icon: TrendingUp,
    isBonus: false,
  },
  {
    num: 2,
    title: 'Como Perceber Que Você Está Evoluindo',
    desc: 'Como reconhecer o seu progresso, mesmo quando a balança e o espelho ainda não mostram.',
    icon: Sparkles,
    isBonus: false,
  },
  {
    num: 3,
    title: 'Checklist de 21 Dias',
    desc: 'Um passo por dia para recomeçar, sem pressão e sem complicação.',
    icon: CheckSquare,
    isBonus: false,
  },
];

const CHECKOUT_URL = 'https://pay.kiwify.com.br/N6TEoxs';

export default function App() {
  const [currentStep, setCurrentStep] = useState<number>(0); // 0 = not started, 1, 2, 3 = quiz questions, 4 = analyzing, 5 = completed
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedInStep, setSelectedInStep] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // 24-hour countdown timer
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const quizRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const offerRef = useRef<HTMLDivElement>(null);

  // Scroll detection for sticky header shadow elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize or resume countdown timer with 24 hours persistence
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
        // Reset timer as requested ("reinicia ao expirar")
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

  const handleStartQuiz = () => {
    setCurrentStep(1);
    setTimeout(() => {
      quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  const handleOptionSelect = (questionId: number, option: string) => {
    setSelectedInStep(option);
    setAnswers((prev) => ({ ...prev, [questionId]: option }));

    // Quiz advances automatically without separate "next" button
    setTimeout(() => {
      setSelectedInStep(null);
      if (questionId < 3) {
        setCurrentStep(questionId + 1);
      } else {
        // Step 3 answered: show quick diagnostic pulse and display result
        setCurrentStep(4); // analyzing
        setTimeout(() => {
          setCurrentStep(5); // finished quiz
          setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 120);
        }, 750);
      }
    }, 280);
  };

  const scrollToOffer = () => {
    offerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const pad = (n: number) => n.toString().padStart(2, '0');

  const questionIndex = Math.min(Math.max(currentStep - 1, 0), 2);
  const activeQuestion = QUESTIONS[questionIndex];
  
  // Sincronização exata: 0% = barra vazia; perguntas 1, 2 e 3 = 33%, 66%, 100%
  const getProgressPercent = (step: number) => {
    switch (step) {
      case 0:
        return 0;
      case 1:
        return 33;
      case 2:
        return 66;
      case 3:
      case 4:
      case 5:
      default:
        return 100;
    }
  };
  const progressPercent = getProgressPercent(currentStep);

  // Parágrafo dinâmico do resultado com base na Pergunta 3
  const getDiagnosticDynamicText = () => {
    const answer3 = answers[3];
    if (answer3 === 'Falta de tempo') {
      return 'Seu problema não é falta de vontade, é falta de tempo organizado — e isso dá pra resolver.';
    }
    if (answer3 === 'Não sei por onde começar') {
      return 'Seu problema não é falta de vontade, é falta de direção — e isso dá pra resolver.';
    }
    if (answer3 === 'Já tentei de tudo e nada funcionou') {
      return 'Seu problema não é falta de vontade, é o método errado até agora — e isso dá pra resolver.';
    }
    return null;
  };
  const dynamicDiagnosis = getDiagnosticDynamicText();

  return (
    <div className="min-h-screen bg-[#F3ECDF] text-[#0B343F] font-sans antialiased selection:bg-[#E18B42] selection:text-white flex flex-col">
      
      {/* Top Value Banner: dá vida, credibilidade e elimina a sensação de vazio no topo */}
      <div className="w-full bg-[#0B343F] text-[#F3ECDF] text-[11px] sm:text-xs py-1.5 px-4 border-b border-[#0B343F]/20 flex items-center justify-center gap-2 sm:gap-3 text-center font-medium">
        <span>Método Prático em 3 Passos · Acesso Imediato no seu E-mail · <strong>Apenas R$ 9,90</strong></span>
      </div>

      {/* Header Sticky Enriquecido e Equilibrado */}
      <header 
        className={`w-full sticky top-0 z-50 bg-[#F3ECDF]/95 backdrop-blur-md transition-all duration-200 py-2.5 sm:py-3.5 px-4 sm:px-6 lg:px-8 ${
          isScrolled 
            ? 'shadow-[0_4px_24px_rgba(11,52,63,0.10)] border-b border-[#0B343F]/12' 
            : 'border-b border-[#0B343F]/8'
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          {/* Brand Logo Lockup: ícone refinado + tipografia de peso limpa sem pingos */}
          <div className="flex items-center gap-2.5 sm:gap-3 group select-none">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#0B343F] text-[#E18B42] flex items-center justify-center shadow-xs border border-white/15 transition-transform group-hover:scale-105">
              <BookOpen className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#E18B42]" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center">
                <span className="font-black text-base sm:text-lg tracking-tight text-[#0B343F] leading-none">
                  KIT RECOMEÇO
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#0B343F]/65 hidden xs:inline leading-tight mt-0.5">
                Método Prático de Transformação
              </span>
            </div>
          </div>

          {/* Botão de Ação Imediata: discreto, curto e elegante */}
          <div className="flex items-center">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E18B42] hover:bg-[#d07a33] active:scale-95 transition-all duration-150 text-white text-xs font-bold py-1.5 px-3.5 sm:px-4 rounded-xl shadow-xs cursor-pointer no-underline inline-flex items-center justify-center"
            >
              Quero o meu
            </a>
          </div>
        </div>
      </header>

      {/* Main Responsive Wrapper */}
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-6 pb-8 sm:pb-12 flex flex-col gap-6 sm:gap-8 md:gap-10 flex-1">
        
        {/* ========================================================
            2. HERO SECTION ENRIQUECIDO
            ======================================================== */}
        <section 
          ref={heroRef}
          id="hero"
          className="w-full bg-gradient-to-b from-[#0B343F] via-[#0B343F] to-[#082831] text-white rounded-3xl p-6 sm:p-10 md:p-12 lg:p-14 shadow-lg border border-[#0B343F] relative overflow-hidden text-center"
        >
          {/* Iluminação ambiente com profundidade */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#E18B42]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#E18B42]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(225,139,66,0.06),transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
            {/* Tag de Destaque com efeito dinâmico */}
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-[#E18B42]/20 border border-[#E18B42]/30 text-[#E18B42] text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xs">
              <Zap className="w-3.5 h-3.5 fill-[#E18B42] text-[#E18B42] animate-pulse" />
              Diagnóstico Rápido de 30 Segundos
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-white leading-[1.12] mb-4 tracking-tight text-balance">
              Você tá cansado de se sentir travado?
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#F3ECDF]/90 font-normal leading-relaxed mb-6 sm:mb-8 max-w-xl text-balance">
              Descubra em 30 segundos o que tá te impedindo de recomeçar.
            </p>

            {/* 3 Passos com Contraste Marcante e Visual de Guia */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mb-7 sm:mb-8 w-full max-w-md sm:max-w-lg">
              <div className="bg-[#124452]/90 border border-white/20 rounded-2xl p-2.5 sm:p-3.5 text-center shadow-xs">
                <span className="block text-[10px] sm:text-xs font-bold text-[#E18B42] uppercase tracking-wider mb-0.5">Passo 1</span>
                <span className="text-xs sm:text-sm font-bold text-white">3 Perguntas</span>
              </div>
              <div className="bg-[#124452]/90 border border-white/20 rounded-2xl p-2.5 sm:p-3.5 text-center shadow-xs">
                <span className="block text-[10px] sm:text-xs font-bold text-[#E18B42] uppercase tracking-wider mb-0.5">Passo 2</span>
                <span className="text-xs sm:text-sm font-bold text-white">Sem E-mail</span>
              </div>
              <div className="bg-[#124452]/90 border border-white/20 rounded-2xl p-2.5 sm:p-3.5 text-center shadow-xs">
                <span className="block text-[10px] sm:text-xs font-bold text-[#E18B42] uppercase tracking-wider mb-0.5">Passo 3</span>
                <span className="text-xs sm:text-sm font-bold text-white">Seu Diagnóstico</span>
              </div>
            </div>

            <button
              onClick={handleStartQuiz}
              type="button"
              className="w-full sm:w-auto min-w-[260px] sm:min-w-[300px] bg-[#E18B42] hover:bg-[#d07a33] active:scale-[0.98] transition-all duration-200 text-white font-extrabold text-base sm:text-lg py-4 sm:py-4.5 px-8 rounded-2xl shadow-lg hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer touch-manipulation group"
            >
              <span>Começar agora</span>
              <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Prova Social Real e Discreta */}
            <p className="text-xs sm:text-sm text-[#F3ECDF]/80 mt-3 sm:mt-3.5 font-normal tracking-wide">
              A história que já alcançou mais de 700 mil pessoas no TikTok.
            </p>
          </div>
        </section>

        {/* ========================================================
            3. QUIZ SECTION (3 perguntas, uma por tela, sem e-mail)
            ======================================================== */}
        <section 
          ref={quizRef}
          id="quiz" 
          aria-label="Quiz de Diagnóstico"
          className="w-full max-w-2xl mx-auto scroll-mt-20"
        >
          <div className="w-full bg-white border border-[#0B343F]/15 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm">
            {/* Header with progress indicator: texto e barra 100% sincronizados */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#0B343F]/70 mb-2">
                <span>
                  {currentStep === 0 && 'Teste em 3 passos rápidos'}
                  {currentStep >= 1 && currentStep <= 3 && `Pergunta ${currentStep} de 3`}
                  {currentStep >= 4 && 'Concluído'}
                </span>
                <span className="font-mono tabular-nums text-[#0B343F] font-extrabold">
                  {progressPercent}%
                </span>
              </div>

              {/* Progress Bar (0% = largura zero; preenchimento e texto perfeitamente alinhados) */}
              <div className="w-full h-2.5 bg-[#F3ECDF] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#E18B42] transition-all duration-300 ease-out rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Quiz State: Not yet clicked 'Começar' */}
            {currentStep === 0 && (
              <div className="text-center py-6">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0B343F] mb-2">
                  Pronto para descobrir o que está travando sua rotina?
                </h3>
                <p className="text-sm sm:text-base text-[#0B343F]/80 mb-6 font-medium max-w-md mx-auto">
                  Apenas 3 perguntas diretas. Sem cadastro e sem pedir e-mail.
                </p>
                <button
                  onClick={handleStartQuiz}
                  className="w-full sm:w-auto min-w-[240px] bg-[#0B343F] hover:bg-[#124452] active:scale-[0.98] text-white font-bold py-4 px-8 rounded-2xl transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Iniciar quiz (30s)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Quiz Questions: 1, 2 or 3 */}
            {currentStep >= 1 && currentStep <= 3 && (
              <div className="flex flex-col gap-5 animate-in fade-in duration-200">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B343F] leading-snug tracking-tight">
                  {activeQuestion.title}
                </h2>

                <div className="flex flex-col gap-3 pt-1">
                  {activeQuestion.options.map((option, idx) => {
                    const isSelected = selectedInStep === option || answers[activeQuestion.id] === option;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleOptionSelect(activeQuestion.id, option)}
                        className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-150 flex items-center justify-between cursor-pointer touch-manipulation active:scale-[0.99] group ${
                          isSelected
                            ? 'border-[#E18B42] bg-[#E18B42]/10 text-[#0B343F] font-bold ring-2 ring-[#E18B42]/20 shadow-xs'
                            : 'border-[#0B343F]/15 bg-[#F3ECDF]/30 hover:border-[#0B343F]/40 hover:bg-[#F3ECDF]/60 text-[#0B343F]'
                        }`}
                      >
                        <span className="text-sm sm:text-base leading-snug pr-3 font-medium group-hover:text-[#0B343F]">
                          {option}
                        </span>
                        <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                          isSelected ? 'border-[#E18B42] bg-[#E18B42]' : 'border-[#0B343F]/30 group-hover:border-[#0B343F]'
                        }`}>
                          {isSelected && <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs text-[#0B343F]/50 text-center mt-2">
                  Clique na opção para avançar automaticamente
                </p>
              </div>
            )}

            {/* Quiz Analyzing / Step 4 */}
            {currentStep === 4 && (
              <div className="py-10 flex flex-col items-center justify-center text-center gap-3">
                <div className="w-12 h-12 border-3 border-[#E18B42] border-t-transparent rounded-full animate-spin" />
                <p className="text-base font-bold text-[#0B343F]">
                  Cruzando suas respostas...
                </p>
                <p className="text-xs sm:text-sm text-[#0B343F]/60">
                  Gerando seu diagnóstico em instantes.
                </p>
              </div>
            )}

            {/* Quiz Step 5: Completed indicator */}
            {currentStep === 5 && (
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0B343F]/5 border border-[#0B343F]/10">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#0B343F]">
                  <CheckCircle2 className="w-5 h-5 text-[#E18B42]" />
                  <span>Respostas analisadas com sucesso</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setCurrentStep(1);
                    setAnswers({});
                  }}
                  className="text-xs sm:text-sm text-[#0B343F]/70 hover:text-[#0B343F] font-semibold underline cursor-pointer"
                >
                  Refazer quiz
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================
            4. RESULTADO (Aparece após 3ª resposta ou acessível)
            ======================================================== */}
        {(currentStep === 5 || currentStep === 0) && (
          <section 
            ref={resultRef}
            id="resultado"
            className="w-full max-w-4xl mx-auto bg-[#0B343F] text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-md border border-[#0B343F] relative overflow-hidden scroll-mt-20"
          >
            <div className="flex flex-col gap-4 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E18B42]">
                <Sparkles className="w-4 h-4" />
                <span>Diagnóstico Concluído</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight tracking-tight max-w-2xl">
                Seu diagnóstico: você está pronto pra recomeçar — só falta o método certo.
              </h2>

              <div className="flex flex-col gap-2 max-w-2xl">
                {dynamicDiagnosis && (
                  <p className="text-base sm:text-lg font-bold text-[#E18B42] leading-snug">
                    {dynamicDiagnosis}
                  </p>
                )}
                <p className="text-sm sm:text-base md:text-lg text-[#F3ECDF]/90 font-normal leading-relaxed">
                  Isso foi exatamente o que eu vivi. Separei tudo que usei num kit simples, direto ao ponto, sem enrolação.
                </p>
              </div>

              <div className="pt-2 sm:pt-4">
                <button
                  onClick={scrollToOffer}
                  type="button"
                  className="w-full sm:w-auto min-w-[240px] bg-[#E18B42] hover:bg-[#d07a33] active:scale-[0.98] transition-all text-white font-extrabold text-base sm:text-lg py-4 px-8 rounded-2xl shadow-md flex items-center justify-center gap-2 cursor-pointer touch-manipulation"
                >
                  <span>Ver o Kit Recomeço</span>
                  <ChevronDown className="w-5 h-5 animate-bounce shrink-0" />
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================
            5. OFERTA — "Kit Recomeço" (3 Itens Oficiais)
            ======================================================== */}
        <section 
          ref={offerRef}
          id="oferta"
          aria-label="Oferta Kit Recomeço"
          className="w-full bg-white border border-[#0B343F]/15 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-sm flex flex-col gap-8 scroll-mt-20"
        >
          {/* Section Header */}
          <div className="flex flex-col gap-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E18B42]">
              Tudo pronto para você
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B343F] tracking-tight">
              Kit Recomeço
            </h2>
            <p className="text-sm sm:text-base text-[#0B343F]/80">
              O caminho prático para destravar sua rotina sem enrolação.
            </p>
          </div>

          {/* Desktop 2-Column Grid vs Mobile Stack */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (Exact Cover Showcase + 3 Official Items List + CTA intermediário) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Cover Artwork matching user's CAPA KIT 3 */}
              <KitCoverShowcase />

              {/* 3 Itens do Kit em lista com ícone e nome curto */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B343F]/60 mb-1">
                  O que você recebe no kit:
                </h3>

                {OFFER_ITEMS.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={item.num}
                      className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F3ECDF]/40 border border-[#0B343F]/10 hover:border-[#0B343F]/25 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#0B343F] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[#E18B42]" />
                      </div>

                      <div className="flex flex-col flex-1 min-w-0">
                        <span className="text-sm sm:text-base font-bold text-[#0B343F] leading-snug">
                          {item.num}. {item.title}
                        </span>
                        <p className="text-xs sm:text-sm text-[#0B343F]/75 mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Segundo Botão CTA logo após os 3 itens */}
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#E18B42] hover:bg-[#d07a33] active:scale-[0.98] transition-all text-white font-extrabold text-base sm:text-lg py-4 px-6 rounded-2xl shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-center cursor-pointer touch-manipulation no-underline"
              >
                <span>Quero meu Kit Recomeço agora</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>
            </div>

            {/* Right Column (Sticky Pricing Card on Desktop) */}
            <div className="lg:col-span-5 flex flex-col gap-5 lg:sticky lg:top-20">
              
              {/* Preço e Frase de Impacto */}
              <div className="bg-[#0B343F] text-white rounded-2xl p-6 sm:p-7 text-center flex flex-col gap-3 relative overflow-hidden shadow-md">
                <span className="inline-block self-center px-3 py-1 rounded-full bg-[#E18B42]/20 text-[#E18B42] text-xs font-bold uppercase tracking-wider">
                  Condição Especial
                </span>

                <p className="text-sm sm:text-base font-medium text-[#F3ECDF]">
                  Tudo isso, por menos que um lanche.
                </p>

                <div className="flex items-baseline justify-center gap-3 my-1">
                  <span className="text-sm sm:text-base text-white/50 line-through font-medium">
                    de R$ 47,00
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs sm:text-sm font-bold text-[#E18B42]">por</span>
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#E18B42] tracking-tight font-mono tabular-nums">
                      R$ 9,90
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-white/60">
                  valor estimado se vendido separadamente
                </p>
              </div>

              {/* Cronômetro de Contagem Regressiva (24h, reinicia ao expirar) */}
              <div className="flex flex-col items-center justify-center gap-2 bg-[#F3ECDF]/60 border border-[#0B343F]/10 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0B343F]">
                  <Clock className="w-4 h-4 text-[#E18B42]" />
                  <span>Oferta por tempo limitado</span>
                </div>

                {/* Countdown Display */}
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

              {/* Botão CTA Principal Final */}
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#E18B42] hover:bg-[#d07a33] active:scale-[0.98] transition-all text-white font-extrabold text-base sm:text-lg py-4 sm:py-5 px-6 rounded-2xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-center cursor-pointer touch-manipulation no-underline"
              >
                <span>Quero meu Kit Recomeço agora</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>

              {/* Selo de Confiança */}
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#0B343F]/85 text-center px-2 py-1">
                <Lock className="w-4 h-4 text-[#0B343F] shrink-0" />
                <span>Compra 100% segura, acesso imediato após confirmação.</span>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================
            6. RODAPÉ
            ======================================================== */}
        <footer className="w-full text-center py-6 px-4 border-t border-[#0B343F]/10 mt-4">
          <p className="text-xs sm:text-sm text-[#0B343F]/65 leading-relaxed max-w-lg mx-auto">
            Kit Recomeço © 2026. Este produto não substitui acompanhamento médico ou nutricional profissional.
          </p>
        </footer>

      </main>
    </div>
  );
}
