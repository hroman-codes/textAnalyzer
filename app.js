/*jshint esversion: 6 */

// Single state object
$(document).ready(function(){
  let state = {
    totalWord: 0,
    uniqueWord: 0,
    // averageword: 0,
    // averageSentence:
  };

  // Render functions
  let renderTotalWord = (state, element) => {
    element.empty().append(`<span> ${state.totalWord} </span>`);
  }

  let renderUniqueWord = (state, element) => {
    element.empty().append(`<span> ${state.uniqueWord} </span>`);
  }

  // State modification functions
  let totalWord = (state, formInput) => {
    state.totalWord = formInput.length;
  };

  let uniqueWord = (state, formInput) => {
    let uniqueWords = [];

    for (let i = 0; i < formInput.length; i++) {
      let evalLetter = formInput[i];

        for (let j = i + 1; j < formInput.length; j++) {
          if (formInput[j] === 'null') return;

          if (evalLetter === formInput[j]) {
            uniqueWords.push(formInput[i])
          } else {
            continue;
          }
        }
    }

    state.uniqueWord = uniqueWords.length;
  }

  // Event listeners
  $('.js-text-form').on('submit', function(event){
    event.preventDefault();

    let formInput = $('#user-text').val().trim();
    let splitMessage = formInput.split(" ");
    let filtered = splitMessage.filter(Boolean);

    totalWord(state, filtered);
    renderTotalWord(state, $("#s1"));

    uniqueWord(state, filtered);
    renderUniqueWord(state, $("#s2"));
  });
});
