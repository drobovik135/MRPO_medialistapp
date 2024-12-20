import React from 'react';
import {
    Link,
} from 'react-router-dom';
import { createUser } from '../service/EntryMediaService';

const UserListPage = (users) => {
    function updateState(name, info){
        createUser(name, info);
        window.location.reload();
    }

    var userName = "";
    var userInfo = "";
    return (
        <div className="user-list-container">
            <div className="user-list">
                <div className="user-card-link">
                    <div>
                        Name
                        <input type="text" className='text-field__input'
                            onChange={e => { userName = e.target.value }} />
                    </div>
                    <div>
                        Info
                        <input type="text" className='text-field__input'
                            onChange={e => { userInfo = e.target.value }} />
                    </div>
                    <Link to={`/`} onClick={() => { updateState(userName, userInfo) }}>
                        <h3>Create</h3>
                    </Link>
                </div>

                {users.map((user) => (
                    <Link
                        to={`/user?user_id=` + user.id}
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