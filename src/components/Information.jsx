import React from 'react';

const Information = ({ header, content }) =>
{
	return (
		<div className="mt-10 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
			<p className="font-bold">
				{header}
			</p>
			<p className="text-sm">
				{content}
			</p>
		</div>
	);
};

export default Information;
