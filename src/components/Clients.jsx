/* eslint-disable no-unused-vars */
import React from 'react';
import {clients} from '../constants';
import styles from '../style';

const Clients = () => (
	<section className={`${styles.flexCenter} my-4`}>
		<div className={`${styles.flexCenter} flex-wrap w-full`}>
			{clients.map((client)=>(
				<div key={client.id} id={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] items-center`}>
					<img src={client.logo} alt="client"  className={`sm:w-[192px] w-[100px] object-contain hover:filter-white`} />
				</div>
			))}
		</div>
	</section>
)

export default Clients;