import React from 'react'
import { addEntryMediaToList } from '../service/EntryMediaService'

const AddEntryPage = (tableId, medias) => {
  return (
    <main className='mylisttable'>
            {medias?.content?.length === 0 && <div>No entries yet</div>}
            <ol>
                {medias?.content?.length > 0 && medias.content.map(entryMedia => <Link to={`/tables?table_id=${tableId}`} onclick={addEntryMediaToList(tableId, entryMedia.id)}> <EntryMediaGlobal entryMedia={entryMedia} key={entryMedia.id} /> </Link>)}
                
            </ol>
        </main>
  )
}

export default AddEntryPage