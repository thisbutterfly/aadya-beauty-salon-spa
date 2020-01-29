import React, {Component} from 'react';

export default class AllImagesTab extends Component{
    render(){
        return(
            <div className="container">
                 <div className="gallery-images">
            {AllImages.map(all => (
              <>
                <img src={all.imgLink} alt="gallery-placeholder" className="gallery-picture" />
              </>
            ))}
          </div>
            </div>
        )
    }
}

const AllImages = [
    {
        imgLink: "https://via.placeholder.com/300"
    },
    {
        imgLink: "https://via.placeholder.com/300"
    },
    {
        imgLink: "https://via.placeholder.com/300"
    },
    {
        imgLink: "https://via.placeholder.com/300"
    },
    {
        imgLink: "https://via.placeholder.com/300"
    },
]