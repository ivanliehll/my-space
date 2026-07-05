import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.webp", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "星奈",
	bio: "沉迷於自動化和人工智慧的宅宅",
	typewriter: {
		enable: true, // 启用个人简介打字机效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		// {
		// 	name: "Gitee",
		// 	icon: "mdi:git",
		// 	url: "https://gitee.com/matsuzakayuki",
		// },
		{  name: "Instagram",
           icon: "fa7-brands:instagram",
		   url: "https://www.instagram.com/ivanliehll/",
		},
		{  name: "Youtube",
           icon: "fa7-brands:youtube",
		   url: "https://www.youtube.com/@star-hoshino",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/ivanliehll",
		},
		// {
		// 	name: "Codeberg",
		// 	icon: "simple-icons:codeberg",
		// 	url: "https://codeberg.org",
		// },
		{
			name: "Discord",
			icon: "fa7-brands:discord",
			url: "https://discord.gg/AZYa9bC7Jk",
		},
	],
};
