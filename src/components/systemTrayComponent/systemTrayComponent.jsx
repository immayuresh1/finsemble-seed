/*!
 * Copyright 2017 - 2020 by ChartIQ, Inc.
 * All rights reserved.
 */
import React from "react";
import ReactDOM from "react-dom";
import { FinsembleProvider } from "@chartiq/finsemble-ui/react/components/FinsembleProvider";
import { SystemTrayComponentShell } from "@chartiq/finsemble-ui/react/components/System";
import { Preferences } from "@chartiq/finsemble-ui/react/components/System";
import { SystemLog } from "@chartiq/finsemble-ui/react/components/System";
import { CentralLogger } from "@chartiq/finsemble-ui/react/components/System";
import { Documentation } from "@chartiq/finsemble-ui/react/components/System";
import { Restart } from "@chartiq/finsemble-ui/react/components/System";
import { Reset } from "@chartiq/finsemble-ui/react/components/System";
import { Quit } from "@chartiq/finsemble-ui/react/components/System";
import "@chartiq/finsemble-ui/react/assets/css/finsemble.css";
import "../../../assets/css/theme.css";

/**
 * This component displays on right-click in your application's system tray icon.
 * Feel free to add/remove content or react components.
 * The SystemTrayComponentShell will automatically adjust the height and width of the window as necessary to display its content.
 * This component will be hidden when it loses focus but will remain invisibly active.
 */
const SystemTrayComponent = () => (
	<SystemTrayComponentShell padding={{ width: 80 }}>
		<div className="menu menu-primary">
			<Preferences />
			<SystemLog />
			<CentralLogger />
			<Documentation />
			<Restart />
			<Reset />
			<Quit />
		</div>
	</SystemTrayComponentShell>
);

ReactDOM.render(
	<FinsembleProvider>
		<SystemTrayComponent />
	</FinsembleProvider>,
	document.getElementById("system-tray-component-wrapper")
);