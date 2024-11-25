
import { useEffect, useState } from "react";
import { PiSliders } from "react-icons/pi";
import { getAllProductsFromCart, removeAllCart, removeFromCart } from "../Utils";
import CartProduct from "./CartProduct";
import toast from "react-hot-toast";
import modalImage from '../assets/Group.png'
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        const cart = getAllProductsFromCart()
        setProducts(cart)
    }, [])
    const [totalPrice, setTotalPrice] = useState(0);
    const [priceTemp, setPriceTemp] = useState(totalPrice);


    const handleRemove = (id) => {
        removeFromCart(id);
        const cart = getAllProductsFromCart()
        setProducts(cart)
    }

    const handleRemoveAll = () => {
        const cartBeforeRemove = getAllProductsFromCart()
        if (cartBeforeRemove.length === 0) {
            toast.error('There is no products on cart')
        }
        else {
            setIsModalOpen(true);
            calculateTotalPrice();
            removeAllCart();
            const cart = getAllProductsFromCart()
            setProducts(cart)
            
        }

    }

    useEffect(() => {
        let sum = 0;
        products.map(product => setTotalPrice(sum += product.price));
        setTotalPrice(sum.toFixed(2));
    }, [products, totalPrice])

    const handleSort = () => {
        const sortedProductsData = [...products].sort((a, b) => b.price - a.price)
        setProducts(sortedProductsData);
    }
    const navigate = useNavigate();

    const handleCloseModal = () => {
        navigate('/')
        setIsModalOpen(false);
    };

    const calculateTotalPrice = () => {
        // Example price logic: 
        const price = totalPrice; // Set the actual price here
        setPriceTemp(price); // Set the calculated total price
      };


    return (

        <div className="w-10/12 mx-auto pb-8">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold">Cart</h2>
                </div>
                <div className="flex items-center gap-2 mt-3">
                    <h2 className="text-2xl font-bold">Total Cost: {totalPrice}</h2>

                    <button onClick={() => handleSort()} className="btn text-[#9538E2] bg-transparent border border-[#9538E2] rounded-full hover:bg-[#9538E2] hover:text-white text-base font-bold">Sort by Price <PiSliders /></button>

                    <button onClick={() => handleRemoveAll()} className="btn bg-[#9538E2] border border-[#9538E2] rounded-full hover:bg-transparent text-white hover:text-[#9538E2] hover:border-[#9538E2]  text-base font-bold">Purchase</button>

                    {isModalOpen && (
                        <div className="modal modal-open">
                            <div className="modal-box text-center">
                                <div className="flex justify-center items-center py-4">
                                    <img className="w-24 h-24" src={modalImage} alt="" />
                                </div>
                                <h3 className="font-bold text-2xl">Payment Successfully</h3>
                                <div className="divider"></div>
                                <p className="font-medium text-lg text-[#09080F]/60">Thanks For Purchasing</p>
                                <p className="py-2 text-lg font-medium text-[#09080F]/60">Total: ${priceTemp}</p>
                                <div className="modal-action">
                                    <button className="btn w-full rounded-3xl font-bold text-xl" onClick={handleCloseModal}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            <div>
                {
                    products.map(product => <CartProduct handleRemove={handleRemove} key={product.id} product={product}></CartProduct>)
                }
            </div>

        </div>
    );
};

export default Cart;