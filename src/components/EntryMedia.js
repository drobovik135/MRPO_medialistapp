import React from 'react'
import { Link } from 'react-router-dom'

const EntryMedia = ({ entryMedia }) => {
  return (
    <Link to={`/entries/${entryMedia.id}`}>
      <div className="media-entry">
        <div className="media-poster">
          <img src={entryMedia.imgUrl} />
        </div>
        <div className="media-info">
          <h2 className="media-title">{entryMedia.name}</h2>
          <p className="mediaEntry-rating">Your Rating: {entryMedia.mediaRate}</p>
          <p className="media-genre">Review: {entryMedia.mediaReview}</p>
        </div>
      </div>
    </Link>
  )
}

export default EntryMedia