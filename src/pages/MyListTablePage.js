import React from 'react';
import EntryMedia from '../components/EntryMedia';
import {Link} from 'react-router-dom';
import { removeEntry } from '../service/EntryMediaService';

export const MyListTablePage = ( table, entries ) => {

    return (
        <main className='mylisttable'>
            {entries?.length > 0 &&
                entries.map(entryMedia => (
                <div className = 'mylisttable2'>
                    <Link to={`/table?table_id=${table.id}`}>
                        <EntryMedia entryMedia={entryMedia} key={entryMedia.id} />
                    </Link>
                    <button className = ".delete-entry-button ">onclick={removeEntry(entryMedia.id)}</button>
                </div>
            ))}
        </main>
    )
}

export default MyListTablePage