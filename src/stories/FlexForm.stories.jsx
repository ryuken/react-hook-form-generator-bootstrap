import React, { useState } from "react"
import { action } from "@storybook/addon-actions"

import { FlexForm } from "../components/FlexForm"

export const Default = {
    render: () => (
        <FlexForm
            title="Default Styles"
            schema={{
                behaviour: {
                    type: "text",
                    label: "Behaviour",
                }
            }}
            handleSubmit={action("Submit")}
        >
            {(form) => form}
        </FlexForm>
    )
}

export const Steps = {
    render: () => {

        const [ step, setStep ] = useState(0)

        const back = () => setStep(step - 1)

        const stepSchema = [
            {
                title: {
                    type: "title",
                    label: "Registration"
                },
                email: {
                    type: "text",
                    htmlInputType: "email",
                    label: "Email",
                }
            },
            {
                title: {
                    type: "title",
                    label: "Information"
                },
                name: {
                    type: "text",
                    label: "Name",
                }
            }
        ]

        const onNext = (data) => {

            if ((step + 1) < stepSchema.length) {
                setStep(step + 1)
            }
            else {
                console.log(data)
            }
        }

        return (
            <FlexForm
                title="Steps"
                step={step}
                schema={stepSchema}
                handleSubmit={onNext}
            >
                {(form) => (
                    <>
              Step {step+1}

                        {form}
    
                        <div className="mt-3 d-flex justify-content-between">
                            <button className="btn btn-primary" type="button" onClick={back}>
                      Terug
                            </button>
                            <button className={`btn btn-${step === stepSchema.length-1 ? "secondary" : "primary"}`} type="submit">
                                {step == stepSchema.length-1 ? "Submit" : "Next"}
                            </button>
                        </div>
                    </>
                )}
            </FlexForm>
        )
    }
}

const meta = { component: () => FlexForm, }

export default meta