export class HaikuCheck {
  constructor(rowOne, rowTwo, rowThree){
    this.rowOne = rowOne;
    this.rowTwo = rowTwo;
    this.rowThree = rowThree;
    // debugger;
  }


  removeSilentVowels(row) {
    var vowelss = ['a', 'e', 'i', 'o', 'u'];

    var words = row.split(/\s+/);

    var outputRow = [];

    words.forEach(function(word) {
      var numberOfLetters = word.length;

      if (numberOfLetters > 2) {
               vowelss.forEach(function(vowel) {
                    if (word[numberOfLetters-1] == vowel) {
                      word = word.replace(word[numberOfLetters-1], '');
                    }
              })
              outputRow.push(word);

      } else {
        outputRow.push(word);
      }

    })
    var outputString = outputRow.join(" ");
    return outputString;
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
      let currentObject = this;
      vowels.forEach(function(vowel) {
        if (currentObject.rowOne[i] == vowel) {

          counterOne++;
        }
      });
    }

    for (var j = 0; j < this.rowTwo.length; j++) {
      let currentObject = this;

      vowels.forEach(function(vowel) {
        if (currentObject.rowTwo[j] == vowel) {
          counterTwo++;
        }
      });
    }

    for (var k = 0; k < this.rowThree.length; k++) {
      let currentObject = this;
      vowels.forEach(function(vowel) {
        if (currentObject.rowThree[k] == vowel) {
          counterThree++;
        }
      });
    }

    if ((counterOne == 5) && (counterTwo==7) && (counterThree==5)) {
      return positive;
    } else {
      return negative;
    }
  }
}
