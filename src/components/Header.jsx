import './Header.css'
import logoReact from './../assets/react.svg'

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__container flex">
        <img className="header__logo" src={logoReact} alt="react-logo" />
        <h3 className='header__caption'>ReactFacts</h3>
        <h4 className='header__descr'>React Course - Project 1</h4>
      </div>
    </header>
  )
}