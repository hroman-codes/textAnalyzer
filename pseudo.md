# pseudo for app.js
// Single state object
  # create a state that holds:
    // total word count of submitted text, start it at 0
    // Unique word count
    // Average word length of character of the submitted text
    // Average sentence length

// Event listeners
    => event listener()
      - Set up listener on button submit on the form
      - grab the value from the form then pass it to its matching modification function
      - then invoke each function and pass the value of the data into it

// State modification functions
    # Receive the value from the event listener and fire off the logic for each filter:
      => wordCount()
        - loop through the words the user inputed in the form and count the
          length on it.
        - console.log the output of words for testing
        - update the state total word count for the current instance
        # this can be done in two lines <=============== Recommendation from Wences
          - use split method
          - use length method of an array
        - then invoke the wordCountRender function

      => uniqueWordCount()
        - loop through the words the user inputed in the form
        - find the same words that appear in the user input
        - count the same words that I found ^^
        - update the state unique word count
        - then invoke the wordCountRender function

      => averageWordLength()
        - take the results of the current wordCount
        - count the characters for each word in the wordCount
        - generate an average computation for each word
        - update the state with the average

      => averageSentenceLength()
        - take the results of the current wordCount
        - loop through the words
        - count the length of the words in that current instance
        - count the breaks in words to establish a new word
        - update the state with the average sentence length

        ######## Pick up from here

// Render functions
  => wordCountRender()
    - update html with new unique word count

  => uniqueWordRender()
    - update html with unique word count

  => averageWordRender()
    - update html with average word count

  => averageSentenceRender()
    - update html with average  sentence word count
// Init functions
  #
