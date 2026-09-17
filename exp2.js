const fs = require('fs');
//create write 
fs.writeFileSync('student.txt','B Tech Node.js Lab');
//read
const data = fs.readFileSync('student.txt','utf8');

console.log(data);

//write 
fs.writeFileSync('student.txt','Name: Rahul\nSubject: full stack development')

console.log('file created successfully');

fs.appendFileSync('student.txt','\nExperiment 2 completed.');
