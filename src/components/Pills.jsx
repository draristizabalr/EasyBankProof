import { PropTypes } from 'prop-types'

export function Pills ({ pills }) {
  const icons = {
    facebook: '/icons/icon-facebook.svg',
    youtube: '/icons/icon-youtube.svg',
    twitter: '/icons/icon-twitter.svg',
    pinterest: '/icons/icon-pinterest.svg',
    instagram: '/icons/icon-instagram.svg'
  }
  return (
    <section className='w-full flex flex-row justify-between'>
      {pills.map((pill, index) => (
        <img
          key={index + pill}
          src={icons[pill]}
          alt={`icon ${pill}`}
          className='w-6 h-6'
        />
      ))}
    </section>
  )
}

Pills.propTypes = {
  pills: PropTypes.arrayOf(PropTypes.string).isRequired
}
