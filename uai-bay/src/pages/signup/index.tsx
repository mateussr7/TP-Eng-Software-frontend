import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { FC, useState } from "react";
import { useStyles } from "./styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

interface SignUpProps {}

const SignUpPage: FC<SignUpProps> = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [passVisibility, setPassVisibility] = useState<boolean>(false);

  function handleNameChange(value: string) {
    setName(value);
  }

  function handleEmailChange(value: string) {
    setEmail(value);
  }

  function handlePasswordChange(value: string) {
    setPassword(value);
  }

  function handleTelephoneChange(value: string) {
    setTelephone(value);
  }

  function handlePassVisibility() {
    setPassVisibility(!passVisibility);
  }

  function getTextFieldType(): string {
    if (passVisibility) return "text";
    else return "password";
  }

  return (
    <Grid item container spacing={3} className={classes.root}>
      <div className={classes.main_container}>
        <div className={classes.labelDiv}>
          <Typography className={classes.signupLabel}>Sign Up</Typography>
        </div>
        <TextField
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleEmailChange(e.target.value as string)
          }
          variant="outlined"
          color="primary"
          placeholder="E-mail"
          className={classes.textFieldStyle}
        />
        <TextField
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleNameChange(e.target.value as string)
          }
          variant="outlined"
          color="primary"
          placeholder="Name"
          className={classes.textFieldStyle}
        />
        <OutlinedInput
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handlePasswordChange(e.target.value as string)
          }
          color="primary"
          placeholder="Password"
          type={getTextFieldType()}
          className={classes.textFieldStyle}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handlePassVisibility} edge="end">
                {!passVisibility ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <TextField
          value={telephone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleTelephoneChange(e.target.value as string)
          }
          variant="outlined"
          color="primary"
          placeholder="Telephone"
          className={classes.textFieldStyle}
        />
        <Button color="primary" variant="outlined" className={classes.button}>
          Sign Up
        </Button>
      </div>
    </Grid>
  );
};

export default SignUpPage;
