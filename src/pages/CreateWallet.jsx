import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Button, Header, Information } from '../components';
import { useStateContext } from "../contexts/ContextProvider";
import { isEmptyOrNullString } from "../utility/helpers/helper";

const CreateWallet = () =>
{
	const { currentColor } = useStateContext();

	const [mnemonic, setMnemonic] = useState("");
	const [xpub, setXpub] = useState(localStorage.getItem("xpub"));

	const headerConfig =
	{
		"X-API-KEY": process.env.REACT_APP_TATUM_X_API_KEY
	};

	const generateNewWallet = async () =>
	{
		const response = await axios.get("https://api-eu1.tatum.io/v3/bitcoin/wallet", headerConfig);
		console.log("XPUB2 = ", localStorage.getItem("xpub"));

		setMnemonic(response.data.mnemonic);
		setXpub(response.data.xpub, localStorage.setItem("xpub", xpub));
	};

	return (
		<div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-gray-600 rounded-3xl">
			<Header category="API Call" title="Create Wallet" />

			<div className="mt-5">
				<button type="button"
					style={
						{
							backgroundColor: currentColor,
							color: "white",
							borderRadius: "10px"
						}}
					className={`text-5 p-3 hover:drop-shadow-xl`}
					onClick={generateNewWallet}
				>
					Click here to generate a new Wallet
				</button>
			</div>

			{
				mnemonic !== "" && <Information header="Mnemonic" content={mnemonic} />
			}

			{
				isEmptyOrNullString(xpub) && <Information header="XPUB" content={xpub} />
			}
		</div>
	);
};

export default CreateWallet;
