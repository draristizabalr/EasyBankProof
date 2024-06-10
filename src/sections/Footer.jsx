import { Pills } from '../components/Pills'
import { FooterMenu } from '../components/FooterMenu'

export function Footer () {
  const icons = [
    'facebook',
    'youtube',
    'twitter',
    'pinterest',
    'instagram'
  ]

  const links = [
    { title: 'About Us', to: '/about' },
    { title: 'Contact', to: '/contact' },
    { title: 'Blog', to: '/blog' },
    { title: 'Careers', to: '/careers' },
    { title: 'Support', to: '/support' },
    { title: 'Privacy Policy', to: '/privacy-policy' }
  ]

  return (
    <footer className='w-full h-fit sm:h-48 py-10 sm:py-10 px-0 sm:px-40 flex flex-col sm:flex-row justify-start items-center bg-DarkBlue'>
      <div className='w-1/2 sm:w-40 flex flex-col gap-6 sm:justify-between items-center'>
        <img
          src='/images/logo-white.svg'
          alt='logo EasyBank white'
        />
        <Pills pills={icons} />
      </div>
      <div className='py-2 grid gap-y-3 sm:grid-flow-col sm:grid-rows-3 grid-cols-1 sm:grid-cols-2 md:ml-16 lg:ml-60 sm:gap-x-10 lg:gap-x-24'>
        <FooterMenu links={links} />
      </div>
      <div className='sm:ml-auto flex flex-col gap-6 sm:justify-between items-center sm:items-end '>
        <button className='gradient-button text-sm md:text-md py-1 md:py-2 px-2 md:px-8'>
          Request Invite
        </button>
        <p className='text-slate-400 text-sm text-end md:text-md'>
          © Easybank. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
