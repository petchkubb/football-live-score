import { colors } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { spaces } from 'styles/spaces'

const useStyles = makeStyles({
	root: {
		background: colors.grey[300],
		height: '100vh',
		paddingTop: spaces[16],
		paddingLeft: 0,
		paddingRight: 0
	},
})

export default useStyles
