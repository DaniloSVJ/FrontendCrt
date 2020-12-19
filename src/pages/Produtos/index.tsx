import React, { FormEvent, useState, useEffect } from 'react';
// import { Fi } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Title, Form, Repositories } from './styles';
import api from '../../services/api';

const Dashboard: React.FC = () => {
    return (
        <>
            <Form>
                <div className="grid-container">
                    <div>
                        <label htmlFor="codigo">
                            Código de Barra
                            <input
                                id="codigo"
                                name="codigo"
                                type="text"
                                placeholder="Digite o código de Barra"
                            />
                        </label>
                    </div>

                    <div>
                        <label htmlFor="codigo">
                            Código de Barra
                            <input
                                id="codigo"
                                name="codigo"
                                type="text"
                                placeholder="Digite o código de Barra"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="codigo">
                            Código de Barra
                            <input
                                id="codigo"
                                name="codigo"
                                type="text"
                                placeholder="Digite o código de Barra"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="codigo">
                            Código de Barra
                            <input
                                id="codigo"
                                name="codigo"
                                type="text"
                                placeholder="Digite o código de Barra"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="codigo">
                            Código de Barra
                            <input
                                id="codigo"
                                name="codigo"
                                type="text"
                                placeholder="Digite o código de Barra"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="codigo">
                            Código de Barra
                            <input
                                id="codigo"
                                name="codigo"
                                type="text"
                                placeholder="Digite o código de Barra"
                            />
                        </label>
                    </div>
                </div>
            </Form>
        </>
    );
};

export default Dashboard;
