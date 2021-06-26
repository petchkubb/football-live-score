import React from 'react'

import { Box, Card, Container, ThemeProvider, CircularProgress } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import apiConfig from 'Api'
import dayjs from 'dayjs'
import { mockFixture } from 'mock'
import { useQuery } from 'react-query'

import useStyles, { theme } from './styles'

const FixtureList = () => {
	const classes = useStyles()
	// const { isLoading, error, data } = useQuery('fixtures', () => apiConfig.get('/fixtures', {
	// 	params: { date: '2021-06-28', season: '2020' }
	// }).then(res => res.data.response.filter(fixture => fixture.league.id === 4))
	// 	.catch(error => console.log(error))
	// )
	// if(isLoading) {
	// 	return <CircularProgress disableShrink />
	// }
	return (
		<ThemeProvider theme={theme}>
			<div>
				<div>Today</div>
				{mockFixture.map((fixture, index) => {
					const { away, home } = fixture.goals
					return (
						<Card
							className={classes.root}
							key={index}
						>
							<Box m={1}>
								<Typography variant="h3">{dayjs(fixture.fixture.date).format('HH:mm')}</Typography>
							</Box>
							<Container className={classes.secondaryHeading}>
								<Box m={1}>
									<div className={classes.logoWrapper}>
										<img className={classes.logo} src={fixture.teams.home.logo} alt="home-logo" />
									</div>
									<Typography align="center" variant="h6">{fixture.teams.home.name}</Typography>
								</Box>
								<Box minWidth="15vw" m={1}>
									<Typography align="center" variant="h3">{`${home ?? '?'} - ${away ?? '?'}`}</Typography>
								</Box>
								<Box m={1}>
									<div className={classes.logoWrapper}>
										<img className={classes.logo} src={fixture.teams.away.logo} alt="away-logo" />
									</div>
									<Typography align="center" variant="h6">{fixture.teams.away.name}</Typography>
								</Box>
							</Container>
						</Card>
					)
				}
				)}
			</div>
		</ThemeProvider>

	)
}

export default FixtureList
