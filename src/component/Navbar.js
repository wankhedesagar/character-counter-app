// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Navbar(props) {
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link to='/' className="navbar-brand" >{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/about' className="nav-link" >{props.aboutText}</Link>
            </li>

          </ul>

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? "Enable Dark Mode" : "Enable Light Mode"}</label>
          </div>

        </div>
      </div>
    </nav>

  )
}

//this is prototypes
// Navbar.prototypes = {
//   title: PropTypes.string.isRequired,
//   aboutText: PropTypes.string.isRequired
// }

//this is defaultProps
 Navbar.defaultProps = {
//   title: 'Set title here',
   aboutText: 'About'
 }

export default Navbar