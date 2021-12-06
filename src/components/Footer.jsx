import React from 'react';
import '../styles/footer.css';

export default function Footer() {
	return (
		<footer>
			<span>
        &copy; Desenvolvido por
				<a
					href="https://github.com/SP-Sam"
					target="_blank"
					rel="noopener noreferrer"
					className="github-footer"
				>
          Samuel Pereira
				</a>
			</span>
			<span>
        com
				<a
					href="https://pt-br.reactjs.org/"
					target="_blank"
					rel="noopener noreferrer"
					className="react-footer"
				>
          React JS
				</a>
        . Todos os direitos reservados.
			</span>
		</footer>
	);
}
