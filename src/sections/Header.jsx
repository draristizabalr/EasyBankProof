import { useState, useEffect } from 'react'
import { NavMenu } from '../components/NavMenu'
import { MovilMenu } from '../components/MovilMenu'
import { useNavigate } from 'react-router-dom'

export function Header () {
  const [menu, setMenu] = useState(false)
  useEffect(() => {
    if (menu) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [menu])

  const navigate = useNavigate()

  const icon = menu ? '/icons/icon-close.svg' : '/icons/icon-menu.svg'
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
      href: '/contact'
    },
    {
      name: 'Blog',
      href: '/blog'
    },
    {
      name: 'Careers',
      href: '/careers'
    }
  ]

  const clickMenu = () => {
    setMenu(!menu)
  }
  const closeMenu = () => {
    setMenu(false)
  }

  const clickLogo = () => {
    const links = document.querySelectorAll('.nav-child')
    links.forEach(link => {
      link.classList.remove('active')
    })
    links[1].classList.add('active')
    navigate('/')
  }

  return (
    <>
      <header className='relative px-8 h-16 z-30 bg-white flex justify-between items-center lg:px-40 hover:cursor-pointer'>
        <img src='/images/logo.svg' alt='easybank' onClick={clickLogo} />
        <nav className='h-full nav hidden sm:block'>
          <NavMenu navItems={navItems} />
        </nav>
        <button className='gradient-button hidden lg:scale-100 md:block scale-75 px-8 py-2'>
          Request Invite
        </button>
        <img
          src={icon}
          alt='movil menu'
          className='block h-9 aspect-square active:scale-95 sm:hidden'
          onClick={clickMenu}
        />

      </header>
      {menu && <MovilMenu navItems={navItems} closeMenu={closeMenu} />}
    </>
  )
}
