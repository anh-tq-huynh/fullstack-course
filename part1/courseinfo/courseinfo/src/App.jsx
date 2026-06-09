const Header = (props) => {
  return (
      <div>
        <h1>{props.courseName}</h1>
      </div>
  )
}
const Content = (props) => {
  return (
      <div>
        <p>
          {props.partNr} {props.exeNr}
        </p>
      </div>
  )
}
const Total = (props) => {
  return (
      <div>
        <p>
          Number of exercises {props.total}
        </p>
      </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14
  return (
      <div>
        <Header courseName ={course}></Header>
        <Content partNr = {part1} exeNr = {exercises1}></Content>
        <Content partNr = {part2} exeNr = {exercises2}></Content>
        <Content partNr = {part3} exeNr = {exercises3}></Content>
        <Total total = {exercises1 + exercises2 + exercises3}></Total>
      </div>
  )

}

export default App