import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getItemsAsync, deleteItemAsync, deleteItemsAsync} from "../redux/items/thunks";
import styles from '../styles/Inventory.module.css';
import { Modal } from "./Modal";
const Inventory = () => {
    const items = useSelector(state => state.items.list);
    const [openModal, setOpenModal] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItemsAsync());
    }, []);


    const handleDelete = (item) => {
        dispatch(deleteItemAsync(item));
    };

    const handleDeleteAll = () => {
        dispatch(deleteItemsAsync());
    };

    const handleOpenModal = (index) => {
        setActiveItem(index);
        setSelectedItem(items[index]); // Set the selected item when opening the modal
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setActiveItem(null);
        setSelectedItem(null); // Clear the selected item when closing the modal
        setOpenModal(false);
    };

    return (
        <div>
            <ul  className={styles.inventory}>
                {[].concat(items).map((item, index) => (
                    <li key={index}  className={styles.inventoryItem}>
                        <h2>{item.name}</h2>
                        <img src={item.image} alt={item.name} width="150" height="150" />
                        <p>Price: ${item.price}</p>
                        <button className={styles.deleteButton} onClick={() => handleDelete(item)}>X</button>
                        <button
                            className="open-modal-button"
                            onClick={() => handleOpenModal(index)}
                        >
                            Details
                        </button>
                        {openModal
                            && activeItem === index
                            && <Modal openModal={openModal} setOpenModal={handleCloseModal} item={selectedItem} />}
                    </li>
                ))}
            </ul>
            <button onClick={handleDeleteAll}>Delete All</button>
        </div>
    );
};

export default Inventory;