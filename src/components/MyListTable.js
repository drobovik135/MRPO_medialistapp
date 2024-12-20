import React from 'react'
import EntryMedia from './EntryMedia'

export const MyListTable = ({ data }) => {
    return (
        <main className='mylisttable'>
            {data?.content?.length === 0 && <div>No entries yet</div>}
            <ol>
                {data?.content?.length > 0 && data.content.map(entryMedia => <EntryMedia entryMedia={entryMedia} key={entryMedia.id} />)}
            </ol>
        </main>
    )
}

export default MyListTable