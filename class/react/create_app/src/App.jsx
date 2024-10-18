import React, { StrictMode } from 'react'
import Person from '../components/Person'
import LearnJSX from '../components/LearnJSX'
import './App.css'  
import Books from '../components/Books'

// const App = () => {
//   return (
//     <h1>this is a heading</h1>
//   )
// }
//export default App

// const App = () => {
//   return (
//     <div>
//         <h1>this is a heading</h1>
//         <p>this is a paragraph</p>
//     </div>
//   )
// }
//export default App

// const App = () => {
//   return (
//     <>
//       <h1>this is a heading</h1>
//       <p>this is a paragraph</p>
//     </>
//   )
// }
// export default App

const App = () => {
  return (
    <StrictMode>
      {/* <Person name="Shubham" field="civil" age="45"/>
      <Person name="Siddharth" field="cse" age="54"/>
      <Person name="Sourav" field="civil" age="23"/> */}

      <Books title="Vasant" author="Premchand" description="this book is amazing"/>
      <Books title="Seven Wonders" author="HG WELLS" description="this book is ultra amazing"/>
      <Books title="Atomic Habits" author="Robert Frost" description="this book is ultra pro max amazing"/>
    </StrictMode>
  )
}

export default App



