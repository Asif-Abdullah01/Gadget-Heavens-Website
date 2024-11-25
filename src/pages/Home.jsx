
import { Outlet, useLoaderData } from 'react-router-dom';
import Hero from './../components/Hero';
import Categories from '../components/Categories';

const Home = () => {
    const categories = useLoaderData();
    // console.log(categories);

    return (
        <div className="bg-[#F6F6F6] pb-12">

            <div className='min-h-[900px] w-11/12 mx-auto'>
                <Hero></Hero>
            </div>

            <div className='mainSection w-10/12 mx-auto flex gap-4'>
                <div className='w-2/12 bg-white rounded-xl h-[100%] mt-1 py-4'>
                    <Categories categories={categories}></Categories>
                </div>
                <div className='w-10/12'>
                   <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Home;