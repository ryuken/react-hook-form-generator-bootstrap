var $gXNCa$reactjsxruntime = require("react/jsx-runtime");
var $gXNCa$react = require("react");
var $gXNCa$reactbootstrap = require("react-bootstrap");
var $gXNCa$reacthookform = require("react-hook-form");
var $gXNCa$lodashmerge = require("lodash.merge");
var $gXNCa$reactsignaturecanvas = require("react-signature-canvas");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Form", () => $ecf17b62a3990f30$export$a7fed597f4b8afd8);
$parcel$export(module.exports, "FlexForm", () => $5b171ef530732234$export$cb1ad078b6c48b67);
$parcel$export(module.exports, "useStyles", () => $4b415e85194d9b0a$export$28e6b9b82ee883c);
$parcel$export(module.exports, "useErrorMessage", () => $83db9c4953ef8cf1$export$23759efdd2d2dae9);






const $4b415e85194d9b0a$export$7dae14b1400b9486 = /*#__PURE__*/ (0, $gXNCa$react.createContext)({});
const $4b415e85194d9b0a$export$28e6b9b82ee883c = (type, inlineStyles)=>{
    const baseStyles = (0, $gXNCa$react.useContext)($4b415e85194d9b0a$export$7dae14b1400b9486);
    return (0, $gXNCa$react.useMemo)(()=>{
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






const $fdb6ac635cc48052$export$c207a8ee394fdeab = ({ id: id , name: name , field: field  })=>{
    const { label: label , shouldDisplay: shouldDisplay , styles: styles = {}  } = field;
    const fieldStyles = (0, $4b415e85194d9b0a$export$28e6b9b82ee883c)("titleField", styles);
    const isVisible = (0, $gXNCa$react.useMemo)(()=>{
        return shouldDisplay ? shouldDisplay() : true;
    }, [
        shouldDisplay
    ]);
    return isVisible ? /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("h1", {
        ...fieldStyles,
        children: label
    }) : null;
};








const $83db9c4953ef8cf1$export$23759efdd2d2dae9 = (name, label)=>{
    const { formState: { errors: errors  }  } = (0, $gXNCa$reacthookform.useFormContext)();
    return (0, $gXNCa$react.useMemo)(()=>{
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



const $86e7c620964f9775$export$2c73285ae9390cec = ({ id: id , name: name , field: field , defaultValue: defaultValue  })=>{
    const { label: label , placeholder: placeholder , htmlInputType: htmlInputType , helperText: helperText , required: required = false , leftInputAddon: leftInputAddon , rightInputAddon: rightInputAddon , shouldDisplay: shouldDisplay , styles: styles = {}  } = field;
    const fieldStyles = (0, $4b415e85194d9b0a$export$28e6b9b82ee883c)("textField", styles);
    const { register: register , watch: watch  } = (0, $gXNCa$reacthookform.useFormContext)();
    const errorMessage = (0, $83db9c4953ef8cf1$export$23759efdd2d2dae9)(name, label);
    const values = watch(name);
    const isVisible = (0, $gXNCa$react.useMemo)(()=>{
        return shouldDisplay ? shouldDisplay(values) : true;
    }, [
        values,
        shouldDisplay
    ]);
    return isVisible ? /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)((0, $gXNCa$reactbootstrap.Form).Group, {
        controlId: id,
        ...fieldStyles.control,
        children: [
            !!label && /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.Form).Label, {
                ...fieldStyles.label,
                children: label
            }),
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.FormControl), {
                type: htmlInputType || "text",
                name: name,
                "aria-label": name,
                ...register(name),
                required: required,
                placeholder: placeholder,
                defaultValue: defaultValue || "",
                ...fieldStyles.input
            }),
            !!helperText && /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.Form).Text, {
                ...fieldStyles.helperText,
                children: helperText
            }),
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.Form).Control.Feedback, {
                type: "invalid",
                ...fieldStyles.errorMessage,
                children: errorMessage
            })
        ]
    }, id) : null;
};








