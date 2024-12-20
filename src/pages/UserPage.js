import React from 'react';
import {
    Link,
  } from 'react-router-dom';

const UserPage = (user, lists) => {
    return (
        <div className = "user-list-container">
            <div className="user-list-container">
                <div className="user-list">
                    <h1>{user.name}</h1>
                    <h1>{user.info}</h1>
                </div>
            </div>
            <div className="user-list">
                {lists.map((list) => (
                    <Link
                        to={`/table?table_id=`+list.id}
                        className="user-card-link"
                    >
                        <div className="user-card">
                            <h3 className="user-name">{list.name}</h3>
                            <p className="user-description">{list.info}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default UserPage;