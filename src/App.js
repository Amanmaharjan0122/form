import React from 'react'
import './App.css'
import HomePage from './components/homepagecomponents/index'

function App() {
  const [showRedDiv, setShowRedDiv] = React.useState(true)
  const [showBlueDiv, setShowBlueDiv] = React.useState(false)
  const [showYellowDiv, setShowYellowDiv] = React.useState(false)
  const [showGreyDiv, setShowGreyDiv] = React.useState(false)
  const [showDarkblueDiv, setShowDarkblueDiv] = React.useState(false)

  // const [showRedDiv, setShowRedDiv] = React.useState(false)

  const handleRedClick = () => {
    setShowDarkblueDiv(false)
    setShowBlueDiv(false)
    setShowYellowDiv(false)
    setShowGreyDiv(false)
    setShowRedDiv(true)
  }
  const handleBlueClick = () => {
    setShowDarkblueDiv(false)
    setShowBlueDiv(true)
    setShowYellowDiv(false)
    setShowGreyDiv(false)
    setShowRedDiv(false)
  }
  const handleYellowClick = () => {
    setShowDarkblueDiv(false)
    setShowBlueDiv(false)
    setShowYellowDiv(true)
    setShowGreyDiv(false)
    setShowRedDiv(false)
  }
  const handleGreyClick = () => {
    setShowDarkblueDiv(false)
    setShowBlueDiv(false)
    setShowYellowDiv(false)
    setShowGreyDiv(true)
    setShowRedDiv(false)
  }
  const handleDarkblueClick = () => {
    setShowDarkblueDiv(true)
    setShowBlueDiv(false)
    setShowYellowDiv(false)
    setShowGreyDiv(false)
    setShowRedDiv(false)
  }

  return (
    <div className="main">
      <div className="left">
        <button className="red" onClick={handleRedClick} />
        <button className="blue" onClick={handleBlueClick} />
        <button className="yellow" onClick={handleYellowClick} />
        <button className="grey" onClick={handleGreyClick} />
        <button className="darkblue" onClick={handleDarkblueClick} />
      </div>
      <div className="right">
        {showRedDiv && <HomePage />}

        {showBlueDiv && <div className="container2">about</div>}

        {showYellowDiv && <div className="container3">resume</div>}

        {showGreyDiv && <div className="container4">work</div>}

        {showDarkblueDiv && <div className="container5">contact</div>}
      </div>
    </div>
  )
}

export default App
