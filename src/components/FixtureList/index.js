import React from 'react'

import { Box, Container } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import dayjs from 'dayjs'
import { mockFixture } from 'mock'

import useStyles from './styles'

const FixtureList = () => {
	const classes = useStyles()

	return (
		<div>
			<div>Today</div>
			{mockFixture.map((fixture, index) => {
				const { away, home } = fixture.goals
				return (
					<Container
						className={classes.root}
						key={index}
						maxWidth
					>
						<Box className={classes.heading}>
							<Typography>{dayjs(fixture.fixture.date).format('HH:mm')}</Typography>
						</Box>
						<Box className={classes.secondaryHeading}>
							<span style={{ flex: 1, textAlign: 'right' }}>{fixture.teams.home.name}</span>
							<span style={{ flex: 1, textAlign: 'center' }}>{home ?? '?'} - {away ?? '?'}</span>
							<span style={{ flex: 1, textAlign: 'left' }}>{fixture.teams.away.name}</span>
						</Box>
						<Box flex={1} />
					</Container>
				)
			}
			)}
		</div>
	)
}

export default FixtureList
