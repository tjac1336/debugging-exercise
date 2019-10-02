
// Template source: https://startbootstrap.com/templates/bare/

// calculateSum() calculates the sum of all the numbers between num1 to num2 *inclusive*
// For example, if num1 were 1 and num2 were 3, it should display 1 + 2 + 3 = 6 in answer
function calculateSum(){
    let num1 = document.querySelector("#num1")
    let num2 = document.querySelector("#num2")
    

    console.log("I've been clicked")
	console.log(num1.value, num2.value)

    let total = sum(parseInt(num1.value), parseInt(num2.value))

    answer = document.querySelector("#answer")
    answer.innerHTML = total
}

function sum(a, b){
    let sum = 0

    for(i = a; i <= b; i+=1){
        sum += i
    }

    return parseInt(sum);

}