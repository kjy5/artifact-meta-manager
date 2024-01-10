enum Year {
  None = -1,
  Freshman,
  Sophomore,
  Junior,
  Senior,
}

enum Quarter {
  None = -1,
  Fall,
  Winter,
  Spring,
  Summer,
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
