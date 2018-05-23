export class HaikuCheck {
  constructor(rowOne, rowTwo, rowThree){
    this.rowOne = rowOne;
    this.rowTwo = rowTwo;
    this.rowThree = rowThree;
    // debugger;
  }
  checkHaiku() {

    var positive = "It is haiku";
    var negative = "Not haiku";
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    // var consonats = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    // var arrRowOne = [];
    var counterOne = 0;
    var counterTwo = 0;
    var counterThree = 0;
    for (var i = 0; i < this.rowOne.length; i++) {
      vowels.forEach(function(vowel) {
        if (this.rowOne[i] == vowel) {
          // arrRowOne.push(rowOne.slice()) //template for future use
          counterOne++;
        }
      });
    }
    return counterOne;

    for (var j = 0; j < this.rowTwo.length; j++) {
      vowels.forEach(function(vowel) {
        if (this.rowTwo[j] == vowel) {
          counterTwo++;
        }
      });
    }
    return counterTwo;

    for (var k = 0; k < this.rowThree.length; k++) {
      vowels.forEach(function(vowel) {
        if (this.rowThree[k] == vowel) {
          counterThree++;
        }
      });
    }
    return counterThree;

    if ((counterOne == 5) && (counterTwo==7) && (counterThree==5)) {
      return positive;
    } else {
      return negative;
    }
  }
}
