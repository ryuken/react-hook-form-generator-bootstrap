import React from "react"
import { useFormContext } from "react-hook-form"

import { Form } from "react-bootstrap"
import { faToggleOff, faToggleOn } from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { useErrorMessage } from "../hooks/useErrorMessage"
import { useStyles } from "../hooks/useStyles"

export const SwitchField = ({
    id,
    name,
    field,
}) => {

    const {
        label,
        helperText,
        styles = {},
    } = field

    const fieldStyles = useStyles("switchField", styles)

    const { setValue, watch } = useFormContext()

    const errorMessage = useErrorMessage(name, label)

    const checked = watch(name)

    const onChange = () => {
        setValue(name, !checked)
    }

    return (
        <Form.Group
            key={id}
            controlId={id}
            className="mb-3 d-flex"
            {...fieldStyles.control}
        >
            <FontAwesomeIcon 
                className="me-3"
                onClick={onChange}
                icon={checked ? faToggleOn : faToggleOff}
                size="2x"
            />
            {!!label && (
                <Form.Label {...fieldStyles.label}>
                    {label}
                </Form.Label>
            )}

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