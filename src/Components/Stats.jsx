import styles from "../style";
import { stats } from "../Constants";

export const Stats = () => {
	return (
		<section className={`${styles.flexCenter} flex-row flex-wrap mb-6 sm:mb-20 `}>
			{stats.map((stat) => (
				<div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
					<h4 className="font-poppins font-semibold text-white text-3xl leading-[43px] xs:text-[40px] xs:leading-[53px] ">
						{stat.value}
					</h4>
					<p className="font-poppins font-normal text-gradient uppercase text-[15px] leading-[21px] ml-3 xs:text-xl xs:leading-[26px]">
						{stat.title}
					</p>
				</div>
			))}
		</section>
	);
};
