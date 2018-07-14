import "IndexPage.css"


export default class UpdatePicturePage extends React.Component {

    render() {
        return <div className='section-picture'>
            <div className="title">
                <h1>Update Profile Picture</h1>
                <span>We wanna know you more!</span>
            </div>
            <input type="file"/>
            <div className="update-block">
                <div className="pic"></div>
                <div className="text">
                    <h2>UPLOAD UP TO 3 PHOTOS</h2>
                    <h5>MAX SIZE: 150*150px</h5>
                </div>
            </div>
            <div className="btn">
                <span>SUBMIT & NEXT</span>
            </div>
        </div>
    }
}