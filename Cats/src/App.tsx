import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div>
        <h1>Bem-vindo ao meu site!</h1>
        <Outlet /> {/* Aqui serão renderizadas as rotas filhas */}
      </div>
    </ThemeProvider>
  );
}

export default App;
