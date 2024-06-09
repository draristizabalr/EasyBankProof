import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

export function MovilMenu ({ navItems, closeMenu }) {
  return (
    <div className='backdrop-popup'>
      <div open className='popup'>
        <nav className='h-full py-6 flex flex-col justify-between'>
          {navItems.map(({ name, href }, index) => (
            <Link
              key={index + name}
              to={href}
              className='text-black text-lg text-center'
              onClick={closeMenu}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

MovilMenu.propTypes = {
  navItems: PropTypes.array.isRequired,
  closeMenu: PropTypes.func.isRequired
}
