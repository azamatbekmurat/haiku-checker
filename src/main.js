import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { HaikuCheck } from './../src/haiku-checker.js';

$(document).ready(function() {
  $('#haiku').submit(function(event) {
    event.preventDefault();
    var rowOne = $('#rowOne').val();
    var rowTwo = $('#rowTwo').val();
    var rowThree = $('#rowThree').val();
    var output = new HaikuCheck(rowOne, rowTwo, rowThree);
    output.checkHaiku();

    $('ul#solution').append("<li>" + output.checkHaiku() + "</li>");

  });
});
