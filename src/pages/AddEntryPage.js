import React from 'react'
import EntryMediaGlobalPage from './EntryMediaGlobalPage'
import { addEntryMediaToList } from '../service/EntryMediaService'
import {Link} from 'react-router-dom'
import EntryMediaPage from './EntryMediaGlobalPage'

const AddEntryPage = (table, medias) => {
  return (
    <main className='mylisttable'>
        <h1>{table.name}</h1>

        {medias?.length === 0 && <div>No entries yet</div>}
        <ol>
            {medias?.length > 0 && medias.map(entryMedia => <Link to={`/table?table_id=${table.id}`} onclick={addEntryMediaToList(table.id, entryMedia.id)}> <EntryMediaPage entryMedia={entryMedia} key={entryMedia.id} /> </Link>)}
            
        </ol>
    </main>
  )
}

export default AddEntryPage