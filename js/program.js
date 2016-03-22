/*
  We'll declare a variable named "message" to store
  information we will display to the screen.
  We can name variables whatever we want, but it's helpful to use meaningful names.
*/
var message;

/*
  Now we can assign a value to our variable.  In the code below this comment, try
  changing the value on the right side of the = and reloading the page in your browser.

  For each of the following, change the value of message by editing
  the part after the = and before the ;. Make an edit and reload the browser to
  see the result.
  Change message to:
    - a number
    - a true or false boolean

  Next, try combining one or more values using the + symbol:
    - The words "hello" and "world" (dont forget to put quotation marks around the words)
    - The string/sentence 'The number of the day is ' with a number

  Once you have the hang of editing the 'message' variable, try
  declaring a new variable, with a name you pick. Declare your new variable and
  assign a value, your name, to it (don't forget quotation marks).

  Change 'message' to store "Hello " plus the new variable. This should look like
  arithmetic addition between a word in qutation marks and a variable. See if you can
  get the browser to display a custom "Hello" message to you with your name.
*/

message = "Hello";

/*
  Below we take advantage of the fact that the web browser provides
  a 'document' variable we can use to manipulate the page. The `write()` part is
  a function that is part of the 'document' variable. The code below is telling
  the browser to write information into the HTML document.
*/

document.write(message);
