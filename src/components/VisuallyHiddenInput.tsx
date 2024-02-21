import { styled } from "@mui/material";

const VisuallyHiddenInput = styled("input", { shouldForwardProp: () => true })({
	clipPath: "inset(50%)",
	height: 1,
	overflow: "hidden",
	position: "absolute",
	bottom: 0,
	left: 0,
	whiteSpace: "nowrap",
	width: 1,
});

declare module "react" {
	interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
		// extends React's HTMLAttributes
		directory?: string;
		webkitdirectory?: string;
	}
}

export default VisuallyHiddenInput;
