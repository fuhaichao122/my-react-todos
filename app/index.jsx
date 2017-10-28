import React from 'react'
import { render } from 'react-dom'
import Perf from 'react-addons-perf'

import './static/css/common.less'

import Todos from './containers/todo'



if (__DEV__) {
	window.Perf = Perf
}

render(
	<Todos/>,
	document.getElementById('root')
)