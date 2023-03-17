import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
const Footer=()=>{
    return(
        <div className="bg-gray-100 p-32">
        <div className=" flex">
            <ul className="flex gap-12 mb-16">
                <li className="text-2xl font-bold"> <Link>Contact</Link></li>
                <li className="text-2xl font-bold"><Link>Make a gift</Link></li>
                <li className="text-2xl font-bold"><Link>For faculty & staff</Link></li>
                <li className="text-2xl font-bold"><Link>About us</Link></li>
                <li className="text-2xl font-bold"><Link>Directory</Link></li>
                
            </ul>
            <p className="ml-32 text-lg font-bold">Carnegie Mellon University</p>
        </div>
        <div className="flex gap-24 mb-12">
            <p className="w-3/5"><span className='font-bold'>“There's nothing I believe in more strongly than getting young people interested in 
            science and engineering, for a better tomorrow, for all humankind.”</span> <span className='text-xl'>-Bill Nye</span></p>
            
            <span>
                <p className="mb-6">College of Engineering 
                <p>5000 Forbes Avenue </p>
                Pittsburgh, PA 15213</p>
                <p>©2023 Carnegie Mellon University Legal</p>
            </span>
            
        </div>
        <div className='gap-4'>
            <SocialIcon url="https://twitter.com" className='mr-4'/>
            <SocialIcon url="https://facebook.com" className='mr-4'/>
            <SocialIcon url="https://linkedin" className='mr-4'/>
            <SocialIcon url="https://youtube.com" className='mr-4'/>
            <SocialIcon url="https://instagram.com" className='' />
        </div>
        </div>
    )
}
export default Footer