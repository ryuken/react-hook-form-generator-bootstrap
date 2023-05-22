import React, { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'

import { Form, FormControl } from "react-bootstrap"

import { useErrorMessage } from '../hooks/useErrorMessage'
import { useStyles } from '../hooks/useStyles'

export const UploadField = ({
  id,
  name,
  field,
  defaultValue,
}) => {
  const {
    label,
    placeholder,
    helperText,
    required = false,
    accept = "*",
    shouldDisplay,
    styles = {},
  } = field

  const fieldStyles = useStyles('uploadField', styles)

  const { register, watch } = useFormContext()

  const errorMessage = useErrorMessage(name, label)

  const values = watch(name)

  const isVisible = useMemo(() => {
    return shouldDisplay ? shouldDisplay(values) : true
  }, [values, shouldDisplay])

  return isVisible ? (
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
          type="file"
          accept={accept}
          name={name}
          aria-label={name}
          {...register(name)}
          required={required}
          placeholder={placeholder}
          defaultValue={defaultValue || ''}
          {...fieldStyles.input}
        />
      {!!helperText && (
        <Form.Text {...fieldStyles.helperText}>
          {helperText}
        </Form.Text>
      )}
      <Form.Control.Feedback type="invalid" {...fieldStyles.errorMessage}>
        {errorMessage}
      </Form.Control.Feedback>
    </Form.Group>
  ) : null
}