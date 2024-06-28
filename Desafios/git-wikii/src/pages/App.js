import { useState } from 'react';
import githubLogo1 from '../assets/github1.png';
import githubLogo2 from '../assets/github2.png';
import githubLogo3 from '../assets/github3.png'; // Exemplo de logos diferentes
import githubLogo4 from '../assets/github4.png';
import githubLogo5 from '../assets/github5.gif'; 
import githubLogo6 from '../assets/github6.gif'; 

import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';
import { Container } from './styles';

const logos = [githubLogo1, githubLogo2, githubLogo3,githubLogo4,githubLogo5,githubLogo6]; // Array de logos

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);
  const [logoIndex, setLogoIndex] = useState(0); 

  const handleSearchRepo = async () => {
    if (!currentRepo) {
      alert('Por favor, insira um repositório.');
      return;
    }

    try {
      const { data } = await api.get(`repos/${currentRepo}`);
      if (data.id) {
        const isExist = repos.some((repo) => repo.id === data.id);
        if (!isExist) {
          setRepos((prevRepos) => [...prevRepos, data]);
          setCurrentRepo('');
          changeLogo(); 
        } else {
          alert('Repositório já adicionado.');
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert('Repositório não encontrado.');
      } else {
        alert('Ocorreu um erro ao buscar o repositório.');
      }
    }
  };

  const handleRemoveRepo = (id) => {
    setRepos((prevRepos) => prevRepos.filter((repo) => repo.id !== id));
  };

  const changeLogo = () => {
    const newIndex = Math.floor(Math.random() * logos.length); 
    setLogoIndex(newIndex); 
  };

  return (
    <Container>
      <img src={logos[logoIndex]} width={72} height={72} alt="github logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo} />
      ))}
    </Container>
  );
}

export default App;
