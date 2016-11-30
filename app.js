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
};

// hello world, hello
// ['hello','world,','hello'] <= splitMessage
// ['hello','world'] <= uniqueWords
let uniqueWord = (formInput) => {
  let uniqueWords = []; // instatiate an array
  const splitMessage = formInput.split(" "); // split method to return an array of strings
  for (var i = 0; i < splitMessage.length; i++){ // loop through the array of strings
    let repeated = false;
    if(uniqueWords.length === 0){
      uniqueWords.push(splitMessage[i]);
    }
    for(var j = 0; j < uniqueWords.length; j++){
      if(splitMessage[i] === uniqueWords[j]){
        repeated = true;
      }
    }
    if(!repeated){
      uniqueWords.push(splitMessage[i]);
    }
    //uniqueWords.push(splitMessage[i]); // push to the empty array
    //}
    //  if(uniqueWords.length === 1) {
    //    newUniqueWords.push(uniqueWords[i]);
    //    alert(`We have the following unique word/s ${newUniqueWords}`);
   }
   return uniqueWords;
 };
});


      // for (var j = 0; j < uniqueWords.length; j++){
      //   if (splitMessage[i] === uniqueWords[j]){


    //}
//  }

// Render functions


// Init functions
