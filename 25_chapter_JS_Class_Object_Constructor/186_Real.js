class Student {
    static collegeName = "PW AT Batch";
    static mentorName = "prrammoddutta";


    constructor(name,score) {
        this.name = name;
        this.score = score;
    }
    static display() {
        console.log(this.name + " are part of the ", Student.collegeName + this.score)
    }
    nsf(){
        console.log(this.name);
    }
}
let bhavi = new Student("bhavya",80);
let pravi = new Student("pravya",91);
let dundu = new Student("dundu",87);
console.log(Student.collegeName);
console.log(Student.mentorName);
console.log(bhavi.name);
console.log(pravi.score);
console.log(dundu.name);