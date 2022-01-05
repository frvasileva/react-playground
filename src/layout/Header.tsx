import "./Header.css";

function Header() {
    return <ul className="menu">
        <li className="item">
            <a href="/">Home</a>
        </li>
        <li className="item">
            <a href="/compound-components">Compound components</a>
        </li>
    </ul>
}

export default Header;