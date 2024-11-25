import { RxCrossCircled } from "react-icons/rx";
import { PropTypes } from 'prop-types';

const CartProduct = ({product,handleRemove}) => {
    const {product_image,product_title,price,description,id} = product || {};
    
    return (
        <div>
            <div className='px-4 flex justify-between items-center rounded-xl my-4 bg-white'>
                    <div>
                        <div className='flex gap-4 items-center'>
                            <div>
                                <img className="w-36 h-36 rounder-xl" src={product_image} alt="" /> 
                            </div>
                            <div className="space-y-2">
                                <h2 className='font-bold text-2xl'>{product_title}</h2>
                                <p className="text-base font-medium text-slate-500">{description}</p>
                                <p className="font-medium text-lg">Price: ${price}</p>
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

CartProduct.propTypes = {
    product: PropTypes.object,
    handleRemove: PropTypes.func
};


export default CartProduct;