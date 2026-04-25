"use client"

import { useState } from "react"
import { Gift, Heart, Copy, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const PIX_KEY = "sua-chave-pix-aqui"
const GIFT_REGISTRY_URL = "https://lista.exemplo.com"

export function WeddingRegistry() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Erro ao copiar:", err)
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-24%20at%2021.12.03-gP5qob0ZQQ7ACl8TjUqCObLBNV3mLf.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-white/90 font-sans text-sm tracking-[0.3em] uppercase">
              Nosso Casamento
            </span>
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-medium text-white mb-3 drop-shadow-lg text-balance">
            Ronald & Ryane
          </h1>
          
          <p className="text-white/90 font-serif text-xl md:text-2xl mb-4 tracking-wide">
            31 de Julho de 2026
          </p>
          
          <div className="flex items-center justify-center gap-3 text-white/80">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/60" />
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/60" />
          </div>
        </div>

        {/* Cards Container */}
        <div className="w-full max-w-md space-y-4 animate-slide-up">
          {/* Gift Registry Card */}
          <Card className="backdrop-blur-md bg-card border-white/20 shadow-2xl overflow-hidden group hover:shadow-primary/20 transition-all duration-500">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <Gift className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-xl text-card-foreground">Lista de Presentes</h2>
                  <p className="text-sm text-muted-foreground font-sans">
                    Escolha um presente especial para nós
                  </p>
                </div>
              </div>
              
              <Button 
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans tracking-wide group-hover:scale-[1.02] transition-transform duration-300"
                size="lg"
              >
                <a 
                  href={GIFT_REGISTRY_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Gift className="w-4 h-4" />
                  Ver Lista de Presentes
                </a>
              </Button>
            </div>
          </Card>

          {/* PIX Card */}
          <Card className="backdrop-blur-md bg-card border-white/20 shadow-2xl overflow-hidden group hover:shadow-accent/20 transition-all duration-500">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="font-serif text-xl text-card-foreground">Presente em Dinheiro</h2>
                  <p className="text-sm text-muted-foreground font-sans">
                    Contribua com qualquer valor via PIX
                  </p>
                </div>
              </div>

              <div className="mb-4 p-3 bg-secondary/50 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground font-sans mb-1">Chave PIX:</p>
                <p className="font-mono text-sm text-card-foreground break-all">{PIX_KEY}</p>
              </div>
              
              <Button 
                onClick={copyToClipboard}
                variant="outline"
                className="w-full border-accent/50 hover:bg-accent/10 text-card-foreground font-sans tracking-wide group-hover:scale-[1.02] transition-all duration-300"
                size="lg"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2 text-green-600" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copiar Chave PIX
                  </>
                )}
              </Button>
            </div>
          </Card>
        </div>

        {/* Footer Message */}
        <p className="mt-8 text-center text-white/70 font-sans text-sm max-w-xs animate-fade-in-delayed">
          Agradecemos de coração por fazer parte deste momento tão especial em nossas vidas
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delayed {
          animation: fade-in 1s ease-out 0.8s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
