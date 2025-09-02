
var temp = []
const show = (val) => {
    temp.push(val);
    document.querySelector('h1').textContent = temp.join('');
}

const clearAll = () => {
    document.querySelector('h1').textContent = "Enter Something";
    temp.length = 0;

}
const res = () => {
    let result = eval(temp.join(''));
    document.querySelector('h1').textContent = result;
    temp.length = 0;
    temp.push(result);
    console.log(result);
}
