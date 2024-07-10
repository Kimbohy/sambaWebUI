import "../styles/Popup.css";

function Popup({ data }) {
    return (
        <div className="popup">
        <div className="popup-content">
            <div className="popup-header">
            <h2>{data.title}</h2>
            <span className="close" onClick={data.closePopup}>
                &times;
            </span>
            </div>
            <div className="popup-body">
            {data.body}
            </div>
        </div>
        </div>
    );
}

export default Popup;