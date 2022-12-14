import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    hasTrunfo: false,
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    cardDeck: [],
  };

  onSaveButtonClick = () => {
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
    this.setState(
      (prev) => ({
        cardDeck: [
          ...prev.cardDeck,
          {
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
          },
        ],
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      }),
      this.trufoValidation,
    );
  };

  buttonValidation = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const maxAttr = 90;
    const maxSumAttr = 210;
    const numAttr1 = Number(cardAttr1);
    const numAttr2 = Number(cardAttr2);
    const numAttr3 = Number(cardAttr3);

    if (cardName !== ''
    && cardDescription !== ''
    && cardRare !== ''
    && cardImage !== ''
    && numAttr1 <= maxAttr
    && numAttr1 >= 0
    && numAttr2 <= maxAttr
    && numAttr2 >= 0
    && numAttr3 <= maxAttr
    && numAttr3 >= 0
    && (numAttr1 + numAttr2 + numAttr3) <= maxSumAttr) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onInputChange = ({ target: { value, name, type, checked } }) => {
    const theValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: theValue }, this.buttonValidation, this.trufoValidation);
  };

  trufoValidation = () => {
    const { cardDeck } = this.state;
    const validator = cardDeck.some((card) => card.cardTrunfo === true);
    this.setState({ hasTrunfo: validator });
  };

  // onSaveButtonClick = () => {
  //   const {
  //     cardName,
  //     cardDescription,
  //     cardAttr1,
  //     cardAttr2,
  //     cardAttr3,
  //     cardImage,
  //     cardRare,
  //     cardTrunfo,
  //   } = this.state;

  //   this.setState((prev) => ({
  //     cardDeck: [
  //       ...prev.cardDeck,
  //       {
  //         cardName,
  //         cardDescription,
  //         cardAttr1,
  //         cardAttr2,
  //         cardAttr3,
  //         cardImage,
  //         cardRare,
  //         cardTrunfo,
  //       },
  //     ],
  //     cardName: '',
  //     cardDescription: '',
  //     cardAttr1: '0',
  //     cardAttr2: '0',
  //     cardAttr3: '0',
  //     cardImage: '',
  //     cardRare: 'normal',
  //     cardTrunfo: false,
  //   }));
  // };

  render() {
    const {
      state: {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        hasTrunfo,
        isSaveButtonDisabled,
        cardDeck,
      } } = this;

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

        <main className="previewCard">
          <Form
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            hasTrunfo={ hasTrunfo }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            // { ...this.State }
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
        </main>
        <div>
          <h2>Todas as cartas</h2>
          <ul>
            {cardDeck.map((card) => (
              <li key={ card.name }>
                <Card
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
