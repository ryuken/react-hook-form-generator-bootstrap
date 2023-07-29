import React from "react"
import { useFormContext } from "react-hook-form"

import { Form, FormControl } from "react-bootstrap"

import { useErrorMessage } from "../hooks/useErrorMessage"
import { useStyles } from "../hooks/useStyles"

export const TextField = ({
    id,
    name,
    field,
    defaultValue,
}) => {
    const {
        label,
        placeholder,
        htmlInputType,
        helperText,
        required = false,
        styles = {},
    } = field

    const fieldStyles = useStyles("textField", styles)

    const { register } = useFormContext()

    const errorMessage = useErrorMessage(name, label)

    return (
        <Form.Group
            key={id}
            controlId={id}
            className="mb-3"
            {...fieldStyles.control}
        >
            {!!label && (
                <Form.Label {...fieldStyles.label}>
                    {label}
                </Form.Label>
            )}
            <FormControl
                type={htmlInputType || "text"}
                id={id}
                name={name}
                aria-label={name}
                {...register(name)}
                required={required}
                placeholder={placeholder}
                defaultValue={defaultValue || ""}
                {...fieldStyles.input}
            />
            {/* )} */}
            {!!helperText && (
                <Form.Text {...fieldStyles.helperText}>
                    {helperText}
                </Form.Text>
            )}
            <Form.Control.Feedback type="invalid" {...fieldStyles.errorMessage}>
                {errorMessage}
            </Form.Control.Feedback>
        </Form.Group>
    )
}