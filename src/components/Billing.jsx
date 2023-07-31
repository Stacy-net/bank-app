/* eslint-disable no-unused-vars */
import React from 'react';
import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
	<section id="product" className={layout.sectionReverse}>
		<div className={layout.sectionImgReverse}>
			<img
				src={bill}
				alt="billing"
				className="w-[100%] h-[100%] realtive z-[5]"
			/>
			<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
		</div>
	</section>
);

export default Billing;
