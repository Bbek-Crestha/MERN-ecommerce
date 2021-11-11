import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keyword }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keyword} />
		</Helmet>
	);
};

Meta.defaultProps = {
	title: "Smart Store",
	description: "Find genuine products at cheap price.",
	keyword: "electronics, buy electronics, cheap electronics, genuine",
};

export default Meta;
