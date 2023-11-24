import styles, { layout } from "../style";
import { apple, bill, google } from "../assets";

export const Billing = () => {
	return (
		<section id="product" className={layout.sectionReverse}>
			<div className={layout.sectionImgReverse}>
				<img src={bill} alt="billing" className="relative w-full h-full z-10" />
				<div className="absolute white__gradient w-[50%] h-[50%] -left-1/2 top-0 rounded-full z-[5]" />
				<div className="absolute pink__gradient w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full z-0" />
			</div>

			<div className={layout.sectionInfo}>
				<h2 className={styles.heading2}>
					Easily control your <br className="sm:block hidden" /> billing & invoicing
				</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce
					ipsum orci rhoncus aliporttitor integer platea placerat.
				</p>

				<div className="flex flex-row flex-wrap mt-6 first-line:sm:mt-10 ">
					<img
						src={apple}
						alt="App Store"
						className="w-32 h-[42px] object-contain mr-5 cursor-pointer"
					/>
					<img
						src={google}
						alt="Play Store"
						className="w-36 h-[43px] object-contain cursor-pointer"
					/>
				</div>
			</div>
		</section>
	);
};
