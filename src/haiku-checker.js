export class HaikuCheck {
  constructor(rowOne, rowTwo, rowThree){
    this.rowOne = rowOne;
    this.rowTwo = rowTwo;
    this.rowThree = rowThree;
    // debugger;
  }

  removeSilentVowels(word) {
    var vowelss = ['a', 'e', 'i', 'o', 'u'];
    var inputWord = word;
    var numberOfLetters = word.length;
    console.log("number is here" + numberOfLetters);
    if (numberOfLetters > 2) {
             vowelss.forEach(function(vowel) {
                  if (inputWord[numberOfLetters-1] == vowel) {
                    inputWord = inputWord.replace(inputWord[numberOfLetters-1], '');
                  }
            })

      return inputWord;
    }
  }


  // checkHaiku() {
  //
  //   var positive = "It is haiku";
  //   var negative = "Not haiku";
  //   var vowels = ['a', 'e', 'i', 'o', 'u'];
  //   // var consonats = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  //   // var arrRowOne = [];
  //   var counterOne = 0;
  //   var counterTwo = 0;
  //   var counterThree = 0;
  //
  //   for (var i = 0; i < this.rowOne.length; i++) {
  //     let currentObject = this;
  //     vowels.forEach(function(vowel) {
  //       if (currentObject.rowOne[i] == vowel) {
  //
  //         counterOne++;
  //       }
  //     });
  //   }
  //
  //   for (var j = 0; j < this.rowTwo.length; j++) {
  //     let currentObject = this;
  //
  //     vowels.forEach(function(vowel) {
  //       if (currentObject.rowTwo[j] == vowel) {
  //         counterTwo++;
  //       }
  //     });
  //   }
  //
  //   for (var k = 0; k < this.rowThree.length; k++) {
  //     let currentObject = this;
  //     vowels.forEach(function(vowel) {
  //       if (currentObject.rowThree[k] == vowel) {
  //         counterThree++;
  //       }
  //     });
  //   }
  //
  //   if ((counterOne == 5) && (counterTwo==7) && (counterThree==5)) {
  //     return positive;
  //   } else {
  //     return negative;
  //   }
  // }
}
