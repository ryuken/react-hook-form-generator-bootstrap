import React, { useMemo } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import merge from 'lodash.merge'

import { StyleCtx } from '../hooks/useStyles'
import { renderField } from './Factory'

const defaultStyles = {}

export const FlexForm = (props) => {

    const {
        schema = {},
        handleSubmit,
        formOptions = {},
        overwriteDefaultStyles,
        children,
        styles = {},
    } = props

    let formElements = "undefined" !== typeof props.step ? Object.entries(schema[props.step]).map(renderField) : Object.entries(schema).map(renderField)

    let elements = children instanceof Array ? children.reduce((acc, item) => {

        if("function" ===  typeof item) {
          item = item(formElements)
        }
    
        acc.push(item)
    
        return acc
    
    }, []) : children(formElements)

    const form = useForm(formOptions);

    const baseStyles = useMemo(() => {
        return overwriteDefaultStyles ? styles : merge(defaultStyles, styles);
    }, [styles, overwriteDefaultStyles])

    return (
        <StyleCtx.Provider value={baseStyles}>
            <FormProvider {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    {...baseStyles.form?.container}
                >
                    {elements}
                </form>
            </FormProvider>
        </StyleCtx.Provider>
    )
}