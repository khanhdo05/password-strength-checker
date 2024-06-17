import {
    Box, Button,
    Checkbox,
    FormControlLabel,
    FormGroup, Grid,
    TextField
} from "@mui/material";
import PasswordStrengthChecker from "../utils/passwordStrengthChecker.ts";
import {ChangeEvent, useState} from "react";

export default function Checker() {
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [password, setPassword] = useState("");
    const [result, setResult] = useState<string>("Please enter your password");

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsAdmin(e.target.checked)
    }

    const handleCheckerButton = () => {
        const checker = new PasswordStrengthChecker(password)
        if (password.length == 0) {
            setResult("Please enter your password")
        } else if (checker.isStrong(isAdmin)) {
            setResult('Strong!');
        } else {
            setResult('Weak :(');
        }
    }

    const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    return (
        <Box>
            <Box>
                <FormGroup>
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <TextField
                            label="Password"
                            onChange={ handlePasswordInput }
                        >
                            Password
                        </TextField>
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Checkbox onChange={ handleCheckboxChange } />
                                }
                                label="Admin"
                                labelPlacement="top"
                            />
                        </Grid>
                    </Grid>
                </FormGroup>
                <Box sx={{marginTop: 2, textAlign: 'center'}}> {/* Add margin space and center align */}
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={ handleCheckerButton }
                    >
                        Click me to check!
                    </Button>
                </Box>
                <h3>
                    { result }
                </h3>
            </Box>
        </Box>
    )
}