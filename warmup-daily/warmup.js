//ARRAYS

//Create an array of the numbers 1 through 10
function forLoop(arr){
  for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
  }
}

function whileLoop(arr){
  let i=arr.length;
  while(i>0){
    i--;
    console.log(arr[i]);
  }
}

function map(arr, callback){
  let results = [];
  for(let i=0; i<arr.length; i++){
    results.push(callback(arr[i]));
  }
  console.log(results);
  return results;
}

function filter(arr, callback){
  let results = [];
  for(let i=0; i<arr.length; i++){
    if(callback(arr[i])){
      results.push(arr[i]);
    }
  }
  console.log(results);
  return results;
}

function reduce(arr, callback){
  let acc = 0;
  let val = 0;
  let idx = 0;
  for(let i=0; i<arr.length; i++){

  }
}

//OBJECTS

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {};

//newPeople
let newPeople = ['Odie', ...people, 'Garfield'];

//newStuff
let {cars} = stuff;
cars.push('mazda');
stuff.cars = cars;
const newStuff = stuff;

//newStateå
let newState = {};