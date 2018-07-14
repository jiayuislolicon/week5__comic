import "IndexPage.css"


export default class InformationPage extends React.Component {

    render() {
        return <div className='section-informationpage'>
            <div className="title">
                <h1>Create Account</h1>
                <span>Create Account</span>
            </div>
            <div className="panel-top">
                <div className="input-wrapper">
                    <h5>Name </h5>
                    <span>(optional)</span>
                    <input type="text" placeholder='Example Name'/>
                </div>
                <div className="input-wrapper">
                    <h5>Phone*</h5>
                    <input type="text" placeholder='0912 345 678'/>
                </div>
                <div className="panel-mid">
                    <div className="input-wrapper">
                        <h5>Birth Date </h5>
                        <span>(optional)</span>
                        <div className="input-date">
                            <input type="text" placeholder='YYYY'/>
                            <input type="text" placeholder='MM'/>
                            <input type="text" placeholder='DD'/>
                        </div>
                    </div>
                    <div className="panel-bot">
                        <div className="input-wrapper">
                            <h5>Address*</h5>
                            <div className="input-address">
                                <input type="text" placeholder='City'/>
                                <input type="text" placeholder='Dist'/>
                                <input type="text" placeholder='Address Detail'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn">
                <span>SUBMIT & NEXT</span>
            </div>
        </div>
    }
}