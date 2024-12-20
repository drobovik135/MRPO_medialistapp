import React from 'react';
import EntryMedia from '../components/EntryMedia';

export const MyListTablePage = ({ table, entries }) => {

    return (
        <main className='mylisttable'>
            {data?.content?.length === 0 && <div>No entries yet</div>}
            <ol>
                {data?.content?.length > 0 &&
                    data.content.map(entryMedia => (
                        <EntryMedia entryMedia={entryMedia} key={entryMedia.id} />
                    ))}
            </ol>
            <Link
                to={`/add_media?tableId=`+user.id}
                className="user-card-link"
            >
                <div className="user-card">
                    <h3 className="user-name">{entries.name}</h3>
                    <p className="user-description">{entries.description}</p>
                </div>
            </Link>
            <button className="add-entry-btn" onClick={onAddEntry}>Add New Entry</button>
        </main>
    )
}

export default MyListTablePage