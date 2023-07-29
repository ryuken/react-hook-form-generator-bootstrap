import React, { useMemo } from "react"
import { Container, ButtonGroup, Button } from "react-bootstrap"
import { useForm, FormProvider } from "react-hook-form"
import merge from "lodash.merge"

import { StyleCtx } from "../hooks/useStyles"

import { renderField } from "./Factory"

const defaultStyles = {}

export const Form = (props) => {

    const {
        title,
        schema = {},
        handleSubmit,
        formOptions = {},
        overwriteDefaultStyles,
        buttons,
        styles = {},
    } = props

    const form = useForm(formOptions)

    const baseStyles = useMemo(() => {
        return overwriteDefaultStyles ? styles : merge(defaultStyles, styles)
    }, [ styles, overwriteDefaultStyles ])

    return (
        <StyleCtx.Provider value={baseStyles}>
            <FormProvider {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    {...baseStyles.form?.container}
                >
                    {!!title && <h1 {...baseStyles.form?.title}>{title}</h1>}
                    <Container spacing={baseStyles.form?.fieldSpacing}>
                        {Object.entries(schema).map(renderField)}
                    </Container>
                    <ButtonGroup {...baseStyles.form?.buttonGroup}>
                        {buttons?.reset?.hidden ? null : (
                            <Button type="reset" {...baseStyles.form?.resetButton}>
                                {buttons?.reset?.text || "Reset"}
                            </Button>
                        )}
                        <Button type="submit" {...baseStyles.form?.submitButton}>
                            {buttons?.submit?.text || "Submit"}
                        </Button>
                    </ButtonGroup>
                </form>
            </FormProvider>
        </StyleCtx.Provider>
    )
}