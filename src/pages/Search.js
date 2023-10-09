import React from 'react';
import SearchBar from '../components/SearchBar';
import useGooglesearch from '../components/useGooglesearch';
import { typedTerm } from '../features/SearchSlice';
import { useSelector } from 'react-redux';
import './Search.css'
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from "@mui/icons-material/Search";
const Search = () => {
  const term = useSelector(typedTerm);
  const { data } = useGooglesearch(term);

  // Check if data is not null or undefined and extract specific information
  const searchResults = data?.items || [];

  return (
    <>
     <div className="header">
        <div className="skyLogoRow">
          <img
            src="https://logos-world.net/wp-content/uploads/2021/02/Sky-Logo.png"
            alt="Sky Logo"
            className="skyLogo"
          />
          <SearchBar />
        </div>
        
      </div>
      <div className='search__icon'>
        <SearchIcon/><span>All</span>
        <CropOriginalIcon/><span>Images</span>
        <SmartDisplayIcon/> <span>Videos</span>
        <LibraryBooksIcon/><span>Books</span>
        <MoreVertIcon/><span>More</span>
      </div>
      <div className="search-results">
        {searchResults.map((result, index) => (
          <div className="search-result" key={index}>
            <a href={result.link} target="_blank" rel="noopener noreferrer">
              <h2 className="result-title">{result.title}</h2>
            </a>
            <a href={result.link} target="_blank" rel="noopener noreferrer" className="result-link">
              {result.link}
            </a>
            <p className="result-snippet">{result.snippet}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;
