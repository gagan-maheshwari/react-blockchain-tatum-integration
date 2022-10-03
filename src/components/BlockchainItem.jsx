import React from 'react';
import { useStateContext } from "../contexts/ContextProvider";

const BlockchainItem = ({ index, name, blockchainItemClicked }) =>
{
	return (
		<div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex mb-20" role="alert">
			<span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3" onClick={(name) => blockchainItemClicked}>
				{index}
			</span>
			<span className="font-semibold mr-2 text-left flex-auto">
				{name}
			</span>
		</div>
	);
};

export default BlockchainItem;
