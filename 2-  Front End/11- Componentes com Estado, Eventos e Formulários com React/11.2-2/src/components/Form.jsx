import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <>
        <div className="formNome">
          <label>
            Nome: 
            <input 
              type="text" 
              name="textNome"
              placeholder="Digite o nome"
              data-testid="name-input"
            />
          </label>
        </div>

        <div className="formDescricao">
          <label>
            Descrição da Carta: 
            <textarea
              name="textarea"
              placeholder="Digite a descrição"
              data-testid="description-input"
            />
          </label>
        </div>

        <div className="formAtributo1">
          <label>
            Atributo 1: 
            <input
              type="number"
              name="number1"
              placeholder="Digite o primeiro atributo da carta"
              data-testid="attr1-input"
            />
          </label>
        </div>

        <div className="formAtributo2">
          <label>
            Atributo 2: 
            <input
              type="number"
              name="number2"
              placeholder="Digite o segundo atributo da carta"
              data-testid="attr2-input"
            />
          </label>
        </div>

        <div className="formAtributo3">
          <label>
            Atributo 3: 
            <input
              type="number"
              name="number3"
              placeholder="Digite o terceiro atributo da carta"
              data-testid="attr3-input"
            />
          </label>
        </div>

        <div className="formImgInput">
          <label>
            Imagem: 
            <input
              type="text"
              name="inputImage"
              data-testid="image-input"
            />
          </label>
        </div>

        <div className="formSelect">
          <label>
            Raridade: 
            <select data-testid="rare-input">
              <option value="" disabled hidden selected>Selecione...</option>
              <option value="value1">Normal</option>
              <option value="value2">Raro</option>
              <option value="value3">Muito Raro</option>
            </select>
          </label>
        </div>

        <div className="formCheckbox">
          <label>
            <input type='checkbox' data-testid="trunfo-input" /> Super Trybe Trunfo
          </label>
        </div>

        <div className="formSaveButton">
            <button value="Salvar"
              data-testid="save-button"
            > Salvar </button> 
        </div>
      </>
    )
  }
}

export default Form