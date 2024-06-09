import { PropTypes } from 'prop-types'

export function Image ({ className }) {
  const classes = className ? ' ' + className : ''
  return (
    <div className={classes}>
      <img
        src='/images/bg-intro-desktop.svg'
        alt='background desktop image'
        className='hidden sm:block w-full h-auto scale-[1.25] transform -translate-y-24 translate-x-16'
      />
      <img
        src='/images/bg-intro-mobile.svg'
        alt='background mobile image'
        className='block sm:hidden w-full h-auto'
      />
      <img
        src='/images/image-mockups.png'
        alt='mobiles image'
        className='absolute w-[60%] sm:w-[70%] h-auto transform -translate-x-1/2 sm:translate-x-56 left-1/2 sm:left-0 top-12 sm:-top-4 scale-125 overflow-visible'
      />
    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string
}
