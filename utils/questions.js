//questions
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    message: "What was your motivation?:",
    name: "description",
  },
  {
    type: "input",
    message: "Why did you build this project?:",
    name: "about",
  },
  {
    type: "input",
    message: "What problem does it solve?",
    name: "installation",
  },
  {
    type: "input",
    message: "What did you learn?",
    name: "clone",
  },
  {
    type: "list",
    name: "license",
    message: "Please select the license you used for this project.",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla",
      "MIT",
      "Apache",
      "Boost",
    ],
  },
  {
    type: "input",
    message: "Please enter any testing protocols you used for your project?",
    name: "test",
  },
  {
    type: "input",
    name: "author",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "userEmail",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "URL",
    message: "What is the URL of the live site?",
  },
  {
    type: "input",
    name: "repo",
    message: "What is the URL of the github repo?",
  },
];

module.exports = {
  questions: questions,
};
