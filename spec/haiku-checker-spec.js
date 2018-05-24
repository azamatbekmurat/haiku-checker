import {HaikuCheck} from './../src/haiku-checker.js';

describe ('haiku-checker', function() {
  // it ('should test whether string is haiku', function() {
  //   var haiku = new HaikuCheck("selectd item come", "selected haikuded", "fived vowels in");
  //   console.log(haiku);
  //   expect(haiku.checkHaiku()).toEqual("It is haiku");
  // });
  //
  // it ('should test whether string is not haiku', function() {
  //   var haiku = new HaikuCheck("selectd item", "haikiud", "vowels five");
  //   console.log(haiku);
  //   expect(haiku.checkHaiku()).toEqual("Not haiku");
  // });
  // it ('should test whether removes silent vowel', function() {
  //   var haiku = new HaikuCheck();
  //   expect(haiku.removeSilentVowels("selected item come")).toEqual("selected item com");
  //   console.log("new " + haiku.removeSilentVowels("selected item come"));
  // });

  it ('should test whether removes dipthong', function() {
    var haiku = new HaikuCheck();
    expect(haiku.removeDiphthong("about me haikuu")).toEqual("abut me hiku");
    console.log("new " + haiku.removeDiphthong("about wht is going on haikuu"));
  });

});
