import { Sparkles } from 'lucide-react'

const messages = [
  'Examen de vue offert pour tout achat de montures',
  'Nouveautés : collection solaires 2025 disponible en boutique',
  '-20 % sur les verres progressifs jusqu\'à fin du mois',
  'Livraison gratuite sur Cotonou pour toute commande en ligne',
]

const repeated = [...messages, ...messages]

export function PromoBanner() {
  return (
    <div className="relative overflow-hidden border-b border-primary/20 bg-primary/5 backdrop-blur-sm">
      <div className="flex animate-[scroll_30s_linear_infinite] whitespace-nowrap">
        {repeated.map((msg, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-8 py-1.5 text-[11px] font-medium tracking-wide text-primary/80 uppercase"
          >
            <Sparkles className="size-3 shrink-0 opacity-60" />
            {msg}
          </span>
        ))}
      </div>
    </div>
  )
}
