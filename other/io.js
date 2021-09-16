process.stdin.resume();
process.stdin.setEncoding('utf-8');
var questions = [
    "Question 1",
    "Question 2",
    "Question 3"
];

var answers = [];

function ask(i) {
    process.stdout.write(`${questions[i]}`);
    process.stdout.write(`>`);
}

process.stdin.on('data', function (data) {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    } else{
        process.exit(1);
    }
});

process.on('exit', function() {
   console.log(answers[0], answers[1], answers[2]);
})

ask(0);