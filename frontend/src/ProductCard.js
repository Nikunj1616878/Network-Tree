import logo from './images/logo.png'
import image1 from './images/1.webp'
import image2 from './images/2.webp'
import image3 from './images/3.webp'

export default function ProductCard(props) {

    const slides = [
        { id: 1, image: image1, caption: 'First Slide' },
        { id: 2, image: image2, caption: 'Second Slide' },
        { id: 3, image: image3, caption: 'Third Slide' },
        { id: 4, image: image1, caption: 'Third Slide' },
        { id: 5, image: image2, caption: 'Third Slide' },
        { id: 6, image: image3, caption: 'Third Slide' },
        { id: 7, image: image1, caption: 'Third Slide' },
        { id: 8, image: image2, caption: 'Third Slide' },
      ];

    return(
        <>
        <div>
            <div className="card mx-2" >
                <img src={slides[props.id-1].image} class="card-img-top"  alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                </div>
            </div>
        </div>
        </>
    )
}