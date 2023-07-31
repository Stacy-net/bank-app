/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ styles }) => {
	return (
		<button
			type="button"
			className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
		>
			Get Started
		</button>
	);
};

Button.propTypes = {
	styles: PropTypes.object.isRequired,
};

export default Button;
