import {
	LinkPreset,
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/config";
import { siteConfig } from "./siteConfig";

// 根据页面开关动态生成导航栏配置
const getDynamicNavBarConfig = (): NavBarConfig => ({ links: [
  LinkPreset.Home,
  { name: "文章", url: "/archive/", icon: "material-symbols:article" },
  { name: "碎碎念", url: "/moments/", icon: "material-symbols:chat-bubble-outline" },
  { name: "相册", url: "/album/", icon: "material-symbols:photo-album-outline" },
  { name: "友链", url: "/friends/", icon: "material-symbols:group" },
  LinkPreset.About,
] });

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

/**
 * 导航栏「分类」下拉的生成规则。
 * 分类列表本身来自文章目录（src/content/文章/<分类>/），这里只控制「怎么显示」。
 * 外观沿用站内其它下拉（白底描边卡片），只有排列是多列网格。
 */
export const navCategoryConfig: {
	showCount: boolean;
	exclude: readonly string[];
} = {
	/** 下拉项右侧显示文章数（网格卡片上默认不显示） */
	showCount: false,
	/**
	 * 不展示的分类（写分类文件夹路径，多级用 /，按路径段前缀匹配）：
	 * "已弃用" → 连同其子文件夹一起隐藏，但 /categories/已弃用/ 页面本身仍可访问。
	 */
	exclude: ["已弃用"],
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
