import { useState } from 'react';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [isValidated, setIsValidated] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [result, setResult] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isValid,
        setIsValid,
        result,
        setResult,
        userInput,
        setUserInput,
        isValidated,
        setIsValidated
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
