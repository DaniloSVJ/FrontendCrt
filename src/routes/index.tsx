import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import FormaPagamento from '../pages/FormaPagamento/index';
import Produtos from '../pages/Produtos/index';
import PDV from '../pages/PDV/index';
// Switch vai garantir que apenas uma rota seja visivel
// //<Route path="/" exact component={Produtos} />
const Routes: React.FC = () => (
    <BrowserRouter>
        <Route path="/" exact component={Produtos} />
        <Route path="/formapagamento" exact component={FormaPagamento} />

        <Route path="/produtos" exact component={Produtos} />
    </BrowserRouter>
);

export default Routes;
