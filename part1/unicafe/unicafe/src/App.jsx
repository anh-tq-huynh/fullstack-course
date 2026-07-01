import {useState} from "react";

const Display = ({text, count}) => {
  return (
      <p>{text} {count}</p>
  )
}

const Button = ({text, onClick}) => {
  return (
      <button onClick={onClick}>{text}</button>
  )
}

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const totalVote = props.totalVote

  if (totalVote > 0){
    return (
        <div>
          <h1>statistics</h1>
          <Display text="good" count={good} />
          <Display text="neutral" count={neutral} />
          <Display text="bad" count={bad} />
          <Display text= "all" count={totalVote} />
          <Display text="average" count = {(good*1 + bad*(-1)) / totalVote} />
          <Display text = "positive" count = {good * 100 / totalVote}/>
        </div>
    )
  }
  else{
    return (
        <div>
          <h1>statistics</h1>
          <p>No feedback given</p>
        </div>
    )
  }

}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setTotal(total + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1)
  }

  const handleBad = () => {
    setBad(bad + 1);
    setTotal(total + 1)
  }

  return (
      <div>
        <h1>give feedback</h1>
        <Button onClick = {handleGood} text = "good"></Button>
        <Button onClick = {handleNeutral} text = "neutral" ></Button>
        <Button onClick = {handleBad} text = "bad"></Button>

        <Statistics good={good} neutral={neutral} bad={bad} totalVote = {total} />
      </div>
  )
}

export default App;