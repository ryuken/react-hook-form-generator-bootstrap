import React, { useMemo } from "react"
import { useFormContext } from "react-hook-form"

import { Form, FormGroup } from "react-bootstrap"

import { useErrorMessage } from "../hooks/useErrorMessage"
import { useStyles } from "../hooks/useStyles"

export const RadioField = ({
    id,
    name,
    field,
    defaultValue,
}) => {

    const { label, helperText, required = false, styles = {} } = field

    const { register } = useFormContext()
    const fieldStyles = useStyles("radioField", styles)
    const errorMessage = useErrorMessage(name, label)

    console.log("error", errorMessage)

    return (
        <FormGroup
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
      
            <div>
                {field.options.map((option, i) => (
                    <Form.Check 
                        key={i}
                        type="radio"
                        name={name}
                        {...register(name)}
                        id={name + "-" + option.label}
                        label={option.label}
                        value={option.value}
                    />
                ))}
            </div>

            {!!helperText && (
                <Form.Text {...fieldStyles.helperText}>
                    {helperText}
                </Form.Text>
            )}
            <Form.Control.Feedback type="invalid" {...fieldStyles.errorMessage}>
                {errorMessage}
            </Form.Control.Feedback>
        </FormGroup>
    )
}