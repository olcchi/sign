import { PresetType, ShareablePreset } from "@/types";

// Font mapping for backward compatibility with old presets
const FONT_MAPPING = {
  "var(--font-noto-serif)": "var(--font-serif)",
  "var(--font-dm-serif-display)": "var(--font-serif)",
  "Noto Serif": "var(--font-serif)",
} as const;

// Map old font values to new ones for backward compatibility
function mapFontFamily(fontFamily: string): string {
  return FONT_MAPPING[fontFamily as keyof typeof FONT_MAPPING] || fontFamily;
}

// Default values for preset properties to ensure consistency
const DEFAULT_PRESET_VALUES = {
  noiseEnabled: false,
  noiseOpacity: 0.1,
  noiseDensity: 0.5,
  noiseAnimated: false,
  textStrokeEnabled: false,
  textStrokeWidth: 1,
  textStrokeColor: "#000000",
  textFillEnabled: true,
} as const;

// Normalize and prepare preset for sharing/saving
export function presetToShareable(preset: PresetType): ShareablePreset {
  return normalizePreset(preset);
}

// Process shared preset for local use
export function shareableToPreset(shareable: ShareablePreset): PresetType {
  return normalizePreset(shareable);
}

// Normalize preset with default values to ensure consistency
export function normalizePreset(preset: Partial<PresetType>): PresetType {
  return {
    id: preset.id || '',
    name: preset.name || '',
    text: preset.text || '',
    textColor: preset.textColor || '#FFFFFF',
    fontFamily: mapFontFamily(preset.fontFamily || 'var(--font-serif)'),
    fontSize: preset.fontSize || '2xl',
    fontWeight: preset.fontWeight || '400',
    scrollSpeed: preset.scrollSpeed ?? 50,
    edgeBlurEnabled: preset.edgeBlurEnabled ?? false,
    edgeBlurIntensity: preset.edgeBlurIntensity ?? 10,
    shinyTextEnabled: preset.shinyTextEnabled ?? false,
    noiseEnabled: preset.noiseEnabled ?? DEFAULT_PRESET_VALUES.noiseEnabled,
    noiseOpacity: preset.noiseOpacity ?? DEFAULT_PRESET_VALUES.noiseOpacity,
    noiseDensity: preset.noiseDensity ?? DEFAULT_PRESET_VALUES.noiseDensity,
    noiseAnimated: preset.noiseAnimated ?? DEFAULT_PRESET_VALUES.noiseAnimated,
    textStrokeEnabled: preset.textStrokeEnabled ?? DEFAULT_PRESET_VALUES.textStrokeEnabled,
    textStrokeWidth: preset.textStrokeWidth ?? DEFAULT_PRESET_VALUES.textStrokeWidth,
    textStrokeColor: preset.textStrokeColor ?? DEFAULT_PRESET_VALUES.textStrokeColor,
    textFillEnabled: preset.textFillEnabled ?? DEFAULT_PRESET_VALUES.textFillEnabled,
  };
}

// Validate preset data integrity
export function validatePreset(preset: any): preset is PresetType {
  return (
    typeof preset === 'object' &&
    preset !== null &&
    typeof preset.id === 'string' &&
    typeof preset.name === 'string' &&
    typeof preset.text === 'string' &&
    typeof preset.textColor === 'string' &&
    typeof preset.fontFamily === 'string' &&
    typeof preset.fontSize === 'string' &&
    typeof preset.fontWeight === 'string' &&
    typeof preset.scrollSpeed === 'number' &&
    typeof preset.edgeBlurEnabled === 'boolean' &&
    typeof preset.edgeBlurIntensity === 'number' &&
    typeof preset.shinyTextEnabled === 'boolean'
  );
} 