// Funtion to generate HTML for uniqueData, for class propery names and methods of extended parent Employee class


const uniqueData = (employee) => {
    role = employee.getRole();
    switch (role){
        case 'Engineer':
            return `Github: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`;
        case 'Manager':
            return `Office Number: ${employee.getNumber()}`;
        case 'Intern':
            return `School:${employee.getSchool()}`;
    };
};
//function to generate individial employee card with last list item being the unique data for specific role
const generateCard = (employee) => {
    return `
    <div class="card m-1 shadow" style="width: 18rem;">
        <div class="card-body bg-primary text-light rounded-top">
            <h5 class="card-title">${employee.getName()}</h5>
            <p class="card-text">${employee.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.getID()}</li>
            <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}" target="_blank">${employee.getEmail()}</a></li>
            <li class="list-group-item">${uniqueData(employee)}</li>
        </ul>
    </div>
    `
}

//this part generates the team profile html
const generateHTML = (employees) => {
    // each generated eomployee card will be added on the html page by putting them in an initial empty string. 
    var cardsString = " ";

    for (const employee in employees) {
        cardsString += `${generateCard(employees[employee])}`
    }
    return `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
            <title>Team Profile</title>
        </head>

        <body>
            <header class="p-2 mb-2 text-center bg-success text-light">
                <h1>My Team</h1>
            </header>

            <main class="container d-flex flex-wrap justify-content-around">
                ${cardsString}
            </main>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>

        </body>

        </html>
    `
}; 

//export generatedHTML file to be later imported to index.js file 
module.exports = generateHTML;

