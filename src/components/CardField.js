import React from "react"

import { Card, Button } from "react-bootstrap"

export const CardField = ({
    name,
    field,
    schema,
    renderField
}) => {

    const {
        i,
        remove,
    } = field

    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title className="text-black">
                    Item {i+1}
                </Card.Title>
                {Object.entries(schema).map(item => {

                    item[0] = `${name}.${item[0]}`

                    return renderField(item)
                })}
                <Button variant="danger" onClick={remove.bind(null, i)}>
                    Verwijderen
                </Button>
            </Card.Body>
        </Card>
    )
}