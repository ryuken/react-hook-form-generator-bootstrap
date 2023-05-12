import {jsx as $5OpyM$jsx, jsxs as $5OpyM$jsxs} from "react/jsx-runtime";
import {useMemo as $5OpyM$useMemo, createContext as $5OpyM$createContext, useContext as $5OpyM$useContext, useRef as $5OpyM$useRef} from "react";
import {Container as $5OpyM$Container, ButtonGroup as $5OpyM$ButtonGroup, Button as $5OpyM$Button, Form as $5OpyM$Form, FormControl as $5OpyM$FormControl, FormGroup as $5OpyM$FormGroup} from "react-bootstrap";
import {useForm as $5OpyM$useForm, FormProvider as $5OpyM$FormProvider, useFormContext as $5OpyM$useFormContext} from "react-hook-form";
import $5OpyM$lodashmerge from "lodash.merge";
import $5OpyM$reactsignaturecanvas from "react-signature-canvas";







const $f2390fd326a84207$export$7dae14b1400b9486 = /*#__PURE__*/ (0, $5OpyM$createContext)({});
const $f2390fd326a84207$export$28e6b9b82ee883c = (type, inlineStyles)=>{
    const baseStyles = (0, $5OpyM$useContext)($f2390fd326a84207$export$7dae14b1400b9486);
    return (0, $5OpyM$useMemo)(()=>{
        return !!inlineStyles ? {
            ...baseStyles[type],
            ...inlineStyles
        } : baseStyles[type];
    }, [
        type,
        baseStyles,
        inlineStyles
    ]);
};






const $be1d3ecbc96f6ea0$export$c207a8ee394fdeab = ({ id: id , name: name , field: field  })=>{
    const { label: label , shouldDisplay: shouldDisplay , styles: styles = {}  } = field;
    const fieldStyles = (0, $f2390fd326a84207$export$28e6b9b82ee883c)("titleField", styles);
    const isVisible = (0, $5OpyM$useMemo)(()=>{
        return shouldDisplay ? shouldDisplay() : true;
    }, [
        shouldDisplay
    ]);
    return isVisible ? /*#__PURE__*/ (0, $5OpyM$jsx)("h1", {
        ...fieldStyles,
        children: label
    }) : null;
};








const $5ecf9791ef05430d$export$23759efdd2d2dae9 = (name, label)=>{
    const { formState: { errors: errors  }  } = (0, $5OpyM$useFormContext)();
    return (0, $5OpyM$useMemo)(()=>{
        const error = errors[name];
        if (!error) return undefined;
        const message = error.message;
        if (message) return message.replace(name, label || name);
        return "Field validation failed";
    }, [
        errors,
        name,
        label
    ]);
};



const $95304b84731920b5$export$2c73285ae9390cec = ({ id: id , name: name , field: field , defaultValue: defaultValue  })=>{
    const { label: label , placeholder: placeholder , htmlInputType: htmlInputType , helperText: helperText , required: required = false , leftInputAddon: leftInputAddon , rightInputAddon: rightInputAddon , shouldDisplay: shouldDisplay , styles: styles = {}  } = field;
    const fieldStyles = (0, $f2390fd326a84207$export$28e6b9b82ee883c)("textField", styles);
    const { register: register , watch: watch  } = (0, $5OpyM$useFormContext)();
    const errorMessage = (0, $5ecf9791ef05430d$export$23759efdd2d2dae9)(name, label);
    const values = watch(name);
    const isVisible = (0, $5OpyM$useMemo)(()=>{
        return shouldDisplay ? shouldDisplay(values) : true;
    }, [
        values,
        shouldDisplay
    ]);
    return isVisible ? /*#__PURE__*/ (0, $5OpyM$jsxs)((0, $5OpyM$Form).Group, {
        controlId: id,
        ...fieldStyles.control,
        children: [
            !!label && /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$Form).Label, {
                ...fieldStyles.label,
                children: label
            }),
            /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$FormControl), {
                type: htmlInputType || "text",
                name: name,
                "aria-label": name,
                ...register(name),
                required: required,
                placeholder: placeholder,
                defaultValue: defaultValue || "",
                ...fieldStyles.input
            }),
            !!helperText && /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$Form).Text, {
                ...fieldStyles.helperText,
                children: helperText
            }),
            /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$Form).Control.Feedback, {
                type: "invalid",
                ...fieldStyles.errorMessage,
                children: errorMessage
            })
        ]
    }, id) : null;
};








