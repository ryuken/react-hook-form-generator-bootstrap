import React, { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'

import { Form, FormGroup, FormControl } from "react-bootstrap"

import { useErrorMessage } from '../hooks/useErrorMessage'
import { useStyles } from '../hooks/useStyles'

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
    leftInputAddon,
    rightInputAddon,
    shouldDisplay,
    styles = {},
  } = field;

  const fieldStyles = useStyles('textField', styles)

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
      {/* {!!leftInputAddon || rightInputAddon ? (
        <InputGroup {...fieldStyles.inputGroup}>
          {!!leftInputAddon && <InputLeftAddon {...leftInputAddon} />}
          <Input
            data-testid={id}
            type={htmlInputType || 'text'}
            name={name}
            aria-label={name}
            ref={register()}
            placeholder={placeholder}
            defaultValue={defaultValue || ''}
            {...fieldStyles.input}
          />
          {!!rightInputAddon && <InputRightAddon {...rightInputAddon} />}
        </InputGroup>
      ) : ( */}
        <FormControl
          type={htmlInputType || 'text'}
          id={id}
          name={name}
          aria-label={name}
          {...register(name)}
          required={required}
          placeholder={placeholder}
          defaultValue={defaultValue || ''}
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
  ) : null;
};
