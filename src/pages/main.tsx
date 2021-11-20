import React, { FC, useState } from 'react'
import { Table } from 'antd'
import ProjectLayout from '../layout'
import teamData from '../data/team.json'
import { IPeoples } from '../types/peoples'

const Main: FC = () => {
	const [data, setData] = useState<IPeoples[]>(teamData)
	const removeFromData = (id: number) => {
		setData(prevData => prevData.filter(item => item.id !== id ))
	}
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
		{
			title: 'Действие',
			dataIndex: '',
			key: 'x',
			render: (item: IPeoples) => <a onClick={() => removeFromData(item.id)}>Удалить</a>,
		},
	]

	const addToData = (people: IPeoples) => {
		setData(prevData => [...prevData, people])
	}

	return (
		<ProjectLayout addToData={(people: IPeoples) => addToData(people)} data={data}>
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
