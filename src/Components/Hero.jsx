import styles from "../style";
import { discount, robot } from "../assets";
import { GetStarted } from "./GetStarted";

export const Hero = () => {
	return (
		<section id="home" className={`flex flex-col ${styles.paddingY} md:flex-row`}>
			<div className={`flex-1 flex-col ${styles.flexStart} px-6 sm:px-16 xl:px-0`}>
				<div className="bg-discount-gradient flex flex-row items-center py-[6px] px-4 mb-2 rounded-[10px]">
					<img className="w-8 h-8" src={discount} alt="Discount" />
					<p className={`${styles.paragraph} ml-2`}>
						<span className="text-white">20%</span> Discount For{" "}
						<span className="text-white">1 Month</span> Account
					</p>
				</div>

				<div className="flex w-full flex-row justify-between items-center">
					<h1 className="flex-1 font-poppins font-semibold text-white text-[52px] leading-[75px] ss:text-7xl ss:leading-[100px]">
						The Next <br className="hidden sm:block" />{" "}
						<span className="text-gradient">Generation</span>
					</h1>

					<div className="hidden ss:flex md:mr-4">
						<GetStarted />
					</div>
				</div>

				<h1 className="w-full font-poppins font-semibold text-white text-[52px] leading-[75px] ss:text-[68px] ss:leading-[100px]">
					Payment Method
				</h1>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Our team of experts uses a methodology to identify the credit cards most likely to fit
					your needs. We examine annual percentage rates, annual fees.
				</p>
			</div>

			<div className={`relative flex flex-1 ${styles.flexCenter} my-10 md:my-0`}>
				<img className="relative w-full h-full z-10" src={robot} alt="Robot Arm" />
				<div className="absolute white__gradient w-[60%] h-[70%] bottom-40 rounded-full z-[1]"></div>
				<div className="absolute blue__gradient w-[50%] h-[50%] right-20 bottom-20 z-0"></div>
			</div>

			<div className={`${styles.flexCenter} ss:hidden`}>
				<GetStarted />
			</div>
		</section>
	);
};
