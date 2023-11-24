import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../Constants";

export const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="flex w-full justify-between items-center py-6">
			<img className="w-[124px] h-8" src={logo} alt="HooBank Logo" />

			<ul className="flex-1 justify-end items-center list-none hidden sm:flex">
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`font-poppins text-white text-base font-normal ${
							index === navLinks.length - 1 ? "mr-0" : "mr-10"
						} cursor-pointer`}>
						<a href={`#${nav.id}`}>{nav.title}</a>
					</li>
				))}
			</ul>

			<div className="flex flex-1 justify-end items-center sm:hidden">
				<img
					className="w-7 h-7 object-contain"
					src={toggle ? close : menu}
					alt="Menu"
					onClick={() => setToggle((prev) => !prev)}
				/>

				<div
					className={`${
						toggle ? "flex" : "hidden"
					} bg-black-gradient absolute top-20 right-0 p-6 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
					<ul className="flex flex-col flex-1 justify-end items-center list-none">
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`font-poppins text-white text-base font-normal ${
									index === navLinks.length - 1 ? "mr-0" : "mb-4"
								} cursor-pointer`}>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
