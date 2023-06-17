import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, deleteAll } from '../redux/actions';
import styles from '../styles/Inventory.module.css';
const Inventory = () => {
    const items = useSelector(state => state.items);
    const dispatch = useDispatch();

    const handleDelete = (index) => {
        dispatch(deleteItem(index));
    };

    const handleDeleteAll = () => {
        dispatch(deleteAll());
    };

    return (
        <div>
            <ul  className={styles.inventory}>
                {items.map((item, index) => (
                    <li key={index}  className={styles.inventoryItem}>
                        <h2>{item.name}</h2>
                        <img src={item.image} alt={item.name} width="150" height="150" />
                        <p>{item.description}</p>
                        <p>Price: ${item.price}</p>
                        <button onClick={() => handleDelete(index)}>X</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleDeleteAll}>Delete All</button>
        </div>
    );
};

export default Inventory;