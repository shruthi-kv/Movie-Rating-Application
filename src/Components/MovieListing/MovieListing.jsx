import {useSelector} from 'react-redux';
import {getAllMovies} from '../../Features/movies/movieSlice'

export default function MovieListing(){
    const movies = useSelector(getAllMovies);
    console.log(movies,"movies")
    return(
        <>
        MovieListing
        </>
    )
}