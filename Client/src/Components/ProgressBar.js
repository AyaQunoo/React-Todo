const ProgressBar = ({ progress }) => {

    return (
        <div className="outer-bar">
            <div className="inner-bar"
                style={{ width: `${progress}%`, backgroundColor: '#9c27b0' }}></div>

        </div>
    );
}
export default ProgressBar
