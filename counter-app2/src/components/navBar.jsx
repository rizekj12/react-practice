
//stateless functional component

const NavBar = ({ totalCounters }) => {
    return ( 
        <>
         <nav className="navbar navbar-light bg-light">
                 <span className="badge bg-pill bg-secondary m-2">{totalCounters}</span>
             </nav>           
        </>
     );
}

export default NavBar;

