import inquire from 'inquirer'

inquire.prompt([
    {
        type: 'confirm',
        name: 'confirm',
        message: 'yes or no'
    }
]).then(anwsers => {
    console.log(anwsers)
})