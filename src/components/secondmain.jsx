import cmu1 from '../img/cmu1.png'
import cmu from '../img/cmu.png'
const Secondmain = () => {
    return (
        <div className="">
            <div className="grid grid-cols-4 mt-32 ml-32 gap-10 mb-16 mr-60 flex-c">
                <div className="hover:border-b-4 hover:border-black cursor-pointer">
                    <p className="text-2xl font-bold mb-6 text-red-700 hover:text-black">Increasing transmission efficiency would cut air pollution</p>
                    <p className="text-sm text-gray-400">ENERGY & ENVIRONMENT</p>

                    <svg className="h-12 text-sm text-red-700 mt-6 w-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                    </div>
                    
                <div className="hover:border-b-4 hover:border-black cursor-pointer">
                    <p className="text-2xl font-bold mb-6 text-red-700 hover:text-black">Delivering mRNA therapeutics to the pancreas</p>

                    <p className="text-sm text-gray-400">HEALTH & BIOMEDICINE</p>
                    <svg className="h-12 text-sm text-red-700 mt-6 w-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>

                </div>
                <div className="hover:border-b-4 hover:border-black cursor-pointer">
                    <p className="text-2xl font-bold mb-6 text-red-700 hover:text-black">It takes two: analyzing neural activity from calcium imaging</p>

                    <p className="text-sm text-gray-400">HEALTH & BIOMEDICINE</p>
                    <svg className="h-12 text-sm text-red-700 mt-6 w-20 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </div>
                <div className="hover:border-b-4 hover:border-black cursor-pointer">
                    <p className="text-2xl font-bold mb-6 text-red-700 hover:text-black ">Driving autonomy into the metaverse</p>

                    <p className="text-sm text-gray-400">ADVANCED MANUFACTURING</p>
                    <svg className="h-12 text-sm text-red-700 mt-6 w-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </div>
            </div>

            <div className="grid grid-cols-3 ml-32 mb-8 border-b pb-32 mr-32">
                <div className='text-2xl'>
               <p>MAR </p>
                <p className='text-5xl mb-8'>14</p> 

                <p className='text-6xl mb-6 '>Improving air quality in Africa</p>
                   <p className='text-2xl'>CMU-Africa, CMU-Pittsburgh, and global collaborators create an air quality testing center in Ghana with new funding from the Clean Air Fund.</p>
                </div>
                <div>
                    <img src={cmu1} alt="cmu" className='object-cover h-screen w-full'/>
                </div>
                <div className='ml-8 '>
                    <h1 className='font-bold text-6xl border-b-4 mb-4 pb-8 border-black mr-32'>Top 5</h1>
                    <div className='grid grid-rows-5'>
                        <div className='flex mb-4'>
                            <span className='mr-4'>01</span>
                                <span > 
                                    <p>Lab work makes for easier class work</p>
                                    <span className=''>MARCH 7, 2023</span>
                                </span>
                        </div>
                        <div className='flex'>
                            <span className='mr-4'>02</span>
                                <span > 
                                    <p>New air quality data from East Palestine, Ohio</p>
                                    <span className=''>MARCH 2, 2023</span>
                                </span>
                        </div>
                        <div className='flex'>
                            <span className='mr-4'>03</span>
                                <span > 
                                    <p>Presidential and graduate fellowships awarded</p>
                                    <span className=''>FEBRUARY 28, 2023</span>
                                </span>
                        </div>
                        <div className='flex'>
                            <span className='mr-4'>04</span>
                                <span > 
                                    <p>All eyes on “forever chemicals”</p>
                                    <span className=''>FEBRUARY 23, 2023</span>
                                </span>
                        </div>
                        <div className='flex'>
                            <span className='mr-4'>05</span>
                                <span > 
                                    <p>New hope for people living with paralysis after stroke</p>
                                    <span className=''>FEBRUARY 20, 2023</span>
                                </span>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Secondmain;