import React from 'react';
import {
    Link,
} from 'react-router-dom';
import { createTable } from '../service/EntryMediaService';

const UserPage = (user, lists) => {
    var name = "";
    var info = "";
    return (
        <div className="myuser-classr">
            <div className="user-list-container">
                <div className="user-list">
                    <h1>{user.name}</h1>
                    <h1>{user.info}</h1>
                </div>
                <div>
                    {
                        <div>
                            Create
                            <div>
                                Name
                                <input type="text"
                                    onChange={e => { name = e.target.value }} />
                            </div>
                            <div>
                                info
                                <input type="text"
                                    onChange={e => { info = e.target.value }} />
                            </div>

                            <Link to={`/user?user_id=${user.id}`} onClick={() => { createTable(user.id, name, info) }}>
                                create
                            </Link>
                        </div>
                    }
                </div>
                <div className="user-list">
                    {lists.map((list) => (
                        <Link
                            to={`/table?table_id=` + list.id}
                            className="user-card-link"
                        >
                            <div className="user-card">
                                <h3 className="user-name">{list.name}</h3>
                                <p className="user-description">{list.info}</p>
                            </div>
                        </Link>))}
                </div>
            </div>
        </div>

    );
}

export default UserPage;