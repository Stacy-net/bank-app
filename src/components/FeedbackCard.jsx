/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import {quotes} from '../assets';

const FeedbackCard = ({content, name, title, img}) => (
	<div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr0 my-5 feedback-card'>
		<img src={quotes} alt="double_quotes"  className='w-[42px] h-[27px] object-contain'/>
		<p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>

		<div className='flex flex-row'>
			<img src={img} alt={name} className='w-[48px] h-[48px] rounded-full' />
			<div className='flex flex-col ml-4'>
				<h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
				<p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>{title}</p>
			</div>
		</div>
	</div>
)

FeedbackCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default FeedbackCard;
