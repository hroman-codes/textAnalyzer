/*jshint esversion: 6 */

// Single state object
$(document).ready(function(){

  let state = (k, v) => {
      totalWord: [];
  //     uniqueword: 0,
  //     averageword: 0,
  //     averageSentence:
};

// Event listeners
  $('.js-text-form').on('submit', function(event){
    event.preventDefault();
    const formInput = $('#user-text').val();
    wordCount(formInput);
  });
});


// State modification functions
let wordCount = (text) => {
  let splitMessage = text.split(" ");
  // let wordCountArray = [];
  for(var i = 0; i < splitMessage.length; i++){
    state.totalWord.push(splitMessage[i]); // the intent it to push the wordcount to the state object to keep sepration of concerns.
  }
  alert(`we have ${state.totalWord.length} words in our array`);
};

// Render functions


// Init functions
