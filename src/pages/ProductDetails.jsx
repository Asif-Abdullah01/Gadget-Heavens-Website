import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { IoIosStar } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import { addToCart, addToWishList, getAllProductsFromWishList } from "../Utils";

const ProductDetails = () => {
    const { id } = useParams();
    const allProductsData = useLoaderData();

    const [product, setProduct] = useState({});
    const [isInWishList, setIsInWishList] = useState(false);

    useEffect(() => {
        const selectedProduct = allProductsData.find(product => product.id === parseInt(id))

        setProduct(selectedProduct);

        const wishList = getAllProductsFromWishList();
        const isExist = wishList.find(item => item.id === selectedProduct.id);

        if (isExist) {
            setIsInWishList(true);
        }
        else setIsInWishList(false);
    }, [allProductsData, id])

    const { product_title, price, availability, description, specification, rating, product_image } = product || {};

    const handleWishList = (product) => {
        addToWishList(product)
        setIsInWishList(true);
        // getAllProductsFromWishList();
    }

    const handleCart = (product) => {
        addToCart(product);
        // getAllProductsFromCart();
    }

    return (
        <div>
            <div className="bg-[#9538E2] text-white text-center py-8 pb-52 relative z-11 space-y-6">
                <h2 className="text-4xl">Product Details</h2>
                <p className="text-xl w-[60%] mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="bg-[#F6F6F6] min-h-96"></div>
            <div className="flex w-9/12 mx-auto rounded-2xl absolute z-12 top-72 left-20 right-20 p-6 bg-white gap-4">
                <div className="w-[33%]">
                    <img className="w-full h-full object-cover" src={product_image} alt="" />
                </div>
                <div className="space-y-2">
                    <p className="text-3xl font-bold">{product_title}</p>
                    <p className="text-xl font-bold">Price: ${price}</p>
                    <button className={`border-2 text-base ${availability ? 'border-[#309C08] bg-[#309C08]/10' : 'border-red-700 bg-red-100'} text-[#309C08] py-1 px-4 rounded-3xl`}>
                        {availability ? 'In Stock' : 'Out Of Stock'}
                    </button>
                    <p className="text-lg text-slate-500">{description}</p>
                    <h3 className="font-bold text-xl">Specification:</h3>

                    <ol className="list-decimal ml-4">
                        {
                            specification?.map((feature, idx) => <li className="text-slate-500 text-base font-medium" key={idx}>{feature}</li>)
                        }
                    </ol>

                    <div className="flex items-center gap-2">
                        <p className="text-lg">Rating</p>
                        <IoIosStar className="text-yellow-500 text-lg" />
                    </div>

                    <div className="flex items-center">
                        <Rating
                            initialRating={product.rating}
                            readonly={true}
                            fullSymbol={<FaStar size={20} color="gold"></FaStar>}
                            emptySymbol={<FaStar size={20} color="gray"></FaStar>}
                        ></Rating>
                        <div className="ml-2">
                            <p className="px-4 py-2 bg-slate-200 rounded-3xl">{rating}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">

                        <div onClick={() => handleCart(product)} className="cursor-pointer flex items-center gap-2 bg-[#9538E2] p-3 rounded-full text-white text-base">
                            <button className="font-bold">Add to Cart</button>
                            <MdOutlineShoppingCart></MdOutlineShoppingCart>
                        </div>

                        <button disabled={isInWishList} onClick={() => handleWishList(product)} className="text-black bg-white rounded-full border-2 cursor-pointer btn p-2" >
                            <CiHeart size={32} />
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;