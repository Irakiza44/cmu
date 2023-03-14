import Main from './Main';
const Navigation = () => {
    return (
        <div className='border-b '>
        <div className=" pt-16 flex justify-evenly pl-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
            <div>
                <p className="text-red-700 font-bold text-xl">Carnegie Mellon Universty</p>
                <p className="text-2xl">College of Engineering</p>
            </div>

            <div>
                <ul className="flex gap-12">
                    <li className="list"><h1 className="head1">01</h1> Research</li>
                    <li className="list"><h1 className="head1">02</h1> Education</li>
                    <li className="list"><h1 className="head1">03</h1>Industry & Innovation</li>
                </ul>
            </div>

            <div className="flex gap-4 ">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="side">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="side">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <p className="side">Menu</p>

            </div>

        </div>
        <Main/>
        
        </div>
    )
}
export default Navigation;