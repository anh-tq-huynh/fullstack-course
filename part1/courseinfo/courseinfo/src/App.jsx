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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }]
  }
  return (
      <div>
        <Header courseName ={course.name}></Header>
        <Content partNr = {course.parts[0].name} exeNr = {course.parts[0].exercises}></Content>
        <Content partNr = {course.parts[1].name} exeNr = {course.parts[1].exercises}></Content>
        <Content partNr = {course.parts[2].name} exeNr = {course.parts[2].exercises}></Content>
        <Total total = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}></Total>
      </div>
  )

}

export default App