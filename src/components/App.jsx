import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const options = [
  { key: 'good', label: 'Good' },
  { key: 'neutral', label: 'Neutral' },
  { key: 'bad', label: 'Bad' },
];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = ({ key }) => {
    const actions = {
      good: setGood,
      neutral: setNeutral,
      bad: setBad,
    };

    const setState = actions[key];

    setState(count => count + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    if (!total) return 0;

    return Math.round((100 * good) / total);
  };

  {
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();
    const hasFeedback = total > 0;

    return (
      <Section title="Please leave your feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        {hasFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
};

// export class App2 extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   options = [
//     { key: 'good', label: 'Good' },
//     { key: 'neutral', label: 'Neutral' },
//     { key: 'bad', label: 'Bad' },
//   ];

//   onLeaveFeedback = ({ key }) => {
//     this.setState(state => {
//       const value = state[key];

//       return {
//         [key]: value + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;

//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();

//     if (!total) return 0;

//     return Math.round((100 * good) / total);
//   };

//   render() {
//     const { options, onLeaveFeedback } = this;
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();
//     const hasFeedback = total > 0;

//     return (
//       <Section title="Please leave your feedback">
//         <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
//         {hasFeedback ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={positivePercentage}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </Section>
//     );
//   }
// }
