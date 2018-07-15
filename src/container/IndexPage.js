import "IndexPage.css"


export default class IndexPage extends React.Component {
    
    render() {
        return <div className='section-index page'>
        	<div className="title">
        		<h1>Create Account</h1>
        		<span>Glad to see you here!</span>
        	</div>
            <div className="form">
                <div className="input-wrapper ">
                    <h5>Account</h5>
                    <div className="input-content">
                        <input type="text" placeholder='example@email.com'/>
                        <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                        <div className="invaild-message">
                            <i className="fa fa-caret-left" aria-hidden="true"></i>
                            <span>INVALID EMAIL</span>
                        </div>
                    </div>   
                </div>
                <div className="input-wrapper ">
                    <h5>Password</h5>
                    <div className="input-content">
                        <input type="password" placeholder='Input minimum 8 characters'/>
                        <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                        <div className="invaild-message">
                            <i className="fa fa-caret-left" aria-hidden="true"></i>
                            <span>MINIMUM 8 CHARACTERS</span>
                        </div>
                    </div>   
                </div>
                <div className="input-wrapper ">
                    <h5>Comfirm Password</h5>
                    <div className="input-content">
                        <input type="password" placeholder='Input password again'/>
                        <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                        <div className="invaild-message">
                            <i className="fa fa-caret-left" aria-hidden="true"></i>
                            <span>NOT MATCH</span>
                        </div>
                    </div>   
                </div>
            </div>
        	<Link to='/information'><div className="submit-button">
        		<span>SUBMIT & NEXT</span>
        	</div></Link>
        </div>
    }
}