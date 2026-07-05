import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from "@mui/material";
// // @ts-ignore
const SliderComponent = Slider.default ;

export const CarousselComponent = ({ itemsList }: any) => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		nextArrow: <ArrowForwardIosIcon  color="secondary" fontSize="large" />,
		prevArrow: <ArrowBackIosNewIcon color="secondary" fontSize="large"/>
	};
	return (
		<div className="slider-container">
		 <SliderComponent {...settings}>
			{
				itemsList()
			}
		</SliderComponent> 
		</div>
	);
}