import styles from './MovieCard.module.scss';
import {Link} from 'react-router-dom';
import { getMovieImg } from '../utils/getMovieImg';

export const MovieCard=({movie})=>{
    const imgUrl = getMovieImg(movie.poster_path, 300)
    return <li className={styles.MovieCard}>
        <Link to={'/movies/'+movie.id}>
            <img 
                width={230}
                height={345}
                className={styles.movieImage} 
                src={imgUrl} alt={movie.title} />
            <div>{movie.title}</div>
        </Link>
    </li>
}