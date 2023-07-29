import React, { useMemo } from "react"
import { useFormContext } from "react-hook-form"

import { Form, FormGroup, FormControl } from "react-bootstrap"

import { useErrorMessage } from "../hooks/useErrorMessage"
import { useStyles } from "../hooks/useStyles"

export const SelectField = ({
    id,
    name,
    field,
    defaultValue,
}) => {

    const { label, helperText, required = false, multi = false, shouldDisplay, styles = {} } = field

    const { register, watch } = useFormContext()

    const values = watch(name)

    const fieldStyles = useStyles("selectField", styles)

    const errorMessage = useErrorMessage(name, label)

    const isVisible = useMemo(() => {
        return shouldDisplay ? shouldDisplay(values) : true
    }, [ values, shouldDisplay ])

    return isVisible ? (
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
            <FormControl
                as="select"
                id={id}
                name={name}
                {...register(name)}
                required={required}
                multiple={multi}
                defaultValue={defaultValue || field.options[0].value}
                {...fieldStyles.select}
            >
                {field.options.map(option => (
                    <option key={option.value} value={option.value} disabled={option.disabled}>
                        {option.label || option.value}
                    </option>
                ))}
            </FormControl>
            {!!helperText && (
                <Form.Text {...fieldStyles.helperText}>
                    {helperText}
                </Form.Text>
            )}
            <Form.Control.Feedback type="invalid" {...fieldStyles.errorMessage}>
                {errorMessage}
            </Form.Control.Feedback>
        </FormGroup>
    ) : null
}