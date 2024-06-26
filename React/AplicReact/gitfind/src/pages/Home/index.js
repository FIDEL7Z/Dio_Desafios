import { useState } from 'react'; 
import { Header} from '../../components/Header';
import background from '../../assets/background.png'
import ItemList from '../../components/ItemList';
import './styles.css';
function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () =>{
    const userDate = await fetch (`https://api.github.com/users/${user}`);
    const newUser =  await userDate.json();

    if (newUser.name){
      const {avatar_url, name, bio,login}= newUser;
      setCurrentUser({avatar_url, name, bio, login});

      const reposDate = await fetch (`https://api.github.com/users/${user}/repos`);
      const newRepos =  await reposDate.json();

      if(newRepos.length){
        setRepos(newRepos);
      }
    }
    };



  return (
    <div className="App">
     <Header/>
     <div className='conteudo'>
      <img src={background} className="background" alt="background app"></img>
      <div className="info">
        <div>

          <input 
           name='usuario'
           value={user} 
           onChange={event => setUser(event.target.value)}
           placeholder='@username'/>
          <button onClick={handleGetData}>Buscas</button>
        </div>


        {currentUser?.name ? (<>
        <div className="perfil">
          <img 
          src={currentUser.avatar_url}
          className="profile" 
          alt="Imagem de perfil"
          />
          <div>
            <h3>{currentUser.name}</h3>
            <span>{currentUser.login}</span>
            <p>{currentUser.bio}</p>
          </div>
        </div>
        <hr/>
  </>
        ):null}
         {repos?.length ? (
           <div>
          <h4 className='repositorio'>Repositorios</h4>
          {repos.map(repos =>(
            <ItemList title={repos.name} description= {repos.description}/> 
        ))}  
        </div>
         ) : null}
      </div>
      </div>
    </div>
  );
}

export default App;
