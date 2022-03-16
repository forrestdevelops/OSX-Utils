const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.question('What would you like to do?', function(task) {
	task = task.trim()
	console.log(`starting ${task}...`)
	console.log(`completed ${task}.`)
		rl.close()
})

rl.on('close', function() {
	console.log(`Forrest Smietanski © 2022`)
	process.exit(0)
})
