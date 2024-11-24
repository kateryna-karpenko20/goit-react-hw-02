import React, { useState, useEffect } from 'react';
import Feedback from '../components/Feedback/Feedback';
import Options from '../components/Options/Options';
import Notification from '../components/Notification/Notification';

const App = () => {
const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    if (feedback) {
      localStorage.setItem('feedback', JSON.stringify(feedback));
    }
  }, [feedback]);
  const updateFeedback = (type) => {
    setFeedback((prevState) => ({...prevState, [type]: prevState[type] + 1, }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positivePercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <div style={{padding: '20px'}}>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options
        onFeedback={updateFeedback} 
        onReset={resetFeedback} 
        totalFeedback={totalFeedback} 
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
};

export default App;
