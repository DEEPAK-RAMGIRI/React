// clouser allow function to access variables from it's outer scope even after outer function has finished it's operation
// used in data privacy and state management

const makeCounter = () => {
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const counter = makeCounter();
console.log(counter());
console.log(counter());


// callback
// handle's the asnychronouse tasks

function greet(name,callback){
    console.log("Hello" + name);
    callback();
}

function internal(){
    console.log("and have A nice day")
}

greet("Deepak", internal);