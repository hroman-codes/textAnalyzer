# pseudo for app.js
// Single state object
  //create a state that holds:
    // total word count of submitted text, start it at 0
    // Unique word count
    // Average word length of character of the submitted text
    // Average sentence length

//State modification functions
  # from event listener 1 / Modify logic # 1
    // Receive the value and fire off the logic for each filter:
      => wordCount function
        - loop through the words the user inputed in the form and count the
          length on it.
        - console.log the output of words for testing
        - update the state total word count for the current instance
        # this can be done in two lines
        - use split method
        - use length method of an array

      => uniqueWordCount function
        - loop through the words the user inputed in the form
        - find the same words that appear in the user input
        - count the same words that I found ^^
        - update the state unique word count

      => averageWordLength function
        - take the results of the current wordCount
        - count the characters for each word in the wordCount
        - generate an average computation for each word
        - update the state with the average

      => averageSentenceLength function
        - take the results of the current wordCount
        - loop through the words
        - count the length of the words in that current instance
        - count the breaks in words to establish a new word
        - update the state with the average sentence length

        ######## Pick up from here

// Render functions
  # from Modify logic # 1 / Render logic # 1:
    => render function
      -

// Event listeners
  # event listener 1:
    => event listener function
      // Set up listener on button submit on the form
      // grab the value from the form then pass it a state modification function
      // - that will handle the logic.
