import React from 'react';
const EntryMediaPage = (user, list) => {
    return (
        <Link to={`/entries/${entryMedia.id}`}>
            <div class="media-entry">
                <div class="media-poster">
                    <img src={entryMedia.imgUrl} />
                </div>
                <div class="media-info">
                    <h2 class="media-title">{entryMedia.name}</h2>
                    <p class="mediaEntry-rating">Your Rating: {entryMedia.mediaRate}</p>
                    <p class="mediaEntry-rating">mediaReview: {entryMedia.mediaReview}</p>
                    <p class="media-genre">Genre: {entryMedia.genre}</p>
                </div>
            </div>
        </Link>
    );
}

export default EntryMediaPage;