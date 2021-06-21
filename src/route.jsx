import {BrowserRouter, Route, Switch} from 'react-router-dom';
import checkout from './pages/checkout';
import configuracao from './pages/Configuracao';


function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={checkout} />
                <Route path='/configuracao' exact component={configuracao} />
            </Switch>
        </BrowserRouter>
    );
}
 
export default Routes;