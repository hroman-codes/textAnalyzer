/*jshint esversion: 6 */

// Single state object
$(document).ready(function(){
  let state = {
    totalWord: 0,
    uniqueWord: {
      uniqueWordCount: 0,
      listOfUniqueWords: []
    }
    // averageword: 0,
    // averageSentence:
  };

  // Render functions
  let renderTotalWord = (state, element) => {
    element.empty().append(` ${state.totalWord}`);
  };

  let renderUniqueWordCount = (state, element) => {
    element.empty().append(` ${state.uniqueWord.uniqueWordCount}`);
  };

  let listOfUniqueWords = (state, element) => {
    $('.js-text-form').trigger('reset');

    state.uniqueWord.listOfUniqueWords.map(word => {
      
      let item = document.createElement('li');
      item.appendChild(document.createTextNode(word));
      
      element.append(item);
    });
  };

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

          if (evalword === formInput[j]) {
            uniqueWords.push(formInput[i])
          } else {
            continue;
          }
        }
    }

    console.log('uniqueWords:', uniqueWords);
    for (let unique of uniqueWords) {
      state.uniqueWord.listOfUniqueWords.push(unique);
    }

    state.uniqueWord.uniqueWordCount = uniqueWords.length;
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
    listOfUniqueWords(state, $('#s3'));
    renderUniqueWordCount(state, $("#s2"));

  });
});
