import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  X, 
  Lock, 
  ShieldCheck, 
  ChevronDown, 
  Sparkles,
  UserCheck,
  Users,
  SlidersHorizontal,
  Gift,
  Dumbbell,
  Utensils
} from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { KitCoverShowcase } from './components/KitCoverShowcase';
import pauloAntesImg from './assets/images/paulo-antes.jpg';
import pauloDepoisImg from './assets/images/paulo-depois.jpg';

const CHECKOUT_URL = 'https://pay.kiwify.com.br/N6TEoxs';

interface FAQItem {
  q: string;
  a: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    q: 'O que eu recebo exatamente ao entrar no Kit Recomeço?',
    a: 'Você recebe o pacote completo com acesso imediato: 1) Guia Principal "Como Sair do Fundo do Poço"; 2) Guia de Acompanhamento "Como Perceber Que Você Está Evoluindo"; 3) O Checklist Prático de 21 Dias; 4) BÔNUS EXCLUSIVO: Treino Recomeço - Parte 2: O Programa Completo; e 5) BÔNUS EXCLUSIVO: Livro Digital Receitas Recomeço. Tudo liberado hoje por apenas R$ 9,90!'
  },
  {
    q: 'É uma dieta radical ou treino pesado?',
    a: 'Não. O Kit Recomeço não é uma dieta maluca e nem um treino impossível de academia. É um método prático de reconstrução de rotina, mentalidade e micro-hábitos diários para quem está cansado de começar e parar.'
  },
  {
    q: 'Como vou receber o acesso?',
    a: 'O acesso é 100% digital e imediato. Assim que o pagamento for confirmado (no Pix a liberação é instantânea), você recebe o link de acesso direto no seu e-mail e na tela de confirmação.'
  },
  {
    q: 'O acesso é imediato?',
    a: 'Sim! Pagamentos via Pix e Cartão de Crédito são aprovados em poucos segundos e o material fica imediatamente disponível na sua área de membros.'
  },
  {
    q: 'E se eu não me adaptar ao método?',
    a: 'Você tem 7 dias de garantia incondicional. Leia o material, comece a aplicar o checklist e, se achar que não valeu a pena, basta solicitar o reembolso. Devolvemos 100% do seu dinheiro sem burocracia.'
  },
  {
    q: 'Serve tanto para homens quanto para mulheres?',
    a: 'Sim, perfeitamente! O método do Kit Recomeço foi estruturado para atender às necessidades tanto de homens quanto de mulheres que buscam destravar a rotina, ganhar energia, recuperar a autoestima e eliminar o desânimo sem extremismos.'
  },
  {
    q: 'Serve para pessoas mais velhas ou mais novas? Tenho dores ou estou parado há muito tempo.',
    a: 'Com certeza. O Kit conta com níveis de intensidade adaptáveis: se você é mais velho ou está sedentário, começa no Nível Suave — sem impactos agressivos e focado em devolver mobilidade e fôlego. Se for mais jovem ou já tiver condicionamento, pode avançar para os níveis moderado e avançado respeitando seu próprio ritmo.'
  }
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0A0A0A] font-sans antialiased selection:bg-[#0B343F] selection:text-white flex flex-col">
      
      {/* Top Value Banner - Clean, Light & High Conversion */}
      <div className="w-full bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#0B343F] py-2 px-4 text-center">
        <p className="text-xs sm:text-sm font-semibold flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-[#0B343F] text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            OFERTA
          </span>
          <span>Acesso Imediato Após a Compra · <strong>Apenas R$ 9,90</strong></span>
        </p>
      </div>

      {/* Header Sticky com Fundo Branco Sólido */}
      <header className="w-full sticky top-0 z-50 bg-[#FFFFFF] border-b border-[#E2E8F0] py-3 px-4 sm:px-6 lg:px-8 shadow-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <a href="#hero" className="flex items-center gap-2 group select-none no-underline">
            <span className="text-lg sm:text-xl font-black tracking-tight text-[#0A0A0A] uppercase">
              KIT <span className="text-[#0B343F]">RECOMEÇO</span>
            </span>
          </a>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0B343F] hover:bg-[#07242C] active:scale-95 transition-all duration-150 text-white text-xs sm:text-sm font-black py-2 px-4 sm:px-5 rounded-full shadow-md hover:shadow-lg cursor-pointer no-underline inline-flex items-center gap-1.5"
          >
            <span>QUERO MEU ACESSO</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 flex flex-col gap-16 sm:gap-24">
        
        {/* ========================================================
            1. HERO SECTION
            ======================================================== */}
        <section id="hero" className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Coluna Esquerda: Textos + Bullet points + CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Badge de Adaptabilidade */}
            <div className="inline-flex items-center gap-2 bg-[#0B343F]/10 border border-[#0B343F]/25 text-[#0B343F] px-3.5 py-1.5 rounded-full text-xs font-bold mb-3 shadow-xs">
              <Users className="w-3.5 h-3.5 shrink-0" />
              <span>Para Homens e Mulheres</span>
            </div>

            <div className="mb-4">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-[#0A0A0A] uppercase">
                KIT <span className="text-[#0B343F]">RECOMEÇO</span>
              </span>
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-[#1E293B] mb-4 leading-snug">
              O Método Prático para Sair do Fundo do Poço, Destravar sua Rotina e Recomeçar
            </h2>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
              Recupere o controle da sua rotina diária, vença o desânimo, reduza a autocobrança e volte a sentir orgulho de quem você vê no espelho.
            </p>

            {/* Negativos (Sem dieta maluca...) */}
            <div className="flex flex-col gap-2 mb-6 text-xs sm:text-sm font-extrabold uppercase tracking-wide text-[#0A0A0A]">
              <div className="flex items-center gap-2">
                <span className="text-[#0B343F] font-black">SEM</span> dieta maluca ou planos impraticáveis.
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#0B343F] font-black">SEM</span> sofrimento eterno.
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#0B343F] font-black">SEM</span> precisar começar e desistir toda semana.
              </div>
            </div>

            {/* Caixa de Benefícios com Checks em Verde Petróleo */}
            <div className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-4 sm:p-5 mb-7 space-y-2.5 shadow-xs">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1E293B] font-medium">
                <Check className="w-4 h-4 text-[#0B343F] shrink-0 stroke-[3]" />
                <span>Método simples e aplicável no primeiro dia</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1E293B] font-medium">
                <Check className="w-4 h-4 text-[#0B343F] shrink-0 stroke-[3]" />
                <span>Passo a passo exato para sair da inércia</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1E293B] font-medium">
                <Check className="w-4 h-4 text-[#0B343F] shrink-0 stroke-[3]" />
                <span>Checklist prático de 21 dias</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1E293B] font-medium">
                <Check className="w-4 h-4 text-[#0B343F] shrink-0 stroke-[3]" />
                <span><strong>+ 2 Bônus Inclusos:</strong> Treino Recomeço (Parte 2) + Receitas Recomeço</span>
              </div>
            </div>

            {/* CTA Button Principal em Verde Petróleo */}
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#0B343F] hover:bg-[#07242C] active:scale-[0.98] transition-all text-white font-black text-sm sm:text-base py-4 px-8 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer no-underline group"
            >
              <span>QUERO COMEÇAR MEU RECOMEÇO AGORA</span>
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Coluna Direita: Mockup dos Materiais */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <KitCoverShowcase />
          </div>

        </section>

        {/* ========================================================
            2. SECTION: O PROBLEMA / FORÇA DE VONTADE
            ======================================================== */}
        <section className="w-full flex flex-col items-center text-center max-w-3xl mx-auto py-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0A0A0A] leading-tight mb-3">
            Talvez o problema nunca tenha sido sua <span className="text-[#0B343F] italic">força de vontade...</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#64748B] mb-8">
            Talvez você apenas tenha tentado recomeçar do jeito errado.
          </p>

          {/* 4 Pills em fundo claro com borda sutil */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mb-10">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl py-3 px-4 text-xs sm:text-sm font-semibold text-[#1E293B] shadow-xs">
              Planos radicais.
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl py-3 px-4 text-xs sm:text-sm font-semibold text-[#1E293B] shadow-xs">
              Culpa.
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl py-3 px-4 text-xs sm:text-sm font-semibold text-[#1E293B] shadow-xs">
              Desânimo.
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl py-3 px-4 text-xs sm:text-sm font-semibold text-[#1E293B] shadow-xs">
              Recomeços infinitos.
            </div>
          </div>

          <div className="space-y-1 mb-10 text-sm sm:text-base text-[#64748B]">
            <p className="font-semibold text-[#0A0A0A]">E no final?</p>
            <p>O mesmo espelho. O mesmo cansaço. A mesma sensação de frustração.</p>
          </div>

          {/* Mensagem Forte com Borda em Verde Petróleo */}
          <div className="w-full border-t border-b border-[#E2E8F0] py-8 flex flex-col items-center gap-1.5 bg-[#F8FAFC] rounded-2xl">
            <span className="text-xs sm:text-sm font-black tracking-widest text-[#0B343F] uppercase">
              MAS AQUI EXISTE UMA VERDADE:
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0A0A0A]">
              Sua vida pode mudar.
            </span>
            <span className="text-sm sm:text-base text-[#475569] font-medium">
              Quando o método muda primeiro.
            </span>
          </div>
        </section>

        {/* ========================================================
            3. SECTION: HISTÓRIA DO PAULO (COM ANTES E DEPOIS)
            ======================================================== */}
        <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-xs">
          
          {/* Coluna Esquerda: Depoimento / História do Paulo */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <span className="text-5xl sm:text-6xl text-[#0B343F] font-serif leading-none select-none">
              “
            </span>

            <blockquote className="text-lg sm:text-xl md:text-2xl font-black text-[#0A0A0A] leading-snug mt-1 mb-3">
              “Depois de uma fase difícil que quase me fez desistir, eu percebi que precisava recuperar minha vida.”
            </blockquote>

            <span className="text-xs sm:text-sm font-bold text-[#0B343F] uppercase tracking-wider mb-6">
              — Paulo, criador do Kit Recomeço
            </span>

            <div className="space-y-3.5 text-xs sm:text-sm text-[#475569] leading-relaxed">
              <p>
                Após passar pelo momento mais difícil da sua vida, Paulo percebeu que tinha deixado de cuidar de si. Mais peso, cansaço acumulado, baixa autoestima e uma sensação silenciosa de ter desistido da própria rotina.
              </p>
              <p className="font-semibold text-[#0A0A0A]">
                Foi quando decidiu fazer um RECOMEÇO.
              </p>
              <p>
                Aplicando os princípios do método, começou com pequenas mudanças. Sem radicalismos. Sem perfeição. Apenas constância diária.
              </p>
              <p>
                E aos poucos... O corpo respondeu. A energia voltou. A confiança reapareceu.
              </p>
            </div>

            {/* Destaque com Borda em Verde Petróleo */}
            <div className="mt-6 border-l-3 border-[#0B343F] pl-4">
              <p className="text-xs sm:text-sm font-bold text-[#0A0A0A]">
                Hoje, Paulo não fala apenas sobre mudança. Ele fala sobre recomeço.
              </p>
            </div>
          </div>

          {/* Coluna Direita: Box de Antes e Depois do Paulo com as Fotos Reais */}
          <div className="lg:col-span-5 flex flex-col items-center w-full">
            <div className="w-full bg-[#FFFFFF] border border-[#CBD5E1] rounded-2xl p-3 sm:p-4 shadow-md">
              
              <div className="grid grid-cols-2 gap-2.5">
                {/* ANTES */}
                <div className="flex flex-col rounded-xl overflow-hidden bg-[#F1F5F9] border border-[#CBD5E1] relative aspect-[3/4] group">
                  {/* Badge ANTES */}
                  <div className="absolute top-2.5 left-2.5 z-10 bg-black/85 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider shadow-md">
                    ANTES
                  </div>
                  
                  <img
                    src={pauloAntesImg}
                    alt="Foto original do Paulo antes do Kit Recomeço"
                    className="w-full h-full object-cover object-center grayscale brightness-95 transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* DEPOIS */}
                <div className="flex flex-col rounded-xl overflow-hidden bg-[#F1F5F9] border-2 border-[#0B343F] relative aspect-[3/4] group ring-2 ring-[#0B343F]/20">
                  {/* Badge DEPOIS em Verde Petróleo */}
                  <div className="absolute top-2.5 left-2.5 z-10 bg-[#0B343F] text-white px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider shadow-md">
                    DEPOIS
                  </div>

                  <img
                    src={pauloDepoisImg}
                    alt="Foto original do Paulo depois do Kit Recomeço"
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <p className="text-[10px] text-[#64748B] text-center mt-3 font-normal">
                * Resultados podem variar de pessoa para pessoa.
              </p>
            </div>
          </div>

        </section>

        {/* ========================================================
            4. SECTION: O QUE NÃO É VS. A SOLUÇÃO
            ======================================================== */}
        <section className="w-full flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0A0A0A] text-center leading-tight mb-10">
            O Kit Recomeço <span className="text-[#0B343F] underline underline-offset-8 decoration-3">NÃO</span> é mais uma promessa vazia da internet.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {/* Box 1: O que NÃO é */}
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 flex flex-col shadow-xs">
              <div className="flex items-center gap-2 mb-6 text-sm font-extrabold text-[#64748B] uppercase tracking-wide">
                <X className="w-4 h-4 text-[#EF4444] stroke-[3]" />
                <span>O que NÃO é:</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-[#475569]">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0 stroke-[2.5]" />
                  <span>Promessa milagrosa de transformação fácil</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#475569]">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0 stroke-[2.5]" />
                  <span>Cobrança absurda e culpa desnecessária</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#475569]">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0 stroke-[2.5]" />
                  <span>Sofrimento permanente e restrições extremas</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#475569]">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0 stroke-[2.5]" />
                  <span>Teoria complicada sem plano prático</span>
                </div>
              </div>
            </div>

            {/* Box 2: A Solução com destaque em Verde Petróleo */}
            <div className="bg-[#0B343F]/5 border-2 border-[#0B343F] rounded-2xl p-6 sm:p-7 flex flex-col relative shadow-sm">
              {/* Badge A Solução */}
              <div className="absolute -top-3 right-6 bg-[#0B343F] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider shadow-sm">
                A SOLUÇÃO
              </div>

              <div className="flex items-center gap-2 mb-6 text-sm font-extrabold text-[#0B343F] uppercase tracking-wide">
                <Check className="w-4 h-4 text-[#0B343F] stroke-[3]" />
                <span>É um método criado para:</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-[#0A0A0A] font-semibold">
                  <Check className="w-4 h-4 text-[#0B343F] shrink-0 stroke-[3]" />
                  <span>Organizar sua rotina sem sofrimento</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#0A0A0A] font-semibold">
                  <Check className="w-4 h-4 text-[#0B343F] shrink-0 stroke-[3]" />
                  <span>Recuperar o controle e a clareza mental</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#0A0A0A] font-semibold">
                  <Check className="w-4 h-4 text-[#0B343F] shrink-0 stroke-[3]" />
                  <span>Diminuir a autocobrança e vencer o desânimo</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#0A0A0A] font-semibold">
                  <Check className="w-4 h-4 text-[#0B343F] shrink-0 stroke-[3]" />
                  <span>Construir disciplina com pequenas vitórias</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#0A0A0A] font-semibold">
                  <Check className="w-4 h-4 text-[#0B343F] shrink-0 stroke-[3]" />
                  <span>Servir tanto para homens quanto para mulheres em qualquer fase</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#0A0A0A] font-semibold">
                  <Check className="w-4 h-4 text-[#0B343F] shrink-0 stroke-[3]" />
                  <span>Criar um resultado que se sustenta no longo prazo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SEÇÃO DE ADAPTABILIDADE: HOMEM / MULHER & NÍVEIS DE INTENSIDADE
            ======================================================== */}
        <section className="w-full bg-[#FFFFFF] border-2 border-[#CBD5E1] rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-[#0B343F]/10 border border-[#0B343F]/25 text-[#0B343F] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            UNIVERSAL E PERSONALIZÁVEL
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0A0A0A] text-center uppercase tracking-tight mb-3">
            SERVE TANTO PARA <span className="text-[#0B343F]">HOMENS</span> QUANTO PARA <span className="text-[#0B343F]">MULHERES</span>
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] text-center max-w-2xl mb-8">
            Não importa se você tem 20, 45 ou mais de 60 anos. O Kit Recomeço foi estruturado com níveis de intensidade que se moldam exatamente à sua condição física e à sua rotina atual.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Card 1: Homens e Mulheres */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#0B343F] text-white flex items-center justify-center mb-4 shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#0A0A0A] mb-2 uppercase">
                  Para Homens e Mulheres
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                  O cansaço crônico, o acúmulo de gordura e o desânimo afetam a todos, mas o corpo feminino e o masculino respondem de formas distintas. O método traz clareza para ambos:
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-[#1E293B]">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#0B343F] shrink-0 stroke-[3] mt-0.5" />
                    <span><strong>Para Homens:</strong> ativação do vigor físico, clareza mental, melhora hormonal natural e quebra da inércia com rotinas objetivas.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#0B343F] shrink-0 stroke-[3] mt-0.5" />
                    <span><strong>Para Mulheres:</strong> respeito às oscilações hormonais, redução de inchaço e estresse, com estratégias práticas sem efeito sanfona.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#0B343F] shrink-0 stroke-[3] mt-0.5" />
                    <span>Sem fórmulas prontas ou treinos mirabolantes que não cabem no seu dia a dia.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Níveis de Intensidade por Idade */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#0B343F] text-white flex items-center justify-center mb-4 shadow-sm">
                  <SlidersHorizontal className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#0A0A0A] mb-2 uppercase">
                  Níveis de Intensidade Adaptáveis
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                  Você não precisa forçar além da conta. O plano oferece três opções de intensidade para pessoas mais novas ou mais velhas:
                </p>

                <div className="space-y-2.5">
                  <div className="bg-white border border-[#CBD5E1] rounded-xl p-3 flex items-start gap-3 shadow-xs">
                    <span className="bg-[#0B343F] text-white text-[10px] font-black uppercase px-2 py-0.5 rounded shrink-0 mt-0.5">
                      Nível 1 • Suave
                    </span>
                    <div className="text-xs text-[#334155]">
                      <strong className="text-[#0A0A0A] block">Pessoas mais velhas, com dores ou sedentárias</strong>
                      Zero impacto agressivo nas articulações. Movimentos simples e seguros para recuperar mobilidade, postura e respiração sem sobrecarga.
                    </div>
                  </div>

                  <div className="bg-white border border-[#CBD5E1] rounded-xl p-3 flex items-start gap-3 shadow-xs">
                    <span className="bg-[#0B343F]/80 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded shrink-0 mt-0.5">
                      Nível 2 • Moderado
                    </span>
                    <div className="text-xs text-[#334155]">
                      <strong className="text-[#0A0A0A] block">Constância e evolução gradual</strong>
                      Ideal para quem quer queimar gordura, destravar o metabolismo e criar hábitos sólidos no ritmo certo.
                    </div>
                  </div>

                  <div className="bg-white border border-[#CBD5E1] rounded-xl p-3 flex items-start gap-3 shadow-xs">
                    <span className="bg-[#0B343F]/20 text-[#0B343F] text-[10px] font-black uppercase px-2 py-0.5 rounded shrink-0 mt-0.5">
                      Nível 3 • Dinâmico
                    </span>
                    <div className="text-xs text-[#334155]">
                      <strong className="text-[#0A0A0A] block">Para os mais jovens ou quem já tem base física</strong>
                      Estímulos mais acelerados para quem quer intensidade extra e resposta rápida quando o corpo pedir mais.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            5. SECTION: O QUE EXISTE DENTRO DO KIT RECOMEÇO
            ======================================================== */}
        <section className="w-full flex flex-col items-center">
          <span className="text-xs font-bold tracking-widest text-[#0B343F] uppercase mb-1">
            O QUE VOCÊ RECEBE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0A0A0A] text-center uppercase tracking-tight mb-10">
            O QUE EXISTE DENTRO DO <span className="text-[#0B343F]">KIT RECOMEÇO</span>
          </h2>

          <div className="w-full max-w-4xl flex flex-col gap-6">
            
            {/* Card Principal: KIT RECOMEÇO */}
            <div className="w-full bg-[#FFFFFF] border-2 border-[#0B343F]/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center relative overflow-hidden shadow-sm">
              <div className="w-full md:w-5/12 flex items-center justify-center">
                <div className="w-full max-w-[260px] aspect-[1/1.3] rounded-2xl bg-gradient-to-b from-[#0F172A] to-[#0B343F] border border-white/20 p-4 flex flex-col justify-between shadow-xl relative text-white">
                  <div className="text-center">
                    <span className="text-[10px] font-black tracking-widest text-[#E2E8F0] uppercase">
                      PRODUTO PRINCIPAL
                    </span>
                  </div>
                  <div className="text-center my-2">
                    <span className="text-4xl sm:text-5xl font-black text-white">1</span>
                    <h3 className="text-sm sm:text-base font-black text-white mt-1 uppercase">
                      Como Sair do Fundo do Poço
                    </h3>
                  </div>
                  <p className="text-[10px] text-[#CBD5E1] text-center">
                    O passo a passo que usei pra recomeçar do zero
                  </p>
                </div>
              </div>

              <div className="w-full md:w-7/12 flex flex-col">
                <div className="self-start bg-[#0B343F] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded mb-2 tracking-wider">
                  PRODUTO PRINCIPAL
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0A0A0A] uppercase tracking-tight mb-1">
                  KIT RECOMEÇO
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mb-5">
                  O Passo a Passo Prático para Sair da Inércia e Voltar aos Trilhos
                </p>

                <div className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider mb-3">
                  Você aprende:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#334155] font-medium">
                    <Check className="w-3.5 h-3.5 text-[#0B343F] shrink-0 stroke-[3]" />
                    <span>Mentalidade de recomeço</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#334155] font-medium">
                    <Check className="w-3.5 h-3.5 text-[#0B343F] shrink-0 stroke-[3]" />
                    <span>Controle do desânimo</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#334155] font-medium">
                    <Check className="w-3.5 h-3.5 text-[#0B343F] shrink-0 stroke-[3]" />
                    <span>Plano prático de ação</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#334155] font-medium">
                    <Check className="w-3.5 h-3.5 text-[#0B343F] shrink-0 stroke-[3]" />
                    <span>Micro-hábitos sustentáveis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid dos 2 Guias Inclusos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              
              {/* Material #1 */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 flex flex-col justify-between shadow-xs">
                <div>
                  <span className="inline-block bg-[#0B343F]/10 text-[#0B343F] border border-[#0B343F]/20 text-[10px] font-black uppercase px-2.5 py-0.5 rounded mb-3">
                    MATERIAL INCLUSO #1
                  </span>
                  <h4 className="text-base sm:text-lg font-black text-[#0A0A0A] uppercase tracking-tight mb-1">
                    COMO PERCEBER QUE VOCÊ ESTÁ EVOLUINDO
                  </h4>
                  <p className="text-xs text-[#475569] mb-4">
                    Como reconhecer o seu progresso, mesmo quando o espelho ainda não mostra.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#E2E8F0]">
                    <div className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                      <Check className="w-3.5 h-3.5 text-[#0B343F] shrink-0 stroke-[3]" />
                      <span>Sinais invisíveis de evolução</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                      <Check className="w-3.5 h-3.5 text-[#0B343F] shrink-0 stroke-[3]" />
                      <span>Fim da comparação injusta</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                      <Check className="w-3.5 h-3.5 text-[#0B343F] shrink-0 stroke-[3]" />
                      <span>Métricas além da balança</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                      <Check className="w-3.5 h-3.5 text-[#0B343F] shrink-0 stroke-[3]" />
                      <span>Como manter a constância ativa</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Material #2 */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 flex flex-col justify-between shadow-xs">
                <div>
                  <span className="inline-block bg-[#0B343F]/10 text-[#0B343F] border border-[#0B343F]/20 text-[10px] font-black uppercase px-2.5 py-0.5 rounded mb-3">
                    MATERIAL INCLUSO #2
                  </span>
                  <h4 className="text-base sm:text-lg font-black text-[#0A0A0A] uppercase tracking-tight mb-1">
                    CHECKLIST DE 21 DIAS
                  </h4>
                  <p className="text-xs text-[#475569] mb-4">
                    Um passo por dia para recomeçar, sem pressão e sem complicação.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#E2E8F0]">
                    <div className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                      <Check className="w-3.5 h-3.5 text-[#0B343F] shrink-0 stroke-[3]" />
                      <span>1 micro-ação prática por dia</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                      <Check className="w-3.5 h-3.5 text-[#0B343F] shrink-0 stroke-[3]" />
                      <span>Acompanhamento visual diário</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                      <Check className="w-3.5 h-3.5 text-[#0B343F] shrink-0 stroke-[3]" />
                      <span>Feito para rotinas corridas</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                      <Check className="w-3.5 h-3.5 text-[#0B343F] shrink-0 stroke-[3]" />
                      <span>Construção de disciplina real</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bloco de Destaque: 2 SUPER BÔNUS EXCLUSIVOS INCLUSOS HOJE */}
            <div className="w-full flex flex-col gap-4 mt-3">
              <div className="flex items-center gap-2 self-center sm:self-start bg-amber-500/10 border border-amber-500/30 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                <Gift className="w-4 h-4 text-amber-600 shrink-0" />
                <span>+ 2 SUPER BÔNUS EXCLUSIVOS LIBERADOS HOJE</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {/* Bônus #1: Treino Recomeço - Parte 2: O Programa Completo */}
                <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F8FAFC] border-2 border-[#0B343F]/25 rounded-2xl p-6 flex flex-col justify-between shadow-xs relative overflow-hidden group">
                  <div className="absolute top-0 right-0 bg-[#0B343F] text-white text-[9px] font-black uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                    BÔNUS #1 • 100% GRÁTIS
                  </div>

                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#0B343F]/10 text-[#0B343F] flex items-center justify-center mb-3">
                      <Dumbbell className="w-5 h-5" />
                    </div>

                    <div className="text-xs font-mono text-[#64748B] mb-1">
                      Valor separado: <span className="line-through">R$ 47,00</span> • <span className="text-[#0B343F] font-bold">Hoje: R$ 0,00</span>
                    </div>

                    <h4 className="text-base sm:text-lg font-black text-[#0A0A0A] uppercase tracking-tight mb-1.5">
                      TREINO RECOMEÇO - PARTE 2: O PROGRAMA COMPLETO
                    </h4>
                    <p className="text-xs text-[#475569] mb-4 leading-relaxed">
                      O programa completo de exercícios práticos para fazer em casa ou onde quiser. Projetado para destravar seu corpo, acelerar o metabolismo e queimar gordura sem exigir aparelhos caros.
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[#E2E8F0]">
                      <div className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#0B343F] shrink-0 stroke-[3]" />
                        <span>Treinos objetivos de 15 a 25 minutos por dia</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#0B343F] shrink-0 stroke-[3]" />
                        <span>Pode ser feito em casa com o peso do próprio corpo</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#0B343F] shrink-0 stroke-[3]" />
                        <span>Adaptado com níveis Suave, Moderado e Dinâmico</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#0B343F] shrink-0 stroke-[3]" />
                        <span>Focado em tonificar, recuperar fôlego e queimar calorias</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bônus #2: Receitas Recomeço */}
                <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F8FAFC] border-2 border-[#0B343F]/25 rounded-2xl p-6 flex flex-col justify-between shadow-xs relative overflow-hidden group">
                  <div className="absolute top-0 right-0 bg-[#0B343F] text-white text-[9px] font-black uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                    BÔNUS #2 • 100% GRÁTIS
                  </div>

                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#0B343F]/10 text-[#0B343F] flex items-center justify-center mb-3">
                      <Utensils className="w-5 h-5" />
                    </div>

                    <div className="text-xs font-mono text-[#64748B] mb-1">
                      Valor separado: <span className="line-through">R$ 37,00</span> • <span className="text-[#0B343F] font-bold">Hoje: R$ 0,00</span>
                    </div>

                    <h4 className="text-base sm:text-lg font-black text-[#0A0A0A] uppercase tracking-tight mb-1.5">
                      RECEITAS RECOMEÇO
                    </h4>
                    <p className="text-xs text-[#475569] mb-4 leading-relaxed">
                      Um guia de receitas deliciosas, fáceis e econômicas preparadas com ingredientes comuns de supermercado para você comer bem, desinchar e emagrecer sem passar fome.
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[#E2E8F0]">
                      <div className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#0B343F] shrink-0 stroke-[3]" />
                        <span>Alimentos normais e acessíveis que você já tem em casa</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#0B343F] shrink-0 stroke-[3]" />
                        <span>Preparo rápido e descomplicado para o dia a dia</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#0B343F] shrink-0 stroke-[3]" />
                        <span>Pratos que trazem saciedade prolongada e diminuem a ansiedade</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#0B343F] shrink-0 stroke-[3]" />
                        <span>Sem dietas restritivas malucas ou receitas mirabolantes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================
            6. SECTION: ANCORAGEM DE PREÇO
            ======================================================== */}
        <section className="w-full max-w-lg mx-auto bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 text-center flex flex-col shadow-xs">
          <p className="text-xs sm:text-sm text-[#64748B] mb-5 font-medium">
            Tudo isso separado poderia custar:
          </p>

          <div className="space-y-3 text-xs sm:text-sm border-b border-[#E2E8F0] pb-5 mb-5">
            <div className="flex items-center justify-between text-[#334155]">
              <span>1. Como Sair do Fundo do Poço (Guia Principal)</span>
              <span className="font-mono font-bold">R$ 47</span>
            </div>
            <div className="flex items-center justify-between text-[#334155]">
              <span>2. Como Perceber Que Você Está Evoluindo</span>
              <span className="font-mono font-bold">R$ 27</span>
            </div>
            <div className="flex items-center justify-between text-[#334155]">
              <span>3. Checklist Prático de 21 Dias</span>
              <span className="font-mono font-bold">R$ 17</span>
            </div>
            <div className="flex items-center justify-between text-[#334155]">
              <span>4. BÔNUS: Treino Recomeço - O Programa Completo</span>
              <span className="font-mono font-bold">R$ 47</span>
            </div>
            <div className="flex items-center justify-between text-[#334155]">
              <span>5. BÔNUS: Livro Digital Receitas Recomeço</span>
              <span className="font-mono font-bold">R$ 37</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-base sm:text-lg font-black mb-5">
            <span className="text-[#64748B]">Valor total acumulado:</span>
            <span className="text-[#0B343F] line-through font-mono text-xl sm:text-2xl">
              R$ 175
            </span>
          </div>

          <div className="w-full bg-[#0B343F] text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider">
            Mas hoje você leva o Kit completo + os 2 bônus por apenas R$ 9,90.
          </div>
        </section>

        {/* ========================================================
            7. SECTION: O QUE MUDA QUANDO ENCONTRA DIREÇÃO?
            ======================================================== */}
        <section className="w-full flex flex-col items-center max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0A0A0A] leading-tight mb-8">
            O que pode mudar quando você finalmente encontra direção?
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full mb-8">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0A0A0A] shadow-xs">
              <Check className="w-4 h-4 text-[#0B343F] stroke-[3] shrink-0" />
              <span>Mais disposição</span>
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0A0A0A] shadow-xs">
              <Check className="w-4 h-4 text-[#0B343F] stroke-[3] shrink-0" />
              <span>Menos culpa diária</span>
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0A0A0A] shadow-xs">
              <Check className="w-4 h-4 text-[#0B343F] stroke-[3] shrink-0" />
              <span>Mais clareza mental</span>
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0A0A0A] shadow-xs">
              <Check className="w-4 h-4 text-[#0B343F] stroke-[3] shrink-0" />
              <span>Mais autoestima</span>
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0A0A0A] shadow-xs">
              <Check className="w-4 h-4 text-[#0B343F] stroke-[3] shrink-0" />
              <span>Controle da rotina</span>
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0A0A0A] shadow-xs">
              <Check className="w-4 h-4 text-[#0B343F] stroke-[3] shrink-0" />
              <span>Mais confiança</span>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-xs sm:text-sm text-[#64748B]">
              Porque recomeçar não é apenas tentar mudar de vida.
            </p>
            <p className="text-base sm:text-lg font-black text-[#0B343F]">
              É recuperar sua presença.
            </p>
          </div>
        </section>

        {/* ========================================================
            8. SECTION: OFERTA ESPECIAL (CHECKOUT CARD EM VERDE PETRÓLEO)
            ======================================================== */}
        <section id="oferta" className="w-full max-w-xl mx-auto bg-gradient-to-b from-[#0B343F] via-[#0B343F] to-[#07242C] text-white rounded-3xl p-6 sm:p-10 text-center flex flex-col items-center relative shadow-2xl border border-[#0B343F]">
          
          {/* Badge OFERTA ESPECIAL */}
          <div className="bg-white/15 border border-white/30 text-white text-[10px] sm:text-xs font-black uppercase px-3.5 py-1 rounded-full tracking-wider mb-5">
            OFERTA ESPECIAL
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2">
            KIT RECOMEÇO + CHECKLIST + 2 SUPER BÔNUS
          </h3>

          <div className="text-xs sm:text-sm text-white/60 line-through font-mono mt-1 mb-1">
            De: R$ 175,00
          </div>

          <span className="text-xs sm:text-sm text-white/80 font-medium">
            Por apenas:
          </span>

          {/* Preço Gigante R$ 9,90 */}
          <div className="flex items-baseline justify-center gap-1 my-2">
            <span className="text-2xl sm:text-3xl font-black text-white">R$</span>
            <span className="text-6xl sm:text-7xl font-black text-white tracking-tighter font-mono tabular-nums">
              9,90
            </span>
          </div>

          <p className="text-xs text-white/70 mb-6 font-medium">
            Pagamento único. Acesso imediato a todos os 5 materiais.
          </p>

          {/* CTA Principal de Compra */}
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white hover:bg-slate-100 active:scale-[0.98] transition-all text-[#0B343F] font-black text-base sm:text-lg py-4 sm:py-4.5 px-6 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer no-underline group"
          >
            <span>QUERO MEU ACESSO AGORA</span>
            <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Formas de Pagamento e Selo Seguro */}
          <div className="flex items-center justify-center gap-2 text-xs text-white/75 mt-4 font-medium">
            <Lock className="w-3.5 h-3.5 text-white" />
            <span>Pagamento 100% Seguro · Pix e Cartão</span>
          </div>
        </section>

        {/* ========================================================
            9. SECTION: QUEBRA DE OBJEÇÕES ("E SE...")
            ======================================================== */}
        <section className="w-full max-w-3xl mx-auto flex flex-col gap-4">
          
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] border-l-4 border-l-[#0B343F] rounded-xl p-5 sm:p-6 text-left shadow-xs">
            <h4 className="text-sm sm:text-base font-black text-[#0A0A0A] mb-1.5">
              “E se eu já tentei de tudo?”
            </h4>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Talvez justamente por isso você precise parar de procurar extremos. O Kit Recomeço não pede perfeição. Pede continuidade com passos simples que respeitam o seu momento.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E2E8F0] border-l-4 border-l-[#0B343F] rounded-xl p-5 sm:p-6 text-left shadow-xs">
            <h4 className="text-sm sm:text-base font-black text-[#0A0A0A] mb-1.5">
              “E se eu não tiver tempo?”
            </h4>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              O método foi criado para quem tem rotina real e corrida. Passos objetivos que levam de 5 a 15 minutos por dia, sem precisar revirar sua vida de cabeça para baixo.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E2E8F0] border-l-4 border-l-[#0B343F] rounded-xl p-5 sm:p-6 text-left shadow-xs">
            <h4 className="text-sm sm:text-base font-black text-[#0A0A0A] mb-1.5">
              “E se eu desistir?”
            </h4>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Você não precisa acertar todos os dias. O Checklist de 21 Dias foi desenhado exatamente para acolher seus tropeços e te manter no jogo sem desânimo.
            </p>
          </div>

        </section>

        {/* ========================================================
            10. SECTION: RISCO ZERO (GARANTIA DE 7 DIAS)
            ======================================================== */}
        <section className="w-full max-w-2xl mx-auto bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center shadow-xs">
          <div className="w-12 h-12 rounded-full bg-[#0B343F]/10 border border-[#0B343F]/20 flex items-center justify-center text-[#0B343F] mb-3">
            <ShieldCheck className="w-6 h-6" />
          </div>

          <h3 className="text-lg sm:text-xl font-black text-[#0A0A0A] uppercase tracking-tight">
            RISCO ZERO
          </h3>
          <span className="text-xs font-bold text-[#0B343F] uppercase tracking-wider mb-3">
            Garantia incondicional de 7 dias
          </span>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-lg">
            Conheça o material. Leia. Aplique. Se sentir que não é para você, basta solicitar o reembolso dentro do prazo. Sem burocracia e sem ressentimentos.
          </p>
        </section>

        {/* ========================================================
            11. SECTION: FAQ (PERGUNTAS FREQUENTES)
            ======================================================== */}
        <section className="w-full max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0A0A0A] uppercase tracking-tight mb-6 text-center">
            Perguntas Frequentes
          </h2>

          <div className="w-full space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl overflow-hidden transition-colors shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    type="button"
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer hover:bg-[#F8FAFC]"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#0A0A0A] pr-4">
                      {item.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#64748B] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0B343F]' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9] pt-3 animate-in fade-in duration-150">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            12. SECTION: CHAMADA FINAL
            ======================================================== */}
        <section className="w-full max-w-3xl mx-auto text-center flex flex-col items-center py-6 sm:py-10 border-t border-[#E2E8F0]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0A0A0A] leading-tight mb-3">
            Sua vida não muda por acaso.
          </h2>

          <p className="text-sm sm:text-base text-[#475569] mb-6">
            Ela muda quando você decide <span className="font-bold text-[#0A0A0A]">parar de recomeçar sozinho.</span>
          </p>

          <div className="space-y-1 mb-8 text-xs sm:text-sm text-[#64748B]">
            <p>Você não precisa esperar segunda-feira.</p>
            <p>Não precisa esperar motivação perfeita.</p>
            <p className="text-[#0B343F] font-black text-sm sm:text-base mt-2">
              Precisa apenas começar.
            </p>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#0B343F] hover:bg-[#07242C] active:scale-[0.98] transition-all text-white font-black text-sm sm:text-base py-4 sm:py-4.5 px-8 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer no-underline group"
          >
            <span>SIM, EU QUERO FAZER MEU RECOMEÇO</span>
            <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
          </a>
        </section>

        {/* ========================================================
            13. FOOTER
            ======================================================== */}
        <footer className="w-full text-center py-8 border-t border-[#E2E8F0] text-xs text-[#64748B] space-y-2">
          <p>© 2026 Kit Recomeço. Todos os direitos reservados.</p>
          <p className="max-w-md mx-auto text-[11px] text-[#94A3B8]">
            Os resultados podem variar de pessoa para pessoa. Este produto não substitui o acompanhamento de um profissional de saúde.
          </p>
        </footer>

      </main>

      <Analytics />
    </div>
  );
}
