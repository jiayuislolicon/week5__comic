import "IndexPage.css"


export default class IndexPage extends React.Component {

    render() {
        return <div className='section-indexpage'>
        	<div className="title">
        		<h1>Create Account</h1>
        		<span>Create Account</span>
        	</div>
        	<div className="input-wrapper">
        		<h5>Account</h5>
        		<input type="text"/>
        	</div>
        	<div className="input-wrapper">
        		<h5>Password</h5>
        		<input type="text"/>
        	</div>
        	<div className="input-wrapper">
        		<h5>Comfirm Password</h5>
        		<input type="text"/>
        	</div>
        	<div className="btn">
        		<span>SUBMIT & NEXT</span>
        	</div>
        </div>
    }
}