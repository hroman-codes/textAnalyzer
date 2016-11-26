/*jshint esversion: 6 */

// Single state object
$(document).ready(function(){

  // let storage = (k, v) => {
  //     totalWord: 0,
  //     uniqueword: 0,
  //     averageword: 0,
  //     averageSentence:
  // }

// Event listeners
  $('.js-text-form').on('submit', function(event){
    event.preventDefault();
    const formInput = $('#user-text').val();
    wordCount(formInput);
  });
});


// State modification functions
let wordCount = (text) => {
  alert(`I was transfered from the event listener here is the message: ${text}`);
  let splitMessage = text.split();
  console.log(splitMessage);
};
