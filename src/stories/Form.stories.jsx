import React from "react"
import { action } from "@storybook/addon-actions"

import { Form } from "../components/Form"

export const Default = {
    render: () => (
        <Form
            title="Default Styles"
            schema={{
                // pillars: {
                //   type: 'array',
                //   label: 'Pillars',
                //   isCollapsable: true,
                //   itemField: {
                //     type: 'object',
                //     properties: {
                //       name: {
                //         type: 'text',
                //         label: 'Pillar Name',
                //         isRequired: true,
                //       },
                //       action: {
                //         type: 'textArea',
                //         label: 'Action',
                //       },
                //       behaviour: {
                //         type: 'textArea',
                //         label: 'Behaviour',
                //       },
                //     },
                //   },
                // },
                // metrics: {
                //   type: 'array',
                //   label: 'Commercial Metrics',
                //   isCollapsable: true,
                //   itemField: {
                //     type: 'text',
                //     label: 'Metric Name',
                //     isRequired: true,
                //   },
                // },
                // questions: {
                //   type: 'array',
                //   label: 'Employee Questions',
                //   isCollapsable: true,
                //   itemField: {
                //     type: 'object',
                //     properties: {
                //       section: {
                //         type: 'text',
                //         label: 'Section',
                //         isRequired: true,
                //       },
                //       questions: {
                //         type: 'array',
                //         isCollapsable: true,
                //         itemField: {
                //           type: 'text',
                //           label: 'Question Text',
                //           isRequired: true,
                //         },
                //       },
                //     },
                //   },
                // },
                behaviour: {
                    type: "text",
                    label: "Behaviour",
                }
            }}
            handleSubmit={action("Submit")}
        />
    )
}

export const Checkbox = {
    render: () => (
        <Form
            title="Checkbox"
            schema={{
                behaviour: {
                    type: "checkbox",
                    label: "Behaviour",
                    options: [{ label: "Aggressive", value: "aggressive" }, { label: "Neutral", value: "neutral" }]
                }
            }}
            handleSubmit={action("Submit")}
        />
    )
}

export const Radio = {
    render: () => (
        <Form
            title="Radio"
            schema={{
                icecream: {
                    type: "radio",
                    required: true,
                    label: "Do you want some icecream?",
                    options: [{ label: "Yes", value: true }, { label: "No", value: false }]
                }
            }}
            handleSubmit={action("Submit")}
        />
    )
}

export const Select = {
    render: () => (
        <Form
            title="Select"
            schema={{
                icecream: {
                    type: "select",
                    label: "What kind of icecream do you want?",
                    options: [
                        { label: "Select an option", value: "", disabled: true },
                        { label: "Gelato lemon", value: "gelato-lemon" },
                        { label: "Gelato Coffee", value: "gelato-coffee" }
                    ]
                }
            }}
            handleSubmit={action("Submit")}
        />
    )
}

export const Signature = {
    render: () => (
        <Form
            title="Signature"
            styles={{ signatureField: { canvas: { border: "1px solid black" } } }}
            schema={{
                signature: {
                    type: "signature",
                    label: "Your signature please.",
                }
            }}
            handleSubmit={action("Submit")}
        />
    )
}

export const Title = {
    render: () => (
        <Form
            title="Title"
            schema={{
                title: {
                    type: "title",
                    label: "Some important title",
                },
                question: {
                    type: "text",
                    label: "Some question?"
                }
            }}
            handleSubmit={action("Submit")}
        />
    )
}

export const Upload = {
    render: () => (
        <Form
            title="Upload"
            schema={{
                title: {
                    type: "title",
                    label: "Profile",
                },
                image: {
                    type: "upload",
                    label: "Profile picture"
                }
            }}
            handleSubmit={action("Submit")}
        />
    )
}

export const Grid = {
    render: () => (
        <Form
            title="Grid"
            schema={{
                title: {
                    type: "title",
                    label: "Profile"
                },
                naw: {
                    type: "grid",
                    schema: [
                        {
                            firstName: {
                                type: "text",
                                label: "First name",
                            },
                        },
                        {
                            surname: {
                                type: "text",
                                label: "Surname"
                            }
                        }
                    ],
                },
                image: {
                    type: "upload",
                    label: "Profile picture"
                }
            }}
            handleSubmit={action("Submit")}
        />
    )
}

const meta = { component: () => Form, }

export default meta