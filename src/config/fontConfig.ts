import type { FontConfig, ResolvedFontOptions } from "../types/fontConfig.ts";
import { withUserConfig } from "../utils/config-overlay.ts";
import { resolveFontOptions as resolve } from "../utils/font-options.ts";

/** All font files are self-hosted; production builds subset the local sources. */
export const fontConfig: FontConfig = withUserConfig("font", {
	mode: "custom",
	fontFamilies: [
		{
			id: "outfit-body",
			family: "Outfit",
			role: "body",
			source: "local",
			variants: [
				{
					file: "src/assets/fonts/outfit-latin-400-normal.woff2",
					weight: 400,
					style: "normal",
				},
				{
					file: "src/assets/fonts/outfit-latin-500-normal.woff2",
					weight: 500,
					style: "normal",
				},
				{
					file: "src/assets/fonts/outfit-latin-700-normal.woff2",
					weight: 700,
					style: "normal",
				},
			],
			fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
			display: "swap",
			preload: true,
			licenseFile: "src/assets/fonts/OUTFIT-OFL.txt",
		},
		{
			id: "yozai-cjk",
			family: "Yozai Medium",
			role: "cjk",
			source: "local",
			variants: [
				{
					file: "src/assets/fonts/Yozai-Medium.ttf",
					weight: 500,
					style: "normal",
				},
			],
			fallback: ["system-ui", "sans-serif"],
			display: "swap",
			preload: true,
		},
	],
	subsetting: {
		enable: true,
		includeContent: true,
		includeI18n: true,
		includeConfig: true,
		includeCommon: true,
		allowRemoteText: false,
	},
	budget: {
		maxTotalBytes: 6 * 1024 * 1024,
		maxFamilyBytes: 4 * 1024 * 1024,
	},
});

export const resolvedFontOptions: ResolvedFontOptions = resolve(fontConfig);
export const resolveFontOptions: (config: FontConfig) => ResolvedFontOptions =
	resolve;
