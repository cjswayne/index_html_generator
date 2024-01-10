// Need name, location, bio, linkedin URL, githubURL

const inquirer = require('inquirer');
const fs = require('fs');


// inquirer questions here

inquirer.prompt([
    {
        type:'input',
        name:'userName',
        message:'Please Enter Name'
    },
    {
        type:'input',
        name:'state',
        message:'Please Enter Location'
    },

    {
        type: 'input', // possibly turn into editor
        name: 'hobby',
        message: 'Please Enter Your favorite hobby'
    },
    {
        type: 'input',
        name: 'linkedinURL',
        message: 'Please Enter Your linkedin URL' 
    },
    {
        type:'input',
        name:'githubURL',
        message:'Please Enter your githubURL'
    }
]).then(({userName, state, hobby, linkedinURL, githubURL}) => {
    console.log({userName, state, hobby, linkedinURL, githubURL});

    const file = (`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <title>Document</title>
      </head>
      <body>
        <header class="m-3 text-center">
          <h1 class = "text-center">Hi, my name is ${userName}</h1>
          <nav>
            <a href="#">${linkedinURL}</a>
            <a href="#">${githubURL}</a>
          </nav>
        </header>
        <main>
    <div class = "text-center">I reside in the state of ${state}</div>
    <div class = "text-center">I enjoy ${hobby}</div>
    
        </main>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
      </body>
    </html>
    `)


    fs.writeFile('./index2.html', file, (err) => {
        if(err){
            return console.log(err);
        }
    });
        // console.log(answer);
    
    
    

})





//     // HTML FILE append down here

