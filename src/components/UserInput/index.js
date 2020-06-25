import React from 'react';

const UserInput = ({ type = 'text', onChange, value }) => {
    const style = {
        border: '1px solid',
        padding: '16px',
        borderRadius: '4px',
        fontSize: '16px',
        lineHeight: '1.2'
    };
    return (
        <input type={type} onChange={onChange} value={value} style={style} />
    );
};

export default UserInput;