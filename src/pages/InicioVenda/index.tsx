import React, { FormEvent, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// import { Fi } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form } from './styles';

const Dashboard: React.FC = () => {
    const history = useHistory();
    const [inputError, setInputError] = useState('');
    const [newRepo, setNewRepo] = useState('');
    async function handleAddRepository(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        history.push('/teste');
    }
    return (
        <>
            <Title>Executar Venda</Title>

            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <h1>teste</h1>
                <input
                    value={newRepo}
                    onChange={e => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositorio"
                />
                <button type="submit">Salvar</button>
            </Form>
        </>
    );
};

export default Dashboard;
