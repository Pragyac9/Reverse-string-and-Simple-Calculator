
function reverse() {
    let string = document.getElementById('string').value;
    let reversed = string.split("").reverse().join("");
    document.getElementById('result').innerHTML = 'Reversed Strng : ' + reversed;

}