enum Year {
  Freshman,
  Sophomore,
  Junior,
  Senior,
}

enum Quarter {
  Fall,
  Winter,
  Spring,
  Summer,
}

interface Image {
  name: string;
  description: string;
  width: number;
  height: number;
  src: string;
  thumbnailSrc: string;
}

interface Link {
  title: string;
  description: string;
  imageSrc: string;
  faviconSrc: string;
  domain: string;
  url: string;
}

interface Artifact {
  title: string;
  subtitle: string;
  year: Year;
  quarter: Quarter;
  text: string;
  images: Image[];
  Links: Link[];
  Embeds: string[];
}

/**
 * A map of artifact names to their metadata.
 */
type ArtifactMetas = Record<string, Artifact>;
