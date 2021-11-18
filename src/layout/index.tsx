import React, { FC } from 'react'
import { Layout, Menu } from 'antd'

const ProjectLayout: FC = ({ children }) => {
	const { Header, Content, Footer } = Layout

	return (
		<Layout className="layout">
			<Header>
				<div className="logo" />
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['2']}
				>
					{new Array(15).fill(null).map((_, index) => {
						const key = index + 1
						return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>
					})}
				</Menu>
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
