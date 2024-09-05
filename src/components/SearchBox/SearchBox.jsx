import css from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
    return (
    
    <div className={css.searchBoxContainer}>
      <label className={css.searchLabel} htmlFor="search-input">
        Find contacts by name
      </label>
      <input
        id="search-input"
        className={css.searchBox}
        type="text"
        placeholder="Type a name..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
