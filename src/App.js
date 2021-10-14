import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
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
    };
  }

  onInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  }

  onSaveButtonClick(event) {
    event.preventDefault();

    const { cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const maxValue = 90;
    const minValue = 0;
    const totalValue = 210;
    const valueSum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const value1 = Number(cardAttr1) <= maxValue && Number(cardAttr1) >= minValue;
    const value2 = Number(cardAttr2) <= maxValue && Number(cardAttr2) >= minValue;
    const value3 = Number(cardAttr3) <= maxValue && Number(cardAttr3) >= minValue;
    const sumImputs = Object.values(this.state).find((value) => value === '');

    if (sumImputs === undefined && valueSum <= totalValue && value1 && value2 && value3) {
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
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ... this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card onInputChange={ this.onInputChange } { ...this.state } />
      </div>
    );
  }
}

export default App;
