import React from 'react';
import EntryMedia from '../components/EntryMedia';
import {Link} from 'react-router-dom';
import { removeEntry } from '../service/EntryMediaService';

export const MyListTablePage = ( table, entries ) => {

    return (
        <main className='mylisttable'>
            {entries?.length > 0 &&
                entries.map(entryMedia => (
                <div className = 'mylisttable'>
                    <Link to={`/table?table_id=${table.id}`}>
                        <EntryMedia entryMedia={entryMedia}/>
                    </Link>
                    <Link align ="left" className = 'button-59' to={`/table?table_id=${table.id}`} onClick={() => {removeEntry(entryMedia.id)}}>
                        Delete Entry
                    </Link>
                </div>
            ))}
        </main>
    )
}

export default MyListTablePage