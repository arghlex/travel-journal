import React from "react"

export default function Post (props) {
    console.log(props);
    return (
        
        <div className="post">
            <div className="post--img">
                <img src={props.post.imageUrl} />
            </div>
            <div className="post--content">
                <p className="post--location">
                    <span className="post--country"><i className="fa-solid fa-location-dot"></i>{props.post.location}</span> 
                    <a href={props.post.googleMapsUrl} className="post--gmap">View on Google Maps</a>
                </p>
                <h2 className="post--title">{props.post.title}</h2>
                <p className="post--date">
                    <span className="post--date__from">{props.post.startDate}</span> - <span className="post--date__to">{props.post.endDate}</span>
                </p>
                <p className="post--desc">{props.post.description}</p>
            </div>
        </div>



        // <div className="post">
        //     <div className="post--img">
        //         <img src="https://source.unsplash.com/WLxQvbMyfas" />
        //     </div>
        //     <div className="post--content">
        //         <p className="post--location">
        //             <span className="post--country"><i className="fa-solid fa-location-dot"></i>Japan</span> 
        //             <a href="#" className="post--gmap">View on Google Maps</a>
        //         </p>
        //         <h2 className="post--title">Mount Fuji</h2>
        //         <p className="post--date">
        //             <span className="post--date__from">12 Jan, 2021</span> - <span className="post--date__to">24 Jan, 2021</span>
        //         </p>
        //         <p className="post--desc">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        //     </div>
        // </div>

    )


}