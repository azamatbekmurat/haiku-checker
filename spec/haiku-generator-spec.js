import { HaikuGenerator } from './../src/haiku-generator.js';

describe ('haiku-generator', function() {
  it ('should test a string being randomly generated', function() {
    var randomhaiku = new HaikuGenerator();
    expect(randomhaiku.generateRandomHaiku()).toEqual("");
    console.log("generator " + randomhaiku.generateRandomHaiku());
  });
});
