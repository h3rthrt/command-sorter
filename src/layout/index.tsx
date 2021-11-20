import React, { FC } from 'react'
import { Layout } from 'antd'
import AddPeople from '../components/add-people'
import { IPeoples } from '../types/peoples'

interface I_ProjectLayout {
	data: IPeoples[]
	addToData: (people: IPeoples) => void
}

const ProjectLayout: FC<I_ProjectLayout> = ({ children, data, addToData }) => {
	const { Header, Content, Footer } = Layout

	return (
		<Layout className="layout">
			<Header className="header">
				<h1>Голы ФК «Краснодар»</h1>
				<AddPeople addToData={(people: IPeoples) => addToData(people)}/>
			</Header>
			<Content style={{ padding: '0 50px' }}>
				<div className="site-layout-content">{children}</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>
				Oleg Kotlyarov 213-321
			</Footer>
		</Layout>
	)
}

export default ProjectLayout
