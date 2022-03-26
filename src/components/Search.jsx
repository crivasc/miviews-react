import styles from './Search.module.scss';
//import {useNavigate} from 'react-router';
import { FaSearch } from "react-icons/fa";
//import { useQuery } from '../hooks/useQuery';
import { useSearchParams } from 'react-router-dom';

export const Search=()=> {
    //este se utiliza e la version 5 de react-router-dom
    //const query = useQuery();
    const [query, setQuery] = useSearchParams();
    const search = query.get('search');

    ///const navigate = useNavigate();

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
                        setQuery({search:value})
                        //navigate('/?search=' + value);
                    }}/>
                <FaSearch className={styles.searchButton} color='black' size={20}/> 
            </div>
        </form>
    )
}
