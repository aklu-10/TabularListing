import React from 'react'
import TabularListing from './Components/TabularListing/TabularListing'
import './App.css';

const App = () => {

  return (
    <>
      <TabularListing 
        api={'https://dummyjson.com/todos'} // get request
        />
    </>  
  )

}

export default App