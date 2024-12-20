import React from 'react';
import Form from 'react-bootstrap/Form';

const UserPage = (user, list) => {
    return (
        <div className="user-list-container">
                <div className="user-list">
                    <h1>{user.name}</h1>
                    <h1>{user.info}</h1>
                </div>
            </div>
    );
}

export default UserPage;