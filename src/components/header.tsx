import nlwUniteIcon from '../assets/nlw-unite-icon.svg'

export function Header() {
  // Adicionar formatação condicional no menu de navegação (Link ativo zinc-50 e inativo zinc-200)

  return (
    <header className="flex items-center gap-5">
      <img src={nlwUniteIcon} alt="nlw unite icon" />
      <nav className="flex items-center gap-5 font-medium text-sm">
        <a href="/events" className="text-zinc-300 hover:text-orange-200">
          Eventos
        </a>
        <a href="/participants" className="text-zinc-50 hover:text-orange-200">
          Participantes
        </a>
      </nav>
    </header>
  )
}
