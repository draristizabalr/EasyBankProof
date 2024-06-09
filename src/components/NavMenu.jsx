import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

export function NavMenu ({ navItems }) {
  const activeLink = (e) => {
    const navChild = document.querySelectorAll('.nav-child')
    navChild.forEach(item => {
      item.classList.remove('active')
    })
    e.currentTarget.classList.add('active')
  }

  return (
    <ul className='nav-child gap-8'>
      {navItems.map(({ name, href }, index) => (
        <li
          key={index + name}
          className='nav-child'
          onClick={(e) => activeLink(e)}
        >
          <Link to={href}>{name}</Link>
        </li>
      ))}
    </ul>
  )
}

NavMenu.propTypes = {
  navItems: PropTypes.array.isRequired
}
