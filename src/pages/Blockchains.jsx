import React from 'react';
import { BlockchainItem } from "../components";

import { useStateContext } from '../contexts/ContextProvider';
import { blockChainItems } from "../data/dummy";

const blockchainItemClicked = (itemName) =>
{
	alert(itemName);
};

const Blockchains = () =>
{
	const { currentColor } = useStateContext();

	return (
		<div className="flex justify-evenly">
			<div className="mt-12" style={{ color: currentColor }}>
				{blockChainItems.map((blockChainItem) =>
				(
					<BlockchainItem key={blockChainItem.index} index={blockChainItem.index} name={blockChainItem.name} blockchainItemClicked />
				))
				}
			</div >
		</div>
	);
};

export default Blockchains;
