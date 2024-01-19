export function filterNamesWithStartingM(names) {
    return names.filter(name => name.startsWith('M'))
}
  
export function squareRootArray(arr) {
    return arr.map(number => Math.sqrt(number));
}
  
export function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
  
export function sumTeachersAges(data) {
    return data.reduce((sum, teacher) => sum + teacher.teacherAge, 0);
}
  
export function sumActiveTeachersAges(data) {
    const activeTeachers = data.filter(teacher => teacher.active);
    return activeTeachers.reduce((sum, teacher) => sum + teacher.teacherAge, 0);
}
  
export  function sortStudentNames(data) {
    const allStudents = data.flatMap(teacher => teacher.students.map(student => student.name));
    return allStudents.sort((a, b) => a.localeCompare(b));
}  