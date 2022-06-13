
const handleToggleDarkMode = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

const Navbar = () => {
    return ( 
        <div className="navbar">
            <nav>
                <h2>LEON & OMER COLLAB</h2>
                <li><a href="/">Home</a></li>
                <li><a href="/Stuff">Stuff</a></li>
                <li><a href="/BoboGaga">BoboGaga</a></li>
                <li>
                    <label class="switch">
                        <input type="checkbox" onClick={handleToggleDarkMode}></input>
                        <span class="slider round"></span>
                    </label>
                </li>
            </nav>
        </div>
    );
}
 
export default Navbar;