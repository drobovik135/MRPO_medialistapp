import React from 'react'
import EntryMediaGlobalPage from './EntryMediaGlobalPage'
import { addEntryMediaToList } from '../service/EntryMediaService'
import {Link} from 'react-router-dom'

const AddEntryPage = (tableId, medias) => {
  return (
    <main className='mylisttable'>
            {medias?.content?.length === 0 && <div>No entries yet</div>}
            <ol>
                {medias?.content?.length > 0 && medias.content.map(entryMedia => <Link to={`/tables?table_id=${tableId}`} onclick={addEntryMediaToList(tableId, entryMedia.id)}> <EntryMediaGlobalPage entryMedia={entryMedia} key={entryMedia.id} /> </Link>)}
                
            </ol>
        </main>
  )
}

export default AddEntryPage