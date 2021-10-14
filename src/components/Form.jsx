import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName, /* string */
      cardDescription, /* string */
      cardAttr1, /* string */
      cardAttr2, /* string */
      cardAttr3, /* string */
      cardImage, /* string */
      cardRare, /* string */
      cardTrunfo, /* boolean */
      /* hastrunfo, */ /* boolean */
      isSaveButtonDisabled, /* boolean */
      onInputChange, /* callback */
      onSaveButtonClick, /* callback */
    } = this.props;
    return (
      <div>
        <label htmlFor="name-input">
          Nome:
          <input
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            id="name-input"
            type="text"
            name="cardName"
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <textarea
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            id="description-input"
            name="cardDescription"
          />
        </label>
        <label htmlFor="attr1-input">
          Atributo 1:
          <input
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
            id="attr1-input"
            name="cardAttr1"
          />
        </label>
        <label htmlFor="attr2-input">
          Atributo 2:
          <input
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
            id="attr2-input"
            name="cardAttr2"
          />
        </label>
        <label htmlFor="attr3-input">
          Atributo 3:
          <input
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
            id="attr3-input"
            name="cardAttr3"
          />
        </label>
        <label htmlFor="image-input">
          Imagem:
          <input
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            id="image-input"
            name="cardImage"
          />
        </label>
        <label htmlFor="rare-input">
          Raridade:
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            id="rare-input"
            name="cardRare"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="trunfo-input">
          Super Trybe Trunfo:
          <input
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            type="checkbox"
            id="trunfo-input"
            name="cardTrunfo"
          />
        </label>
        <button
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          id="save-button"
          type="submit"
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  /* hasTrunfo: PropTypes.bool.isRequired, */
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
