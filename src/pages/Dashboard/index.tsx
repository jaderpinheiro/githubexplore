import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/github_explorer.png';
import api from '../../services/api';

import { Title, Form, Repositories, Error } from './styles';
// import Repository from '../Repository';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');

    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storageRepositories = localStorage.getItem(
            '@GithubExplorer:repositories',
        );
        if (storageRepositories) {
            return JSON.parse(storageRepositories);
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem(
            '@GithubExplorer:repositories',
            JSON.stringify(repositories),
        );
    }, [repositories]);

    async function handleAddRepository(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();
        if (!newRepo) {
            setInputError(
                'Digite o autordorepositório/nome e click em pesquisar.',
            );
            return;
        }
        try {
            const response = await api.get<Repository>(`repos/${newRepo}`);
            const repository = response.data;

            setRepositories([...repositories, repository]);
            setNewRepo('');
            setInputError('');
        } catch (err) {
            setInputError('Erro na busca por esse repositório!');
        }
    }
    return (
        <>
            <img src={logo} alt="Github Explorer" />
            <Title>Explore Repositórios no Github</Title>
            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositório"
                />
                <button type="submit">Pesquisar</button>
            </Form>
            {inputError && <Error>{inputError}</Error>}
            <Repositories>
                {repositories.map((repository) => (
                    <Link
                      key={repository.full_name}
                      to={`/repositories/${repository.full_name}`}
                    >
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={30} />
                    </Link>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;
