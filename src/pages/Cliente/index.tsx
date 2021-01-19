import { Divider } from 'antd';
import React, { FormEvent, useState } from 'react';

import { useLocation, useParams } from 'react-router-dom';
import api from '../../services/api';

const PageCliente: React.FC = () => {
    const location = useLocation();
    const [troco, setTroco] = useState(0);
    const [idlinha, setIdLinha] = useState(0);
    const [vlrIncial, setVlrIncial] = useState(0);
    return (
        <div>
            <div>
                <h1>Ola</h1>
            </div>
            <div>
                <h1>Ola</h1>
            </div>
            <div>
                <h1>Ola</h1>
            </div>
        </div>
    );
};
export default PageCliente;
