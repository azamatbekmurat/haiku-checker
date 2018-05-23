import {HaikuCheck} from './../src/haiku-checker.js';

describe ('haiku-checker', function() {
  it ('should test whether string is haiku or not', function() {
    var haiku = new HaikuCheck("selected item", "selected haikuu", "five vowels in");
    console.log(haiku);
    expect(haiku.checkHaiku()).toEqual("It is haiku");
  });
});
