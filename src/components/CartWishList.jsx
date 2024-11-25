import { RxCrossCircled } from "react-icons/rx";
import { PropTypes } from 'prop-types';
import { addToCart } from "../Utils";
const CartWishList = ({ product,handleRemove }) => {

    const { product_image, product_title, price, description ,id} = product || {};


    const handleCart = (product) => {
        addToCart(product);
        // getAllProductsFromCart();
    }


    return (
        <div>
            <div className='px-4 flex justify-between items-center rounded-xl my-4 bg-white'>
                <div>
                    <div className='flex gap-4 items-center'>
                        <div>
                            <img className="w-56 h-56 rounded-xl" src={product_image} alt="" />
                        </div>
                        <div className="space-y-2">
                            <h2 className='font-bold text-2xl'>{product_title}</h2>
                            <p className="text-base font-medium text-slate-500">{description}</p>
                            <p className="font-medium text-lg">Price: ${price}</p>
                            <button onClick={() => handleCart(product)} className="font-bold bg-[#9538E2] px-3 py-2 rounded-3xl text-white">Add to Cart</button>
                   
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleRemove(id)}><RxCrossCircled className="text-4xl text-red-500" /></button>
                </div>
            </div>
        </div>
    );
};

CartWishList.propTypes = {
    product: PropTypes.object,
    handleRemove: PropTypes.func
};

export default CartWishList;