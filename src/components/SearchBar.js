import React, { useState } from 'react';
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";
import '../pages/Home.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm} from '../features/SearchSlice';
import { typedTerm } from '../features/SearchSlice';
import { useEffect } from 'react';

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const TermValue = useSelector(typedTerm)
  const [isEditing, setIsEditing] = useState(false);

  // Use useEffect to update the local state when TermValue changes
  useEffect(() => {
    if (!isEditing) {
      setTerm(TermValue);
    }
  }, [TermValue, isEditing]);
  

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      dispatch(setSearchTerm(term));
      navigate('/search');
    }
  };
  

  

  return (
    <div className="home__searchRow">
      {TermValue ? (
        <>
          <SearchIcon className="home__searchIcon" />
          <input
            type="search"
            className="home__searchInput"
            
            onChange={(e) => setTerm(e.target.value)}
            onKeyDown={handleSearch}
            value={isEditing ? term : TermValue}
            onFocus={() => setIsEditing(true)}
            onBlur={() => setIsEditing(false)}
          />
          <MicIcon className="home__micIcon" />
          <CenterFocusWeakIcon className="home__centerFocusWeakIcon" />
        </>
      ) : (
        <>
          <SearchIcon className="home__searchIcon" />
          <input
            type="search"
            className="home__searchInput"
            placeholder="Search Sky or Type URL"
            onChange={(e) => setTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
          <MicIcon className="home__micIcon" />
          <CenterFocusWeakIcon className="home__centerFocusWeakIcon" />
        </>
      )}
    </div>
  );
};

export default SearchBar;
