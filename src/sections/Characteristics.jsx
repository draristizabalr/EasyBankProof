import { CardCharacteristics } from '../components/CardCharacteristics'

export function Characteristics () {
  const characteristics = [
    {
      title: 'Online Banking',
      description: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
      icon: 'icon-online.svg'
    },
    {
      title: 'Simple Budgeting',
      description: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
      icon: 'icon-budgeting.svg'
    },
    {
      title: 'Fast Onboarding',
      description: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
      icon: 'icon-onboarding.svg'
    },
    {
      title: 'Open API',
      description: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
      icon: 'icon-api.svg'
    }
  ]

  return (
    <section className='py-14 px-8 sm:px-40  z-10 bg-gradient-to-b from-VeryLightGray to-LightGrayishBlue'>
      <div className='mt-14 w-full sm:w-1/2 flex flex-col justify-start gap-8'>
        <h1 className='text-4xl text-center sm:text-start'>
          Why choose Easybank?
        </h1>
        <p className='text-lg text-center sm:text-start text-slate-400'>
          We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
        </p>
      </div>
      <div className='mt-16 flex flex-col h-auto sm:flex-row justify-between gap-14'>
        <CardCharacteristics characteristics={characteristics} />
      </div>
    </section>
  )
}
