import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
  };

  onInputChange = ({ target: { value, name, type, checked } }) => {
    const theValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: theValue });
  };

  onSaveButtonClick = () => {};

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
    } = this.state;

    return (
      <>
        {/* <h1
          style={ {
            display: flex,
            justifyContent: center } }
        >
          Tryunfo
        </h1> */}
        <h1>Tryunfo</h1>

        <div className="previewCard">
          <Form
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            // cardName={ cardName }
            // cardDescription={ cardDescription }
            // cardAttr1={ cardAttr1 }
            // cardAttr2={ cardAttr2 }
            // cardAttr3={ cardAttr3 }
            // cardImage={ cardImage }
            // cardRare={ cardRare }
            // cardTrunfo={ cardTrunfo }
            { ...this.State }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
      </>
    );
  }
}

export default App;
