import './styles/App.module.css';

import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import Inventory from './components/Inventory';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {store} from "./redux/store";
import { Provider } from 'react-redux';

const App = () => (
    <Provider store={store}>
    <BrowserRouter>
        <Navbar />
        <Form />
        <Routes>
            <Route path="/"element={<Inventory />} />
            <Route path="/About" element={<About />}/>
        </Routes>
    </BrowserRouter>
    </Provider>
);

export default App;

