class Student {
    constructor(gpa, credits){
        this.gpa = gpa;
        this.credits = credits;
    }

    stringGPA() {
        return this.gpa.toString();
    }

    get level(){
        if (this.credits > 90){
            return 'Senior';
        } else if (this.credits >= 61 && this.credits <= 90) {
            return 'Junior';
        } else if (this.credits >=31 && this.credits <= 60){
            return 'Sophomore';
        } else {
            return 'Freshman';
        }
    }

}

const student = new Student(3.9);
console.log(student);