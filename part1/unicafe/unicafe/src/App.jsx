import {useState} from "react";

const StatisticsLine = ({text, count}) => {
  if (text === "positive"){
    return (
        <tr>
          <td>{text}</td>
          <td>{count} %</td>
        </tr>
    )
  }
  else{
    return (
        <tr>
          <td>{text}</td>
          <td>{count}</td>
        </tr>
    )
  }
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
  const average = (good*1 + bad*(-1)) / totalVote
  const positive = good * 100 / totalVote

  if (totalVote > 0){
    return (
        <table>
          <h1>statistics</h1>
          <StatisticsLine text="good" count={good} />
          <StatisticsLine text="neutral" count={neutral} />
          <StatisticsLine text="bad" count={bad} />
          <StatisticsLine text= "all" count={totalVote} />
          <StatisticsLine text="average" count = {average.toFixed(1)} />
          <StatisticsLine text = "positive" count = {positive.toFixed(1)} />
        </table>
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