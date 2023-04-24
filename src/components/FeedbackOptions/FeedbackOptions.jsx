import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.scss';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttons = options.map(({ key, label }) => {
    const onClick = () => {
      onLeaveFeedback({ key });
    };

    return (
      <li className={styles.item} key={key}>
        <button className={styles.button} onClick={onClick}>
          {label}
        </button>
      </li>
    );
  });

  return <ul className={styles.list}>{buttons}</ul>;
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
