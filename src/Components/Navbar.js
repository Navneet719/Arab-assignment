import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">

                  
                    
                    <Link to={'/Plans'}><h3 style={{ color: 'white', cursor: 'pointer' }}>Plans</h3></Link>

                    <Link to={'/Perks'}><h3 style={{ color: 'white', cursor: 'pointer' }}>Perks</h3></Link>

                    

                   
                </div>
            </nav>
        </>
    )
}

export default Navbar