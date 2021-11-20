import React, { FC } from 'react'
import { Table } from 'antd'
import ProjectLayout from '../layout'
import { IPeoples } from '../types/peoples'
import { observer } from 'mobx-react-lite'
import Team from '../store/team'
import { toJS } from 'mobx'

const Main: FC = observer(() => {

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
			render: (item: IPeoples) => <a onClick={() => {
				Team.removePeople(item.id)
				console.log(toJS(Team))
			}}>Удалить</a>,
		},
	]

	return (
		<ProjectLayout>
			<Table
				columns={columns}
				dataSource={Team.team}
				scroll={{ x: 'disable', y: 440 }}
				pagination={false}
				rowKey={obj => obj.id}
			/>
		</ProjectLayout>
	)
})

export default Main
