import { Image } from '../Image'

export function Brand () {
  return (
    <section className='flex flex-col-reverse px-8 sm:px-40 sm:grid grid-cols-2 h-[34em] max-h-[34em] w-full bg-gradient-to-b from-VeryLightGray to-White'>
      <div className='h-full flex flex-col justify-center gap-4 items-center sm:items-start pb-14'>
        <h1 className='text-3xl text-center sm:text-6xl'>Next generation digital banking</h1>
        <p className='text-slate-400 text-md text-center sm:text-lg'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <button className='gradient-button mt-4'>
          Request Invite
        </button>
      </div>
      <Image className='relative w-full right-0 top-10 sm:-right-32' />
    </section>
  )
}
