import styles from "../style";
import { features } from "../Constants";

export const FeatureCard = ({ icon, title, content, index }) => {
	return (
		<div
			className={`flex flex-row p-6 rounded-[20px] ${
				index !== features.length - 1 ? "mb-6" : "mb-0"
			} feature-card`}>
			<div className={`bg-dimBlue w-16 h-16 rounded-full ${styles.flexCenter}`}>
				<img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
			</div>
			<div className="flex flex-1 flex-col ml-3">
				<h4 className="text-white font-poppins font-semibold text-[18px] leading-[23px] mb-1">
					{title}
				</h4>
				<p className="text-dimWhite font-poppins font-normal text-base">{content}</p>
			</div>
		</div>
	);
};
