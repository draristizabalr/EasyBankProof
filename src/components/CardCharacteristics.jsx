import { PropTypes } from 'prop-types'

export function CardCharacteristics ({ characteristics }) {
  return (
    <>
      {
        characteristics.map(({ icon, title, description }, index) => (
          <div key={index + title} className='w-full sm:w-auto flex flex-col justify-between items-center sm:items-start gap-8'>
            <img
              src={`/images/${icon}`}
              alt={`${title} icon`}
            />
            <div className='w-full'>
              <h2 className='text-2xl text-center sm:text-start'>{title}</h2>
              <br />
              <p className='text-md text-slate-400 text-center sm:text-start'>{description}</p>
            </div>
          </div>
        ))
      }
    </>
  )
}

CardCharacteristics.propTypes = {
  characteristics: PropTypes.array
}
