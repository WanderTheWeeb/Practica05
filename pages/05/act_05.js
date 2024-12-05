function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
  
  function showMotivationalMessage() {
    const messages = ["Well done!", "Very good!", "Correct!", "Keep it up!", "Nice work!"];
    const randomIndex = Math.floor(Math.random() * messages.length);
    alert(messages[randomIndex]);
  }
  
  function askQuestion(n1, n2) {
    const problemInWords = `What is ${n1} + ${n2}?`;
    return Number(prompt(problemInWords));
  }
  
  function runCAL() {
    const n1 = generateRandomNumber();
    const n2 = generateRandomNumber();
    const correctAnswer = n1 + n2;
  
    let userResponse = askQuestion(n1, n2);
  
    while (userResponse !== correctAnswer) {
      alert("Wrong answer! Try again.");
      userResponse = askQuestion(n1, n2);
    }
  
    showMotivationalMessage();
  }
  
  runCAL();
  