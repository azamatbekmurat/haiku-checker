import {HaikuCheck} from './../src/haiku-checker.js';

describe ('haiku-checker', function() {
  it ('should test whether string is haiku', function() {
    var haiku = new HaikuCheck("selected item", "selected haikuu", "five vowels in");
    console.log(haiku);
    expect(haiku.checkHaiku()).toEqual("It is haiku");
  });

  it ('should test whether string is not haiku', function() {
    var haiku = new HaikuCheck("selectd item", "haikiu", "vowels");
    console.log(haiku);
    expect(haiku.checkHaiku()).toEqual("Not haiku");
  });
  it ('should test whether removes silent vowel', function() {
    var haiku = new HaikuCheck();
    expect(haiku.removeSilentVowels("selectd item come")).toEqual("selectd item com");
    console.log("new " + haiku.removeSilentVowels("selectd item come"));
  });

});
