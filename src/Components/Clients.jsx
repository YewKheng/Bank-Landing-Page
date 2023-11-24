import styles from "../style";
import { clients } from "../Constants";

export const Clients = () => {
	return (
		<section className={`${styles.flexCenter} my-4`}>
			<div className={`${styles.flexCenter} w-full flex-wrap`}>
				{clients.map((client) => (
					<div
						key={client.id}
						className={`${styles.flexCenter} flex-1 min-w-[120px] m-5 sm:min-w-[192px]`}>
						<img
							src={client.logo}
							alt="client_logo"
							className=" w-[100px] object-contain sm:w-[192px]"
						/>
					</div>
				))}
			</div>
		</section>
	);
};
