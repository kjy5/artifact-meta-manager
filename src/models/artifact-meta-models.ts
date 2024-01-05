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

interface ArtifactMeta {
  title: string;
  subtitle: string;
  year: Year;
  quarter: Quarter;
  text: string;
  images: Image[];
  Links: string[];
  Embeds: string[];
}
