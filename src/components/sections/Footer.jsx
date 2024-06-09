import { Pills } from '../Pills'
import { FooterMenu } from '../FooterMenu'

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
    <footer className='w-full h-fit flex gap-y-5 sm:h-48 py-10 px-0 sm:px-40 sm:py-10 bg-DarkBlue flex-col sm:flex-row justify-start items-center'>
      <div className='w-1/2 sm:w-40 flex flex-col gap-6 sm:justify-between items-center'>
        <img
          src='/images/logo-white.svg'
          alt='logo EasyBank white'
        />
        <Pills pills={icons} />
      </div>
      <div className='py-2 grid gap-y-3 sm:grid-flow-col sm:grid-rows-3 grid-cols-1 sm:grid-cols-2 sm:ml-60 gap-x-24'>
        <FooterMenu links={links} />
      </div>
      <div className='sm:ml-auto flex flex-col gap-6 sm:justify-between items-center sm:items-end '>
        <button className='gradient-button'>
          Request Invite
        </button>
        <p className='text-slate-400'>
          © Easybank. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
