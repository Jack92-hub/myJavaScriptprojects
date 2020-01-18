var person = {
    firstname: "Javlon",
    lastname: "Umrzokov",
    id: 14012691,
    fullname: function() {
        return this.firstname + " " + this.lastname;
    }
};
document.getElementById("demo").innerHTML = person.fullname();

class Car  {
    constructor (brand,age){
        this.carname = brand;
        this.carage = age;
    }
    present(x) {
        return x + ", I have a " + this.carage + " years old " + this.carname;
    }
    get cnam() {
        return this.carname;
    }
    set cnam(x) {
        this.carname = x;
    }
}
mycar = new Car("Ford", 4);
debugger;
mycar.cnam = "BMW";
document.getElementById("car").innerHTML = mycar.present("Hello");