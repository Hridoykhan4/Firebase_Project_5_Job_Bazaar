import { NavLink } from "react-router-dom";

const Categories = ({category}) => {
    return (
       <div className="flex flex-col space-y-5 items-start">
         <NavLink to={`/category/${category.category_name}`} className="btn my-1">   
            {category?.category_name}
        </NavLink>
       </div>
    );
};

export default Categories;