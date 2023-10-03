import './App.css';

function filterNamesWithStartingM(names) {
  return names.filter(name => name.startsWith('M'))
}

function squareRootArray(arr) {
  return arr.map(number => Math.sqrt(number));
}

function sumArray(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function sumTeachersAges(data) {
  return data.reduce((sum, teacher) => sum + teacher.teacherAge, 0);
}

function sumActiveTeachersAges(data) {
  const activeTeachers = data.filter(teacher => teacher.active);
  return activeTeachers.reduce((sum, teacher) => sum + teacher.teacherAge, 0);
}

function sortStudentNames(data) {
  const allStudents = data.flatMap(teacher => teacher.students.map(student => student.name));
  return allStudents.sort((a, b) => a.localeCompare(b));
}

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
  const sum = sumArray(numbers)
  const filteredStudents = filterNamesWithStartingM(students)
  const rootedNumbers = squareRootArray(numbers)
  const sumTeacherAges = sumTeachersAges(data)
  const sumActiveTeacherAges = sumActiveTeachersAges(data)
  const sortedStudentNames = sortStudentNames(data)
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
