import useAppContext from '../../hooks/useAppContext';
import formatedData from '../../utils/formatedDate.js';
import styles from './Result.module.css';

export default function Result() {
  const { isValid, userInput } = useAppContext()  

  return (
    <div
      className={`${styles['result-block']} ${isValid ? 'validBlock' : 'invalidBlock'}`}
    >
      <h2>Result</h2>
      <p>{isValid ? "Valid" : "Invalid"} date — {isValid ? formatedData(userInput): "Incorrect data"} - {isValid ? "" : "doesn't"} exist{isValid ? "s" : "" }</p>
    </div>
  );
}
