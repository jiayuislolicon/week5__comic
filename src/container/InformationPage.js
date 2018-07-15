import "IndexPage.css"


export default class InformationPage extends React.Component {
    constructor(p){
        super(p)
        this.state = {

        }
    }

    // getNumber(){
    //     let select = document.getElementById('select')
    //     let Numberfrom = select.getAttribute('data-from')
    //     console.log(Numberfrom)
    // }
    // componentDidMount(){
    //     this.getNumber()
    // }
    render() {

        return <div className='section-information page'>
            <div className="title">
                <h1>General Infomation</h1>
                <span>Tell us who you are!</span>
            </div>
            <div className="form section-info-name">
               <div className="input-wrapper ">
                    <h5>Name*</h5>
                    <div className="input-content">
                        <input type="text" placeholder='Example Name'/>
                    </div>   
                </div>
                <div className="input-wrapper">
                    <h5>Phone*</h5>
                    <div className="input-content">
                        <input type="text" placeholder='0912 345 678'/>
                        <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                        <div className="invaild-message">
                            <i className="fa fa-caret-left" aria-hidden="true"></i>
                            <span>INVALID NIMBER</span>
                        </div>
                    </div>   
                </div>
            </div>
            <div className="form">
                <div className="input-wrapper">
                    <h5>Birth Date*</h5>
                    <div className="input-date">
                        <select name='year' date-from='1900' date-to='2018' required ref={ el => this.year = el }>
                            <option value="">YYYY</option>
                        </select>
                        <select name='month' date-from='1' date-to='12' required ref={ el => this.month = el }>
                            <option value="">MM</option>
                        </select>
                        <select name='day' date-from='1' date-to='31' required ref={ el => this.day = el }>
                            <option value="">DD</option>
                        </select>
                    </div>
                </div>
                <div className="form">
                    <div className="input-wrapper">
                        <h5>Address*</h5>
                        <div className="input-address">
                            <select name='city' date-from='1' date-to='31' required>
                            <option value="">City</option>
                        </select>
                        <select name='dist' date-from='1' date-to='31' required>
                            <option value="">Dist</option>
                        </select>
                            <div className="input-content">
                                <input type="text" placeholder='Input your address'/>
                                <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                <div className="invaild-message">
                                    <i className="fa fa-caret-left" aria-hidden="true"></i>
                                    <span>INVALID EMAIL</span>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
            <Link to='updatepic'><div className="submit-button">
                <span>SUBMIT & NEXT</span>
            </div></Link>
        </div>
    }
}