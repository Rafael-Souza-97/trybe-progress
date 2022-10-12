import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: '',
      name: '',
      array: [],
    }
  }

  componentDidMount = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const apiResponse = await fetch(url);
    const obj = await apiResponse.json();

    this.setState({
      data: obj.message
  })

}

componentDidUpdate() {
  const { data } = this.state;

  // Guardando a URL do último doguinho no `localStorage`...
  localStorage.setItem('dogURL', data);
  const dogBreed = data.split('/')[4];
  // // ... e mostrando a raça dele usando um `alert`
  alert(dogBreed);
}

saveData = () => {
  const {
    data: { message },
    name,
    array,
  } = this.state;
  // atualizando e guardando a lista inteira de imagens no `localStorage`
  const dogData = { message, name };
  const newArray = [...array, dogData];
  this.setState({ array: newArray });
  this.setState({ name: '' });
  localStorage.setItem('namedDogURL', JSON.stringify(newArray));
}


  render() {
    const { data } = this.state;

    if (data === '') return 'Loading...';

    const style = {
      width: "250px",
    }


    return (
      <div className="App">
        <img src={ data } style={ style } alt="Random dog"></img>
        <button type="button" onClick={ this.componentDidMount }>Próximo Doguinho</button>
      </div>
    );
  }
}

export default App;
