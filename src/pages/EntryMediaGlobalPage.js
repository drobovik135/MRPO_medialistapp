const EntryMediaPage = (user, list) => {
    return (
        <div>
            <div class="media-entry">
                <div class="media-poster">
                    <img src={entryMedia.imgUrl} />
                </div>
                <div class="media-info">
                    <h2 class="mediaEntry-rating">Title: {entryMedia.name}</h2>
                    <p class="media-about">About: {entryMedia.about}</p>
                    <p class="media-genre">Genre: {entryMedia.genre}</p>
                </div>
            </div>
        </div>
    );
}

export default EntryMediaPage;