import React, { useRef } from "react"
import { useFormContext } from "react-hook-form"

import { Form } from "react-bootstrap"
import SignaturePad from "react-signature-canvas"

import { useErrorMessage } from "../hooks/useErrorMessage"
import { useStyles } from "../hooks/useStyles"

export const SignatureField = ({
    id,
    name,
    field,
}) => {

    const {
        label,
        helperText,
        required = false,
        styles = {},
    } = field

    const ref = useRef(0)
    const fieldStyles = useStyles("signatureField", styles)
    const { setValue } = useFormContext()
    const errorMessage = useErrorMessage(name, label)

    const save = () => {
        setValue(name, ref.current.getTrimmedCanvas().toDataURL("image/png"))
    }

    const clear = () => ref.current.clear()

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
            <div className="row">
                <div className="col-10">
                    <SignaturePad
                        canvasProps={{ style: { width: "100%", height: fieldStyles.height, background: "#fff", ...fieldStyles.canvas } }}
                        ref={ref}
                        onEnd={save}
                    />
                </div>
                <div className="col-2 d-flex align-items-center">
                    <button className="btn btn-primary" onClick={clear}>
                        ↺
                    </button>
                </div>
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