// {
// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;




// // import React from 'react';
// // import './App.css';

// // /* Embora isso funcione, essa DEFINITIVAMENTE
// // não é a maneira correta de se criar eventos
// // em React! A função se refere ao componente,
// // então deve ser parte de sua classe! */
// // function handleClick() {
// //   console.log('Clicou no botão!')
// // }

// // class App extends React.Component {
// //   /* Repare que, diferentemente do HTML, no
// //   JSX você associa uma função a um evento
// //   passando a própria função entre chaves `{}` */
// //   render() {
// //     return <button onClick={handleClick}>Meu botão</button>
// //   }
// // }

// // export default App;


// // import React from 'react';
// // import './App.css';

// // class App extends React.Component {
// //   handleClick() {
// //     console.log('Clicou!')
// //   }

// //   render() {
// //     /* No React, precisamos dizer explicitamente que queremos uma função da nossa classe
// //     através da sintaxe `this.minhaFuncao` para usá-la num evento */
// //     return <button type="button" onClick={this.handleClick}>Meu botão</button>;
// //   }
// // }

// // export default App;
// }

// {
// // import React from 'react';
// // import './App.css';

// // class App extends React.Component {
// //   constructor(props) {
// //     // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
// //     super()

// //     // Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor
// //   }

// //   render() {
// //     return <span>Meu componente!</span>
// //   }
// // }

// // export default App;
// }

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default App;