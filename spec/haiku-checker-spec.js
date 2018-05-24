import {HaikuCheck} from './../src/haiku-checker.js';

describe ('haiku-checker', function() {
  it ('should test whether string is haiku', function() {
    var haiku = new HaikuCheck("selectd item come", "selected haikudeded", "fived vaowels ine");
    console.log(haiku);
    expect(haiku.checkHaiku()).toEqual("This is a Haiku");
  });

  it ('should test whether string is not haiku', function() {
    var haiku = new HaikuCheck("selectd item", "haikiud", "vowels five");
    console.log(haiku);
    expect(haiku.checkHaiku()).toEqual("This is not a Haiku");
  });

  //checking removeSilentVowels function
  // it ('should test whether removes silent vowel', function() {
  //   var haiku = new HaikuCheck();
  //   expect(haiku.removeSilentVowels("selected item come")).toEqual("selected item com");
  //   console.log("new " + haiku.removeSilentVowels("selected item come"));
  // });
  //
  //checking removeDiphthong function
  // it ('should test whether removes dipthong', function() {
  //   var haiku = new HaikuCheck();
  //   expect(haiku.removeDiphthong("about me haikuu")).toEqual("abut me hiku");
  //   console.log("new " + haiku.removeDiphthong("about wht is going on haikuu"));
  // });
  it ('should test whether removes dipthong and silent vowels', function() {
    var haiku = new HaikuCheck();
    expect(haiku.removeSilentAndDiphthong("about me haikuue")).toEqual("abut me hiku");
    console.log("new " + haiku.removeSilentAndDiphthong("about me haikuue"));
  });

});
