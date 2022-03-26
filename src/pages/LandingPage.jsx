import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
//import {useQuery} from '../hooks/useQuery';
import { useDebounce } from "../hooks/useDebounce";
import { useSearchParams } from "react-router-dom";
  
export const LandingPage =()=>{

    const [query] = useSearchParams();
    const search = query.get('search');

    const debouncedSearch = useDebounce(search, 300)
    return <div>
        <Search/>
        <MoviesGrid key={debouncedSearch} search={debouncedSearch}/>
    </div>
}