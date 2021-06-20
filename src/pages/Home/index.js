import React from 'react'

import { Container } from '@material-ui/core'

import FixtureList from 'components/FixtureList'

import useStyles from './styles'

const Home = () => {
	const classes = useStyles()
    
	return (
		<Container className={classes.root} maxWidth="md">
			<FixtureList />
		</Container>
	)
}
export default Home
