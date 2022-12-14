import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="form-container">
        <h1>Adicione uma nova carta</h1>
        <label htmlFor="nome">
          Nome:
          <input
            id="nome"
            type="text"
            name="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            id="description"
            name="cardDescription"
            data-testid="description-input"
            cols="30"
            rows="10"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1">
          Attr01
          <input
            id="attr1"
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2">
          Attr02
          <input
            id="attr2"
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3">
          Attr03
          <input
            id="attr3"
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="img-input">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            name="cardImage"
            id="img-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select
            data-testid="rare-input"
            name="cardRare"
            id="rarity"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="s-trunfo">
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="cardTrunfo"
            id="s-trunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Trybe Trunfo
        </label>
        <button
          type="submit"
          data-testid="save-button"
          name="save"
          id="save"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
