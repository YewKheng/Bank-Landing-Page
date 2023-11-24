import styles from "../style";
import { arrowUp } from "../assets";

export const GetStarted = () => {
	return (
		<div
			className={`${styles.flexCenter} bg-blue-gradient w-[140px] h-[140px] p-[2px] rounded-full cursor-pointer`}>
			<div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}>
				<div className={`${styles.flexStart} flex-row`}>
					<p className="font-poppins font-medium text-[18px]leading-[23px] mr-3">
						<span className="text-gradient">Get</span>
					</p>
					<img className="w-[23px] h-[23px] object-contain" src={arrowUp} alt="Arrow Up Icon" />
				</div>
				<p className="font-poppins font-medium text-[18px] leading-[23px]">
					<span className="text-gradient">Started</span>
				</p>
			</div>
		</div>
	);
};
