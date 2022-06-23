import { useState } from 'react'

const History = (props) => {
  if(props.allClicks.length === 0) {
    return(
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  else{
    return (
      <div>
        History: {props.allClicks.join(' ')}
      </div>
    )
  }
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  const Button = ({ handleClick, text }) => {
    return(
      <button onClick={handleClick}>{text}</button>
    )
  }


  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left'/>
      <Button handleClick={handleRightClick} text='right'/>
      {right}
      <History allClicks = {allClicks}/>
    </div>
  )
}

export default App
