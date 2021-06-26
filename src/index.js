import React from 'react'

// eslint-disable-next-line import/order
import ReactDOM from 'react-dom'

import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App'

const queryClient = new QueryClient()

ReactDOM.render(
	<QueryClientProvider client={queryClient}>
		<App />
	</QueryClientProvider>,
	document.getElementById('root')
)
