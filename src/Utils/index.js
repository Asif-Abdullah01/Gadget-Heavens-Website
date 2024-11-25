//get all products from local storage

import toast from "react-hot-toast";

const getAllProductsFromCart = () => {
    const all = localStorage.getItem('cart');

    if (all) {
        const cart = JSON.parse(all);
        // console.log(cart);
        return cart;
    }
    else {
        // console.log([]);
        return [];
    }
}

const getAllProductsFromWishList = () => {
    const all = localStorage.getItem('wishList');

    if (all) {
        const wishList = JSON.parse(all);
        return wishList;
    }
    else return [];
}

// add a product to local storage

const addToCart = (product) => {
    const cart = getAllProductsFromCart();
    const isExist = cart.find(item => item.id === product.id);

    if (isExist) return toast.error('You have already added this product to your cart');
    console.log(cart);
    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
    toast.success('Successfully Added!!')
}

const addToWishList = (product) => {
    const wishList = getAllProductsFromWishList();
    const isExist = wishList.find(item => item.id === product.id);

    if (isExist) return toast.error('You have already added this product to your cart');
    console.log(wishList);
    wishList.push(product)
    localStorage.setItem('wishList', JSON.stringify(wishList))
    toast.success('Successfully Added!!',{duration:2000})
}


//remove a product from local storage

const removeFromCart = (id) => {
    const cart = getAllProductsFromCart()
    const remaining = cart.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(remaining))
    toast.success('Data Removed Successfully!!')
}


const removeAllCart = () => {
    const remaining = [];
    localStorage.setItem('cart', JSON.stringify(remaining))
    toast.success('All Data Removed Successfully!!')

}

const removeFromWishList = (id) => {
    const Wishlist = getAllProductsFromWishList()
    const remaining = Wishlist.filter(item => item.id !== id)
    localStorage.setItem('wishList', JSON.stringify(remaining))
    toast.success('Data Removed Successfully!!')
}



export { addToWishList, addToCart, getAllProductsFromCart, getAllProductsFromWishList, removeFromCart, removeFromWishList, removeAllCart }