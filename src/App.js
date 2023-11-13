import './App.scss';
import Main from './Screens/Main/Main';
import { useState, useEffect, createContext } from 'react';

export const MyStoreContext = createContext();



function App() {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((result) => {
        setIsLoaded(true);
        setData(result);
      },
        (error) => {
          setIsLoaded(true);
          setError(error);
        })

  }, []);


  const addToCart = (e) => {
    setCount(prev => prev + 1);
  }

  const dataStore = {
    data,
    setData,
    count,
    setCount
  }



  return (
    <MyStoreContext.Provider value={dataStore}>
      <div className='App'>
        <Main />
      </div>
    </MyStoreContext.Provider>
  );
}

export default App;
