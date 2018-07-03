import "Header.css"



export default class Header extends React.Component {

    render() {
        return <header className='header'>
            <div className='menu'>
                <NavLink exact to='/'>Oscar Wei</NavLink>
                <NavLink exact to='/interior'>INTERIOR</NavLink>
                <NavLink exact to='/furniture'>FURNITURE</NavLink>
                <NavLink exact to='/contact'>CONTACT</NavLink>
            </div>
        </header>
    }
}