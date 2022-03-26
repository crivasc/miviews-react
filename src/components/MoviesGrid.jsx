import {useEffect, useState} from 'react';
//import {useQuery} from '../hooks/useQuery';
import { MovieCard } from './MovieCard';
import {get} from '../utils/HttpClient';
import styles from './MoviesGrid.module.scss';
import { Spinner } from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Empty } from './Empty';


export const MoviesGrid=({search})=>{
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    
    /*const query = useQuery();
    const search = query.get('search');*/

    useEffect(()=>{
        setIsLoading(true);
        const searchUrl = search 
            ? '/search/movie?query=' + search + '&page=' + page
            : '/discover/movie?page='+ page;
        //get('/discover/movie').then((data) => {
        get(searchUrl).then((data) => {
            setMovies(prevMovies => prevMovies.concat(data.results));
            setHasMore(data.page < data.total_pages)
            setIsLoading(false)
        })
    },[search, page])

    if(!isLoading && movies.length===0){
        return <Empty/>
    }

    return(
        <InfiniteScroll 
            dataLength={movies.length} 
            hasMore={hasMore} 
            next={()=>setPage((prevPage) => prevPage + 1)}
            loader={<Spinner/>}>
            <ul className={styles.MoviesGrid}>
                {movies.map((movie)=>( 
                    //esta version de arrow function permite omitir las {} y el return
                    <MovieCard key={movie.id} movie={movie}/>))}
            </ul>
        </InfiniteScroll>
    )
}