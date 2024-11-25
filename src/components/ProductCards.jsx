import { useLoaderData, useLocation, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const ProductCards = () => {
    const data = useLoaderData();
    // console.log(data);
    const { category } = useParams()
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const [products, setProducts] = useState([]);
    const { pathname } = useLocation();

    useEffect(() => {
        if (category) {
            const filteredByCategory = [...data].filter(
                product => product.category === category
            )
            setProducts(filteredByCategory);
        }
        else setProducts(data.slice(0, 9));
    }, [data, category])

    const handleClick = () => {
        setProducts(data);
        setIsButtonDisabled(true); // Disable the button after it's clicked
      };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    products.map(product => (<Card key={product.id} product={product}></Card>))
                }
            </div>

            {
                pathname === '/' && <button className='text-base font-bold btn h-auto w-auto py-2 px-5 text-[#9538E2] border border-[#9538E2] bg-transparent rounded-3xl hover:bg-[#9538E2] hover:text-white' onClick={handleClick} disabled={isButtonDisabled}>
                    View All
                </button>
            }

        </>
    );
};

export default ProductCards;