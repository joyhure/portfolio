import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './TimelineComponent';
import 'react-beautiful-timeline/dist/style.css';

const TimelineApp = () => {
	React.useEffect(() => {
		const container = document.getElementById('timeline-root');
		if (container) {
			const root = createRoot(container);
			root.render(
				<StrictMode>
					<App name="StackBlitz" />
				</StrictMode>,
			);
		} else {
			console.error('Failed to find the app container element.');
		}
	}, []);

	return null;
};

export default TimelineApp;
