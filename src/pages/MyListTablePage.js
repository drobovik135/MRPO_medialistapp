import React from 'react';
import EntryMedia from '../components/EntryMedia';
import {Link} from 'react-router-dom';
import { removeEntry } from '../service/EntryMediaService';

export const MyListTablePage = ( table, entries ) => {

    return (
        <main className='mylisttable'>
            {entries?.length > 0 &&
                entries.map(entryMedia => (
                <div>
                    <EntryMedia entryMedia={entryMedia} key={entryMedia.id} />

                    <Link to={`/table?table_id=${table.id}`} onclick={removeEntry(entryMedia.id)}></Link>
                </div>
            ))}
        </main>
    )
}

export default MyListTablePage