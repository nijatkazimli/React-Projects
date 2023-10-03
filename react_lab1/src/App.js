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

function App() {
  const students = ['John', 'Mark', 'Stephanie', 'Martha', 'Vlad'];
  const numbers = [2, 5, 8, 10];
  const sum = sumArray(numbers)
  const filteredStudents = filterNamesWithStartingM(students)
  const rootedNumbers = squareRootArray(numbers)
  return (    
    <div>
      <ul>
        {filteredStudents.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <ul>
        {rootedNumbers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <p>
        {sum}
      </p>
    </div>
  );
}

export default App;
