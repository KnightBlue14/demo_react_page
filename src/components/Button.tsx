import React, { useState } from "react";

interface Props {
    children: string;
    onClick: () => void;
    colour?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' |'info';
}

const Button = ({children, onClick, colour = 'primary'}: Props) => {
    return (
        <button className = {'btn btn-' + colour} onClick={onClick}>{children}</button>
    )
}


export default Button;

// <button type="button" class="btn btn-primary">Primary</button>
