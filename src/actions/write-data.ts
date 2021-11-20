import fs from 'fs'
import { IPeoples } from '../types/peoples'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function writeData(people: IPeoples, callback: (obj: IPeoples[]) => void) {
	let obj
	await fs.readFile(
		'../data/team.json',
		'utf8',
		await function readFileCallback(err, data) {
			if (err) {
				console.log(err)
			} else {
				obj = JSON.parse(data) //now it an object
				obj.push(people) //add some data
				const json = JSON.stringify(obj) //convert it back to json
				fs.writeFile('../data/team.json', json, 'utf8', (err) => {
					if (err) throw console.error(err)
					console.log('Writed!')
				}) // write it back
			} 
		}
	)
	return callback(obj)
}
