/*jshint esversion: 6 */

// Single state object
$(document).ready(function(){
  let state = {
    totalWord: 0,
    uniqueword: 0,
    //     averageword: 0,
    //     averageSentence:
  };

  // Event listeners
  $('.js-text-form').on('submit', function(event){
    event.preventDefault();
    const formInput = $('#user-text').val();
    wordCount(formInput);
    uniqueWord(formInput);
  });

// State modification functions
let wordCount = (formInput) => {
  const splitMessage = formInput.split(" ");
  alert(`we have ${splitMessage.length} words in our array`);
  state.totalWord = splitMessage.length;
  console.log(state.totalWord);

};

let uniqueWord = (formInput) => {
  let uniqueWords = [];
  const splitMessage = formInput.split(" ");
  for (var i = 0; i < splitMessage.length; i++){
        for (var j = 0; j < uniqueWords.length; j++){
          if(splitMessage.length === uniqueWords.length) {
            uniqueWords.push(splitMessage[i]);
            console.log(uniqueWords);
        {
        }
      }
    }
  }
};

// Render functions


// Init functions
});
