import React from 'react';
import EntryMedia from '../components/EntryMedia';
import { Link } from 'react-router-dom';
import { removeEntry } from '../service/EntryMediaService';
import { Container } from 'react-bootstrap';
import React, { useState } from 'react';

export const MyListTablePage = (table, entries) => {


    const [entries, setEntries] = useState([]);

    function updateState(entryMedia) {
      const item = entryMedia
      console.log(entryMedia);
      setEntries([...entries, entryMedia]);
    }

    return (
        <div className='mylisttable'>
            <div>
                <Link to={`/add_entry?table_id=${table.id}`}>
                    Add Entry
                </Link>
            </div>
            {entries.map(entryMedia => (
                <div>
                    <Link to={`/table?table_id=${table.id}`}>
                        <EntryMedia entryMedia={entryMedia} />
                    </Link>
                    <div>
                        <Link align="left" type="submit" className='button-23' to={`/table?table_id=${table.id}`} onClick={() => { 
                            updateState(entryMedia.id); }}>
                            Delete Entry
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MyListTablePage