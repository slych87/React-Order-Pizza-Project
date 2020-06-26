import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Koszyk from './components/koszyk';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom';


const Mojcontext = createContext();
export const CtxConsumer = Mojcontext.Consumer;
const CtxProvider = Mojcontext.Provider;

function Routing() {

  const [koszyk, setKoszyk] = useState(0);

  const odswiez = (dane) => {
    setKoszyk(dane);
  }

  return (
    <BrowserRouter>
      <CtxProvider value={{ koszyk: koszyk, odswiez: odswiez }}>

        <header className="App-header">
          <h1>Order pizza</h1>
        </header>

        <Route exact path="/" component={App} />
        <Route exact path="/koszyk" component={Koszyk} />

      </CtxProvider>

    </BrowserRouter>
  )
}

ReactDOM.render(<Routing />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
