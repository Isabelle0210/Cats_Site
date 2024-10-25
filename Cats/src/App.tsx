import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider'; 
import { NavBar } from './components/NavBar';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div>
        <NavBar/>
        <Outlet /> {/* Aqui serão renderizadas as rotas filhas */}
      </div>
    </ThemeProvider>
  );
}

export default App;
