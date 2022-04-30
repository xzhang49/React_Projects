import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Items.scss';

function Items() {
    const [items, setItems] = useState([]);
    const params = useParams();
    const { categoryId } = params;

    useEffect(() => {
        fetch(`https://stream-restaurant-menu-svc.herokuapp.com/item?category=${categoryId}`)
        .then(res => res.json())
        .then(result => {
            setItems(result);
        });
    }, [categoryId]);
    
    return (
        <div>
            <h4>Items in Category: ({categoryId})</h4>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
                {items.map((item) => {
                    return(
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}

export default Items;
