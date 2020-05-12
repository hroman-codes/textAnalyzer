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
            - Compare IL[i] === SEL and the repeated letter array does not include IL[i]
              - if so push(IL[i]) to RLA
              - else keep looping through
        - Return the length of the REPEATED LETTER array to get the amount of unique words
        - Create another loop that pushes the unique words to the state object  

      => averageWordLength()
        - Split up the incoming sentence/string
        - Create a variable to keep track of the amount of letters in each word
        - Create the first loop pointing to the first word
        - Take the first word and split it up into individual chars
        - On each [ith] element append it to the variable keeping track of letters, count, and sum up on each iteration
        - When done with loop 
        - Take the sum of letters and divide by the total words/length of the string/array.

      => averageSentenceLength()
        - Take the incoming word 

// Render functions
  => renderTotalWord()
    - update html with new unique word count

  => renderUniqueWord()
    - update html with unique word count
    - update html with a list of unique words

  => renderAverageWordLength()
    - update html with average word count

  => renderAverageSentenceRender()
    - update html with average  sentence word count