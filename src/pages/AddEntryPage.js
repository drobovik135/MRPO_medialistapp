import React from 'react'
import EntryMediaGlobalPage from './EntryMediaGlobalPage'
import { addEntryMediaToList } from '../service/EntryMediaService'
import { Link } from 'react-router-dom'
import EntryMediaPage from './EntryMediaGlobalPage'

const AddEntryPage = (table, medias) => {
  return (
    <main className='mylisttable'>
      <h1>{table.name}</h1>

      {medias?.length === 0 && <div>No entries yet</div>}
      <ol>
        {medias?.length > 0 && medias.map(entryMedia => {
          var rating = 1;
          var review = "";
          return <div>
            <EntryMediaPage entryMedia={entryMedia} />
            <div>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => {
                return (
                  <span
                    className='start'
                    style={{
                      cursor: 'pointer',
                      color: rating >= star ? 'gold' : 'gray',
                      fontSize: `35px`,
                    }}
                    onClick={() => {
                      rating = star;
                    }}
                  >
                    {' '}
                    ★{' '}
                  </span>
                )
              })}
            </div>
            <input type="text"
              onChange={e => { review = e.target.value }} />
            <Link to={`/table?table_id=${table.id}`} onClick={() => { addEntryMediaToList(table.id, entryMedia.id, rating, review) }}>Rate</Link>
          </div>
        }

        )}


      </ol>
    </main>
  )
}

export default AddEntryPage