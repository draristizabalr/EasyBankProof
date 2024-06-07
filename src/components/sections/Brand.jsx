export function Brand () {
  return (
    <section className='h-[34em] px-40 flex justify-between items-center gap-8 bg-gradient-to-b from-VeryLightGray to-White'>
      <div className='h-full w-1/2 flex flex-col justify-center items-start gap-4'>
        <h1 className='text-6xl'>Next generation digital banking</h1>
        <p className='text-slate-400 text-lg'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <button className='gradient-button mt-4'>
          Request Invite
        </button>
      </div>
      <div>
        <img
          src='/images/bg-intro-desktop.svg' alt='background image'
          className='absolute h-[53em] -right-64 -top-40 z-0 overflow-hidden'
        />
        <img
          src='/images/image-mockups.png' alt='mobiles image'
          className='absolute h-[49em] z-20 -top-8 -right-8 overflow-hidden'
        />
      </div>
    </section>
  )
}
