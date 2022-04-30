import { useState } from "react";
import { Link, Route } from "react-router-dom";
import Items from "./Items";
import "./Categories.scss";

function Category() {
    const [categories, setCategories] = useState([]);

    fetch("https://stream-restaurant-menu-svc.herokuapp.com/category")
        .then(res => res.json())
        .then(result => {
            setCategories(result);
        });

    return (
        <div>
            <h4>Menu Categories</h4>
            <ul>{categories.map((category) => {
                    return (
                        <li key={category.id}>
                            <Link to={`/categories/items/${category.short_name}`}>
                                {category.name} - ({category.short_name})
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <Route path="/categories/items/:categoryId">
                <Items />
            </Route>         
        </div>
    );
}

export default Category;