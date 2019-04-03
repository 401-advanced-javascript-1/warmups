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
    acc=arr[i];
    val=arr[i+1];
    idx = i;
    callback(acc, val, idx);
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

let state = { people: people, stuff: stuff};

//newPeople
let newPeople = ['Odie', ...people, 'Garfield'];

//newStuff
let cars = stuff.cars;
newStuff = {...stuff, cars: [...cars, 'PT Cruiser']}

//newState
let newState = {};
newState = [state.people, state.stuff];