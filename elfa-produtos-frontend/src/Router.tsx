import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import ProductList from './pages/ProductsList';
import CreateProduct from './pages/CreateProduct';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<ProductList />} />
                <Route path="create" element={<CreateProduct />} />
            </Route>
        </Routes>
    );
}