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
  name: string;
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
export type { ArtifactMeta, ArtifactMetas, ImageMeta, LinkMeta };
