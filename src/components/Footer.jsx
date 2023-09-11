const Footer = () => {
	const date = new Date();
	return (
		<footer>
			<p>Copyright ©️ {date.getFullYear()}. All rights reserved.</p>
		</footer>
	);
};
export default Footer;
