import { useState } from "react";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";

const Dashboard = () => {
    const [status, setStatus] = useState(true);

    const handleActiveBtn = (selectedBtn) => {
        selectedBtn === 'cart' ? setStatus(true) : setStatus(false);
    }

    return (
        <div>
            <div className="bg-[#9538E2] text-white text-center py-8 space-y-6">
                <h2 className="text-4xl">Product Details</h2>
                <p className="text-xl w-[60%] mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="space-x-4">
                    <button onClick={() => handleActiveBtn('cart')} className={`btn border px-8 rounded-3xl text-xl font-bold hover:bg-white hover:text-[#9538E2] ${status?'bg-white text-[#9538E2]' : 'bg-transparent text-white'}`}>Cart</button>
                    <button onClick={() => handleActiveBtn('wishList')} className={`btn border px-8 rounded-3xl text-xl font-bold hover:bg-white hover:text-[#9538E2] ${!status?'bg-white text-[#9538E2]' : 'bg-transparent text-white'}`}>Wishlist</button>
                </div>
            </div>

            <div className="bg-[#F6F6F6]">
                {
                    status? <Cart></Cart>: <Wishlist></Wishlist>
                }
            </div>




        </div>
    );
};

export default Dashboard;