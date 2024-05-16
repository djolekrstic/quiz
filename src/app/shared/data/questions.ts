export const questionsData = [
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: ['<javascript>', '<script>', '<scripting>', '<js>'],
    correctAnswer: '<script>',
  },
  {
    question: 'Where is the correct place to insert a JavaScript?',
    answers: [
      'The <head> section',
      'Both the <head> section and the <body> section are correct',
      'The <body> section',
    ],
    correctAnswer: 'Both the <head> section and the <body> section are correct',
  },
  {
    question:
      'What is the correct syntax for referring to an external script called "xxx.js"?',
    answers: [
      '<script src="xxx.js">',
      '<script name="xxx.js">',
      '<script href="xxx.js">',
    ],
    correctAnswer: '<script src="xxx.js">',
  },
  {
    question: 'The external JavaScript file must contain the <script> tag.',
    answers: ['true', 'false'],
    correctAnswer: 'false',
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    answers: [
      'alert("Hello World");',
      'msg("Hello World");',
      'alertBox("Hello World");',
      'msgBox("Hello World");',
    ],
    correctAnswer: 'alert("Hello World");',
  },
  {
    question: 'How do you create a function in JavaScript?',
    answers: [
      'function = myFunction()',
      'function:myFunction()',
      'function myFunction()',
    ],
    correctAnswer: 'function myFunction()',
  },
  {
    question: 'How do you call a function named "myFunction"?',
    answers: [
      'call function myFunction()',
      'call myFunction()',
      'myFunction()',
    ],
    correctAnswer: 'myFunction()',
  },
  {
    question: 'How to write an IF statement in JavaScript?',
    answers: ['if (i == 5)', 'if i == 5 then', 'if i = 5', 'if i = 5 then'],
    correctAnswer: 'if (i == 5)',
  },
  {
    question:
      'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    answers: ['if i <> 5', 'if (i != 5)', 'if (i <> 5)', 'if i =! 5 then'],
    correctAnswer: 'if (i != 5)',
  },
  {
    question: 'How does a WHILE loop start?',
    answers: ['while ( i <= 10; i++)', 'while (i <= 10)', 'while i = 1 to 10'],
    correctAnswer: 'while (i <= 10)',
  },
];
