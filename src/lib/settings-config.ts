// Predefined color palette with Japanese color names
export const colorOptions = [
  {
    name: "GOFUN",
    value: "#FFFFFB",
    bg: "bg-[#FFFFFB]",
    textColor: "text-[#FFFFFB]",
  },
  {
    name: "RURIKON",
    value: "#0B346E",
    bg: "bg-[#0B346E]",
    textColor: "text-[#0B346E]",
  },
  {
    name: "KOHAKU",
    value: "#CA7A2C",
    bg: "bg-[#CA7A2C]",
    textColor: "text-[#CA7A2C]",
  },
  {
    name: "FUJI",
    value: "#8B81C3",
    bg: "bg-[#8B81C3]",
    textColor: "text-[#8B81C3]",
  },
  {
    name: "SYOJYOHI",
    value: "#CC543A",
    bg: "bg-[#CC543A]",
    textColor: "text-[#CC543A]",
  },
  {
    name: "CHITOSEMIDORI",
    value: "#36563C",
    bg: "bg-[#36563C]",
    textColor: "text-[#36563C]",
  },
  {
    name: "TETSUKON",
    value: "#261E47",
    bg: "bg-[#261E47]",
    textColor: "text-[#261E47]",
  },
];

// Typography options - Updated to use DM Serif Display font family
export const fontOptions = [
  {
    name: "Noto Sans",
    value: "var(--font-noto-sans)",
    fontFamily: "text-[var(--font-noto-sans)]",
  },
  {
    name: "DM Serif Display",
    value: "var(--font-serif)",
    fontFamily: "text-[var(--font-serif)]",
  },
  {
    name: "Noto Sans Mono",
    value: "var(--font-noto-sans-mono)",
    fontFamily: "text-[var(--font-noto-sans-mono)]",
  },
];

export const fontSizeOptions = [
  { name: "S", value: "5rem" },
  { name: "M", value: "8rem" },
  { name: "L", value: "10rem" },
  { name: "XL", value: "16rem" },
  { name: "2XL", value: "min(30rem, 90vh)" },
];


// Scroll speed options
export const scrollSpeedOptions = [
  { name: "0.3x", value: "3" },
  { name: "0.5x", value: "5" },
  { name: "1x", value: "10" },
  { name: "1.5x", value: "15" },
  { name: "2x", value: "20" },
];

// Edge blur intensity range configuration
export const edgeBlurConfig = {
  min: 1,
  max: 20,
  step: 1,
  defaultValue: 4,
};

// Noise effect configuration
export const noiseConfig = {
  opacity: {
    min: 0.01,
    max: 0.3,
    step: 0.01,
    defaultValue: 0.1,
  },
  density: {
    min: 0.1,
    max: 0.6,
    step: 0.05,
    defaultValue: 0.3,
  },
};

// Text stroke width configuration
export const textStrokeConfig = {
  min: 1,
  max: 3,
  step: 0.5,
  defaultValue: 2,
};

// Image processing configuration
export const PREVIEW_IMAGE_QUALITY = 0.2;
export const BACKGROUND_IMAGE_QUALITY = 0.6;
