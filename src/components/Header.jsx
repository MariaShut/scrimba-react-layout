import './Header.css'
import logoReact from './../assets/react.svg'

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__container flex">
        <img className="header__logo" src={logoReact} alt="react-logo" />
        <nav className='nav'>
            <ul className="nav__list list-reset flex">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
      </div>
    </header>
  )
}