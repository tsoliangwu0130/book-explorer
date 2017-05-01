import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        let alternate = 'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg'

        return(
            <div>
                {
                    this.props.items.map((item, index) => {
                        let { title, imageLinks, infoLink } = item.volumeInfo;
                        return(
                            <a
                                href={ infoLink }
                                target="_blank"
                                key={ index }
                                className="book"
                            >
                                <img
                                    src={ imageLinks !== undefined ? imageLinks.thumbnail : alternate}
                                    alt="book image"
                                    className="book-img"
                                />
                                <div className="book-text">
                                    { title }
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery;
