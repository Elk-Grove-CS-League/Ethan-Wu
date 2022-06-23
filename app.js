import chalk from 'chalk';
const name = 'Whoever you are';
console.log(chalk.redBright('Hello %s'), name);

import promptSync from 'prompt-sync'

var prompt = promptSync();
function ask (question, answersList) {
    console.log(question);
    //console.log( "Answers:\n" + answersList.join('\n'));
    var response = prompt("> ");
    if (answersList.includes(response)) {
        return response;

    }else {
        return ask(question, answersList);
        return response;
    }

        
        
}

ask("What color is the sky?", ["blue", "red"]);


