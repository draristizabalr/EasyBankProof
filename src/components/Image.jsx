import { PropTypes } from 'prop-types'

export function Image ({ className }) {
  const classes = className ? ' ' + className : ''
  return (
    <div className={classes}>
      <img
        src='/images/bg-intro-desktop.svg'
        alt='background desktop image'
        className='hidden sm:block w-full h-auto'
      />
      <img
        src='/images/bg-intro-mobile.svg'
        alt='background mobile image'
        className='block sm:hidden w-full h-auto'
      />
      <img
        src='/images/image-mockups.png'
        alt='mobiles image'
        className='absolute w-4/5 h-auto left-[10%] -top-4 sm:-top-28 sm:w-full scale-110'
      />
    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string
}
