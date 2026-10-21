import React from "react";
import styles from "./InputWithLabel.module.css"

import Input from "../../../atoms/Input/Input";
import Label from "../../../atoms/Label/Label";

type InputWithLabelProps = {
    label: string;
    placeholder: string;
    labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

// teste

function InputWithLabel({
        label, placeholder, labelProps, inputProps
    } : InputWithLabelProps){
    return(
        <div className={styles.input_with_label}>
            <Label {...labelProps}> {label} </Label>
            <Input {...inputProps}>{placeholder}</Input>
        </div>
    );
}

export default InputWithLabel;