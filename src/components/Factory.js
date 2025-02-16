import React from "react"

import { GridField } from "./GridField"
import { TitleField } from "./TitleField"
import { TextField } from "./TextField"
import { SelectField } from "./SelectField"
import { RadioField } from "./RadioField"
import { CheckboxField } from "./CheckboxField"
import { UploadField } from "./UploadField"
import { SignatureField } from "./SignatureField"

export const renderField = ([ name, field ]) => {
  
    const { shouldDisplay } = field

    // check if useMemo works
    const isVisible = shouldDisplay ? shouldDisplay() : true

    if (isVisible === false) {
        return null
    }

    let Component = null
   
    switch (field.type) {
  
        case "grid":
            Component = GridField
            break

        case "title":
            Component = TitleField
            break

        case "text":
            Component = TextField
            break
      
        case "select":
            Component = SelectField
            break
  
        case "radio":
            Component = RadioField
            break
  
        case "checkbox":
            Component = CheckboxField
            break

        case "upload":
            Component = UploadField
            break
      
        case "signature":
            Component = SignatureField
            break
  
        default:
            console.log(field.type, "isn't implemented yet!")
            break
    }
  
    return (
        <Component
            key={name}
            name={name}
            field={field}
            schema={field.schema}
            renderField={renderField}
            {...field.props}
        />
    )
}