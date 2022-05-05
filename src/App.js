import './App.css';
import SomeClassComponent from './components/SomeClassComponent';
import Second from './components/Second';
import MyNewComponent from './components/MyNewComponent';
import PersonCard from "./components/PersonCard";

function App() {

  const personOne = {
    firstName: "Jane",
    lastName: "Doe",
    age: 45,
    hairColor: "Black",
  }

  const personTwo = {
    firstName: "John",
    lastName: "Smith",
    age: 88,
    hairColor: "Grey",
  }

  const personThree = {
    firstName: "Millard",
    lastName: "Fillmore",
    age: 50,
    hairColor: "Brown",
  }

  const personFour = {
    firstName: "Maria",
    lastName: "Smith",
    age: 62,
    hairColor: "Brown",
  }
  return (
    <div className="App">

      <div>
        {/* <PersonCard firstName = {"Jane"} lastName={"Doe"} age = {45} hairColor = {"Black"} person = {personOne}/>
        <PersonCard firstName = {"John"} lastName={"Smith"} age = {88} hairColor = {"Grey"} person = {personTwo}/>
        <PersonCard firstName = {"Millard"} lastName={"Fillmore"} age = {50} hairColor = {"Brown"} person = {personThree}/>
        <PersonCard firstName = {"Maria"} lastName={"Smith"} age = {62} hairColor = {"Brown"} person = {personFour}/> */}
        <PersonCard person = {personOne}/>
        <PersonCard person = {personTwo}/>
        <PersonCard person = {personThree}/>
        <PersonCard person = {personFour}/>
        <legend>
          <h1>Hello Dojo!</h1>
          <h2>Things I need to do:</h2>
          <ul>
            <li>Learn React</li>
            <li>Climb Mt. Everest</li>
            <li>Run a marathon</li>
            <li>Feed the dogs</li>
          </ul>
        </legend>
      </div>
      <SomeClassComponent />
      <Second />
      <MyNewComponent />
    </div>
  );
}

export default App;
