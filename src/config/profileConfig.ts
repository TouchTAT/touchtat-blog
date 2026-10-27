import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/profile/botan.jpg",
	name: "TouchTAT",
	bio: "个人简介待完善。这里先收集生活、照片和日常想法。",
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/TouchTAT",
		},
	],
});
