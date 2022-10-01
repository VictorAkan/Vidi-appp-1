import Carousel from 'better-react-carousel';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { VIDEO_METRICS } from "../../utils/mutation";

export const ReactCarousel = ({ videos }) => {
    const [videoMetrics, { error }] = useMutation(VIDEO_METRICS);

    if (!videos.length) {
        return <h3 className="text-2xl text-center mt-10">No videos yet!</h3>
    }

    // Updates video views on page reload
    const updateMetrics = async (videoId, videoViews) => {
        const newView = (videoViews + .5); // Add .5 because added 2 views when page reloaded
        try {
            await videoMetrics({
                variables: {
                    videoId: videoId,
                    likes: 0,
                    dislikes: 0,
                    views: newView,
                },
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Carousel cols={4} rows={1}>
            {videos && videos.map((video) => (
                <Carousel.Item key={video._id}>
                    <div className="header">{video.title}</div>
                    <div className="body">
                        <div className="title">{video.publishDate}</div>
                        <Link to={`/videos/${video._id}`}>
                            <video playsInline style={{ width: 660, height: "auto" }} onClick={updateMetrics(video._id, video.views)}>
                                <source src={video.cloudURL} type="video/mp4" />
                            </video>
                        </Link>
                        <div className="author">
                            {video.videoAuthor}
                        </div>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}