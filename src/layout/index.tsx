import React, { FC } from 'react'
import { Layout } from 'antd'
import AddPeople from '../components/add-people'


const ProjectLayout: FC = ({ children}) => {
	const { Header, Content, Footer } = Layout

	return (
		<Layout className="layout">
			<Header className="header">
				<h1>Голы ФК «Краснодар»</h1>
				<AddPeople />
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
