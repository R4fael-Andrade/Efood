import {BrowserRouter} from 'react-router-dom'
import Hero from './components/Hero';
import {GlobalCss} from './styles'
import Rotas from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
    </BrowserRouter>
  )
}

export default App;
