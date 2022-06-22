import { useState } from 'react'

const Heading = ({ text }) =>{
  return (
    <div>
      <h2>{text}</h2>
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const DisplayStats = ({ text, value }) => {
  return (
    <div>
      {text} {value}
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if(good === 0 && bad === 0 && neutral === 0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  else{
    return (
      <div>
        <DisplayStats text='good' value={good} />
        <DisplayStats text='neutral' value={neutral} />
        <DisplayStats text='bad' value={bad} />
        <DisplayStats text='all' value={good + bad + neutral} />
        <DisplayStats text='average' value={(good - bad)/(good + bad + neutral)} />
        <DisplayStats text='positive' value={good/(good + bad + neutral)} />

      </div>
    )
  }

}

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)




  return (
    <div>
      <Heading text='give feedback'/>
      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />
      <Heading text='statistics' />
      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

export default App
