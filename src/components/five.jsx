import log from '../img/Advanced-Collaboration-Icon-2020.svg'
const Five=()=>{
    return(
        <div className="mb-16">
            <p className="mb-16 underline ml-32 font-bold text-8xl hover:text-red-700 cursor-pointer">Events</p>
            <div className="grid grid-cols-4 ml-32 grid-rows-6">
                <div className="mb-12">MARCH 21-24 2023</div>
                <div className="mb-32">
                    <p>Scott Institute for Energy Innovation</p>
                    <p>CMU Energy Week</p>
                </div>
                <div>Cohon University Center, Pittsburgh Campus</div>
                <div>Learn more and register</div>
                
                <div>
                    <p>MARCH 21 2023</p>
                    <p>2:00 PM - 5:00 PM ET</p>
                </div>
                <div>Energy Career Fair</div>
                <div>Pittsburgh Campus</div>
                <div>Register</div>

                <div>
                    <p>MARCH 29 2023</p>4
                    <p>:00 PM - 5:00 PM ET</p>
                </div>
                <div>Faculty Dialogues: The CMU-Mayo Clinic Transforming Transplant Initiative</div>
                <div></div>
                <div>Register</div>

                <div>
                    <p>MARCH 30 2023</p>
                    <p>12:00 PM - 12:55 PM ET</p>
                </div>
                <div>Crafting an IDP Part 3: Charting a course</div>
                <div>Virtual</div>
                <div>Register</div>

                <div>
                    <p>APRIL 20 2023</p>
                    <p>12:00 PM - 1:30 PM ET</p>
                </div>
                <div>Creating Websites and Portfolios with GitPages</div>
                <div>Sorrells Library Den, Wean Fourth Floor</div>
                <div>Register</div>

                <div>
                    <p>APRIL 24 2023</p>
                    <p>2:00 PM - 4:00 PM ET</p>
                </div>
                <div>
                    <p>Accelerator</p>
                    <p>National Science Foundation CAREER Program Workshop</p>
                </div>
                <div>Virtual</div>
                <div>Register</div>
            </div>

            <div className='flex justify-center mb-32'>
                <button className='px-10 py-6 bg-white border text-gray-700 flex gap-4 hover:animate__animated animate__slideOutLeft hover:bg-red-700 hover:text-gray-200'>BROWSE RECENT NEWS
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>
            <div className='flex justify-center'>
                <img src={log} alt='logo' className='h-40'/>
            </div>

        </div>
    )
}
export default Five