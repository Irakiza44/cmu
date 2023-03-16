const Footer=()=>{
    return(
        <div className="bg-gray-100 p-32">
        <div className=" flex">
            <ul className="flex gap-12 mb-16">
                <li className="text-2xl font-bold">Contact</li>
                <li className="text-2xl font-bold">Make a gift</li>
                <li className="text-2xl font-bold">For faculty & staff</li>
                <li className="text-2xl font-bold">About us</li>
                <li className="text-2xl font-bold">Directory</li>
                
            </ul>
            <p className="ml-32 text-lg font-bold">Carnegie Mellon University</p>
        </div>
        <div className="flex gap-24 mb-32">
            <p className="w-3/5">“There's nothing I believe in more strongly than getting young people interested in science and engineering, for a better tomorrow, for all humankind.” Bill Nye</p>
            <span>
                <p className="mb-6">College of Engineering 5000 Forbes Avenue Pittsburgh, PA 15213</p>
                <p>©2023 Carnegie Mellon University Legal</p>
            </span>
            
        </div>
        </div>
    )
}
export default Footer