import React from 'react';

const UserPage = (user, lists) => {
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