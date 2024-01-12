import React from 'react';

function Main(props) {
    const {title, preview, body, categories} = props
    return (
        <>                   
            <div className='post'>
                <h5>
                    {title}
                </h5>
                <h6 className="mb-auto">{preview}</h6>

                <p className="mb-auto">
                    {body}
                </p>
                <div className="mb-auto">
                    <span>{categories[0]}</span>
                    <span>{categories[1]}</span>
                </div>
                <div className="df mb-auto">
                    <div className="hc"><i className="fa-regular fa-comment-dots mr"></i>3</div>
                    <div className="hv"><a className="viewmore" href="viewmore.html?id=">View More</a></div>
                </div>
            </div>
        
        </>
    );
}

export default Main;