/*jshint esversion: 6 */

// Single state object
$(document).ready(function(){
  let state = {
    totalWord: 0,
    // uniqueword: 0,
    // averageword: 0,
    // averageSentence:
  };

  // Render functions
  let renderTotalWord = (state, element) => {
    element.empty().append(`<span> ${state.totalWord} </span>`)
  }


  // State modification functions
  let totalWord = (state, formInput) => {
    let splitMessage = formInput.split(" ");
    let filtered = splitMessage.filter(Boolean);

    state.totalWord = filtered.length;
  };


// let uniqueWord = (formInput) => {
//   let uniqueWords = [];
//   const splitMessage = formInput.split(" "); // why am I doing this twice once in wordCount and uniqueWord function?
//   // set a vairable to be the mechinism to hold the false value.
//     for(i = 0; i < splitMessage.length; i++ ){
//       let repeated = false;
//       if (uniqueWords.length === 0) {
//         uniqueWords.push(splitMessage[i]);
//       }
//     for(j = 0; j < uniqueWords.length; j++) {
//       if (splitMessage[i] === uniqueWords[j]) {
//         repeated = true;
//         }
//       }
//       if (!repeated) {
//         uniqueWords.push(splitMessage[i]);
//       }
//     }
//     console.log(uniqueWords);
//     return uniqueWords;
// };

  // Event listeners
  $('.js-text-form').on('submit', function(event){
    const formInput = $('#user-text').val().trim();
    event.preventDefault();

    totalWord(state, formInput);
    renderTotalWord(state, $("#s1"));
  });
});
