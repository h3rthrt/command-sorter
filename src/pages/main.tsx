import React, { FC } from 'react'
import { Table } from 'antd'
import ProjectLayout from '../layout'
import team from '../data/team.json'

const Main: FC = () => {
	interface IPeoples {
		name: string
		ampula: string
		goals: number
		matches: number
	}

	const data: IPeoples[] = team

	const columns: any = [
		{
			title: 'Имя',
			dataIndex: 'name',
		},
		{
			title: 'Амплуа',
			dataIndex: 'ampula',
		},
		{
			title: 'Голы',
			dataIndex: 'goals',
			defaultSortOrder: 'descend',
			sorter: (a: IPeoples, b: IPeoples) => a.goals - b.goals,
		},
		{
			title: 'Матчи',
			dataIndex: 'matches',
		},
	]

	return (
		<ProjectLayout>
			<Table
				columns={columns}
				dataSource={data}
				scroll={{ x: 'disable', y: 440 }}
				pagination={false}
				rowKey={obj => obj.name}
			/>
		</ProjectLayout>
	)
}

export default Main
