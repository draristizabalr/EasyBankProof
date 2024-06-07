import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

export function FooterMenu ({ links }) {
  return (
    <>
      {links.map((link, index) => (
        <Link key={index + link.title} to={link.to} className='text-slate-300 text-sm'>
          {link.title}
        </Link>
      ))}
    </>
  )
}

FooterMenu.propTypes = {
  links: PropTypes.array
}
