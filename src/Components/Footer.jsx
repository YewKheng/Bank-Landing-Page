import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../Constants";

export const Footer = () => {
	return (
		<section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
			<div className={`${styles.flexStart} flex-col w-full mb-8 md:flex-row`}>
				<div className="flex-[1] flex flex-col justify-start mr-10">
					<img src={logo} alt="hoobank" className="w-[266px] h-[72px] object-contain" />
					<p className={`${styles.paragraph} max-w-[312px] mt-4`}>
						A new way to make the payments easy, reliable and secure.
					</p>
				</div>

				<div className="flex flex-[1.5] flex-row w-full justify-between flex-wrap mt-10 md:mt-0">
					{footerLinks.map((footerlink) => (
						<div key={footerlink.title} className={`flex flex-col min-w-[150px] my-4 ss:my-0`}>
							<h4 className=" text-white font-poppins font-medium text-[18px] leading-[27px]">
								{footerlink.title}
							</h4>
							<ul className="list-none mt-4">
								{footerlink.links.map((link, index) => (
									<li
										key={link.name}
										className={`text-dimWhite font-poppins font-normal text-base hover:text-secondary cursor-pointer ${
											index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
										}`}>
										{link.name}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className="flex flex-col w-full justify-between items-center pt-6 border-t-[1px] border-t-[#3F3E45] md:flex-row">
				<p className="text-white font-poppins font-normal text-center text-[18px] leading-[27px] ">
					Copyright Ⓒ 2022 HooBank. All Rights Reserved.
				</p>

				<div className="flex flex-row mt-6 md:mt-0">
					{socialMedia.map((social, index) => (
						<img
							key={social.id}
							src={social.icon}
							alt={social.id}
							className={`w-[21px] h-[21px] object-contain cursor-pointer ${
								index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
							}`}
							onClick={() => window.open(social.link)}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
