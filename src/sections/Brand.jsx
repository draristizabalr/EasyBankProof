import { Image } from '../components/Image'

export function Brand () {
  return (
    <section className='flex flex-col-reverse sm:px-40 sm:grid grid-cols-2 h-[34em] max-h-[34em] w-full bg-gradient-to-b from-VeryLightGray to-white'>
      <div className='h-full px-8 sm:px-0 flex flex-col justify-center gap-4 items-center sm:items-start pb-14'>
        <h1 className='text-3xl text-center sm:text-4xl md:text-6xl sm:text-start'>Next generation digital banking</h1>
        <p className='text-slate-400 text-md text-center sm:text-lg sm:text-start'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <button className='gradient-button mt-4'>
          Request Invite
        </button>
      </div>
      <Image className='relative w-full sm:w-[768px] left-0 sm:left-48 top-10 sm:-top-4' />
    </section>
  )
}
