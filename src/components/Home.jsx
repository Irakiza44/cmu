import Navigation from './Navigation';
import Third_main from './Third_main';
import Secondmain from './secondmain';
const Home = () => {
    return (
        <div>
        <div className="pt-0 flex flex-row gap-2 ">
            <div className='bg-red-700 pr-4 h-auto'>
                
            </div>
            <Navigation />
            
            
        </div>
        <Secondmain/>
        <Third_main/>
        </div>
    )
}
export default Home;