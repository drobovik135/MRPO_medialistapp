import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      
        <div className="header-content">
        <Link className='link-Header' to ="/">
          <h1 className="header-title">My Media List</h1>
          </Link>
        </div>

    </header>
  )
}

export default Header