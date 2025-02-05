import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Main from './components/Main'
import { AppProvider } from './contexts/windowSizeContext.jsx'
import { AppContext } from './contexts/windowSizeContext.jsx'


function App() {
  
  const [headerMenuIsOpen, setHeaderMenuIsOpen] = useState(false)

  console.log('header menu', headerMenuIsOpen)

  const changeHeaderMenuIsOpen = () => {
    !setHeaderMenuIsOpen()
  }
  

  return (
    <>
      <Header headerMenuIsOpen={headerMenuIsOpen} changeHeaderMenuIsOpen={changeHeaderMenuIsOpen}/>

      <Main headerMenuIsOpen={headerMenuIsOpen} changeHeaderMenuIsOpen={changeHeaderMenuIsOpen}/>
    </>
  )
}

export default App
