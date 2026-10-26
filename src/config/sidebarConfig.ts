import type { SidebarConfig } from "@/types/sidebarConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

export const sidebarConfig: SidebarConfig = withUserConfig("sidebar", {
	enable: true,
	arrangement: "single",
	side: "left",
	components: [
		{ type: "profile", enable: true, slot: "top" },
		{ type: "categories", enable: true, slot: "sticky", collapseAfter: 5 },
		{ type: "tags", enable: true, slot: "sticky", collapseAfter: 6 },
		{ type: "toc", enable: true, slot: "sticky", pages: ["post"] },
	],
});
