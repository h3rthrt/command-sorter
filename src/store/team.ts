import { makeAutoObservable } from 'mobx'
import { IPeoples } from '../types/peoples'
import TeamData from '../data/team.json'

class Team {

	team: IPeoples[] = TeamData

	constructor() {
		makeAutoObservable(this)
	}

	addPeople(people: IPeoples) {
		this.team = [people].concat(this.team)
	}

	removePeople(id: number) {
		this.team = this.team.filter(item => item.id !== id )
	}


}

export default new Team()
