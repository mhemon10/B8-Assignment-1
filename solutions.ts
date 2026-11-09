function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier === undefined) {
    return value * 2;
  }
  return value * multiplier;
}

console.log(multiplyValue(10));
console.log(multiplyValue(10, 5));
console.log(multiplyValue(7, 0));

function processInput(value: string | number | boolean) {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ? "Active" : "Inactive";
  }
}





console.log(processInput("  TypeScript  "));
console.log(processInput(10));
console.log(processInput(true));
console.log(processInput(false));

function formatCoordinate(
  coordinate: readonly [number, number, string],
): string {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
}




console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];

  for (const arr of arrays) {
    for (const item of arr) {
      result.push(item);
    }
  }

  return result;
}

console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));






interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  const result: Course[] = [];

  for (const course of courses) {
    if (course.isPublished === true && course.students >= minStudents) {
      result.push(course);
    }
  }

  return result;
}

const courses = [
  { title: "JS Mastery", students: 120, isPublished: true },
  { title: "Devops Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "React.js Pro", students: 85, isPublished: true },
];

console.log(getPopularCourses(courses, 80));







function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const result: T[K][] = [];          

  for (const item of items) {         
    const value = item[key];        
  }

  return result;                      
}


const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

console.log(pluckValues(users, "name"));  
console.log(pluckValues(users, "id"));    


