interface NavbarProps {
  onFilter: () => void;
  onChange: () => void;
  onSearch: () => void;
}

function Navbar({onFilter, onChange, onSearch}: NavbarProps) {
  const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']
  
  return (
    <nav className='navbar'>
      <div className='filterABC'>
        {abc.map((l) => {
          return (
            <span key={l} onClick={onFilter}>{l}</span>
          )
        })}
      </div>
      <div>
        <input type="text" onChange={onChange} />
        <button onClick={onSearch}>buscar</button>
      </div>
    </nav>
  )
}

export default Navbar