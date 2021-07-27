import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    '@keyframes context': {
        '0%': {
            height: '0px',
            opacity: 0
        },
        '100%': {
            height: '50px',
            opacity: 1
        }
    },
    root: {
        display: 'flex',
        overFlowY: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        height: '98vh',
        border: '1px solid #000000'
    },
    main_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        border: '1px solid #E5E2E1',
        borderRadius: '5px',
        height: '40%',
        width: '40%'
    }
}))