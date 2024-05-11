const course ={
    courseName:"Js in English",
    coursePrice:"599",
    courseInstructor:"Mayank"
}
//Destructring the object
const { courseInstructor:Instructor}=course;// we can change the name courseInstructor to Instructor
console.log(Instructor);