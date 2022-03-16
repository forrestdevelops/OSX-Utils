const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.question('What is your name?', function(name) {
	rl.question('Where do you live?', function(city) {
		console.log(`${name} is a citizen of ${city}`)
		rl.close()
	})
})

rl.on('close', function() {
	console.log(`\nBYE BYE !!!`)
	process.exit(0)
})
