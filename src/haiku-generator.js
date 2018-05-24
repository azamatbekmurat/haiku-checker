export class HaikuGenerator{
  constructor(rowOne){
    this.rowOne = rowOne;
    // this.rowTwo = rowTwo;
    // this.rowThree = rowThree;
  }

  generateRandomHaiku() {

    var text = Math.random().toString(36).replace(/[^a-zA-Z]+/g, '');
    console.log("The text is1:" + text);

    this.rowOne = text;
  return this.rowOne;

  }


}
