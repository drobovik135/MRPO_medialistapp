import React from 'react'

const AddEntryPage = (tableId, entryId) => {
  return (
    <main className='mylisttable'>
            {data?.content?.length === 0 && <div>No entries yet</div>}
            <ol>
                {data?.content?.length > 0 && data.content.map(entryMedia => <Link to={`/add_entry_success?table_Id${tableId}&${entryId}`}> <EntryMediaGlobal entryMedia={entryMedia} key={entryMedia.id} /> </Link>)}
                
            </ol>
        </main>
  )
}

export default AddEntryPage