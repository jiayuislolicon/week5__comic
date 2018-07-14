import "Header.css"



export default class Header extends React.Component {

    render() {
        return <header className='header'>
            <div className='progress'>
                <div className="circle">
                    <div className="shape"></div>
                </div>
                <div className="circle">
                    <div className="shape"></div>
                </div>
                <div className="circle">
                    <div className="shape"></div>
                </div>
                <div className="circle">
                    <div className="shape"></div>
                </div>
                <div className="line"></div>
            </div>
        </header>
    }
}