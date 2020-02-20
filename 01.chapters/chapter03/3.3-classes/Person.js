class person {

  

  constructor(firstname, lastname, age){

    this._firstname = firstname;

    this._lastname = lastname;

    this._age = age;

  }

  

  //returns full name with the use of the getter methods

  get fullName(){

    let fullName = this.fname + ' ' + this.lname;

    return fullName;

  }

  

  get fname(){

    return this._firstname;

  }

  get lname(){

    return this._lastname;

  }

  get age(){

    return this._age;

  }

  set fname(fname){

    this._firstname = fname;

  }

  set lname(lname){

    this._lastname = lname;

  }

  set age(age){

    this._age = age;

  }

}

var person1 = new person('Casper','Petersen', 28);

console.log(person1.fullName + ', ' + person1.age);

person1.fname = "Mogens";

person1.lname = "Lykketoft";

person1.age = 75;

console.log(person1.fullName + ', ' + person1.age);
