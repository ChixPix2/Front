import TextField from "@material-ui/core/TextField";
import React from "react";

let FormPropsTextField = function (props,label_form) {
    return(
        <TextField
            disabled
            label={label_form}
            value={props}
            style={
                {
                    marginTop: 10,
                }
            }
            variant="outlined"
        />
    )
};

export default FormPropsTextField;