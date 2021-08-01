import { Button, Grid, IconButton, InputAdornment, OutlinedInput, Link,TextField, Typography } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import React, { FC, useState } from 'react'
import { useStyles } from './styles'


interface LoginProps {

}

const LoginPage: FC<LoginProps> = () => {
    const classes = useStyles()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passVisibility, setPassVisibility] = useState<boolean>(true)

    function handleEmailChange(value: string){
        setEmail(value)
    }

    function handlePasswordChange(value: string){
        setPassword(value)
    }

    function handlePassVisibility(){
        setPassVisibility(!passVisibility)
    }

    function getTextFieldType(): string {
        if(!passVisibility) return "text"
        else return "password"
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
                <OutlinedInput
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePasswordChange(e.target.value as string)}
                    color="primary"
                    placeholder="Password"
                    type={getTextFieldType()}
                    className={classes.textFieldStyle}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handlePassVisibility}
                                edge="end"
                            >
                                {passVisibility ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <Button
                    color="primary"
                    variant="outlined"
                    className={classes.button}
                >
                    Login
                </Button>
                <Button
                    
                >
                    <Link href="/signup"> or Sign Up</Link>
                </Button>
            </div>
        </Grid>
    )
}


export default LoginPage