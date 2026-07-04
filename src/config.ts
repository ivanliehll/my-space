import type {
	AnnouncementConfig,
	CommentConfig,
	ExpressiveCodeConfig,
	FooterConfig,
	FullscreenWallpaperConfig,
	LicenseConfig,
	MusicPlayerConfig,
	NavBarConfig,
	PermalinkConfig,
	ProfileConfig,
	RandomPostsConfig,
	RelatedPostsConfig,
	SakuraConfig,
	ShareConfig,
	SidebarLayoutConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

// 移除i18n导入以避免循环依赖

// 定义站点语言
const SITE_LANG = "zh_TW"; // ✨ 更改為繁體中文
const SITE_TIMEZONE = 8; //设置你的网站时区 from -12 to 12 default in UTC+8
export const siteConfig: SiteConfig = {
	title: "Yi-He's Space", // ✨ 你的網站標題
	subtitle: "自動化與機器人愛好者的數位基地", // ✨ 網站副標題
	siteURL: "https://effulgent-brigadeiros-24d0c4.netlify.app/", // ✨ 替換為你的 Netlify 網址
	siteStartDate: "2026-01-01", // 站点开始运行日期，用于站点统计组件计算运行天数

	timeZone: SITE_TIMEZONE,

	lang: SITE_LANG,

	themeColor: {
		hue: 215, // ✨ 調整為帶有科技感的「深邃藍/青色」
		fixed: false, // 对访问者隐藏主题色选择器
	},

	// 特色页面开关配置（关闭未使用的页面有助于提升 SEO，关闭后请记得在 navbarConfig 中移除对应链接）
	featurePages: {
		anime: false, // 暫時關閉不需要的頁面，聚焦在技術與生活
		diary: true, // 日记页面开关
		friends: true, // 友链页面开关
		projects: true, // 项目页面开关
		skills: true, // 技能页面开关
		timeline: true, // 时间线页面开关
		albums: false, 
		devices: false, 
	},

	// 顶栏标题配置
	navbarTitle: {
		mode: "text-icon",
		text: "星奈.Dev", // ✨ 頂欄左上角的名字
		icon: "assets/home/home.webp",
		logo: "assets/home/default-logo.webp",
	},

	// 页面自动缩放配置
	pageScaling: {
		enable: true, // 是否开启自动缩放
		targetWidth: 2000, // 目标宽度，低于此宽度时开始缩放
	},

	bangumi: {
		userId: "your-bangumi-id", 
		fetchOnDev: false, 
	},

	bilibili: {
		vmid: "your-bilibili-vmid", 
		fetchOnDev: false, 
		coverMirror: "", 
		useWebp: true, 
	},

	anime: {
		mode: "local", 
	},

	// 文章列表布局配置
	postListLayout: {
		defaultMode: "grid", // ✨ 預設改成超帥的「網格雙列佈局」！
		allowSwitch: true,
		categoryBar: {
			enable: true, 
		},
	},

	// 标签样式配置
	tagStyle: {
		useNewStyle: true, // ✨ 啟用懸停高亮的新樣式
	},

	// 壁纸模式配置
	wallpaperMode: {
		defaultMode: "banner",
		showModeSwitchOnMobile: "desktop",
	},

	banner: {
		// 支持单张图片或图片数组，当数组长度 > 1 时自动启用轮播
		src: {
			desktop: [
				"/assets/desktop-banner/1.webp",
				"/assets/desktop-banner/2.webp",
				"/assets/desktop-banner/3.webp",
				"/assets/desktop-banner/4.webp",
			], // 桌面横幅图片
			mobile: [
				"/assets/mobile-banner/1.webp",
				"/assets/mobile-banner/2.webp",
				"/assets/mobile-banner/3.webp",
				"/assets/mobile-banner/4.webp",
			], // 移动横幅图片
		}, // 使用本地横幅图片

		position: "center", // 等同于 object-position，仅支持 'top', 'center', 'bottom'。默认为 'center'

		carousel: {
			enable: true, // 为 true 时：为多张图片启用轮播。为 false 时：从数组中随机显示一张图片
			interval: 5, // 轮播间隔时间（秒）
		},

		waves: {
			enable: true, // 是否启用水波纹效果（注意：此功能性能开销较大）
			performanceMode: true, // ✨ 開啟性能模式，流暢度大幅提升
			mobileDisable: true, // ✨ 行動端禁用，防止手機發燙
		},

		imageApi: {
			enable: false, 
			url: "", 
		},

		homeText: {
			enable: true, 
			title: "Hello, World !", // ✨ 主頁橫幅超酷大標題

			subtitle: [
				"熱衷於用程式與硬體解決生活中的問題 🛠️",
				"專注於 ROS 2 機器人模擬與自動化控制 🤖",
				"保持好奇心，不斷探索技術的邊界 ✨",
				"這裡記錄了我的學習歷程與技術隨筆 📝",
			], // ✨ 你的主頁動態打字機宣言！
			typewriter: {
				enable: true, // 启用副标题打字机效果

				speed: 100, // 打字速度（毫秒）
				deleteSpeed: 50, // 删除速度（毫秒）
				pauseTime: 2500, // 完全显示后的暂停时间（毫秒）
			},
		},

		credit: {
			enable: false, 
			text: "Describe", 
			url: "", 
		},

		navbar: {
			transparentMode: "semifull", 
		},
	},
	toc: {
		enable: true, // 总开关，启用目录功能
		mobileTop: true, // 手机端顶部 TOC 按钮
		desktopSidebar: true, // 电脑端右侧边栏 TOC
		floating: true, // 悬浮 TOC 按钮
		depth: 2, // 目录深度
		useJapaneseBadge: false, // ✨ 改回使用 1, 2, 3 數字導覽，比較習慣
	},
	showCoverInContent: true, // 在文章内容页显示文章封面
	generateOgImages: false, 
	favicon: [],

	// 字体配置
	font: {
		asciiFont: {
			fontFamily: "ZenMaruGothic-Medium",
			fontWeight: "400",
			localFonts: ["ZenMaruGothic-Medium.ttf"],
			enableCompress: true, 
		},
		cjkFont: {
			fontFamily: "萝莉体 第二版",
			fontWeight: "500",
			localFonts: ["loli.ttf"],
			enableCompress: true, 
		},
	},
	showLastModified: true, // 控制"上次编辑"卡片显示的开关
	pageProgressBar: {
		enable: true, // 启用页面顶部进度条
		height: 3, 
		duration: 6000, 
	},

	thirdPartyAnalytics: {
		enable: false, 
		clarityId: "", 
	},
};
export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
	src: {
		desktop: [
			"/assets/desktop-banner/1.webp",
		], 
		mobile: [
			"/assets/mobile-banner/1.webp",
		], 
	}, 
	position: "center", 
	carousel: {
		enable: false, 
		interval: 5, 
	},
	zIndex: -1, 
	opacity: 0.8, 
	blur: 1, 
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: "專案與技能", // ✨ 整合選單
			url: "#",
			icon: "material-symbols:more-horiz",
			children: [
				{
					name: "我的專案",
					url: "/projects/",
					icon: "material-symbols:work",
				},
				{
					name: "核心技能",
					url: "/skills/",
					icon: "material-symbols:psychology",
				},
				{
					name: "時間線",
					url: "/timeline/",
					icon: "material-symbols:timeline",
				},
			],
		},
		{
			name: "關於我",
			url: "/content/",
			icon: "material-symbols:info",
			children: [
				{
					name: "自我介紹",
					url: "/about/",
					icon: "material-symbols:person",
				},
				{
					name: "隊友/朋友",
					url: "/friends/",
					icon: "material-symbols:group",
				},
			],
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/HINA.jpg", // ✨ 你的頭像路徑
	name: "星奈", // ✨ 你的名字
	bio: "大學生/ 自動化與機器人愛好者 🤖\n熱衷於 Maker DIY、ROS 2 與軟硬體整合整合開發。", // ✨ 個人特質簡介
	typewriter: {
		enable: true, 
		speed: 80, 
	},
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/ivanliehll", // ✨ 你的 GitHub
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

// Permalink 固定链接配置
export const permalinkConfig: PermalinkConfig = {
	enable: false, 
	format: "%postname%", 
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
	hideDuringThemeTransition: true,
};

export const commentConfig: CommentConfig = {
	enable: false, 
	system: "twikoo", 
	twikoo: {
		envId: "https://twikoo.vercel.app",
		lang: SITE_LANG,
	},
	giscus: {
		repo: "your-github-username/your-repo-name",
		repoId: "your-repo-id",
		category: "Announcements",
		categoryId: "your-category-id",
		mapping: "pathname",
		strict: "0",
		reactionsEnabled: "1",
		emitMetadata: "0",
		inputPosition: "top",
		theme: "preferred_color_scheme",
		lang: SITE_LANG,
		loading: "lazy",
	},
};

export const shareConfig: ShareConfig = {
	enable: true, 
};

export const announcementConfig: AnnouncementConfig = {
	title: "最新公告", // ✨ 公告欄標題
	content: "歡迎來到我的全新數位基地！", // ✨ 公告內容
	closable: true, 
	link: {
		enable: true, 
		text: "了解更多", 
		url: "/about/", 
		external: false, 
	},
};

export const musicPlayerConfig: MusicPlayerConfig = {
	enable: false, // ✨ 先預設關閉音樂播放器（避免因為原作者的歌單載入失敗導致網頁卡住），等你想放歌時我們再來開啟
	showFloatingPlayer: false, 
	floatingEntryMode: "fab", 
	mode: "local", 
	meting_api: "https://meting.mysqil.com/api?server=:server&type=:type&id=:id&auth=:auth&r=:r", 
	id: "14164869977", 
	server: "netease", 
	type: "playlist", 
};

export const footerConfig: FooterConfig = {
	enable: false, 
	customHtml: "", 
};

export const sidebarLayoutConfig: SidebarLayoutConfig = {
	properties: [
		{
			type: "profile",
			position: "top",
			class: "onload-animation",
			animationDelay: 0,
		},
		{
			type: "announcement",
			position: "top",
			class: "onload-animation",
			animationDelay: 50,
		},
		{
			type: "categories",
			position: "sticky",
			class: "onload-animation",
			animationDelay: 150,
			responsive: {
				collapseThreshold: 5,
			},
		},
		{
			type: "tags",
			position: "top",
			class: "onload-animation",
			animationDelay: 250,
			responsive: {
				collapseThreshold: 20,
			},
		},
		{
			type: "card-toc",
			position: "sticky",
			class: "onload-animation",
			animationDelay: 200,
		},
		{
			type: "site-stats",
			position: "top",
			class: "onload-animation",
			animationDelay: 200,
		},
		{
			type: "calendar",
			position: "top",
			class: "onload-animation",
			animationDelay: 250,
		},
	],

	// ✨ 微調側邊欄组件佈局，拿掉未開啟的音樂組件
	components: {
		left: ["profile", "announcement", "tags", "card-toc"],
		right: ["site-stats", "calendar", "categories"],
		drawer: [
			"profile",
			"announcement",
			"categories",
			"tags",
		],
	},

	defaultAnimation: {
		enable: true,
		baseDelay: 0,
		increment: 50,
	},

	responsive: {
		breakpoints: {
			mobile: 768,
			tablet: 1280,
			desktop: 1280,
		},
	},
};

export const sakuraConfig: SakuraConfig = {
	enable: false, // 櫻花特效
	sakuraNum: 21, 
	limitTimes: -1, 
	size: { min: 0.5, max: 1.1 },
	opacity: { min: 0.3, max: 0.9 },
	speed: {
		horizontal: { min: -1.7, max: -1.2 },
		vertical: { min: 1.5, max: 2.2 },
		rotation: 0.03, 
		fadeSpeed: 0.03, 
	},
	zIndex: 100, 
};

export const pioConfig: import("./types/config").PioConfig = {
	enable: false, // 看板娘
	models: ["/pio/models/pio/model.json"], 
	position: "left", 
	width: 280, 
	height: 250, 
	mode: "draggable", 
	hiddenOnMobile: true, 
	dialog: {
		welcome: "Welcome to Mizuki Website!", 
		touch: [
			"What are you doing?",
			"Stop touching me!",
			"HENTAI!",
			"Don't bully me like that!",
		], 
		home: "Click here to go back to homepage!", 
		skin: ["Want to see my new outfit?", "The new outfit looks great~"], 
		close: "QWQ See you next time~", 
		link: "https://github.com/matsuzaka-yuki/Mizuki", 
	},
};

export const relatedPostsConfig: RelatedPostsConfig = {
	enable: true,
	maxCount: 5,
};

export const randomPostsConfig: RandomPostsConfig = {
	enable: true,
	maxCount: 5,
};

export const widgetConfigs = {
	profile: profileConfig,
	announcement: announcementConfig,
	layout: sidebarLayoutConfig,
	sakura: sakuraConfig,
	fullscreenWallpaper: fullscreenWallpaperConfig,
	pio: pioConfig,
	share: shareConfig,
	relatedPosts: relatedPostsConfig,
	randomPosts: randomPostsConfig,
} as const;