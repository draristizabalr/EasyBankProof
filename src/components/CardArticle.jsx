import { PropTypes } from 'prop-types'

export function CardArticle ({ articles }) {
  return (
    <>
      {
        articles.map((article, index) => (
          <article
            key={index + article}
            className='w-[22em] bg-white'
          >
            <img
              src={article.img}
              alt={article.alt}
              className='w-full aspect-[4/3] object-cover'
            />
            <div className='h-64 p-6 flex flex-col gap-4'>
              <h4 className='text-slate-500 text-sm'>
                By {article.autor}
              </h4>
              <h3 className='text-2xl font-medium'>
                {article.title}
              </h3>
              <p className='text-md text-slate-500'>
                {article.body}
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
