import React from "react";

const Mapping = ({names, text}) => {

    // const {names} = props;   

console.log(text, names)
    return (
        <div>
            <h1>Mapping</h1>

            {names.map((name, i) => (
                <div key={i}>
                    <h1>{name}</h1>
                </div>
            ))}
        </div>
    )
}

export default Mapping;