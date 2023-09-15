const Footer = () => {
	const date = new Date();
	return (
		<footer>
			<p>
				Copyright ©️ {date.getFullYear()} Harvey Productions. All rights
				reserved.
			</p>
		</footer>
	);
};
export default Footer;
