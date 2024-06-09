import { CardArticle } from '../CardArticle'

export function Articles () {
  const articles = [
    {
      autor: 'Claire Robinson',
      title: 'Receive money in any currency with no fees',
      body: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
      img: '/images/image-currency.jpg',
      alt: 'currency'
    },
    {
      autor: 'Wilson Hutton',
      title: 'Treat yourself without worrying about money',
      body: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
      img: '/images/image-restaurant.jpg',
      alt: 'restaurant'
    },
    {
      autor: 'Wilson Hutton',
      title: 'Take your Easybank card wherever you go',
      body: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
      img: '/images/image-plane.jpg',
      alt: 'plane'
    },
    {
      autor: 'Claire Robinson',
      title: 'Our invite-only Beta accounts are now live!',
      body: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …',
      img: '/images/image-confetti.jpg',
      alt: 'confetti'
    }
  ]

  return (
    <section className='w-full px-8 sm:px-40 py-20 bg-gradient-to-b from-white to-LightGrayishBlue'>
      <h2 className='text-4xl mb-12 text-center sm:text-start'>
        Latest Article
      </h2>
      <article className='flex flex-col sm:flex-row justify-center gap-8'>
        <CardArticle articles={articles} />
      </article>
    </section>
  )
}
