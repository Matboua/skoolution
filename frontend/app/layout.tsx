import "./globals.css";
import React from "react";

export const metadata = {
	title: "Skoolution",
	description:
		"Skoolution La plateforme qui s'adapte à vos besoins pour améliorer vos notes",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`font-inter antialiased`}>{children}</body>
		</html>
	);
}
