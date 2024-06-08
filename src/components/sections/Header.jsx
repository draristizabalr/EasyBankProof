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
    <header className='h-16 z-30 px-40 bg-white sticky top-0 flex justify-between items-center'>
      <img src='/images/logo.svg' alt='easybank' />
      <nav className='h-full nav'>
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
      <button className='gradient-button'>
        Request Invite
      </button>
    </header>
  )
}
