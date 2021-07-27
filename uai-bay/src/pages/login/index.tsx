import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React, { FC, useState } from 'react'
import { useStyles } from './styles'

interface LoginProps {

}

const LoginPage: FC<LoginProps> = () => {
    const classes = useStyles()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleEmailChange(value: string){
        setEmail(value)
    }

    function handlePasswordChange(value: string){
        setPassword(value)
    }

    return (
        <Grid
            item
            container
            direction="column"
            spacing={3}
            className={classes.root}>
            <div className={classes.main_container}>
                <div className={classes.labelDiv}>
                    <Typography className={classes.loginLabel}>Login</Typography>
                </div>
                <TextField 
                    value={email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleEmailChange(event.target.value as string)}
                    color="primary"
                    variant="outlined"
                    placeholder="E-mail"
                    className={classes.textFieldStyle}
                />
                <TextField 
                    value={password}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handlePasswordChange(event.target.value as string)}
                    color="primary"
                    variant="outlined"
                    placeholder="Password"
                    type="password"
                    className={classes.textFieldStyle}
                />
                <Button
                    color="primary"
                    variant="outlined"
                    className={classes.button}
                >
                    Login
                </Button>
            </div>
        </Grid>
    )
}


export default LoginPage