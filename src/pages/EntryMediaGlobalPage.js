

const EntryMediaPage = ({entryMedia}) => {
    return (
        <div>
            <div class="media-entry">
                <div class="media-poster">
                    <img src=""/>
                </div>
                <div class="media-info">
                    <h2 class="mediaEntry-rating">Title: {entryMedia.name}</h2>
                    <p class="media-about">About: {entryMedia.info}</p>
                </div>
            </div>
        </div>
    );
}

export default EntryMediaPage;