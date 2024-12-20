import React from 'react';
import EntryMedia from '../components/EntryMedia';

export const MyListTablePage = ({ data }) => {
    return (
        <main className='mylisttable'>
            {data?.content?.length === 0 && <div>No entries yet</div>}
            <ol>
                {data?.content?.length > 0 &&
                    data.content.map(entryMedia => (
                        <EntryMedia entryMedia={entryMedia} key={entryMedia.id} />
                    ))}
            </ol>
            <button className="add-entry-btn" onClick={onAddEntry}>Add New Entry</button>
        </main>
    )
}

export default MyListTablePage