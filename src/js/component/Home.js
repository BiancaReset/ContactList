import React, { Fragment } from 'react';
import { Heading } from './Heading';
import { ContactList } from './ContactList';


export const Home = () => {
	return (
		<Fragment>
			<div className="App">
				<div className="container mx-auto">
					<h3 className="text-center  text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">Contact List</h3>
					<Heading />
					<ContactList />
				</div>
			</div>
		</Fragment>
	)
}

