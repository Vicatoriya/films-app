import { footerLinks } from '../config/footerLinks';
import { Link } from 'react-router-dom';

export const Footer = () => {
	return (
		<footer>
			<nav>
				<ul className="flex flex-wrap gap-4 justify-center p-6">
					{footerLinks.map(({ label, href }) => (
						<li key={label}>
							<Link
								to={href ?? '/'}
								className="whitespace-nowrap text-sm hover:underline"
							>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</footer>
	);
};
