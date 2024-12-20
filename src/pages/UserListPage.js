import React from 'react';
import {
    Link,
  } from 'react-router-dom';

const UserListPage = (users) => {
    return (
        <div className="user-list-container">
            <div className="user-list">
                {users.map((user) => (
                    <Link
                        to={`/user?user_id=`+user.id}
                        className="user-card-link"
                    >
                        <div className="user-card">
                            <h3 className="user-name">{user.name}</h3>
                            <p className="user-description">{user.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default UserListPage;