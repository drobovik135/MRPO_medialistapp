import React from 'react';
import EntryMedia from '../components/EntryMedia';
import {Link} from 'react-router-dom';

export const MyListTablePage = ( table, entries ) => {

    return (
        <main className='mylisttable'>
            {entries?.content?.length === 0 && <div>No entries yet</div>}
            <ol>
                {entries?.content?.length > 0 &&
                    entries.content.map(entryMedia => (
                        <EntryMedia entryMedia={entryMedia} key={entryMedia.id} />
                    ))}
            </ol>
            <Link
                to={`/add_media?tableId=`+table.id}
                className="user-card-link"
            >
                <div className="user-card">
                    <h3 className="user-name">{table.name}</h3>
                    <p className="user-description">{table.info}</p>
                </div>
            </Link>
            
        </main>
    )
}

export default MyListTablePage