const $97c46bb7e87c24b3$export$d55b50a564d0b931 = ({ id: id , name: name , field: field , defaultValue: defaultValue  })=>{
    const { label: label , helperText: helperText , required: required = false , multi: multi = false , shouldDisplay: shouldDisplay , styles: styles = {}  } = field;
    const { register: register , watch: watch  } = (0, $gXNCa$reacthookform.useFormContext)();
    const values = watch(name);
    const fieldStyles = (0, $4b415e85194d9b0a$export$28e6b9b82ee883c)("selectField", styles);
    const errorMessage = (0, $83db9c4953ef8cf1$export$23759efdd2d2dae9)(name, label);
    const isVisible = (0, $gXNCa$react.useMemo)(()=>{
        return shouldDisplay ? shouldDisplay(values) : true;
    }, [
        values,
        shouldDisplay
    ]);
    return isVisible ? /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)((0, $gXNCa$reactbootstrap.FormGroup), {
        controlId: id,
        ...fieldStyles.control,
        children: [
            !!label && /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.Form).Label, {
                ...fieldStyles.label,
                children: label
            }),
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.FormControl), {
                as: "select",
                name: name,
                ...register(name),
                required: required,
                multiple: multi,
                defaultValue: defaultValue || field.options[0].value,
                ...fieldStyles.select,
                children: field.options.map((option)=>/*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("option", {
                        value: option.value,
                        children: option.label || option.value
                    }, option.value))
            }),
            !!helperText && /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.Form).Text, {
                ...fieldStyles.helperText,
                children: helperText
            }),
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.Form).Control.Feedback, {
                type: "invalid",
                ...fieldStyles.errorMessage,
                children: errorMessage
            })
        ]
    }, id) : null;
};








const $d6d3c50db9d28f53$export$4aaf0c609b3e241e = ({ id: id , name: name , field: field , defaultValue: defaultValue  })=>{
    const { label: label , helperText: helperText , required: required = false , shouldDisplay: shouldDisplay , styles: styles = {}  } = field;
    const { register: register , watch: watch  } = (0, $gXNCa$reacthookform.useFormContext)();
    const values = watch(name);
    const fieldStyles = (0, $4b415e85194d9b0a$export$28e6b9b82ee883c)("radioField", styles);
    const errorMessage = (0, $83db9c4953ef8cf1$export$23759efdd2d2dae9)(name, label);
    const isVisible = (0, $gXNCa$react.useMemo)(()=>{
        return shouldDisplay ? shouldDisplay(values) : true;
    }, [
        values,
        shouldDisplay
    ]);
    return isVisible ? /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)((0, $gXNCa$reactbootstrap.FormGroup), {
        controlId: id,
        ...fieldStyles.control,
        children: [
            !!label && /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.Form).Label, {
                ...fieldStyles.label,
                children: label
            }),
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("div", {
                children: field.options.map((option, i)=>/*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.Form).Check, {
                        type: "radio",
                        name: name,
                        ...register(name),
                        id: name + "-" + option.label,
                        label: option.label,
                        value: option.value
                    }, i))
            }),
            !!helperText && /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.Form).Text, {
                ...fieldStyles.helperText,
                children: helperText
            }),
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.Form).Control.Feedback, {
                type: "invalid",
                ...fieldStyles.errorMessage,
                children: errorMessage
            })
        ]
    }, id) : null;
};








const $5dc8fcbadc03f371$export$94195a47b94ed396 = ({ id: id , name: name , field: field , defaultValue: defaultValue  })=>{
    const { label: label , helperText: helperText , required: required = false , shouldDisplay: shouldDisplay , styles: styles = {}  } = field;
    const { register: register , watch: watch  } = (0, $gXNCa$reacthookform.useFormContext)();
    const values = watch(name);
    const fieldStyles = (0, $4b415e85194d9b0a$export$28e6b9b82ee883c)("checkboxField", styles);
    const errorMessage = (0, $83db9c4953ef8cf1$export$23759efdd2d2dae9)(name, label);
    const isVisible = (0, $gXNCa$react.useMemo)(()=>{
        return shouldDisplay ? shouldDisplay(values) : true;
    }, [
        values,
        shouldDisplay
    ]);
    return isVisible ? /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)((0, $gXNCa$reactbootstrap.Form).Group, {
        controlId: id,
        ...fieldStyles.control,
        children: [
            !!label && /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.Form).Label, {
                ...fieldStyles.label,
                children: label
            }),
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("div", {
                children: field.options.map((option, i)=>/*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.Form).Check, {
                        type: "checkbox",
                        name: name,
                        ...register(name),
                        id: name + "-" + option.label,
                        label: option.label,
                        value: option.value
                    }, i))
            }),
            !!helperText && /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.Form).Text, {
                ...fieldStyles.helperText,
                children: helperText
            }),
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.Form).Control.Feedback, {
                type: "invalid",
                ...fieldStyles.errorMessage,
                children: errorMessage
            })
        ]
    }, id) : null;
};








const $2fbdbb485c31f356$export$d61c19f03375c53e = ({ id: id , name: name , field: field , defaultValue: defaultValue  })=>{
    const { label: label , placeholder: placeholder , helperText: helperText , required: required = false , accept: accept = "*" , shouldDisplay: shouldDisplay , styles: styles = {}  } = field;
    const fieldStyles = (0, $4b415e85194d9b0a$export$28e6b9b82ee883c)("uploadField", styles);
    const { register: register , watch: watch  } = (0, $gXNCa$reacthookform.useFormContext)();
    const errorMessage = (0, $83db9c4953ef8cf1$export$23759efdd2d2dae9)(name, label);
    const values = watch(name);
    const isVisible = (0, $gXNCa$react.useMemo)(()=>{
        return shouldDisplay ? shouldDisplay(values) : true;
    }, [
        values,
        shouldDisplay
    ]);
    return isVisible ? /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)((0, $gXNCa$reactbootstrap.Form).Group, {
        controlId: id,
        ...fieldStyles.control,
        children: [
            !!label && /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.Form).Label, {
                ...fieldStyles.label,
                children: label
            }),
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.FormControl), {
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
            !!helperText && /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.Form).Text, {
                ...fieldStyles.helperText,
                children: helperText
            }),
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.Form).Control.Feedback, {
                type: "invalid",
                ...fieldStyles.errorMessage,
                children: errorMessage
            })
        ]
    }, id) : null;
};









const $ebdb7d55f8bb2531$export$737a6469d99de160 = ({ id: id , name: name , field: field , defaultValue: defaultValue  })=>{
    const { label: label , placeholder: placeholder , helperText: helperText , required: required = false , shouldDisplay: shouldDisplay , styles: styles = {}  } = field;
    const ref = (0, $gXNCa$react.useRef)(0);
    const fieldStyles = (0, $4b415e85194d9b0a$export$28e6b9b82ee883c)("signatureField", styles);
    const { setValue: setValue , watch: watch  } = (0, $gXNCa$reacthookform.useFormContext)();
    const errorMessage = (0, $83db9c4953ef8cf1$export$23759efdd2d2dae9)(name, label);
    const values = watch(name);
    const isVisible = (0, $gXNCa$react.useMemo)(()=>{
        return shouldDisplay ? shouldDisplay(values) : true;
    }, [
        values,
        shouldDisplay
    ]);
    const save = ()=>{
        setValue(name, ref.current.getTrimmedCanvas().toDataURL("image/png"));
    };
    const clear = ()=>ref.current.clear();
    return isVisible ? /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)((0, $gXNCa$reactbootstrap.Form).Group, {
        controlId: id,
        ...fieldStyles.control,
        children: [
            !!label && /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.Form).Label, {
                ...fieldStyles.label,
                children: label
            }),
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("div", {
                        className: "col-10",
                        children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, ($parcel$interopDefault($gXNCa$reactsignaturecanvas))), {
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
                    /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("div", {
                        className: "col-2 d-flex align-items-center",
                        children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("button", {
                            className: "btn btn-primary",
                            onClick: clear,
                            children: "↺"
                        })
                    })
                ]
            }),
            !!helperText && /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.Form).Text, {
                ...fieldStyles.helperText,
                children: helperText
            }),
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.Form).Control.Feedback, {
                type: "invalid",
                ...fieldStyles.errorMessage,
                children: errorMessage
            })
        ]
    }, id) : null;
};


const $86ec046b758f8d3b$export$65972ef3a64ea716 = ([name, field])=>{
    let Component = null;
    switch(field.type){
        case "title":
            Component = (0, $fdb6ac635cc48052$export$c207a8ee394fdeab);
            break;
        case "text":
            Component = (0, $86e7c620964f9775$export$2c73285ae9390cec);
            break;
        case "select":
            Component = (0, $97c46bb7e87c24b3$export$d55b50a564d0b931);
            break;
        case "radio":
            Component = (0, $d6d3c50db9d28f53$export$4aaf0c609b3e241e);
            break;
        case "checkbox":
            Component = (0, $5dc8fcbadc03f371$export$94195a47b94ed396);
            break;
        case "upload":
            Component = (0, $2fbdbb485c31f356$export$d61c19f03375c53e);
            break;
        case "signature":
            Component = (0, $ebdb7d55f8bb2531$export$737a6469d99de160);
            break;
        default:
            console.log(field.type, "isn't implemented yet!");
            break;
    }
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)(Component, {
        name: name,
        field: field,
        ...field.props
    }, name);
};


const $ecf17b62a3990f30$var$defaultStyles = {};
const $ecf17b62a3990f30$export$a7fed597f4b8afd8 = (props)=>{
    const { title: title , schema: schema = {} , handleSubmit: handleSubmit , formOptions: formOptions = {} , overwriteDefaultStyles: overwriteDefaultStyles , buttons: buttons , styles: styles = {}  } = props;
    const form = (0, $gXNCa$reacthookform.useForm)(formOptions);
    const baseStyles = (0, $gXNCa$react.useMemo)(()=>{
        return overwriteDefaultStyles ? styles : (0, ($parcel$interopDefault($gXNCa$lodashmerge)))($ecf17b62a3990f30$var$defaultStyles, styles);
    }, [
        styles,
        overwriteDefaultStyles
    ]);
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $4b415e85194d9b0a$export$7dae14b1400b9486).Provider, {
        value: baseStyles,
        children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reacthookform.FormProvider), {
            ...form,
            children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)("form", {
                onSubmit: form.handleSubmit(handleSubmit),
                ...baseStyles.form?.container,
                children: [
                    !!title && /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("h1", {
                        ...baseStyles.form?.title,
                        children: title
                    }),
                    /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.Container), {
                        spacing: baseStyles.form?.fieldSpacing,
                        children: Object.entries(schema).map((0, $86ec046b758f8d3b$export$65972ef3a64ea716))
                    }),
                    /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)((0, $gXNCa$reactbootstrap.ButtonGroup), {
                        ...baseStyles.form?.buttonGroup,
                        children: [
                            buttons?.reset?.hidden ? null : /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.Button), {
                                type: "reset",
                                ...baseStyles.form?.resetButton,
                                children: buttons?.reset?.text || "Reset"
                            }),
                            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactbootstrap.Button), {
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








const $5b171ef530732234$var$defaultStyles = {};
const $5b171ef530732234$export$cb1ad078b6c48b67 = (props)=>{
    const { schema: schema = {} , handleSubmit: handleSubmit , formOptions: formOptions = {} , overwriteDefaultStyles: overwriteDefaultStyles , children: children , styles: styles = {}  } = props;
    let formElements = "undefined" !== typeof props.step ? Object.entries(schema[props.step]).map((0, $86ec046b758f8d3b$export$65972ef3a64ea716)) : Object.entries(schema).map((0, $86ec046b758f8d3b$export$65972ef3a64ea716));
    let elements = children instanceof Array ? children.reduce((acc, item)=>{
        if ("function" === typeof item) item = item(formElements);
        acc.push(item);
        return acc;
    }, []) : children(formElements);
    const form = (0, $gXNCa$reacthookform.useForm)(formOptions);
    const baseStyles = (0, $gXNCa$react.useMemo)(()=>{
        return overwriteDefaultStyles ? styles : (0, ($parcel$interopDefault($gXNCa$lodashmerge)))($5b171ef530732234$var$defaultStyles, styles);
    }, [
        styles,
        overwriteDefaultStyles
    ]);
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $4b415e85194d9b0a$export$7dae14b1400b9486).Provider, {
        value: baseStyles,
        children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reacthookform.FormProvider), {
            ...form,
            children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("form", {
                onSubmit: form.handleSubmit(handleSubmit),
                ...baseStyles.form?.container,
                children: elements
            })
        })
    });
};






//# sourceMappingURL=index.js.map
