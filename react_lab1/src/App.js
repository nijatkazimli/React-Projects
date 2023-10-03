import './App.css';
import * as utils from './utils.js'

function App() {
  const students = ['John', 'Mark', 'Stephanie', 'Martha', 'Vlad'];
  const numbers = [2, 5, 8, 10];
  const data = [
    {
        teacherName: "Jan Nowak",
        teacherAge: 36,
        active: true,
        students: [
            {
                name: "Maciej Janosz",
                age: 12
            },
            {
                name: "Wojciech Kowalski",
                age: 15
            },
            {
                name: "Wioletta PoznaÄšÂska",
                age: 1000000
            }
        ]
    },
    {
        teacherName: "Mariusz Flasinski",
        teacherAge: 56,
        active: true,
        students: [
            {
                name: "Jan Kot",
                age: 12
            },
            {
                name: "Jan Ziobro",
                age: 15
            },
            {
                name: "Adam Malysz",
                age: 41
            }
        ]
    },
    {
        teacherName: "Wojciech Kuzak",
        teacherAge: 44,
        active: false,
        students: [
            {
                name: "Janina Wronska",
                age: 22
            },
            {
                name: "John Dover",
                age: 7
            },
            {
                name: "Emil Petterson",
                age: 46
            }
        ]
    }
];
  const sum = utils.sumArray(numbers)
  const filteredStudents = utils.filterNamesWithStartingM(students)
  const rootedNumbers = utils.squareRootArray(numbers)
  const sumTeacherAges = utils.sumTeachersAges(data)
  const sumActiveTeacherAges = utils.sumActiveTeachersAges(data)
  const sortedStudentNames = utils.sortStudentNames(data)
  return (    
    <div>
      <h1>Exercise number 1</h1>
      <ul>
        {filteredStudents.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h1>Exercise number 2</h1>
      <ul>
        {rootedNumbers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h1>Exercise number 3</h1>
      <p>
        {sum}
      </p>

      <h1>Exercise number 4</h1>
      <ol>
        <li>
          <p><strong>{sumTeacherAges}</strong></p>
        </li>
        <li>
          <p><strong>{sumActiveTeacherAges}</strong></p>
        </li>
        <li>
          <ul>
          {sortedStudentNames.map((name, index) => (
            <li key={index}><strong>{name}</strong></li>
          ))}
          </ul>
        </li>
      </ol>   
    </div>
  );
}

export default App;
