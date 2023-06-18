import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemAsync } from '../redux/items/thunks';
import styles from '../styles/Form.module.css';
const Form = () => {
    const [item, setItem] = useState({ name: '', description: '', price: '', image: '' });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addItemAsync(item));
        setItem({ name: '', description: '', price: '', image: '' });
    };

    const handleChange = (e) => setItem({ ...item, [e.target.name]: e.target.value });

    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit} >
                <input type="text" name="name" value={item.name} onChange={handleChange} placeholder="Item Name" />
                <input type="text" name="description" value={item.description} onChange={handleChange} placeholder="Item Description" />
                <input type="number" name="price" value={item.price} onChange={handleChange} placeholder="Item Price" />
                <input type="text" name="image" value={item.image} onChange={handleChange} placeholder="Image URL" />
                <button type="submit">Add Item</button>
            </form>
        </div>

    );
};

export default Form;