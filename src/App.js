import React from 'react'

import { colors, makeStyles } from '@material-ui/core'
import Routers from 'routes'

const useStyles = makeStyles({
	root: {
		background: colors.grey[900],
		height: '100vh'
	},
})

const App = () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Routers />
		</div>
	)
}

export default App
