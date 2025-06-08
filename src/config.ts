import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "ASKiQ 的空间",
	subtitle: "爱好广泛的网友",
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 250, // 主题颜色的默认色调，从 0 到 360。例如，红色：0, 青色：200, 青色：250, 粉色：345。
		fixed: false, // 为访客隐藏主题颜色选择器
	},
	banner: {
		enable: true,
		src: "assets/images/理想的创作角色-Dity Pretty.png", // 相对于 /src 目录。如果以 “/” 开头，则相对于 /public 目录。
		position: "center", // 等效于对象位置，仅支持 “top”、“center” 和 “bottom”。默认为 “center”
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "理想的な作動角 | Dity Pretty #pixiv", // Credit text to be displayed
			url: "https://www.pixiv.net/artworks/111639598", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
		  src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		  theme: 'dark',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		  sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		}
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/noobcvfki/blog.github.com", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/头像.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "祈崎",
	bio: "啥都会，但是啥都学不精细的网友\n好想摸鱼，好想睡懒觉",
	links: [
		{
			name: "bilibili",
			icon: "fa6-brands:bilibili", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://space.bilibili.com/494737523",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://steamcommunity.com/id/baituzi233/",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/noobcvfki",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
