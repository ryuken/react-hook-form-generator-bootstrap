import React, { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'

import { Form, FormGroup } from "react-bootstrap"

import { useErrorMessage } from '../hooks/useErrorMessage'
import { useStyles } from '../hooks/useStyles'

export const RadioField = ({
  id,
  name,
  field,
  defaultValue,
}) => {

  const { label, helperText, required = false, shouldDisplay, styles = {} } = field

  const { register, watch } = useFormContext()

  const values = watch(name)

  const fieldStyles = useStyles('radioField', styles)

  const errorMessage = useErrorMessage(name, label)

  const isVisible = useMemo(() => {
    return shouldDisplay ? shouldDisplay(values) : true
  }, [values, shouldDisplay])

  return isVisible ? (
    <FormGroup
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
            type="radio"
            name={name}
            {...register(name)}
            id={name + '-' + option.label}
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
  ) : null
}