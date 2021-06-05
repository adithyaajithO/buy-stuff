import { Route, Redirect } from 'react-router-dom';
import BuyStuffLayout from './layouts/BuyStuffLayout';
import BuyStuffScreen from './screens/BuyStuff';

const Routes = () => (
    <>
        <Route path='/buy-stuff'>
            {/* <BuyStuffLayout> */}
                <BuyStuffScreen />
            {/* </BuyStuffLayout> */}
        </Route>
        <Redirect from='/' to='/buy-stuff' />
    </>
);

export default Routes;
