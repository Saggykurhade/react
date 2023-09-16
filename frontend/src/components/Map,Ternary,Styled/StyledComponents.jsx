import React from 'react'
import styled from 'styled-components'

const StyledComponents = () => {
    const Button = styled.button`
    color : aqua;
    background-color : blue;
    border-radius: 11px;
    `;
    return (
        <div style={{ backgroundColor: "orange" }}>
            <Button>CLICK ME</Button>
        </div>
    )
}

export default StyledComponents