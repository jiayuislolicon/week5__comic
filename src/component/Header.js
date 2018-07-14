import "Header.css"



export default class Header extends React.Component {

    render() {
        return <header className='header'>
            <div className="decoration-line"></div>
            <div className='progress'>
                <div className="circle done">
                    <div className="shape"></div>
                </div>
                <div className="progress-line undone">
                    <span></span>
                </div>
                <div className="circle undone">
                    <div className="shape"></div>
                </div>
                <div className="progress-line undone">
                    <span></span>
                </div>
                <div className="circle undone">
                    <div className="shape"></div>
                </div>
                <div className="progress-line undone">
                    <span></span>
                </div>
                <div className="circle undone">
                    <div className="shape"></div>
                </div>
            </div>
        </header>
    }
}