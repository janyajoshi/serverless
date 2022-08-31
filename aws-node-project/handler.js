"use strict"

// const msToWait = 4000

// const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const hello = async (event) => {
	// await sleep(msToWait)
	return {
		statusCode: 200,
		body: JSON.stringify(
			{
				message: Lambda,
				input: event,
			},
			null,
			2
		),
	}
}
const getEnv = async (event) => {
	return {
		statusCode: 200,
		body: JSON.stringify(
			{
				message: process.env,
				input: event,
			},
			null,
			2
		),
	}
}
module.exports = {
	hello,
	getEnv,
}
