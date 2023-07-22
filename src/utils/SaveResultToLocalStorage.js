const SaveResultToLocalStorage = (name, score) => {
  const prevResults = JSON.parse(localStorage.getItem('quizResults')) || [];

  const existingResult = prevResults.find((result) => result.name === name);

  if (existingResult) {
    existingResult.score = score;
  } else {
    const newResult = { name, score, date: new Date().toLocaleDateString() };
    prevResults.push(newResult);
  }

  localStorage.setItem('quizResults', JSON.stringify(prevResults));
};

export default SaveResultToLocalStorage;
