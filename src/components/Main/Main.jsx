import useAppContext from '../../hooks/useAppContext';
import Form from '../Form/Form';
import Result from '../Result/Result';

import styles from './Main.module.css';

export default function Main() {
  const { result } = useAppContext();
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Date Validator</h2>
      <p className={styles.lead}>
        Enter a value below and click Validate to check it.
      </p>
      <Form />
      {result && <Result />}
    </main>
  );
}
