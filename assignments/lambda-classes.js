// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
      this.name = attributes.name,
      this.age = attributes.age, 
      this.location = attributes.location 
    }
    speak(){
      return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
  }
  
  class Instructor extends Person{
    constructor(instAttributes){
    super(instAttributes);
        this.specialty = instAttributes.specialty,
        this.favLanguage = instAttributes.favLanguage,
        this.catchPhrase = instAttributes.catchPhrase
    }
    demo(subject){
      return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${this.name} receives a perfect score on ${this.subject}`
    }
  }
  
  class Student extends Person{
    constructor(stuAttributes){
    super(stuAttributes);
        this.previousBackground = stuAttributes.previousBackground,
        this.className = stuAttributes.className,
        this.favSubjects = stuAttributes.favSubjects
    }
    listsSubjects(){
        return `${this.favSubjects}`
    }
    PRAssignment(subject){
        return `${this.name} has submitted a Pull Request for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
  }

  class ProjectManager extends Instructor{
      constructor(PMAttributes){
          super(PMAttributes);
            this.gradClassName = PMAttributes.gradClassName,
            this.favInstructor = PMAttributes.favInstructor
      }
      standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
      }
      debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}`;
    }
  }
  
//   person objects

  const One = new Person({
      name: `One`,
      age: 1, 
      location: `big`
  })
  const Two = new Person({
      name: `Two`,
      age: 2, 
      location: `medium`
  })
  const Three = new Person({
      name: `Three`,
      age: 3, 
      location: `small`
  })
//   instructor objects

  const Fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});
const Gred = new Instructor({
    name: 'Gred',
    location: 'Gedrock',
    age: 38,
    favLanguage: 'GavaScript',
    specialty: 'Gront-end',
    catchPhrase: `Don't forget the Gomies`
});
const Mred = new Instructor({
    name: 'Mred',
    location: 'Medrock',
    age: 39,
    favLanguage: 'MavaScript',
    specialty: 'Mront-end',
    catchPhrase: `Don't forget the Momies`
});
//   student objects

const Coltyn = new Student({
    name: "Coltyn",
    location: "Florida",
    age: 24,
    gender: "male",
    favSubjects: ["Javascript", "LESS"],
    grade: 100
});
const Goltyn = new Student({
    name: "Goltyn",
    location: "Glorida",
    age: 25,
    gender: "Gale",
    favSubjects: ["Gavascript", "GESS"],
    grade: 101
});
const Moltyn = new Student({
    name: "Moltyn",
    location: "Mlorida",
    age: 26,
    gender: "Mmale",
    favSubjects: ["Mavascript", "MESS"],
    grade: 102
});
// Project manager objects

const PM1 = new ProjectManager({
    name: "PM1",
    location: "area1",
    age: 40,
    gender: "male",
    gradClassName: "CS1"
});
const PM2 = new ProjectManager({
    name: "PM2",
    location: "area2",
    age: 41,
    gender: "male2",
    gradClassName: "CS2"
});
const PM3 = new ProjectManager({
    name: "PM3",
    location: "area3",
    age: 42,
    gender: "male3",
    gradClassName: "CS3"
});

// console loggers
  console.log(One.speak());
  console.log(Mred.demo(`Javascript`));
  console.log(Gred.grade(`Javascript`));
  console.log(Coltyn.PRAssignment(`Javascript`));
  console.log(Moltyn.sprintChallenge(`Javascript`));
  console.log(PM2.standUp(`channel`));
  console.log(PM3.debugsCode(`Coltyn`, `Javascript`));
