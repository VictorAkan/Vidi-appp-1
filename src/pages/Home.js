import { useQuery } from "@apollo/client";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { VideoList } from "../components/VideoList";
import { Loader } from "../components/Loader";
import { QUERY_VIDEOS } from "../utils/queries";

export const Home = () => {
    const { loading, data } = useQuery(QUERY_VIDEOS)
    const videos = data?.videos || []

    return (
        <main>
            <Navbar />
            <Hero />
            <div>
                { loading ? (<Loader />) : (<VideoList videos={videos} />)}
            </div>
        </main>
    )
}