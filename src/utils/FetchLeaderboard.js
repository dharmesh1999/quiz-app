const FetchLeaderboard = () => {
  const prevResults = JSON.parse(localStorage.getItem('quizResults')) || [];
  prevResults.sort((a, b) => b.score - a.score);

  return prevResults;
};

export default FetchLeaderboard;
