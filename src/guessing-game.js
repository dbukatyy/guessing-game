class GuessingGame {
    constructor() {
        this.min;
        this.max;
        this.avarage;
    }

   setRange(min, max) {
        this.min = min;
        this.max = max;
        
   }

   guess() {
        return this.avarage = Math.round((this.max + this.min)/2);
    }

   lower() {
        this.max = this.avarage;
    }

   greater() {
        this.min = this.avarage;
    }
}

module.exports = GuessingGame;
