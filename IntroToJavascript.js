function begin() {
  console.log("Let's play a game...");
}

function nameSelector() {
  const names = ['Jack', 'Rae', 'Rachel', 'Zane', 'Kelsey', 'Chanelle'];
  const random = Math.floor(Math.random() * 6);
  console.log(names[random]);
}

function questionTime() {
  const questions = [
    'What data type is the following: "hello"',
    'What data type is the following: 35',
    'What data type is the following: ["potato", "celery", "carrot"]',
    'What is a string?',
    'What is a function / method?',
    'What function would I use to round a decimal number (e.g. 43.5) to its nearest integer (i.e. 44)?',
    'What function would I use to make a string (e.g. Softwire) all capital letters (i.e. SOFTWIRE)?',
    'What function would I use to make a string (e.g. Game of Thrones) all lower case letters (i.e. game of thrones)?'
  ]
  const random = Math.floor(Math.random() * 6);
  console.log(questions[random]);
}
