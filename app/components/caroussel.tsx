import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const CarousselComponent = ({ itemsList }: any) => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	};
	return (
		<div className="slider-container">
		<Slider {...settings}>
			{
				itemsList()
			}
		</Slider>
		</div>
	);
}