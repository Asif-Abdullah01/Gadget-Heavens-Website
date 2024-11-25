import { useEffect, useState } from "react";
import { getAllProductsFromWishList, removeFromWishList } from "../Utils";
import CartWishList from "./CartWishList";

const Wishlist = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const wishList = getAllProductsFromWishList()
        setProducts(wishList)
    }, [])

    const handleRemove = (id) => {
        removeFromWishList(id);
        const wishList = getAllProductsFromWishList()
        setProducts(wishList)
    }

    return (
        <div className="w-10/12 mx-auto pb-8">

            <div className="py-4">
                <h2 className="text-2xl font-bold">WishList</h2>
            </div>

            <div>
                {
                    products.map(product => <CartWishList handleRemove={handleRemove} key={product.id} product={product}></CartWishList>)
                }
            </div>
        </div>
    );
};

export default Wishlist;