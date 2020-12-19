import React, { TableHTMLAttributes } from 'react';
// import { Fi } from 'react-icons/fi';
// import { FiChevronRight } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
import { Table } from './styles';

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
    label: string;
    name: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}
const Tables: React.FC<TableProps> = () => {
    // const { produto, setProduto } = useState('');

    return (
        <Table>
            <table id="customers" className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome Produto</th>
                        <th>Qtd</th>
                        <th>Valor</th>
                        <th>Ações</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Arroz do Papaidfdfdfdfdfdfdffdfdfdfdf</td>
                        <td>1</td>
                        <td>3,00</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Arroz do Papaidfdfdfdfdfdfdffdfdfdfdf</td>
                        <td>1</td>
                        <td>3,00</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Arroz do Papaidfdfdfdfdfdfdffdfdfdfdf</td>
                        <td>1</td>
                        <td>3,00</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Arroz do Papaidfdfdfdfdfdfdffdfdfdfdf</td>
                        <td>1</td>
                        <td>3,00</td>
                        <td> </td>
                    </tr>
                </thead>
            </table>
        </Table>
    );
};
export default Tables;
