import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer';
import ItemlistContainer from './../components/ItemListContainer';
import Layout from './Layout';

const RoutesConfig = () => (
    <BrowserRouter>

        <Routes>   
            <Route element={<Layout />}>
                <Route path="/" element={<ItemlistContainer />} />
                <Route path="/category/:catId" element={<ItemlistContainer />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
    
                <Route path="*" element={<div>404</div> } />
            </Route>

        </Routes>
    </BrowserRouter>
);

export default RoutesConfig;