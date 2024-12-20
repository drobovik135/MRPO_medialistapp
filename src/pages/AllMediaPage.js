import React from 'react'

const AllMedia = (data) => {
    return (
        <main className='mylisttable'>
            {data?.content?.length === 0 && <div>No entries yet</div>}
            <ol>
                {data?.content?.length > 0 && data.content.map(entryMedia => <EntryMediaGlobal entryMedia={entryMedia} key={entryMedia.id} />)}
            </ol>
        </main>
    )
}

export default AllMedia