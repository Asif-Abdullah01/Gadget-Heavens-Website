import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const Card = ({product}) => {
    const {product_title, product_image , price,id} = product || {};
    const navigate = useNavigate();
    return (
        <div className="bg-white p-4 rounded-xl m-2 space-y-1">
            <img className="h-56 w-full object-cover rounded-xl" src={product_image} alt="Product Image" />
            <h2 className="text-xl font-bold">{product_title}</h2>
            <p className="font-medium">Price: ${price}</p>
            <button onClick={() =>  navigate(`/productDetails/${id}`)} className="text-base font-bold btn h-auto w-auto py-2 px-5 text-[#9538E2] border border-[#9538E2] bg-transparent rounded-3xl hover:bg-[#9538E2] hover:text-white">View Details</button>
        </div>
    );
};

Card.propTypes = {
    product: PropTypes.object
};

export default Card;