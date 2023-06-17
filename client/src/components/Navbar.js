import React from 'react';
import styles from '../styles/Navbar.module.css';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <a href="/"><Link to="/">Home</Link></a>
            <a href="/about"><Link to="/About">About</Link></a>
        </div>
    );
};

export default Navbar;
