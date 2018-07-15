import "IndexPage.css"


export default class FormDonePage extends React.Component {

    render() {
        return <div className='section-formdone page'>
        	<div className="title">
        		<h1>Congratulations</h1>
        		<span>Now you’re one of us! </span>
        	</div>
        	<div className="content">
        		<div className="pic">
        			<img src={`${process.env.PUBLIC_PATH}asset/smile.svg`} alt=""/>
        		</div>
        		<h5>Redirected to homepage after 5 seconds…</h5>
        	</div>
        </div>
    }
}