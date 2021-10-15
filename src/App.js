import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
    };
  }

  onInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    }, () => this.validateBtn());
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3, cardTrunfo, deck } = this.state;
    this.verifyTrunfo();
    this.setState({
      deck: [{
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      },
      ...deck,
      ],
    });
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  verifyTrunfo() {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

  validateBtn() {
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxValue = 90;
    const maxSum = 210;
    let firstCondition = false;
    let secondCodition = false;
    const sumAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    if (cardName !== '' && cardDescription !== '' && cardImage !== ''
    && cardRare !== '') {
      firstCondition = true;
    }
    if (cardAttr1 >= 0 && cardAttr1 <= maxValue && cardAttr2 >= 0 && cardAttr2 <= maxValue
      && cardAttr3 >= 0 && cardAttr3 <= maxValue && sumAttr <= maxSum) {
      secondCodition = true;
    }
    if (firstCondition && secondCodition) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  render() {
    const { deck } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <section>
          { deck.map((card) => <Card { ...card } key={ card.cardDescription } />)}
        </section>
      </div>
    );
  }
}

export default App;
