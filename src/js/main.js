debugger;
const fullName = prompt("please enter your firsName...!");
const clock = +prompt("please enter your clock...!");
const degree = prompt("please enter your degree...!");
const status = prompt("please enter single or married...!");
switch (degree) {
    case "phd" : {
        salary = clock * 500000;
        switch (status) {
            case "single" : {
                tax = 0.2;
                taxSalary = salary * tax;
                pureSalary = salary - taxSalary;
                console.log(`fullName : ${fullName} , degree : ${degree} , salary : ${pureSalary}`);
                break;
            }
            case "married" : {
                tax = 0.1;
                taxSalary = salary * tax;
                pureSalary = salary - taxSalary;
                console.log(`fullName : ${fullName} , degree : ${degree} , salary : ${pureSalary}`);
                break;
            }
        }
        break;
    }
    case "master" : {
        salary = clock * 400000;
        switch (status) {
            case "single" : {
                tax = 0.2;
                taxSalary = salary * tax;
                pureSalary = salary - taxSalary;
                console.log(`fullName : ${fullName} , degree : ${degree} , salary : ${pureSalary}`);
                break;
            }
            case "married" : {
                tax = 0.1;
                taxSalary = salary * tax;
                pureSalary = salary - taxSalary;
                console.log(`fullName : ${fullName} , degree : ${degree} , salary : ${pureSalary}`);
                break;
            }
        }
        break;
    }
    case "bachelor" : {
        salary = clock * 300000;
        switch (status) {
            case "single" : {
                tax = 0.2;
                taxSalary = salary * tax;
                pureSalary = salary - taxSalary;
                console.log(`fullName : ${fullName} , degree : ${degree} , salary : ${pureSalary}`);
                break;
            }
            case "married" : {
                tax = 0.1;
                taxSalary = salary * tax;
                pureSalary = salary - taxSalary;
                console.log(`fullName : ${fullName} , degree : ${degree} , salary : ${pureSalary}`);
                break;
            }
        }
        break;
    }
    case "diploma" : {
        salary = clock * 200000;
        switch (status) {
            case "single" : {
                tax = 0.2;
                taxSalary = salary * tax;
                pureSalary = salary - taxSalary;
                console.log(`fullName : ${fullName} , degree : ${degree} , salary : ${pureSalary}`);
                break;
            }
            case "married" : {
                tax = 0.1;
                taxSalary = salary * tax;
                pureSalary = salary - taxSalary;
                console.log(`fullName : ${fullName} , degree : ${degree} , salary : ${pureSalary}`);
                break;
            }
        }
        break;
    }
    default : {
        console.log("Error");
    }
}