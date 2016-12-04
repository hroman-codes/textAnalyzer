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
    // I added the replace method and passed in a regex, the intent was to remove the white space being counted as a word
    // const formInput = $('#user-text').val().replace(/\s/g, '');
    // the right way is to add the trim method to remove the white space from both ends of the string
    const formInput = $('#user-text').val().trim();
    wordCount(formInput);
    uniqueWord(formInput);
  });

// State modification functions
let wordCount = (formInput) => {
  const splitMessage = formInput.split(" ");
  alert(`we have ${splitMessage.length} words in our array`);
  state.totalWord = splitMessage.length;
};


let uniqueWord = (formInput) => {
  let uniqueWords = [];
  const splitMessage = formInput.split(" "); // why am I doing this twice once in wordCount and uniqueWord function?
  // set a vairable to be the mechinism to hold the false value.
    for(i = 0; i < splitMessage.length; i++ ){
      let repeated = false;
      if (uniqueWords.length === 0) {
        uniqueWords.push(splitMessage[i]);
      }
    for(j = 0; j < uniqueWords.length; j++) {
      if (splitMessage[i] === uniqueWords[j]) {
        repeated = true;
        }
      }
      if (!repeated) {
        uniqueWords.push(splitMessage[i]);
      }
    }
    console.log(uniqueWords);
    return uniqueWords;
};


// Render functions


// Init functions
});
