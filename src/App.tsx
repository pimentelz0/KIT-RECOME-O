import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Sparkles, 
  BookOpen, 
  CreditCard,
  Check,
  Compass,
  Zap
} from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
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

const METHOD_STEPS = [
  {
    step: '01',
    name: 'SAIR DA INÉRCIA',
    desc: 'Comece a recuperar sua rotina mesmo quando você não está com vontade ou motivação.',
    material: 'Como Sair do Fundo do Poço',
  },
  {
    step: '02',
    name: 'PERCEBER SUA EVOLUÇÃO',
    desc: 'Aprenda a reconhecer pequenos sinais de progresso enquanto você continua avançando.',
    material: 'Como Perceber Que Você Está Evoluindo',
  },
  {
    step: '03',
    name: 'CONSTRUIR CONSTÂNCIA',
    desc: 'Use 21 dias de pequenas ações para começar a transformar intenção em rotina.',
    material: 'Checklist de 21 Dias',
  },
];

const TARGET_AUDIENCE = [
  'Está se sentindo travado',
  'Perdeu a rotina',
  'Está passando por uma fase de mudança',
  'Quer voltar a cuidar de si',
  'Precisa de um ponto de partida',
];

const CHECKOUT_URL = 'https://pay.kiwify.com.br/N6TEoxs';

