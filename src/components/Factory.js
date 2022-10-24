import { TextField } from './TextField'
import { SelectField } from './SelectField'
import { RadioField } from './RadioField'
import { CheckboxField } from "./CheckboxField"

export const renderField = ([name, field]) => {
  
    let Component = null;
    
    switch(field.type) {
  
      case "text":
        Component = TextField
        break;
      
        case "select":
        Component = SelectField
        break;
  
      case "radio":
        Component = RadioField
        break;
  
      case "checkbox":
        Component = CheckboxField
        break;
  
      default:
        break;
    }
  
    return (
      <Component
        key={name}
        name={name}
        field={field}
        {...field.props}
      />
    )
  };