const $30e0535b6e8bca33$export$d55b50a564d0b931 = ({ id: id , name: name , field: field , defaultValue: defaultValue  })=>{
    const { label: label , helperText: helperText , required: required = false , multi: multi = false , shouldDisplay: shouldDisplay , styles: styles = {}  } = field;
    const { register: register , watch: watch  } = (0, $5OpyM$useFormContext)();
    const values = watch(name);
    const fieldStyles = (0, $f2390fd326a84207$export$28e6b9b82ee883c)("selectField", styles);
    const errorMessage = (0, $5ecf9791ef05430d$export$23759efdd2d2dae9)(name, label);
    const isVisible = (0, $5OpyM$useMemo)(()=>{
        return shouldDisplay ? shouldDisplay(values) : true;
    }, [
        values,
        shouldDisplay
    ]);
    return isVisible ? /*#__PURE__*/ (0, $5OpyM$jsxs)((0, $5OpyM$FormGroup), {
        controlId: id,
        ...fieldStyles.control,
        children: [
            !!label && /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$Form).Label, {
                ...fieldStyles.label,
                children: label
            }),
            /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$FormControl), {
                as: "select",
                name: name,
                ...register(name),
                required: required,
                multiple: multi,
                defaultValue: defaultValue || field.options[0].value,
                ...fieldStyles.select,
                children: field.options.map((option)=>/*#__PURE__*/ (0, $5OpyM$jsx)("option", {
                        value: option.value,
                        children: option.label || option.value
                    }, option.value))
            }),
            !!helperText && /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$Form).Text, {
                ...fieldStyles.helperText,
                children: helperText
            }),
            /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$Form).Control.Feedback, {
                type: "invalid",
                ...fieldStyles.errorMessage,
                children: errorMessage
            })
        ]
    }, id) : null;
};








const $a993ec74a110bb02$export$4aaf0c609b3e241e = ({ id: id , name: name , field: field , defaultValue: defaultValue  })=>{
    const { label: label , helperText: helperText , required: required = false , shouldDisplay: shouldDisplay , styles: styles = {}  } = field;
    const { register: register , watch: watch  } = (0, $5OpyM$useFormContext)();
    const values = watch(name);
    const fieldStyles = (0, $f2390fd326a84207$export$28e6b9b82ee883c)("radioField", styles);
    const errorMessage = (0, $5ecf9791ef05430d$export$23759efdd2d2dae9)(name, label);
    const isVisible = (0, $5OpyM$useMemo)(()=>{
        return shouldDisplay ? shouldDisplay(values) : true;
    }, [
        values,
        shouldDisplay
    ]);
    return isVisible ? /*#__PURE__*/ (0, $5OpyM$jsxs)((0, $5OpyM$FormGroup), {
        controlId: id,
        ...fieldStyles.control,
        children: [
            !!label && /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$Form).Label, {
                ...fieldStyles.label,
                children: label
            }),
            /*#__PURE__*/ (0, $5OpyM$jsx)("div", {
                children: field.options.map((option, i)=>/*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$Form).Check, {
                        type: "radio",
                        name: name,
                        ...register(name),
                        id: name + "-" + option.label,
                        label: option.label,
                        value: option.value
                    }, i))
            }),
            !!helperText && /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$Form).Text, {
                ...fieldStyles.helperText,
                children: helperText
            }),
            /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$Form).Control.Feedback, {
                type: "invalid",
                ...fieldStyles.errorMessage,
                children: errorMessage
            })
        ]
    }, id) : null;
};








const $fcf53a16a965d8f2$export$94195a47b94ed396 = ({ id: id , name: name , field: field , defaultValue: defaultValue  })=>{
    const { label: label , helperText: helperText , required: required = false , shouldDisplay: shouldDisplay , styles: styles = {}  } = field;
    const { register: register , watch: watch  } = (0, $5OpyM$useFormContext)();
    const values = watch(name);
    const fieldStyles = (0, $f2390fd326a84207$export$28e6b9b82ee883c)("checkboxField", styles);
    const errorMessage = (0, $5ecf9791ef05430d$export$23759efdd2d2dae9)(name, label);
    const isVisible = (0, $5OpyM$useMemo)(()=>{
        return shouldDisplay ? shouldDisplay(values) : true;
    }, [
        values,
        shouldDisplay
    ]);
    return isVisible ? /*#__PURE__*/ (0, $5OpyM$jsxs)((0, $5OpyM$Form).Group, {
        controlId: id,
        ...fieldStyles.control,
        children: [
            !!label && /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$Form).Label, {
                ...fieldStyles.label,
                children: label
            }),
            /*#__PURE__*/ (0, $5OpyM$jsx)("div", {
                children: field.options.map((option, i)=>/*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$Form).Check, {
                        type: "checkbox",
                        name: name,
                        ...register(name),
                        id: name + "-" + option.label,
                        label: option.label,
                        value: option.value
                    }, i))
            }),
            !!helperText && /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$Form).Text, {
                ...fieldStyles.helperText,
                children: helperText
            }),
            /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$Form).Control.Feedback, {
                type: "invalid",
                ...fieldStyles.errorMessage,
                children: errorMessage
            })
        ]
    }, id) : null;
};








const $76750a5caa632806$export$d61c19f03375c53e = ({ id: id , name: name , field: field , defaultValue: defaultValue  })=>{
    const { label: label , placeholder: placeholder , helperText: helperText , required: required = false , accept: accept = "*" , shouldDisplay: shouldDisplay , styles: styles = {}  } = field;
    const fieldStyles = (0, $f2390fd326a84207$export$28e6b9b82ee883c)("uploadField", styles);
    const { register: register , watch: watch  } = (0, $5OpyM$useFormContext)();
    const errorMessage = (0, $5ecf9791ef05430d$export$23759efdd2d2dae9)(name, label);
    const values = watch(name);
    const isVisible = (0, $5OpyM$useMemo)(()=>{
        return shouldDisplay ? shouldDisplay(values) : true;
    }, [
        values,
        shouldDisplay
    ]);
    return isVisible ? /*#__PURE__*/ (0, $5OpyM$jsxs)((0, $5OpyM$Form).Group, {
        controlId: id,
        ...fieldStyles.control,
        children: [
            !!label && /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$Form).Label, {
                ...fieldStyles.label,
                children: label
            }),
            /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$FormControl), {
                type: "file",
                accept: accept,
                name: name,
                "aria-label": name,
                ...register(name),
                required: required,
                placeholder: placeholder,
                defaultValue: defaultValue || "",
                ...fieldStyles.input
            }),
            !!helperText && /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$Form).Text, {
                ...fieldStyles.helperText,
                children: helperText
            }),
            /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$Form).Control.Feedback, {
                type: "invalid",
                ...fieldStyles.errorMessage,
                children: errorMessage
            })
        ]
    }, id) : null;
};









