import React from 'react';
import EntryMedia from '../components/EntryMedia';
import { Link } from 'react-router-dom';
import { removeEntry } from '../service/EntryMediaService';

export const MyListTablePage = (table, entries) => {

    return (
        <div className='mylisttable'>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <Link to={`/add_entry?table_id=${table.id}`}>
                Add Entry
            </Link>
            {entries?.length > 0 &&
                entries.map(entryMedia => (
                    <div className='mylisttable'>
                        <Link to={`/table?table_id=${table.id}`}>
                            <EntryMedia entryMedia={entryMedia} />
                        </Link>
                        <div>
                            <Link align="left" className='button-23' to={`/table?table_id=${table.id}`} onClick={() => { removeEntry(entryMedia.id) }}>
                                Delete Entry
                            </Link>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default MyListTablePage