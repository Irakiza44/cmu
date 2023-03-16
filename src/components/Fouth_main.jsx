import cmu33 from '../img/cmu3.gif'
import cmu1 from '../img/cmu (4).jpg'
import cmu2 from '../img/cmu (3).jpg'
import cmu3 from '../img/cmu (9).png'
import cmu4 from '../img/cmu (10).jpg'
import cmu5 from '../img/cmu (1).jpg'
import cmu6 from '../img/cmu (8).jpg'
import cmu7 from '../img/cmu (7).jpg'
import cmu8 from '../img/cmu (6).jpg'
import cmu9 from '../img/cmu (5).jpg'

import { Link } from "react-router-dom"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Fouth_main = () => {
    return (
        <div className=" border-b mb-32">
            <div className="border p-28 mb-8 ">
                <div className="flex flex-row">
                    <p className=" pl-3 py-4 bg-red-600"></p>
                    <p className="items-center py-0 ml-4 text-3xl w-3/4">If you’d like to write about our research or inquire about partnerships,<Link to="#"><span className="text-red-700 font-bold"> please contact us.</span></Link> </p>
                </div>
            </div>
            <div className="mb-32 pb-32 flex flex-col border-b">
                <p className='text-6xl'>The most complex problems. The most diverse experts.</p>
                <div className="flex flex-row w-11/12">
                    <div className=''><p className='mt-60'>The most complex problems. The most diverse experts.
                        Advanced collaboration gif of building a sculpture.
                        Advanced Collaboration® is how the College of Engineering
                        solves the world’s greatest problems.</p></div>
                    <div><img src={cmu33} className='w-screen mr-32 object-cover' /></div>
                </div>
            </div>
            <div className='mb-32 ml-32'>
                <p className='text-7xl font-bold ml-32 mb-16'>Our programs</p>
                <div>
                    <div class='container-fluid' >
                        <div className="row title" style={{ marginBottom: "20px" }} >
                        </div>
                    </div>
                    <div class='container-fluid' >
                        <OwlCarousel items={4}
                            className="owl-theme "
                            loop
                            nav
                            margin={8} >
                            <div className='flex flex-row'>
                                <img className="" src={cmu1} />
                            </div>
                            <div className='ml-4'>
                                <p className='text-gray-400 text-sm mb-8'>FEATURED PROGRAM</p>
                                <h1 className='font-bold text-5xl mb-16'>Biomedical Engineering</h1>
                                <p className='text-xl'>Collaborate across engineering disciplines and with cutting-edge medical facilities in Pittsburgh for a strong foundation in both biomedicine and traditional engineering.</p>
                            </div>
                            <div>
                                <img className="" src={cmu2} />
                            </div>
                            <div>
                                <p className='text-gray-400 text-sm mb-8'>FEATURED PROGRAM</p>
                                <h1 className='font-bold text-5xl mb-16'>Carnegie Mellon University Africa</h1>
                                <p className='text-xl'>Prepare to be a technology manager and innovator through a multidisciplinary curriculum with a special emphasis on emerging ICT innovations and applications in Africa.</p></div>
                            <div>
                                <img className="" src={cmu3} />
                            </div>
                            <div>
                                <p className='text-gray-400 text-sm mb-8'>FEATURED PROGRAM</p>
                                <h1 className='font-bold text-5xl mb-16'>Carnegie Mellon University Silicon Valley</h1>
                                <p className='text-xl'>Combine the rich heritage and resources of Carnegie Mellon’s Pittsburgh campus with the opportunities of the dynamic Silicon Valley business environment with programs designed to innovate in research and support entrepreneurs.</p>
                            </div>
                            <div>
                                <img className="" src={cmu4} />
                            </div>
                            <div>
                                <p className='text-gray-400 text-sm mb-8'>FEATURED PROGRAM</p>
                                <h1 className='font-bold text-5xl mb-16'>Chemical Engineering</h1>
                                <p className='text-xl'>Explore chemical and process systems engineering research and computing in one of the oldest chemical engineering programs in the country. </p>
                            </div>
                            <div>
                                <img className="" src={cmu5} />
                            </div>
                            <div>
                                <p className='text-gray-400 text-sm mb-8'>FEATURED PROGRAM</p>
                                <h1 className='font-bold text-5xl mb-16'>Civil &amp; Environmental Engineering</h1>
                                <p className='text-xl'>Gain hands-on experience, explore personal passions, and devise imaginative solutions to global challenges of climate change, energy efficiency, and more in environments both natural and constructed.</p>
                            </div>
                            <div>
                                <img className="" src={cmu6} />
                            </div>
                            <div>
                                <p className='text-gray-400 text-sm mb-8'>FEATURED PROGRAM</p>
                                <h1 className='font-bold text-5xl mb-16'>Engineering &amp; Public Policy</h1>
                                <p className='text-xl'>Prepare yourself for a career in any engineering discipline, fortified with the robust understanding of the economical, social, historical, and political factors that affect it.</p>
                            </div>
                            <div>
                                <img className="" src={cmu7} />
                            </div>
                            <div>
                                <p className='text-gray-400 text-sm mb-8'>FEATURED PROGRAM</p>
                                <h1 className='font-bold text-5xl mb-16'>Information Networking Institute</h1>
                                <p className='text-xl'>Develop technical, interdisciplinary skills in information networking, security, and mobile and IoT engineering while incorporating business and policy perspectives.</p>
                            </div>
                        </OwlCarousel>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Fouth_main