import React from "react"
import { useFormContext } from "react-hook-form"

import { Form } from "react-bootstrap"

import { useErrorMessage } from "../hooks/useErrorMessage"
import { useStyles } from "../hooks/useStyles"

export const CheckboxField = ({
    id,
    name,
    field,
}) => {

    const { label, helperText, required = false, styles = {} } = field

    const { register, watch } = useFormContext()

    const fieldStyles = useStyles("checkboxField", styles)

    const errorMessage = useErrorMessage(name, label)

    return (
        <Form.Group
            key={id}
            controlId={id}
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
                        type="checkbox"
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
        </Form.Group>
    )
}