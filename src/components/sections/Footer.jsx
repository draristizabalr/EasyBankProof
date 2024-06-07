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
    { title: 'Careers', to: '/carrers' },
    { title: 'Contact', to: '/contact' },
    { title: 'Support', to: '/support' },
    { title: 'Blog', to: '/blog' },
    { title: 'Privacy Policy', to: '/privacy-policy' }
  ]

  return (
    <footer className='w-full h-48 px-40 py-10 bg-DarkBlue flex flex-row justify-start'>
      <div className='w-40 flex flex-col justify-between items-center'>
        <img
          src='/images/logo-white.svg'
          alt='logo EasyBank white'
        />
        <Pills pills={icons} />
      </div>
      <div className='py-2 grid grid-rows-3 grid-cols-2 ml-60 gap-x-24'>
        <FooterMenu links={links} />
      </div>
      <div className='ml-auto flex flex-col justify-between items-end '>
        <button className='gradient-button'>
          Request Invite
        </button>
        <p className='text-slate-500'>
          © Easybank. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
