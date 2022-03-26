import styles from './Search.module.scss';
import {useHistory} from 'react-router';
import { FaSearch } from "react-icons/fa";
import { useQuery } from '../hooks/useQuery';

export const Search=()=> {
    const query = useQuery();
    const search = query.get('search');

    const history = useHistory();

    const handleSubmit =(e)=>{
        e.preventDefault();
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input type="text" 
                    className={styles.searchInput} 
                    value={search}
                    placeholder='Title'
                    aria-label='Search Movies'
                    onChange={(e) => {
                        const value = e.target.value;
                        history.push('/?search=' + value);
                    }}/>
                <FaSearch className={styles.searchButton} color='black' size={20}/> 
            </div>
        </form>
    )
}
