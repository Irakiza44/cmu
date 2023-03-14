const Main = () => {
    return (
        <div>
            <div className="pt-32 pb-32">
                <p className="pl-0 text-center text-8xl font-bold">Carnegie Mellon
                    <strong className="text-red-700 text-8xl">+</strong>Engineering</p>
            </div>
            <div className="grid grid-cols-2 pl-32 pb-16 gap-32 border-b-4">
                <di>
                    <h1 className="text-5xl font-bold mb-8">
                        Focusing on innovative, interdisciplinary, and global education and research,</h1>
                    <p className="text-xl">the College of Engineering is well-known for working on problems of both scientific and practical importance. Our acclaimed faculty focus on transformative results that will drive the intellectual and economic vitality of our community, nation and world. Our “maker” culture is ingrained in all that we do, leading to novel approaches and unprecedented results.</p>
                </di>
                <ul className="pl-12 w-3/5 flex flex-col">
                    <li className="btn">About the College
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="arrow w-12 h-9 ml-20">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </li>
                    <li className="btn">Contact us<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="arrow  ml-36 flex w-12 h-9">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg></li>
                    <li className="btn "> <p className="  ">Make a gift</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-36 flex w-12 h-9">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg></li>
                
                </ul>
            </div>

            <div className="w-3/5 text-2xl object-center ml-32 mb-20 mt-12 bg-slate-200 flex flex-row">
                <p className="pl-4 bg-red-700"></p>
                <div>
                <p className="mb-6">The College of Enginering is offering a new Master of Science in Artificial Intelligence Engineering (MS AIE) 
                    degree that combines the fundamentals of AI with engineering domain knowledge and culminates in an integrated capstone project.</p> 
                
                  <p  className="mb-6">Learn more about the <strong className="text-red-700">Master’s of AI Engineering degree.</strong></p>
               </div>
            </div>
        </div>
    )
}
export default Main;