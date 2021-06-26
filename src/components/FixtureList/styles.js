import { createMuiTheme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	root: {
		flexDirection: 'row',
		display: 'flex',
		margin: '24px',
		padding: '48px',
		alignItems: 'center',
		justifyContent: 'space-between',
		[theme.breakpoints.down('sm')]: {
			padding: '24px 0',
			margin: '24px 0',
		}
	  },
	heading: {
		marginRight: '12px',
		marginLeft: '12px',
	},
	secondaryHeading: {
		color: theme.palette.text.primary,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logoWrapper: {
		justifyContent: 'center',
		display: 'flex',
	},
	logo: {
		width: '100px',
		height: '100px',
		[theme.breakpoints.down('sm')]: {
			width: '20px',
			height: '20px',
		}
	}
}))

export const theme = createMuiTheme()

theme.typography.h3 = {
	fontSize: '1rem',
	'@media (min-width:600px)': {
		fontSize: '1.5rem',
	},
	[theme.breakpoints.up('md')]: {
		fontSize: '2.4rem',
	},
}

theme.typography.h6 = {
	fontSize: '1rem',
	'@media (min-width:600px)': {
		fontSize: '1.5rem',
	},
	[theme.breakpoints.up('md')]: {
		fontSize: '2.4rem',
	},
}

export default useStyles
