import React from 'react';
import {
    Link,
} from 'react-router-dom';
import { createTable } from '../service/EntryMediaService';
import { deleteTableById } from '../service/UserService';

const UserPage = (user, lists) => {
    var name = "";
    var info = "";
    return (
        <div className="user-list-container2">
            <div className="user-list">
                <div className="user-lists">
                    <div>
                        <h1>{user.name}</h1>
                        <h1>{user.info}</h1>
                    </div>
                    <div>
                        {
                            <div>
                                <h2>Add new List</h2>
                                <div>
                                    Name
                                    <input type="text" className='text-field__input'
                                        onChange={e => { name = e.target.value }} />
                                </div>
                                <div>
                                    Info
                                    <input type="text" className='text-field__input'
                                        onChange={e => { info = e.target.value }} />
                                </div>

                                <Link to={`/user?user_id=${user.id}`} onClick={() => { createTable(user.id, name, info) }}>
                                    <h3>Create</h3>
                                </Link>
                            </div>
                        }
                    </div>
                    {lists.map((list) => (
                        <div className="user-card">
                            <Link
                                to={`/table?table_id=` + list.id}
                                className="user-card-link">
                                <h3 className="user-name">{list.name}</h3>
                            </Link>
                            <p className="user-description">{list.info}</p>
                            <button className="button-23" onClick={() => { deleteTableById(list.id) }}>
                                Delete List</button >
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default UserPage;