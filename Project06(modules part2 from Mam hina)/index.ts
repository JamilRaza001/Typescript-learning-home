import inquirer from "inquirer";


let answer = await inquirer.prompt ([{
    name : "age",
    type : "number",
    message : "Enter Your Age"

}])

console.log("Inshallah, in " + (60-answer.age) + " years you will be 60 years of age");