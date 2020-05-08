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
      => totalWord()
        - split() the incoming string into an array
        - console.log the output of words for testing
        - filter out the falsy values
        - run the length of the array 
        - update the state with the result length of the array

      => uniqueWordCount()
        - Create a REPEATED LETTER array
        - Create an OUTLER LOOP that sets the first pointer the be evaluted
          - SET EVAL LETTER to equal the first pointer in the OUTER LOOP
          - Start the INNER LOOP @(OL + 1) since the OL is being evalutated already
            - If (OL + 1) is undefinded bounce out the loop
            - Compare IL[i] === SEL 
              - if so push(IL[i]) to RLA
              - else keep looping through
        - Return the length of the REPEATED LETTER array    

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
  => renderTotalWord()
    - update html with new unique word count

  => uniqueWordRender()
    - update html with unique word count

  => averageWordRender()
    - update html with average word count

  => averageSentenceRender()
    - update html with average  sentence word count
// Init functions
  #
