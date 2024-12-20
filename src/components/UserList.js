import React from 'react'

const UserList = ({ users }) => {
    return (
        <div className="user-list-container">
            <div className="user-list">
                {users.map((user, index) => (
                    <Link 
                    key={index} 
                    to={`/user/${user.id}`} 
                    className="user-card-link"
                  >
                    <div key={index} className="user-card">
                        <h3 className="user-name">{user.name}</h3>
                        <p className="user-description">{user.description}</p>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default UserList