import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import LandingPage from './components/landing-page/LandingPage';
import fetchQuestion from '../src/utils/api/QuestionApi';
// import fetchLeaderboard from '../src/utils/FetchLeaderboard';
import saveResultToLocalStorage from '../src/utils/SaveResultToLocalStorage';
import QuizScreen from './components/quiz-page/QuizPage';
import ResultPage from './components/result-page/ResultPage';
import Leaderboard from './components/leaderboard/Leaderboard';

function App() {
  const [name, setName] = useState('');
  const [questions, setQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [score, setScore] = useState(0);
  // const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetchQuestion()
      .then((data) => setQuestions(data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {}, []);

  const handleStartQuiz = (userName) => {
    setName(userName);
    setQuizStarted(true);
  };

  const handleShowResult = (userScore) => {
    setShowResult(true);
    setScore(userScore);
    saveResultToLocalStorage(name, userScore);
  };

  const handleRestartButton = () => {
    setName('');
    setScore(0);
    setQuizStarted(false);
    setShowResult(false);
    setShowLeaderboard(false);
  };

  if (!quizStarted) {
    return <LandingPage onStartQuiz={handleStartQuiz} />;
  } else if (!showResult) {
    return <QuizScreen questions={questions} onShowResult={handleShowResult} />;
  } else if (!showLeaderboard) {
    return (
      <ResultPage
        name={name}
        score={score}
        handleLeaderboardButton={() => setShowLeaderboard(true)}
      />
    );
  } else {
    return <Leaderboard handleRestartButton={handleRestartButton} />;
  }
}

export default App;
