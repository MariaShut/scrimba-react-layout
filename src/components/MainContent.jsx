import './MainContent.css'

export const MainContent = () => {
  return (
    <main className='main'>
      <div className="container main__container">
        <h1 className='main__heading'>Fun facts about React</h1>
        <ul className='facts-list'>
          <li className='facts-list__item'>Was first released in 2013</li>
          <li className='facts-list__item'>Was originally created by Jordan Walke</li>
          <li className='facts-list__item'>Has well over 200K stars on GitHub</li>
          <li className='facts-list__item'>Is maintained by Meta</li>
          <li className='facts-list__item'>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </main>
  )
}