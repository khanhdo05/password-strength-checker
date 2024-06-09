import {Box, IconButton, InputAdornment, TextField} from "@mui/material";
import PasswordStrengthChecker from "../utils/passwordStrengthChecker.ts";
import React, {useState} from "react";

export default function Checker() {

    return (
        <Box>
            <Box>
                <TextField
                    label="Password"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
        </Box>
    )
}