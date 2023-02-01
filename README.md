# Kenzie Academy Challenge: Anagrams

Follow the instructions provided on `my.kenzie.academy` for this challenge. The `code.js` file is a placeholder. Feel free to rename it or add additional files to the project.

_However, leave `words.js` unmodified._

Customize this README.md however you want to turn it into documentation for your project (including deleting these opening paragraphs). The only required sections are the **Project Plan** and **Reflection** below. Be sure to use proper Markdown syntax in this file (here's a [cheatsheet PDF](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)).

## Project Plan

Project Plan for Implementation of Anagrams:

1. Create a form to contain the following:
   To enter a word from the array of words in word.js
   A button to be clicked to bring out the anagrams
2. Create a div to diplay Anagrams of word input after the click onclick function.

Pseudocode:

1. Implement necessary html syntax to depict the above in a browser
2. create necessary id, to access the elements to use in javaScript
3. In code.js:
   a. grab the imput element by its id and assign it a variable
   b. grab the result element by its id and assign it a variable
4. Create a findAnagrams function and call it onclick: This operation is to analyse input word.
   a. create a sortStr variable to make a string function to return =>
   b. string word splited method with ("") space string and
   c. sort method to sort the letters alphabetically and
   d. join method to produce the word letter alphabetically with ("") space string
   Inside this function, make another function that will now filter all the words in the dictionary (words.js) and filter it to see any other word that may contain the sorted letters in 'd' above in any other and return such words and that will be the anagrams of the imput word. To do that:
   a. make a variable filtered to filter the words in dictionary(words.js)
   b. the filter condition is if word is equal to sort string,
   c. make result variable innerHTML = filtered word
   d. call join method on such filtered result words with coma, space glue (", ")
   e. return all words in 'd' above and this would be depicted in the div (2) above

<!-- _(Put your project plan here. It could be pseudocode, an outline-style development plan, etc. But whatever form you choose, it should be detailed enough that another developer could feasibly use it to implement your solution.)_ -->

## Reflection

<!-- What different approaches or techniques did you consider when planning your implementation?

What were the advantages and disadvantages of those alternatives? -->

_(Put your reflection answer here.)_
One would have map through the arrar of words and check the presence of all the letters in input word. And return the words where it matches all the letters.
Using the map method may will still filter through the words thereby resulting in duplicate task
