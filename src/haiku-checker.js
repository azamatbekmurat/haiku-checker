export class HaikuCheck {
  constructor(rowOne, rowTwo, rowThree){
    this.rowOne = rowOne;
    this.rowTwo = rowTwo;
    this.rowThree = rowThree;
    // debugger;
  }

  removeSilentAndDiphthong(row) {
    var vowelss = ['a', 'e', 'i', 'o', 'u'];

    var words = row.split(/\s+/);

    var outputRow = [];
    words.forEach(function(word) {
    var numberOfLetters = word.length;
          if (numberOfLetters > 2) {
            for (var i = 0; i<=numberOfLetters; i++) {
                if ((vowelss.indexOf(word.charAt(i)) !== -1) && (vowelss.indexOf(word.charAt(i+1)) !== -1)) {
                  word = word.replace(word.charAt(i), '');
                }else if((vowelss.indexOf(word[numberOfLetters-1]) !== -1)) {
                  word = word.replace(word[numberOfLetters-1], '');
                }
        }
         outputRow.push(word);
      } else {
        outputRow.push(word);
      }
    })
    var outputString = outputRow.join(" ");
    return outputString;
  }

  checkHaiku() {

    var positive = "This is a is Haiku";
    var negative = "This is not a Haiku";
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    // var consonats = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    // var arrRowOne = [];
    var counterOne = 0;
    var counterTwo = 0;
    var counterThree = 0;

    var rowOneWithoutSilentVowels = this.removeSilentAndDiphthong(this.rowOne);
    var rowTwoWithoutSilentVowels = this.removeSilentAndDiphthong(this.rowTwo);
    var rowThreeWithoutSilentVowels = this.removeSilentAndDiphthong(this.rowThree);

    for (var i = 0; i < rowOneWithoutSilentVowels.length; i++) {
      // let currentObject = this;
      vowels.forEach(function(vowel) {
        if (rowOneWithoutSilentVowels[i] == vowel) {

          counterOne++;
        }
      });
    }

    for (var j = 0; j < rowTwoWithoutSilentVowels.length; j++) {
      // let currentObject = this;

      vowels.forEach(function(vowel) {
        if (rowTwoWithoutSilentVowels[j] == vowel) {
          counterTwo++;
        }
      });
    }

    for (var k = 0; k < rowThreeWithoutSilentVowels.length; k++) {
      // let currentObject = this;
      vowels.forEach(function(vowel) {
        if (rowThreeWithoutSilentVowels[k] == vowel) {
          counterThree++;
        }
      });
    }
    console.log("counter one is " + counterOne);
    console.log("counter two is " + counterTwo);
    console.log("counter three is " + counterThree);

    if ((counterOne == 5) && (counterTwo==7) && (counterThree==5)) {
      return positive;
    } else {
      return negative;
    }
  }
}

//Old Code Below



//function to remove just Diphthong:
// removeSilentVowels(row) {
//   var vowelss = ['a', 'e', 'i', 'o', 'u'];
//
//   var words = row.split(/\s+/);
//
//   var outputRow = [];
//
//   words.forEach(function(word) {
//     var numberOfLetters = word.length;
//
//     if (numberOfLetters > 2) {
//              vowelss.forEach(function(vowel) {
//                   if (word[numberOfLetters-1] == vowel) {
//                     word = word.replace(word[numberOfLetters-1], '');
//                   }
//             })
//             outputRow.push(word);
//
//     } else {
//       outputRow.push(word);
//     }
//
//   })
//   var outputString = outputRow.join(" ");
//   return outputString;
// }

//function to remove just Diphthong:
// removeDiphthong(row) {
//   var vowelss = ['a', 'e', 'i', 'o', 'u'];
//
//   var words = row.split(/\s+/);
//
//   var outputRow = [];
//
//   words.forEach(function(word) {
//     var numberOfLetters = word.length;
//
//     if (numberOfLetters > 2) {
//       for (var i = 0; i<=numberOfLetters; i++) {
//           if ((vowelss.indexOf(word.charAt(i)) !== -1) && (vowelss.indexOf(word.charAt(i+1)) !== -1)) {
//             word = word.replace(word.charAt(i), '');
//           }
//       }
//        outputRow.push(word);
//     } else {
//       outputRow.push(word);
//     }
//   })
//   var outputString = outputRow.join(" ");
//   return outputString;
// }
