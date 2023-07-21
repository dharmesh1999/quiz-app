import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import styles from './LandingPage.module.css';

const LandingPage = ({ onStartQuiz }) => {
  const [name, setName] = useState('');

  const handleStartQuiz = () => {
    if (name.trim() !== '') {
      onStartQuiz(name);
    } else {
      alert('Please enter your name to start the quiz.');
    }
  };

  return (
    <Container className={`${styles.main} p-4`}>
      <h3>Welecome to the Quiz</h3>
      <Form>
        <Form.Group className='mb-3'>
          <Form.Label>Enter your name:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Button variant='primary' onClick={handleStartQuiz} className='w-100'>
          Start Quiz
        </Button>
      </Form>
    </Container>
  );
};

export default LandingPage;
