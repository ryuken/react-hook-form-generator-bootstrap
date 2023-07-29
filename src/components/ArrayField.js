import React, { Fragment } from "react"
import { useFormContext, useFieldArray } from "react-hook-form"

import { MDBBtn } from "mdb-react-ui-kit"

export const ArrayField = ({ field, schema, renderField }) => {

    const { element, render, data, empty } = field

    const { control, watch } = useFormContext()
    const { append, remove } = useFieldArray({
        control,
        name: data,
    })

    const values = watch(data)

    const add = () => {
        append(empty)
    }

    return (
        <>
            {values.map((value, i) => (
                <Fragment key={i}>
                    {renderField([ `${data}.${i}`, {
                        type: element,
                        render,
                        schema,
                        remove,
                        i
                    }])}
                </Fragment>
            ))}

            <MDBBtn
                type="button"
                onClick={add}
            >
                Toevoegen
            </MDBBtn>
        </>
    )
}