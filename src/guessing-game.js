class GuessingGame {
    constructor() {
      this.number = null
    }

    setRange(min, max) {
      this.number = Math.round(min - 0.5 + Math.random() * (max - min + 1));
     
    }

    guess(userNumber) {
      if (userNumber > this.number) {
        this.greater();
      } else if (userNumber < this.number) {
        this.lower();
      } else if (userNumber === this.number) {
        console.log('Вы угадали')
      }
    }

    lower() {
      console.log('ваше число меньше')
    }

    greater() {
      console.log('ваше число больше')
    }
}

module.exports = GuessingGame;
