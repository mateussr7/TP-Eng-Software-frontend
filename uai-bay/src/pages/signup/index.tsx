import { Grid } from '@material-ui/core'
import React, { FC, useState } from  'react'
import { useStyles } from './styles'


interface SignUpProps {

}

const SignUpPage: FC<SignUpProps> = () => {
    const classes = useStyles()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [telephone, setTelephone] = useState('')

    return(
        <Grid
            item
            container
            spacing={3}
            className={classes.root}
        >
            <div className={classes.main_container}>

            </div>

        </Grid>
    )
}