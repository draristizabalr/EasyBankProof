import { Link } from 'react-router-dom'

export function Header () {
  const navItems = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'About',
      href: '/about'
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

  const activeLink = (e) => {
    const navChild = document.querySelectorAll('.nav-child')
    navChild.forEach(item => {
      item.classList.remove('active')
    })
    e.currentTarget.classList.add('active')
  }

  return (
    <header className='relative px-8 h-16 z-30 bg-white flex justify-between items-center lg:px-40'>
      <img src='/images/logo.svg' alt='easybank' />
      <nav className='h-full nav hidden sm:block'>
        <ul className='nav-child gap-8'>
          {
            navItems.map((item, index) => (
              <li key={index + item.name} className='nav-child' onClick={(e) => activeLink(e)}>
                <Link to={item.href}>{item.name}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
      <button className='gradient-button hidden lg:scale-100 md:block scale-75 px-8 py-2'>
        Request Invite
      </button>
      <img
        src='/icons/icon-menu.svg'
        alt='movil menu'
        className='block h-10 aspect-square sm:hidden'
      />
    </header>
  )
}
