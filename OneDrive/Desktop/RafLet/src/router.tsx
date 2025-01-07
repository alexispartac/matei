import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Account from './components/Account';
import Favorite from './components/Favorite';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import Promotions from './components/Promotions';
import Man from './components/Man';
import Woman from './components/Woman';
import Admin from './components/Admin';

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account/>} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />

            <Route path="/promotions" element={<Promotions />} />
            <Route path="/man" element={<Man />} />
            <Route path="/woman" element={<Woman />} />
            
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default PageRoutes;