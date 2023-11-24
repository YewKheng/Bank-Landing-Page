import styles from "../style";
import { feedback } from "../Constants";
import { FeedbackCard } from "./FeedbackCard";

export const Testimonials = () => {
	return (
		<section id="clients" className={`${styles.paddingY} ${styles.flexCenter} relative flex-col`}>
			<div className="absolute blue__gradient w-[60%] h-[60%] -right-[50%] bottom-40 rounded-full z-0" />

			<div className="relative flex flex-col w-full justify-between items-center mb-6 z-[1] sm:mb-16 md:flex-row">
				<h2 className={styles.heading2}>
					What People are <br className="hidden sm:block" /> saying about us
				</h2>
				<div className="w-full mt-6 md:mt-0">
					<p className={`${styles.paragraph} max-w-[450px] text-left`}>
						Everything you need to accept card payments and grow your business anywhere on the
						planet.
					</p>
				</div>
			</div>

			<div className="relative flex flex-wrap w-full justify-center feedback-container z-[1] sm:justify-start">
				{feedback.map((card) => (
					<FeedbackCard key={card.id} {...card} />
				))}
			</div>
		</section>
	);
};
