import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import 'antd/dist/antd.css'
import './sass/index.sass'

import Main from './pages/main'
import ruRU from 'antd/lib/locale/ru_RU'

function render() {
	ReactDOM.render(
		<React.StrictMode>
			<ConfigProvider locale={ruRU}>
				<Main />
			</ConfigProvider>
		</React.StrictMode>, 
	document.getElementById('root'))
}

render()