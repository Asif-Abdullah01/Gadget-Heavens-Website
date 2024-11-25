import { useNavigate } from "react-router-dom";
import Banner from "./Banner";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-[#9538E2] relative z-10">
            <div className="text-center w-9/12 mx-auto py-12 pb-40"> 
                <div className="text-white space-y-6 pb-4">
                    <h2 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
                    <p className="text-lg md: w-8/12 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>

                <button onClick={()=> navigate('/dashboard')} className="bg-white text-xl py-3 px-6 text-[#9538E2] font-bold rounded-full">Shop Now</button>
            </div>

            <Banner></Banner>

            
        </div>
    );
};

export default Hero;