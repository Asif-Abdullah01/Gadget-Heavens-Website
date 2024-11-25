import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import './Active.css'

const Categories = ({ categories }) => {
    return (
        <div role="tablist" className="tabs">

            <div className="flex flex-col justify-center items-center">
            <NavLink to={`/`} role="tab" className={({isActive}) => `tab text-lg ${isActive ? 'active':''}`}>All Products</NavLink>
            </div>
            {
                categories.map(category => (
                    <div className="flex flex-col justify-center items-center" key={category.id}>
                        <div className="p-2">
                        <NavLink key={category.category} to={`/category/${category.category}`} role="tab" 
                        className={({isActive}) => `tab text-lg ${isActive ? 'active':''}`}>
                            {category.category}
                        </NavLink>
                        </div>
                    </div>
                ))
            }
        </div>

    );
};

Categories.propTypes = {
    categories: PropTypes.array
};

export default Categories;