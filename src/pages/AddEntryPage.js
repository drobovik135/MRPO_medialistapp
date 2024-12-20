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
          {medias?.length > 0 && medias.map(entryMedia => {
            var rate = -1;
            var review = "";
            return <div>
                    <EntryMediaPage entryMedia={entryMedia}/> 
                    <input  type="text"
                      onChange={ e => { rate = e.target.value }}/>
                    <input  type="text"
                      onChange={ e => { review = e.target.value }}/>
                    <Link to={`/table?table_id=${table.id}`} onClick={() => {addEntryMediaToList(table.id, entryMedia.id, rate, review)}}>Rate</Link>
                  </div>
          }
            
          )}
          
            
        </ol>
    </main>
  )
}

export default AddEntryPage