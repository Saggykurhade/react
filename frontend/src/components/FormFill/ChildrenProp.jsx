import React from "react";

const ChidrenProp = () => {
    return (
        <>
        <H1>This is h1</H1>
        <Button>Message</Button>
        </>
    )
}

const Button = ({children}) => {
    return (
        <button>{children}</button>
    )
}

const H1 = ({children}) => {
    return (
        <h1>{children}</h1>
    )
}

export default ChidrenProp