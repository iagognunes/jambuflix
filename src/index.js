import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/home';
import CadastroVideo from './pages/cadastro/video';
import Pagina404 from './pages/erro404';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/jambuadmin/cadastroVideo" component={CadastroVideo} />
      <Route path="/jambuadmin/cadastroCategoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,

  // <React.StrictMode>
  //  <App />
  // </React.StrictMode>,
  document.getElementById('root'),
);
