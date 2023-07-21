import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import styles from './QuizPage.module.css';

const QuizPage = ({ questions, onShowResult }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setSelectedOption(null);
  }, [currentQuestion]);

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      const isCorrect = questions[currentQuestion].answer === selectedOption;
      if (isCorrect) {
        setScore((prevScore) => prevScore + 1);
      }
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      alert('Please select an option to continue.');
    }
  };

  const handleShowResult = () => {
    onShowResult(score);
  };

  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <Container className={`${styles.main} p-4`}>
      <Card>
        <Card.Body>
          <Card.Title>Question {currentQuestion + 1}</Card.Title>
          <Card.Text>{questions[currentQuestion].question}</Card.Text>
          <div className='d-flex flex-column'>
            <Button
              variant={selectedOption === 'A' ? 'primary' : 'outline-primary'}
              onClick={() => setSelectedOption('A')}
              className='my-2'
            >
              {questions[currentQuestion].A}
            </Button>
            <Button
              variant={selectedOption === 'B' ? 'primary' : 'outline-primary'}
              onClick={() => setSelectedOption('B')}
              className='my-2'
            >
              {questions[currentQuestion].B}
            </Button>
            <Button
              variant={selectedOption === 'C' ? 'primary' : 'outline-primary'}
              onClick={() => setSelectedOption('C')}
              className='my-2'
            >
              {questions[currentQuestion].C}
            </Button>
            <Button
              variant={selectedOption === 'D' ? 'primary' : 'outline-primary'}
              onClick={() => setSelectedOption('D')}
              className='my-2'
            >
              {questions[currentQuestion].D}
            </Button>
          </div>
          <div className='d-flex justify-content-between mt-4'>
            <Button
              variant='secondary'
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
              disabled={currentQuestion === 0}
            >
              Prev Question
            </Button>
            {isLastQuestion ? (
              <Button variant='info' onClick={handleShowResult}>
                Show Result
              </Button>
            ) : (
              <Button variant='success' onClick={handleNextQuestion}>
                Next Question
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default QuizPage;
