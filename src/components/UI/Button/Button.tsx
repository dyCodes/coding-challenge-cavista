import React from 'react';
import './Button.css';

interface Props {
	text: string;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	modifier?: 'primary' | 'secondary';
}

const Button: React.FC<Props> = ({ text, onClick, type = 'button', disabled = false, modifier }) => {
	const className = `button ${modifier ? `button--${modifier}` : ''}`;
	return (
		<button className={className} onClick={onClick} type={type} disabled={disabled}>
			{text}
		</button>
	);
};

export default Button;