export default function App() {
  const [currentStep, setCurrentStep] = useState<number>(0); // 0 = initial, 1-3 = questions, 4 = analyzing, 5 = result
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedInStep, setSelectedInStep] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const quizRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const methodRef = useRef<HTMLDivElement>(null);
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

  const handleStartQuiz = () => {
    setCurrentStep(1);
    setTimeout(() => {
      quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  const handleOptionSelect = (questionId: number, option: string) => {
    setSelectedInStep(option);
    setAnswers((prev) => ({ ...prev, [questionId]: option }));

    setTimeout(() => {
      setSelectedInStep(null);
      if (questionId < 3) {
        setCurrentStep(questionId + 1);
      } else {
        // Step 3 answered: quick calculation pulse
        setCurrentStep(4);
        setTimeout(() => {
          setCurrentStep(5);
          setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 120);
        }, 700);
      }
    }, 260);
  };

  const scrollToMethod = () => {
    methodRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToOffer = () => {
    offerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const questionIndex = Math.min(Math.max(currentStep - 1, 0), 2);
  const activeQuestion = QUESTIONS[questionIndex];

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

  // Dynamic diagnostic text based on question 3
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
      
      {/* Top Value Banner */}
      <div className="w-full bg-[#0B343F] text-[#F3ECDF] text-[11px] sm:text-xs py-1.5 px-4 border-b border-[#0B343F]/20 flex items-center justify-center gap-2 text-center font-medium">
        <span>Método Prático em 3 Passos · Acesso Imediato Após a Compra · <strong>Apenas R$ 9,90</strong></span>
      </div>

      {/* Header Sticky */}
      <header 
        className={`w-full sticky top-0 z-50 bg-[#F3ECDF]/95 backdrop-blur-md transition-all duration-200 py-2.5 sm:py-3 px-4 sm:px-6 lg:px-8 ${
          isScrolled 
            ? 'shadow-[0_4px_24px_rgba(11,52,63,0.08)] border-b border-[#0B343F]/12' 
            : 'border-b border-[#0B343F]/8'
        }`}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 select-none">
            <div className="w-8 h-8 rounded-xl bg-[#0B343F] text-[#E18B42] flex items-center justify-center shadow-xs">
              <BookOpen className="w-4 h-4 text-[#E18B42]" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-black text-base tracking-tight text-[#0B343F] leading-none">
                KIT RECOMEÇO
              </span>
              <span className="text-[10px] font-semibold text-[#0B343F]/65 hidden xs:inline leading-tight mt-0.5">
                Método Prático de Recomeço
              </span>
            </div>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E18B42] hover:bg-[#d07a33] active:scale-95 transition-all text-white text-xs font-bold py-1.5 px-4 rounded-xl shadow-xs cursor-pointer no-underline inline-flex items-center justify-center"
          >
            Quero o meu
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10 flex flex-col gap-10 sm:gap-14 flex-1">
        
        {/* ========================================================
            1. HERO
            ======================================================== */}
        <section className="w-full text-center flex flex-col items-center pt-2 sm:pt-4">
          {/* Badge discreto */}
          <div className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full bg-[#0B343F]/8 border border-[#0B343F]/15 text-[#0B343F] text-xs font-bold tracking-wider uppercase">
            <span>ACESSO IMEDIATO</span>
            <span className="text-[#0B343F]/40">•</span>
            <span className="text-[#E18B42]">R$ 9,90</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B343F] leading-[1.15] mb-5 tracking-tight uppercase text-balance max-w-2xl">
            Você não precisa ter a vida resolvida.
            <br />
            <span className="text-[#E18B42]">Precisa começar.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#0B343F]/85 font-normal leading-relaxed mb-8 max-w-xl text-balance">
            Um método prático para quem está cansado de se sentir travado e quer voltar a colocar a própria rotina nos trilhos.
          </p>

          <button
            onClick={handleStartQuiz}
            type="button"
            className="w-full sm:w-auto min-w-[280px] bg-[#E18B42] hover:bg-[#d07a33] active:scale-[0.98] transition-all text-white font-black text-base sm:text-lg py-4 px-8 rounded-2xl shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer touch-manipulation group"
          >
            <span>COMEÇAR MEU RECOMEÇO</span>
            <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" />
          </button>
        </section>

        {/* ========================================================
            2. A HISTÓRIA POR TRÁS
            ======================================================== */}
        <section className="w-full bg-[#FAF6F0] border border-[#0B343F]/12 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-col gap-3 max-w-xl mx-auto text-left">
            <span className="text-xs font-bold tracking-wider text-[#E18B42] uppercase">
              Origem
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B343F] tracking-tight uppercase">
              Eu também já estive aqui.
            </h2>
            <div className="space-y-3 text-base sm:text-lg text-[#0B343F]/85 leading-relaxed pt-1">
              <p>
                Depois de uma fase que mudou completamente minha vida, eu percebi que esperar tudo melhorar não estava me levando a lugar nenhum.
              </p>
              <p className="font-bold text-[#0B343F]">
                Eu precisava começar.
              </p>
              <p>
                Foi daí que nasceu o Recomeço.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. DIAGNÓSTICO DE 30 SEGUNDOS
            ======================================================== */}
        <section 
          ref={quizRef} 
          id="diagnostico" 
          className="w-full scroll-mt-20 flex flex-col gap-4"
        >
          <div className="w-full bg-white border border-[#0B343F]/15 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm">
            
            {/* Header do Diagnóstico */}
            <div className="text-center max-w-xl mx-auto mb-6">
              <span className="text-xs font-bold tracking-wider text-[#E18B42] uppercase block mb-1">
                Diagnóstico de 30 Segundos
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B343F] tracking-tight uppercase mb-2">
                O que está te impedindo de recomeçar?
              </h2>
              <p className="text-sm sm:text-base text-[#0B343F]/75">
                Responda 3 perguntas rápidas e descubra qual área da sua rotina está pedindo mais atenção agora.
              </p>
            </div>

            {/* Barra de Progresso */}
            <div className="mb-6 max-w-md mx-auto">
              <div className="flex items-center justify-between text-xs font-bold text-[#0B343F]/70 mb-1.5">
                <span>
                  {currentStep === 0 && '3 perguntas rápidas • sem cadastro'}
                  {currentStep >= 1 && currentStep <= 3 && `Pergunta ${currentStep} de 3`}
                  {currentStep >= 4 && 'Concluído'}
                </span>
                <span className="font-mono tabular-nums text-[#0B343F] font-extrabold">
                  {progressPercent}%
                </span>
              </div>
              <div className="w-full h-2 bg-[#F3ECDF] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#E18B42] transition-all duration-300 ease-out rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Passo 0: Antes de clicar para iniciar */}
            {currentStep === 0 && (
              <div className="text-center py-4 flex flex-col items-center">
                <button
                  onClick={handleStartQuiz}
                  type="button"
                  className="w-full sm:w-auto min-w-[260px] bg-[#0B343F] hover:bg-[#124452] active:scale-[0.98] text-white font-bold py-3.5 px-8 rounded-2xl transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
                >
                  <span>DESCOBRIR AGORA</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            )}

            {/* Perguntas: 1, 2 ou 3 */}
            {currentStep >= 1 && currentStep <= 3 && (
              <div className="flex flex-col gap-4 max-w-md mx-auto animate-in fade-in duration-150">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0B343F] leading-snug tracking-tight">
                  {activeQuestion.title}
                </h3>

                <div className="flex flex-col gap-2.5 pt-1">
                  {activeQuestion.options.map((option, idx) => {
                    const isSelected = selectedInStep === option || answers[activeQuestion.id] === option;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleOptionSelect(activeQuestion.id, option)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all duration-150 flex items-center justify-between cursor-pointer touch-manipulation active:scale-[0.99] group ${
                          isSelected
                            ? 'border-[#E18B42] bg-[#E18B42]/10 text-[#0B343F] font-bold ring-2 ring-[#E18B42]/20'
                            : 'border-[#0B343F]/15 bg-[#F3ECDF]/30 hover:border-[#0B343F]/40 hover:bg-[#F3ECDF]/60 text-[#0B343F]'
                        }`}
                      >
                        <span className="text-sm sm:text-base leading-snug pr-3 font-medium">
                          {option}
                        </span>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                          isSelected ? 'border-[#E18B42] bg-[#E18B42]' : 'border-[#0B343F]/30 group-hover:border-[#0B343F]'
                        }`}>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs text-[#0B343F]/50 text-center mt-1">
                  Clique na resposta para avançar automaticamente
                </p>
              </div>
            )}

            {/* Análise rápida */}
            {currentStep === 4 && (
              <div className="py-8 flex flex-col items-center justify-center text-center gap-3">
                <div className="w-10 h-10 border-3 border-[#E18B42] border-t-transparent rounded-full animate-spin" />
                <p className="text-base font-bold text-[#0B343F]">
                  Analisando sua rotina...
                </p>
              </div>
            )}

            {/* Resultado do Diagnóstico */}
            {currentStep === 5 && (
              <div 
                ref={resultRef}
                className="flex flex-col gap-4 p-5 sm:p-6 rounded-2xl bg-[#0B343F] text-white max-w-xl mx-auto animate-in fade-in duration-200"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-[#E18B42] uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-[#E18B42]" />
                  <span>Diagnóstico Concluído</span>
                </div>

                {dynamicDiagnosis ? (
                  <p className="text-base sm:text-lg font-bold text-[#E18B42] leading-snug">
                    {dynamicDiagnosis}
                  </p>
                ) : (
                  <p className="text-base sm:text-lg font-bold text-[#E18B42] leading-snug">
                    Você está pronto pra recomeçar — só falta o método certo.
                  </p>
                )}

                <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-sm text-white/90 font-medium">
                    Agora você sabe por onde começar.
                  </span>
                  <button
                    onClick={scrollToMethod}
                    type="button"
                    className="w-full sm:w-auto bg-[#E18B42] hover:bg-[#d07a33] text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-colors"
                  >
                    <span>Ver os 3 passos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================
            4. APRESENTAR O MÉTODO (UM RECOMEÇO EM 3 PASSOS)
            ======================================================== */}
        <section 
          ref={methodRef} 
          id="metodo" 
          className="w-full scroll-mt-20 flex flex-col gap-6"
        >
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold tracking-wider text-[#E18B42] uppercase block mb-1">
              O Método
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B343F] tracking-tight uppercase mb-3">
              Um Recomeço em 3 Passos
            </h2>
            <div className="space-y-1 text-sm sm:text-base text-[#0B343F]/85 leading-relaxed">
              <p>
                Você não precisa tentar consertar tudo ao mesmo tempo.
              </p>
              <p className="font-medium text-[#0B343F]">
                O Recomeço organiza os primeiros passos para você sair da inércia e voltar a construir sua rotina.
              </p>
            </div>
          </div>

          {/* Cards dos 3 Passos */}
          <div className="flex flex-col gap-4">
            {METHOD_STEPS.map((item) => (
              <div 
                key={item.step}
                className="bg-white border border-[#0B343F]/12 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0B343F] text-[#E18B42] font-black text-base flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-base sm:text-lg font-black text-[#0B343F] tracking-tight uppercase">
                      {item.name}
                    </h3>
                    <p className="text-sm sm:text-base text-[#0B343F]/80 mt-1 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="self-stretch sm:self-auto sm:text-right pt-2 sm:pt-0 border-t sm:border-t-0 border-[#0B343F]/8 shrink-0">
                  <span className="text-[11px] font-semibold text-[#0B343F]/55 uppercase block">
                    Material prático:
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#E18B42]">
                    “{item.material}”
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Visual dos Materiais como ferramentas práticas do método */}
          <div className="w-full bg-[#FAF6F0] border border-[#0B343F]/12 rounded-3xl p-5 sm:p-8 flex flex-col items-center gap-4">
            <span className="text-xs font-bold text-[#0B343F]/70 uppercase tracking-wider text-center">
              As ferramentas que compõem o método:
            </span>
            <div className="w-full max-w-md">
              <KitCoverShowcase />
            </div>
            <p className="text-xs text-[#0B343F]/60 text-center max-w-sm">
              Materiais objetivos e diretos ao ponto, criados para aplicação prática no dia a dia.
            </p>
          </div>
        </section>

        {/* ========================================================
            5. O QUE É O RECOMEÇO
            ======================================================== */}
        <section className="w-full bg-[#0B343F] text-white rounded-3xl p-7 sm:p-10 shadow-md relative overflow-hidden">
          <div className="max-w-xl mx-auto flex flex-col gap-4 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight uppercase tracking-tight">
              Recomeçar não é virar outra pessoa da noite para o dia.
            </h2>
            <div className="space-y-1.5 text-base sm:text-lg text-[#F3ECDF]/90 font-normal leading-relaxed pt-1">
              <p>É voltar a cuidar de você.</p>
              <p>É recuperar pequenas partes da sua rotina.</p>
              <p>É fazer hoje aquilo que você vem adiando há semanas.</p>
            </div>
            <p className="text-lg sm:text-xl font-bold text-[#E18B42] pt-2">
              Um passo de cada vez.
            </p>
          </div>
        </section>

        {/* ========================================================
            6. OFERTA
            ======================================================== */}
        <section 
          ref={offerRef} 
          id="oferta" 
          className="w-full scroll-mt-20 bg-white border border-[#0B343F]/15 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm flex flex-col items-center text-center"
        >
          <span className="text-xs font-bold tracking-wider text-[#E18B42] uppercase mb-1">
            Acesso Imediato
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B343F] tracking-tight uppercase mb-2">
            Comece Hoje
          </h2>
          <p className="text-sm sm:text-base text-[#0B343F]/80 max-w-md mb-6 leading-relaxed">
            O método Recomeço + os materiais práticos para colocar os primeiros passos em ação.
          </p>

          {/* Lista de Itens Inclusos */}
          <div className="w-full max-w-md bg-[#F3ECDF]/40 border border-[#0B343F]/10 rounded-2xl p-5 mb-6 text-left space-y-3">
            <div className="flex items-center gap-3 text-sm sm:text-base font-bold text-[#0B343F]">
              <div className="w-5 h-5 rounded-full bg-[#E18B42] text-white flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span>Método em 3 passos</span>
            </div>
            <div className="flex items-center gap-3 text-sm sm:text-base font-bold text-[#0B343F]">
              <div className="w-5 h-5 rounded-full bg-[#E18B42] text-white flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span>Guias práticos</span>
            </div>
            <div className="flex items-center gap-3 text-sm sm:text-base font-bold text-[#0B343F]">
              <div className="w-5 h-5 rounded-full bg-[#E18B42] text-white flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span>Checklist de 21 dias</span>
            </div>
            <div className="flex items-center gap-3 text-sm sm:text-base font-bold text-[#0B343F]">
              <div className="w-5 h-5 rounded-full bg-[#E18B42] text-white flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span>Acesso digital imediato</span>
            </div>
          </div>

          {/* Preço Limpo e Transparente */}
          <div className="flex flex-col items-center mb-6">
            <span className="text-xs font-bold text-[#0B343F]/60 uppercase tracking-wider">
              Investimento único
            </span>
            <div className="flex items-baseline gap-1 my-1">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B343F] tracking-tight font-mono">
                R$ 9,90
              </span>
            </div>
            <span className="text-xs text-[#0B343F]/65">
              sem mensalidades • acesso vitalício
            </span>
          </div>

          {/* CTA Principal da Oferta */}
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md bg-[#E18B42] hover:bg-[#d07a33] active:scale-[0.98] transition-all text-white font-black text-base sm:text-lg py-4 px-8 rounded-2xl shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer no-underline group"
          >
            <span>QUERO COMEÇAR</span>
            <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Formas de Pagamento Aceitas: Pix e Cartão de Crédito */}
          <div className="flex items-center justify-center gap-3.5 text-[#0B343F] text-xs font-semibold pt-4">
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

          {/* Selo de Segurança */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-[#0B343F]/75 pt-2">
            <Lock className="w-3.5 h-3.5 text-[#0B343F]" />
            <span>Compra 100% segura, acesso imediato após confirmação.</span>
          </div>
        </section>

        {/* ========================================================
            7. PARA QUEM É
            ======================================================== */}
        <section className="w-full bg-[#FAF6F0] border border-[#0B343F]/12 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs">
          <div className="max-w-xl mx-auto flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black text-[#0B343F] tracking-tight uppercase">
              Feito para quem…
            </h2>
            <div className="space-y-3 pt-1">
              {TARGET_AUDIENCE.map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm sm:text-base font-semibold text-[#0B343F]">
                  <div className="w-5 h-5 rounded-full bg-[#0B343F] text-[#E18B42] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            8. FINAL
            ======================================================== */}
        <section className="w-full text-center flex flex-col items-center py-6 sm:py-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B343F] tracking-tight uppercase mb-3 max-w-xl text-balance">
            Você não precisa mudar tudo hoje.
          </h2>
          <p className="text-base sm:text-lg text-[#0B343F]/80 leading-relaxed mb-6 max-w-md">
            Só precisa decidir qual será o seu primeiro passo.
          </p>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[300px] bg-[#E18B42] hover:bg-[#d07a33] active:scale-[0.98] transition-all text-white font-black text-base sm:text-lg py-4 px-8 rounded-2xl shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer no-underline group"
          >
            <span>COMEÇAR MEU RECOMEÇO POR R$ 9,90</span>
            <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" />
          </a>

          <p className="text-xs text-[#0B343F]/65 mt-3">
            Acesso digital imediato após a confirmação do pagamento.
          </p>
        </section>

        {/* Rodapé */}
        <footer className="w-full text-center py-6 border-t border-[#0B343F]/10">
          <p className="text-xs text-[#0B343F]/60 max-w-md mx-auto">
            Kit Recomeço © 2026. Todos os direitos reservados.
          </p>
        </footer>

      </main>

      <Analytics />
    </div>
  );
}
