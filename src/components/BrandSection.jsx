export function BrandSection () {
  return (
    <section className='h-[500px] flex justify-between items-center gap-8'>
      <div className='h-full w-1/3 flex flex-col justify-center items-start gap-4'>
        <h2 className='text-5xl '>Next generation digital banking</h2>
        <p className='text-slate-400'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <button className='w-fit bg-gradient-to-r from-LimeGreen to-BrightCyan text-white px-8 py-2 rounded-full mt-4'>
          Request Invite
        </button>
      </div>
      <div>
        <img
          src='/images/bg-intro-desktop.svg' alt='background image'
          className='z-0 overflow-hidden'
        />
        <img
          src='/images/image-mockups.png' alt='mobiles image'
          className='z-10 absolute top-0 -right-32 overflow-hidden'
        />
      </div>
    </section>
  )
}
