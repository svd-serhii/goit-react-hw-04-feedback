import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOption';
import Statistics from './Statistics';
import Notification from './Notification';

const feedbackOptions = { good: 0, neutral: 0, bad: 0 };

const App = () => {
  const [state, setState] = useState(feedbackOptions);

  const handleClick = e => {
    const resp = e.target.id;
    setState(prevState => ({ ...prevState, [resp]: prevState[resp] + 1 }));
  };

  const keys = Object.keys(state);
  const values = Object.values(state);
  const totalFeedback = () => {
    return values.reduce((acc, value) => {
      return acc + value;
    }, 0);
  };
  const positivePercentage = () => {
    return Math.floor((state.good * 100) / totalFeedback());
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={keys} onLeaveFeedback={handleClick} />
      </Section>
      <Section title={'Statistics'}>
        {totalFeedback() ? (
          <Statistics
            options={keys}
            values={values}
            total={totalFeedback()}
            positivePercentage={positivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
export default App;
