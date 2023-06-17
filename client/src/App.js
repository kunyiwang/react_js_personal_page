import './styles/App.module.css';

import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import Inventory from './components/Inventory';
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
        <Navbar /><Form />
        <Routes>
            <Route path="/"element={<Inventory />} />
            <Route path="/About" element={<About />}/>
        </Routes>
        </BrowserRouter>
    </Provider>
);

export default App;

