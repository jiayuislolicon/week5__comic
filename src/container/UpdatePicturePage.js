import "IndexPage.css"


export default class UpdatePicturePage extends React.Component {

    render() {
        return <div className='section-picture page'>
            <div className="title">
                <h1>Update Profile Picture</h1>
                <span>We wanna know you more!</span>
            </div>
            <div className="update-wrapper">
                <input type="file" name="file" id="file"/>
                <label htmlFor='file' className="update-block">
                    <div className="pic">
                        <svg x="0px" y="0px" viewBox="0 0 19 18.6">
                            <path d="M14.5,18.6h-10c-2.2,0-4-1.8-4-4v-10c0-2.2,1.8-4,4-4h10c2.2,0,4,1.8,4,4v10C18.5,16.8,16.7,18.6,14.5,18.6z
                             M6,4.6c-0.8,0-1.5,0.7-1.5,1.5S5.2,7.6,6,7.6s1.5-0.7,1.5-1.5S6.8,4.6,6,4.6z M16.5,12.6l-4-4l-5,5l-2-2l-3,3c0,1.1,0.9,2,2,2h10
                            c1.1,0,2-0.9,2-2V12.6z"/>
                        </svg>
                    </div>
                    <div className="text">
                        <h2>UPLOAD UP TO 3 PHOTOS</h2>
                        <h5>MAX SIZE: 150*150px</h5>
                    </div>
                </label>
            </div>
            <div className="invail-message">
                <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                <span>ONE FILE IS OVER THE MAXIMUM SIZE</span>
            </div>
            <div className="pic-wrapper">
                <div className="update-pic" style={{backgroundImage: `url(${process.env.PUBLIC_PATH}asset/8.jpg)`}}></div>
                <div className="update-pic" style={{backgroundImage: `url(${process.env.PUBLIC_PATH}asset/8.jpg)`}}></div>
                <div className="update-pic" style={{backgroundImage: `url(${process.env.PUBLIC_PATH}asset/8.jpg)`}}></div>
            </div>
            <Link to='payment'><div className="submit-button">
                <span>SUBMIT & NEXT</span>
            </div></Link>
        </div>
    }
}