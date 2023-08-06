import '../style/videoitem.scss'
const VideoItem = (props) => {
    const videoitem = props.videoitem;
    const inDay = props.inDay;
    const video = props.video;
    console.log(videoitem);
    return (
        <div className='video_item'>
            <div className='video_item_content'>
                <div className='videoitem'>
                    <iframe className='iframe_videoitem' src={`https://www.youtube.com/embed/${videoitem.id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                <div className='videoitem-detail'>
                    <div className='videoitem_title'>
                        {videoitem.title}
                    </div>
                    <div className='videoitem_createdAt'>
                        {
                            inDay(videoitem.createdAt)
                        }
                    </div>
                    <div className='videoitem_author'>
                        {videoitem.author}
                    </div>
                    <div className='videoitem_description'>
                        {videoitem.description}
                    </div>
                </div>
            </div>
            <div className='video-list_right'>
                {
                    video && video.length > 0 && video.map((item, index) => {
                        return (
                            <div className='video-list_right' key={index} >
                                <div className='video_right'>
                                    <iframe className='iframe_video_right' src={`https://www.youtube.com/embed/${item.id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                </div>
                                <div className='video-detail_right'>
                                    <div className='video_title_right'>
                                        {item.title}
                                    </div>
                                    <div className='video_createdAt_right'>
                                        {
                                            inDay(item.createdAt)
                                        }
                                    </div>
                                    <div className='video_author_right'>
                                        {item.author}
                                    </div>
                                    <div className='video_description_right'>
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default VideoItem;