import useAppContext from '../../hooks/useAppContext';
import validateData from '../../utils/validateData.js';
import styles from './Form.module.css';

export default function Form() {
  const {
    isValid,
    setIsValid,
    setResult,
    userInput,
    setUserInput,
    isValidated,
    setIsValidated
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsValidated(true);
    setIsValid(validateData(userInput));
    setResult(true);
  };

  const handleClick = e => {
    if (e.target.value === "") {
      setResult(false)
      setIsValidated(false)
    }
    setUserInput(e.target.value)
  }

  const clearInput = () => {
    setUserInput("")
    setResult(null)
    setIsValidated(false)
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="input">Input</label>
      <div className={styles.row}>
        <input
          type="text"
          id="input"
          className={isValidated ? (isValid ? 'valid' : 'invalid') : ''}
          value={userInput}
          onChange={handleClick}
          placeholder='DD.MM.YYYY'
        />
        <button disabled={!userInput.trim()}>Validate</button>
        {userInput.length > 0 && <button type="button" onClick={clearInput} className={styles.clear}>Clear</button>}
      </div>
    </form>
  );
}
