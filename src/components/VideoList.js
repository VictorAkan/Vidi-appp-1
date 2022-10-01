import { ReactCarousel } from "./carousel/Carousel"

export const VideoList = ({ videos }) => {
    return (
        <section className="p-8 px-10">
            <div>
                <h2 className="text-center capitalize text-3xl text-green-500">View full video list</h2>
            </div>
            <div>
                <ReactCarousel videos={videos} />
            </div>
        </section>
    )
}