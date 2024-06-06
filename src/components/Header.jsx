export function Header () {
  return (
    <header className='z-20 bg-white sticky top-0 h-24 flex justify-between items-center'>
      <img src='/images/logo.svg' alt='easybank' />
      <nav className='nav'>
        <ul className='nav-child gap-8'>
          <li className='nav-child active:border-b-2 border-LimeGreen'>
            <a href='#'>Home</a>
          </li>
          <li className='nav-child active:border-b-2 border-LimeGreen'>
            <a href='#'>About</a>
          </li>
          <li className='nav-child active:border-b-2 border-LimeGreen'>
            <a href='#'>Contact</a>
          </li>
          <li className='nav-child active:border-b-2 border-LimeGreen'>
            <a href='#'>Blog</a>
          </li>
          <li className='nav-child active:border-b-2 border-LimeGreen'>
            <a href='#'>Careers</a>
          </li>
        </ul>
      </nav>
      <button className=' bg-gradient-to-r from-LimeGreen to-BrightCyan text-white px-8 py-2 rounded-full'>
        Request Invite
      </button>
    </header>
  )
}