const $b1b7fb03d2536bf6$export$737a6469d99de160 = ({ id: id , name: name , field: field , defaultValue: defaultValue  })=>{
    const { label: label , placeholder: placeholder , helperText: helperText , required: required = false , shouldDisplay: shouldDisplay , styles: styles = {}  } = field;
    const ref = (0, $5OpyM$useRef)(0);
    const fieldStyles = (0, $f2390fd326a84207$export$28e6b9b82ee883c)("signatureField", styles);
    const { setValue: setValue , watch: watch  } = (0, $5OpyM$useFormContext)();
    const errorMessage = (0, $5ecf9791ef05430d$export$23759efdd2d2dae9)(name, label);
    const values = watch(name);
    const isVisible = (0, $5OpyM$useMemo)(()=>{
        return shouldDisplay ? shouldDisplay(values) : true;
    }, [
        values,
        shouldDisplay
    ]);
    const save = ()=>{
        setValue(name, ref.current.getTrimmedCanvas().toDataURL("image/png"));
    };
    const clear = ()=>ref.current.clear();
    return isVisible ? /*#__PURE__*/ (0, $5OpyM$jsxs)((0, $5OpyM$Form).Group, {
        controlId: id,
        ...fieldStyles.control,
        children: [
            !!label && /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$Form).Label, {
                ...fieldStyles.label,
                children: label
            }),
            /*#__PURE__*/ (0, $5OpyM$jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, $5OpyM$jsx)("div", {
                        className: "col-10",
                        children: /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$reactsignaturecanvas), {
                            canvasProps: {
                                style: {
                                    width: "100%",
                                    height: fieldStyles.height,
                                    background: "#fff"
                                }
                            },
                            ref: ref,
                            onEnd: save
                        })
                    }),
                    /*#__PURE__*/ (0, $5OpyM$jsx)("div", {
                        className: "col-2 d-flex align-items-center",
                        children: /*#__PURE__*/ (0, $5OpyM$jsx)("button", {
                            className: "btn btn-primary",
                            onClick: clear,
                            children: "↺"
                        })
                    })
                ]
            }),
            !!helperText && /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$Form).Text, {
                ...fieldStyles.helperText,
                children: helperText
            }),
            /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$Form).Control.Feedback, {
                type: "invalid",
                ...fieldStyles.errorMessage,
                children: errorMessage
            })
        ]
    }, id) : null;
};


