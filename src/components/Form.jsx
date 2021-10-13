import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="name-input">
          Nome:
          <input data-testid="name-input" id="name-input" type="text" />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <input data-testid="description-input" id="description-input" type="textarea" />
        </label>

        <label htmlFor="attr1-input">
          Atributo 1:
          <input data-testid="attr1-input" id="attr1-input" type="number" />
        </label>

        <label htmlFor="attr2-input">
          Atributo 2:
          <input data-testid="attr2-input" id="attr2-input" type="number" />
        </label>

        <label htmlFor="attr3-input">
          Atributo 3:
          <input data-testid="attr3-input" id="attr3-input" type="number" />
        </label>

        <label htmlFor="image-input">
          Imagem:
          <input data-testid="image-input" id="image-input" type="text" />
        </label>

        <label htmlFor="rare-input">
          Raridade:
          <select data-testid="rare-input" id="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="trunfo-input">
          Super Trybe Trunfo:
          <input data-testid="trunfo-input" id="trunfo-input" type="checkbox" />
        </label>

        <button data-testid="save-button" id="save-button" type="submit">Salvar</button>

      </div>
    );
  }
}

export default Form;
