export function Header () {
  const navItems = [
    {
      name: 'Home',
      href: '#'
    },
    {
      name: 'About',
      href: '#'
    },
    {
      name: 'Contact',
      href: '#'
    },
    {
      name: 'Blog',
      href: '#'
    },
    {
      name: 'Careers',
      href: '#'
    }
  ]

  return (
    <header className='h-16 z-30 px-40 bg-white sticky top-0 flex justify-between items-center'>
      <img src='/images/logo.svg' alt='easybank' />
      <nav className='nav'>
        <ul className='nav-child gap-8'>
          {
            navItems.map((item, index) => (
              <li key={index + item.name} className='nav-child active:border-b-2 border-LimeGreen'>
                <a href={item.href}>{item.name}</a>
              </li>
            ))
          }
        </ul>
      </nav>
      <button className='gradient-button'>
        Request Invite
      </button>
    </header>
  )
}
