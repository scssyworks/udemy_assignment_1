import React from 'react';
import './index.css';

const UserOutput = ({ username }) => (
    <div className="UserOutput">
        <p>Some text</p>
        <p>Some other text</p>
        <p>{username}</p>
    </div>
);

export default UserOutput;