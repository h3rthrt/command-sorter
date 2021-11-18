import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Main from './pages/main'

function render() {
	ReactDOM.render(
		<React.StrictMode>
			<Main />
		</React.StrictMode>, 
	document.body)
}

render()