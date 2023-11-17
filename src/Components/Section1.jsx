
const Section1 = () => {
  return (
    <section className='mt-[-30px]'>
            <p className='text-gray-500 text-center sm:text-left'>Revolutionize Your</p>
            <div className='text-center sm:text-left font-semibold '>
                <h1 className='md:text-6xl sm:text-5xl text-2xl'>Creative Projects with
                    <br />
                    the Ultimate AI-Powered
                    <span className='sm:hidden'> Pattern</span>
                </h1>
                <div className='sm:flex sm:flex-row sm:gap-6 sm:items-center flex flex-col sm:w-full w-52 mx-auto gap-5'>
                    <h1 className='md:text-6xl sm:text-5xl hidden sm:block sm:order-1'>Pattern</h1>
                    <button className='order-last bg-black text-white rounded-full h-10 px-5 sm:order-2'>
                        Start Generating
                    </button>
                    <p className='order-first text-gray-500 sm:order-3'>
                        The Next Generation <br />
                        <span className='text-black font-bold'>Production </span>
                        for Designers
                    </p>
                </div>
            </div>
    </section>
  )
}

export default Section1
