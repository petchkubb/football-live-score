import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		backgroundColor: 'white',
		flexDirection: 'row',
		display: 'flex',
	  },
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flex: 1
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flex: 1
	},
}))

export default useStyles
