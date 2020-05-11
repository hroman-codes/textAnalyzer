/*jshint esversion: 6 */

// Single state object
$(document).ready(function(){
  let state = {
    totalWord: 0,
    uniqueWord: {
      uniqueWordCount: 0,
      listOfUniqueWords: []
    },
    averageWordLength: 0
    // averageSentence:
  };

  // Render functions
  let renderTotalWord = (state, element) => {
    element.empty().append(` ${state.totalWord}`);
  };

  let renderUniqueWordCount = (state, element) => {
    element.empty().append(` ${state.uniqueWord.uniqueWordCount}`);
  };

  let renderListOfUniqueWords = (state, element) => {
    $('.js-text-form').trigger('reset');

    state.uniqueWord.listOfUniqueWords.map(word => {
      
      let item = document.createElement('li');
      item.appendChild(document.createTextNode(word));
      
      element.append(item);
    });
  };

  let renderAverageWordLength = (state, element) => {
    element.empty().append(` ${state.averageWordLength}`);
  }

  // State modification functions
  let totalWord = (state, formInput) => {
    state.totalWord = formInput.length;
  };

  let uniqueWord = (state, formInput) => {
    let uniqueWords = [];
    state.uniqueWord.listOfUniqueWords = [];

    for (let i = 0; i < formInput.length; i++) {
      let evalword = formInput[i];

        for (let j = i + 1; j < formInput.length; j++) {

          if (formInput[j] === 'null') return;

          if (evalword === formInput[j] && !uniqueWords.includes(evalword)) {
            uniqueWords.push(formInput[i]);
          } else {
            continue;
          }
        }
    }

    for (let unique of uniqueWords) {
      state.uniqueWord.listOfUniqueWords.push(unique);
    }

    state.uniqueWord.uniqueWordCount = uniqueWords.length;
  };

  let averageWordLength = (state, uniqueWords) => {
    console.log('uniqueWords;', uniqueWords);

    let lettersInEachWord = uniqueWords.length;
    let amountOfWords = 0;

    for (let [index, value] of uniqueWords.entries()) {
      let chars = value.split('');
      amountOfWords += chars.length;
    }

    state.averageWordLength = Number((lettersInEachWord / amountOfWords).toFixed(2));
  };

  // Event listeners
  $('.js-text-form').on('submit', function(event){
    event.preventDefault();

    let formInput = $('#user-text').val().trim();
    let splitMessage = formInput.split(" ");
    let filtered = splitMessage.filter(Boolean);

    totalWord(state, filtered);
    renderTotalWord(state, $("#s1"));

    $('#s3').empty();
    uniqueWord(state, filtered);
    renderListOfUniqueWords(state, $('#s3'));
    renderUniqueWordCount(state, $("#s2"));

    averageWordLength(state, filtered);
    renderAverageWordLength(state, $('#s4'));

  });
});
