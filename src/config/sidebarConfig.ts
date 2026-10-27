import type { SidebarConfig } from "@/types/sidebarConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

export const sidebarConfig: SidebarConfig = withUserConfig("sidebar", {
	enable: true,
	arrangement: "dual",
	side: "left",
	components: [
		{ type: "profile", enable: true, slot: "top" },
		{ type: "categories", enable: true, slot: "sticky", collapseAfter: 5 },
		{ type: "tags", enable: true, slot: "sticky", collapseAfter: 6 },
		{ type: "calendar", enable: true, slot: "top", column: "secondary" },
		{
			type: "toc",
			enable: true,
			slot: "sticky",
			column: "secondary",
			pages: ["post"],
		},
	],
});
