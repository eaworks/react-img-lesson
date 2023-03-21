function SearchHeader({ search }) {
    const handleFormSubmit = (event) => {
        event.preventDefault(); // Sayfanın Yenilenmesini Engeller
        search('ersin')
    }
    return <div className="searchDiv">
        <form onSubmit={handleFormSubmit}>
            <label>Ne ariyorsunuz?</label>
            <input />
        </form>
    </div>;
}
export default SearchHeader;