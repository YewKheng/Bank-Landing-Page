import { quotes } from "../assets";

export const FeedbackCard = ({ content, name, title, img }) => {
	return (
		<div className="flex flex-col max-w-[370px] justify-between px-10 py-12 mr-0 my-5 rounded-[20px] feedback-card sm:mr-5 md:mr-10">
			<img src={quotes} alt="double_quotes" className="w-[42px] h-[27px] object-contain" />
			<p className=" text-white font-poppins font-normal text-[18px] leading-[32px] my-10">
				{content}
			</p>

			<div className="flex flex-row">
				<img src={img} alt={name} className="w-12 h-12 rounded-full" />
				<div className="flex flex-col ml-4">
					<h4 className="text-white font-poppins font-semibold text-[20px] leading-[32px]">
						{name}
					</h4>
					<p className="text-dimWhite font-poppins font-normal text-base">{title}</p>
				</div>
			</div>
		</div>
	);
};
