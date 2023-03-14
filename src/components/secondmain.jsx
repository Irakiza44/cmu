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

            <div className="grid grid-cols-3 mb-6 ml-32">
                <div>hello</div>
                <div>
                    <img src={cmu} alt="cmu" className='object-cover h-screen w-full'/>
                </div>
                <div>hello</div>
            </div>

        </div>
    )
}
export default Secondmain;