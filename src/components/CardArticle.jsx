import { PropTypes } from 'prop-types'

export function CardArticle ({ articles }) {
  return (
    <>
      {
        articles.map(({ title, autor, img, alt, body }, index) => (
          <article
            key={index + title}
            className='w-full aspect-[4/6] bg-white'
          >
            <img
              src={img}
              alt={alt}
              className='w-full h-1/2 object-cover'
            />
            <div className='w-full h-1/2 p-6 flex flex-col gap-2'>
              <h4 className='text-slate-500 text-xs'>
                By {autor}
              </h4>
              <h3 className='text-lg sm:text-xl font-medium'>
                {title}
              </h3>
              <p className='text-md leading-tight sm:leading-normal sm:text-xs text-slate-500'>
                {body}
              </p>
            </div>
          </article>
        ))
      }
    </>
  )
}

CardArticle.propTypes = {
  articles: PropTypes.array
}
