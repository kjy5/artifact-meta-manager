enum Year {
	None = -1,
	Freshman = 0,
	Sophomore = 1,
	Junior = 2,
	Senior = 3,
}

enum Quarter {
	None = -1,
	Fall = 0,
	Winter = 1,
	Spring = 2,
	Summer = 3,
}

interface ImageMeta {
	title: string;
	description: string;
	width: number;
	height: number;
	src: string;
	thumbnailSrc: string;
}

interface LinkMeta {
	url: string;
	title: string;
	description: string;
	imageSrc: string;
	faviconSrc: string;
	domain: string;
}

interface LinkExtract {
	title: string;
	description: string;
	images: string[];
	sitename: string;
	favicon: string;
	duration: number;
	domain: string;
	url: string;
	source: string;
}

interface ArtifactMeta {
	title: string;
	subtitle: string;
	year: Year;
	quarter: Quarter;
	text: string;
	images: ImageMeta[];
	links: LinkMeta[];
	embeds: string[];
}

/**
 * A map of artifact names to their metadata.
 */
type ArtifactMetas = ArtifactMeta[];

export { Quarter, Year };
export type { ArtifactMeta, ArtifactMetas, ImageMeta, LinkMeta, LinkExtract };
