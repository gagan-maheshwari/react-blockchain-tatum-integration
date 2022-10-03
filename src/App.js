import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Sidebar, ThemeSettings } from "./components";
import { Blockchains, CreateWallet } from "./pages";

import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";
import EscapeHideWrapper from './utility/component/ESCHideWrapper';

const App = () =>
{
	const { menuActive, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

	return (
		<div className={currentMode === "Dark" ? "dark" : ""}>
			<BrowserRouter>
				<div className="flex relative dark:bg-main-dark-bg">
					<div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
						<TooltipComponent content="Settings" position="Top">
							<button
								type="button"
								onClick={() => setThemeSettings(true)}
								className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
								style={{ background: currentColor, borderRadius: "50%" }}
							>
								<FiSettings />
							</button>
						</TooltipComponent>
					</div>

					{menuActive ?
						(
							<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
								<Sidebar />
							</div>
						) :
						(
							<div className="w-0 dark:bg-secondary-dark-bg">
								<Sidebar />
							</div>
						)}

					<div className=
						{
							`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full
							${menuActive ?
								"md: ml-72" :
								"flex-2"}`
						}>
						<div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
							<Navbar />
						</div>

						<div>
							{themeSettings &&
								<EscapeHideWrapper component="settings">
									<ThemeSettings />
								</EscapeHideWrapper>}

							<Routes>
								{/* Dashboard */}
								<Route path="/" element={<Blockchains />} />
								<Route path="/blockchains" element={<Blockchains />} />

								{/* API Call */}
								<Route path="/createwallet" element={<CreateWallet />} />
							</Routes>
						</div>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
