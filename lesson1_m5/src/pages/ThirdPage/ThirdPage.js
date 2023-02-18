import React, {useEffect, useState} from 'react';

function ThirdPage(props) {

    const [photos, setPhotos] = useState([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(photos => console.log(photos))
    }, [])


    return (
        <div>
            <h1>third page</h1>
            <div style={{display: "flex"}}>
                {
                    photos.map(photo => <div>

                        <img src={photo.url} alt="/"/>
                        <p>(photo.title)</p>
                        <button>Узнать  url</button>
                        <p>-----------------------------</p>
                    </div>)
                }
            </div>


        </div>
    );
}

export default PortfolioPage;}