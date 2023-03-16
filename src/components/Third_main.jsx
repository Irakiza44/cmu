import cmu2 from '../img/cmu2.png'
import cmu from '../img/cmu.png'
import 'animate.css';
const Third_main = () => {
    return (
        <div className="">
            <div className="grid grid-cols-2 ml-32 mr-52 mb-28 ">
                <div className="  w-4/5 cursor-pointer">
                    <div className=" flex">
                        <img src={cmu} alt="" className='w-1/2 h-auto' />
                        <div className='flex flex-col'>
                            <h1 className='ml-4 mb-20 flex flex-col text-3xl font-bold'>
                                <p className=''>MAR</p>
                                <p>9</p>
                            </h1>
                            <p className='ml-4 text-gray-500 mb-3 text-sm'>ROBOTICS</p>
                            <p className='ml-4 font-bold text-3xl mb-4'>Engineering breakthrough in softbotics</p>
                            <p className='ml-4 text-xl hover:border-b-4 border-black'>Introducing the first soft material that can maintain a high enough electrical conductivity to support power hungry devices.
                                <svg className="h-12 text-sm text-red-700 mt-6 w-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg></p>
                        </div>
                    </div>
                </div>
                <div className=" mt-56 w-4/5 pb-8 cursor-pointer">
                    <div className=" flex">
                        <img src={cmu2} alt="" className='w-1/2 h-auto' />
                        <div className='flex flex-col'>
                            <h1 className='ml-4 mb-20 flex flex-col text-3xl font-bold'>
                                <p>MAR</p>
                                <p>9</p>
                            </h1>
                            <p className='ml-4 text-gray-500 mb-3 text-sm '>ARTIFICIAL INTELLIGENCE</p>

                            <p className='ml-4 font-bold text-3xl mb-4'>U.S. Chamber AI Commission releases final report</p>
                            <p className='ml-4 text-xl hover:border-b-4 border-black'>Conrad Tucker served as a commissioner on the US Chamber AI Commission aimed to
                                position the US as a leader in responsible AI development and deployment. The commission’s final report has been released.
                                <svg className="h-12 text-sm text-red-700 mt-6 w-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex justify-center mb-32'>
                <button className='px-10 py-6 bg-white border text-gray-700 flex gap-4 hover:animate__animated animate__slideOutLeft hover:bg-red-700 hover:text-gray-200'>BROWSE RECENT NEWS
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
export default Third_main