const $9a1600a288e458a7$export$65972ef3a64ea716 = ([name, field])=>{
    let Component = null;
    switch(field.type){
        case "title":
            Component = (0, $be1d3ecbc96f6ea0$export$c207a8ee394fdeab);
            break;
        case "text":
            Component = (0, $95304b84731920b5$export$2c73285ae9390cec);
            break;
        case "select":
            Component = (0, $30e0535b6e8bca33$export$d55b50a564d0b931);
            break;
        case "radio":
            Component = (0, $a993ec74a110bb02$export$4aaf0c609b3e241e);
            break;
        case "checkbox":
            Component = (0, $fcf53a16a965d8f2$export$94195a47b94ed396);
            break;
        case "upload":
            Component = (0, $76750a5caa632806$export$d61c19f03375c53e);
            break;
        case "signature":
            Component = (0, $b1b7fb03d2536bf6$export$737a6469d99de160);
            break;
        default:
            console.log(field.type, "isn't implemented yet!");
            break;
    }
    return /*#__PURE__*/ (0, $5OpyM$jsx)(Component, {
        name: name,
        field: field,
        ...field.props
    }, name);
};


const $a526c2e93b46c96b$var$defaultStyles = {};
const $a526c2e93b46c96b$export$a7fed597f4b8afd8 = (props)=>{
    const { title: title , schema: schema = {} , handleSubmit: handleSubmit , formOptions: formOptions = {} , overwriteDefaultStyles: overwriteDefaultStyles , buttons: buttons , styles: styles = {}  } = props;
    const form = (0, $5OpyM$useForm)(formOptions);
    const baseStyles = (0, $5OpyM$useMemo)(()=>{
        return overwriteDefaultStyles ? styles : (0, $5OpyM$lodashmerge)($a526c2e93b46c96b$var$defaultStyles, styles);
    }, [
        styles,
        overwriteDefaultStyles
    ]);
    return /*#__PURE__*/ (0, $5OpyM$jsx)((0, $f2390fd326a84207$export$7dae14b1400b9486).Provider, {
        value: baseStyles,
        children: /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$FormProvider), {
            ...form,
            children: /*#__PURE__*/ (0, $5OpyM$jsxs)("form", {
                onSubmit: form.handleSubmit(handleSubmit),
                ...baseStyles.form?.container,
                children: [
                    !!title && /*#__PURE__*/ (0, $5OpyM$jsx)("h1", {
                        ...baseStyles.form?.title,
                        children: title
                    }),
                    /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$Container), {
                        spacing: baseStyles.form?.fieldSpacing,
                        children: Object.entries(schema).map((0, $9a1600a288e458a7$export$65972ef3a64ea716))
                    }),
                    /*#__PURE__*/ (0, $5OpyM$jsxs)((0, $5OpyM$ButtonGroup), {
                        ...baseStyles.form?.buttonGroup,
                        children: [
                            buttons?.reset?.hidden ? null : /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$Button), {
                                type: "reset",
                                ...baseStyles.form?.resetButton,
                                children: buttons?.reset?.text || "Reset"
                            }),
                            /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$Button), {
                                type: "submit",
                                ...baseStyles.form?.submitButton,
                                children: buttons?.submit?.text || "Submit"
                            })
                        ]
                    })
                ]
            })
        })
    });
};








const $1e039d3072fd67f0$var$defaultStyles = {};
const $1e039d3072fd67f0$export$cb1ad078b6c48b67 = (props)=>{
    const { schema: schema = {} , handleSubmit: handleSubmit , formOptions: formOptions = {} , overwriteDefaultStyles: overwriteDefaultStyles , children: children , styles: styles = {}  } = props;
    let formElements = "undefined" !== typeof props.step ? Object.entries(schema[props.step]).map((0, $9a1600a288e458a7$export$65972ef3a64ea716)) : Object.entries(schema).map((0, $9a1600a288e458a7$export$65972ef3a64ea716));
    let elements = children instanceof Array ? children.reduce((acc, item)=>{
        if ("function" === typeof item) item = item(formElements);
        acc.push(item);
        return acc;
    }, []) : children(formElements);
    const form = (0, $5OpyM$useForm)(formOptions);
    const baseStyles = (0, $5OpyM$useMemo)(()=>{
        return overwriteDefaultStyles ? styles : (0, $5OpyM$lodashmerge)($1e039d3072fd67f0$var$defaultStyles, styles);
    }, [
        styles,
        overwriteDefaultStyles
    ]);
    return /*#__PURE__*/ (0, $5OpyM$jsx)((0, $f2390fd326a84207$export$7dae14b1400b9486).Provider, {
        value: baseStyles,
        children: /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$FormProvider), {
            ...form,
            children: /*#__PURE__*/ (0, $5OpyM$jsx)("form", {
                onSubmit: form.handleSubmit(handleSubmit),
                ...baseStyles.form?.container,
                children: elements
            })
        })
    });
};






export {$a526c2e93b46c96b$export$a7fed597f4b8afd8 as Form, $1e039d3072fd67f0$export$cb1ad078b6c48b67 as FlexForm, $f2390fd326a84207$export$28e6b9b82ee883c as useStyles, $5ecf9791ef05430d$export$23759efdd2d2dae9 as useErrorMessage};
//# sourceMappingURL=index.esm.js.map
