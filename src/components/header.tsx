import nlwUniteIcon from '../assets/nlw-unite-icon.svg'
import { NavLink } from './nav-link'

export function Header() {
  // Adicionar formatação condicional no menu de navegação (Link ativo zinc-50 e inativo zinc-200)

  return (
    <header className="flex items-center gap-5">
      <img src={nlwUniteIcon} alt="nlw unite icon" />
      <nav className="flex items-center gap-5 font-medium text-sm">
        <NavLink href="/events">Eventos</NavLink>
        <NavLink href="/participants" isActive>
          Participantes
        </NavLink>
      </nav>
    </header>
  )
}
