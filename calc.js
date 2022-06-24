alert("Hello! \nI can perform basic additions, subtractions, multiplications and divisions of two numbers. \nWant to know how? Click Ok to find out.")

while (true) {
    let userOption = prompt("Please enter your choice of operation: \n1 for Addition \n2 for Subtraction \n3 for Multiplication \n4 for Division ")

    if (userOption != "1" && userOption != "2" && userOption != "3" && userOption != "4") {
        alert("Please kindly read the instructions and try again!")
    }

    else {
        let userNumber1 = parseFloat(prompt("Enter first number: "))
        let userNumber2 = parseFloat(prompt("Enter second number: "))
        
        if (isNaN(userNumber1) || isNaN(userNumber2)) {
            alert("You input was invalid! Please enter a number!")
        }
        
        else {
            if (userOption == "1") {
                alert(userNumber1 + userNumber2)
                break
            }
    
            else if (userOption == "2") {
                alert(userNumber1 - userNumber2)
                break
            }
    
            else if (userOption == "3") {
                alert(userNumber1 * userNumber2)
                break
            }
    
            else if (userOption == "4") {
                alert(userNumber1 / userNumber2)
                break
            }
        }
    }
}