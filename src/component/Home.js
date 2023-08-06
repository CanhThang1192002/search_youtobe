import { useNavigate } from 'react-router-dom';

const Home = (props) => {
    const video = props.video;
    const inDay = props.inDay;
    const setVideoitem = props.setVideoitem;
    console.log(video);
    const navigate = useNavigate();

    const ClickVideo = (item) => {
        setVideoitem(item);
        navigate('/video');
    }
    return (
        <>
            {
                video && video.length > 0 && video.map((item, index) => {
                    return (
                        <div className='video-list' key={index} onClick={() => ClickVideo(item)}>
                            <div className='video'>
                                <iframe className='iframe_video' src={`https://www.youtube.com/embed/${item.id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                            <div className='video-detail'>
                                <div className='video_title'>
                                    {item.title}
                                </div>
                                <div className='video_createdAt'>
                                    {
                                        inDay(item.createdAt)
                                    }
                                </div>
                                <div className='video_author'>
                                    {item.author}
                                </div>
                                <div className='video_description'>
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Home;