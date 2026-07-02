

//Exercise 1    


const book = {
  title: "The Great Gatsby",
  year: 1925,
  author: "F. Scott Fitzgerald",
  isAvailable: true
};


const library = [book, { title: "To Kill a Mockingbird", year: 1960, author: "Harper Lee", isAvailable: false }];


function getAvailableBooks(library) {
  return library.filter(book => book.isAvailable);
}

function removeBook(library, title) {
  return library.filter(book => book.title !== title);
}

function addBook(library, newBook) {
  return [...library, newBook];
}

function findByAuthor(library, author) {
  return library.filter(book => book.author === author);
}

// Exercise 2

class Student {
    name;
    grades;

    constructor(name, grades) {
        this.name = name;
        this.grades = grades;
    }   

    addGrade(grade) {
        this.grades.push(grade);
    }   

    getHighestGrade() {
        return Math.max(...this.grades);
    }   

    getAverageGrade() {
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }       


}



class Classroom {
    students;

    constructor(students) {
        this.students = students;
    }

    bestStudent() {
        let best = this.students[0];        
        for (let student of this.students) {
            if (student.getAverageGrade() > best.getAverageGrade()) {
                best = student;
            }
        }   
        return best;
    }   
}


// Exercise 3

const defaultSettings = {
  theme: "light",
  notifications: { email: true, push: false },
  language: "English",
  fontSize: "medium"
};

const userData = {
  theme: "dark",
  notifications: { email: false, push: true },
  language: "Hebrew"
};

// spread
const finalProfile = {
  ...defaultSettings,
  ...userData,
  notifications: {
    ...defaultSettings.notifications,
    ...userData.notifications
  }
};

// destructuring
const { theme, notifications, language, fontSize } = finalProfile;

console.log(`Theme: ${theme}`);
console.log(`Language: ${language}`);
console.log(`Notifications: ${JSON.stringify(notifications)}`)
console.log(`Font Size: ${fontSize}`);


