import "IndexPage.css"


export default class PaymentPage extends React.Component {

    render() {
        return <div className='section-payment page'>
        	<div className="title">
        		<h1>Payment Method</h1>
        		<span>Add your credit card infomation!</span>
        	</div>
        	<div className="panel-top">
        		<div className="input-wrapper">
        			<h5>Card Number</h5>
        			<div className="input">
        				<input type="text" placeholder='1234 5678 9012 3456'/>
        				<div className="pic"></div>
        			</div>
        			
        		</div>
        	</div>
        	<div className="panel-mid">
        		<div className="input-wrapper">
        			<h5>Cardholder Name</h5>
        			<input type="text" placeholder='EXAMPLE NAME'/>
        		</div>
        		<div className="input-wrapper">
        			<h5>Bank Name</h5>
        			<input type="text" placeholder='EXAMPLE BANK'/>
        		</div>
        	</div>
        	<div className="panel-bot">
        		<div className="input-wrapper">
        			<h5>CVV</h5>
        			<input type="text" placeholder='123'/>
        		</div>
        		<div className="input-expire">
        			<h5>Expire Date</h5>
        			<input type="text" placeholder='MM'/>
        			<input type="text" placeholder='DD'/>
        		</div>
        	</div>
        	<div className="btn">
        		<span>DONE</span>
        	</div>
        </div>
    }
}