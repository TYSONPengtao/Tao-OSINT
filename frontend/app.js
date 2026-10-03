const LANGUAGE_KEY = "tao-osint-language";
const FAVORITES_KEY = "tao-osint-favorites";

const CATEGORIES = [
  ["all", "全部", "All"],
  ["research-resources", "研究资源", "Research Resources"],
  ["image-video", "图片与视频", "Image & Video"],
  ["geolocation-maps", "地理定位与地图", "Geolocation & Maps"],
  ["metadata-files", "元数据与文件", "Metadata & Files"],
  ["archives", "网页存档", "Archives"],
  ["cyber-url-analysis", "URL / 安全分析", "Cyber / URL Analysis"],
  ["tao-projects", "TAO 项目", "TAO Projects"]
];

const TOOLS = [
  {
    id: "bellingcat-toolkit",
    name: "Bellingcat Online Investigations Toolkit",
    category: "research-resources",
    type: "external",
    interaction: "external",
    url: "https://bellingcat.gitbook.io/toolkit/",
    cost: "free",
    accountRequired: false,
    platform: ["web"],
    tags: ["tool-directory", "research", "learning"],
    description: {
      "zh-CN": "分类整理大量开放来源调查工具、要求、局限与使用指南的研究工具箱。",
      en: "A curated open-source research toolkit covering tools, requirements, limitations and guides."
    }
  },
  {
    id: "tineye",
    name: "TinEye",
    category: "image-video",
    type: "external",
    interaction: "external",
    url: "https://tineye.com/",
    cost: "partially-free",
    accountRequired: false,
    platform: ["web"],
    tags: ["reverse-image", "verification"],
    description: {
      "zh-CN": "反向图片搜索服务，用于寻找图片的早期版本、相似版本和修改版本。",
      en: "Reverse image search for finding earlier, matching or modified versions of an image."
    }
  },
  {
    id: "exiftool",
    name: "ExifTool",
    category: "metadata-files",
    type: "external",
    interaction: "external",
    url: "https://exiftool.org/",
    cost: "free",
    accountRequired: false,
    platform: ["windows", "macos", "linux"],
    tags: ["metadata", "exif", "files"],
    description: {
      "zh-CN": "强大的文件元数据读取与处理工具，支持大量图片、文档和媒体格式。",
      en: "Powerful metadata reading and processing across a large range of image, document and media formats."
    }
  },
  {
    id: "openstreetmap",
    name: "OpenStreetMap",
    category: "geolocation-maps",
    type: "external",
    interaction: "external",
    url: "https://www.openstreetmap.org/",
    cost: "free",
    accountRequired: false,
    platform: ["web"],
    tags: ["maps", "geolocation", "open-data"],
    description: {
      "zh-CN": "开放地图数据平台，可用于道路、地点、地理环境和基础空间信息对照。",
      en: "Open map data for roads, places, geographic context and spatial comparison."
    }
  },
  {
    id: "suncalc",
    name: "SunCalc",
    category: "geolocation-maps",
    type: "external",
    interaction: "external",
    url: "https://www.suncalc.org/",
    cost: "free",
    accountRequired: false,
    platform: ["web"],
    tags: ["sun", "shadow", "geolocation", "astronomy"],
    description: {
      "zh-CN": "根据地点和时间查看太阳方位、高度与阴影信息，适合做时间/地点一致性分析。",
      en: "Explore solar azimuth, altitude and shadow context for a place and time."
    }
  },
  {
    id: "wayback-machine",
    name: "Internet Archive Wayback Machine",
    category: "archives",
    type: "external",
    interaction: "external",
    url: "https://web.archive.org/",
    cost: "free",
    accountRequired: false,
    platform: ["web"],
    tags: ["archive", "history", "websites"],
    description: {
      "zh-CN": "查看网页历史快照，适合追踪网站内容变化和过去公开页面。",
      en: "View historical web captures to research past public pages and website changes."
    }
  },
  {
    id: "urlscan",
    name: "urlscan.io",
    category: "cyber-url-analysis",
    type: "external",
    interaction: "external",
    url: "https://urlscan.io/",
    cost: "partially-free",
    accountRequired: false,
    platform: ["web", "api"],
    tags: ["url", "website", "screenshot", "infrastructure"],
    description: {
      "zh-CN": "分析网站加载行为、资源、截图和相关公开基础设施信息。",
      en: "Inspect website behavior, resources, screenshots and related public infrastructure context."
    }
  },
  {
    id: "virustotal",
    name: "VirusTotal",
    category: "cyber-url-analysis",
    type: "external",
    interaction: "external",
    url: "https://www.virustotal.com/",
    cost: "partially-free",
    accountRequired: false,
    platform: ["web", "api"],
    tags: ["url", "files", "domains", "security"],
    description: {
      "zh-CN": "针对文件、URL、域名等对象提供多源安全检测与公开威胁情报上下文。",
      en: "Multi-source analysis and public threat-intelligence context for files, URLs and domains."
    }
  },
  {
    id: "photo-stargazing-positioning",
    name: "Photo Stargazing Positioning",
    category: "tao-projects",
    type: "tao-optimized",
    interaction: "integrated",
    url: "../projects/photo-stargazing-positioning/web/index.html",
    cost: "free",
    accountRequired: false,
    platform: ["web", "python"],
    tags: ["astronomy", "image", "geolocation", "stars", "tao"],
    description: {
      "zh-CN": "TAO 优化的星空照片定位辅助工具，通过恒星几何关系生成候选位置并进行聚类。",
      en: "TAO-optimized night-sky photo positioning aid using stellar geometry and candidate clustering."
    }
  }
];

const I18N = {
  "zh-CN": {
    "hero.eyebrow": "OSINT 工具聚合 · 陈列 · 收藏",
    "hero.line1": "把有用的 OSINT 工具",
    "hero.line2": "放在一个地方。",
    "hero.description": "以收藏、分类、搜索和快速跳转为主。大多数工具链接到官方入口，只有少量 TAO 精选项目可直接使用。",
    "stats.collected": "已收录", "stats.tools": "工具", "stats.categories": "分类", "stats.groups": "类别", "stats.integrated": "可直接使用", "stats.taoTools": "TAO 工具",
    "filters.category": "分类", "filters.mode": "使用方式", "filters.cost": "费用", "filters.reset": "重置",
    "interaction.external": "外部工具", "interaction.integrated": "内置工具",
    "cost.free": "免费", "cost.partiallyFree": "部分免费", "cost.paid": "付费",
    "search.placeholder": "搜索工具、用途、标签…",
    "favorites.title": "收藏",
    "catalog.kicker": "精选工具集合",
    "catalog.title": "工具库",
    "empty.title": "没有找到匹配工具",
    "empty.text": "尝试更换关键词、分类或筛选条件。",
    "principles.collect.title": "收藏优先", "principles.collect.text": "成熟工具优先收录和跳转，不重复造轮子。",
    "principles.organize.title": "组织清晰", "principles.organize.text": "分类、标签、费用、平台和限制一眼可见。",
    "principles.integrate.title": "少量内置", "principles.integrate.text": "只有真正值得维护的 TAO 工具才直接集成。",
    "footer.tagline": "精选工具，清晰说明，快速访问。",
    "count.one": "显示 {shown} / {total} 个工具",
    "launch.external": "打开官方工具 ↗", "launch.integrated": "直接使用 →",
    "badge.external": "外部", "badge.integrated": "内置", "badge.taoOptimized": "TAO 优化",
    "account.no": "无需账号", "account.yes": "需要账号"
  },
  en: {
    "hero.eyebrow": "OSINT COLLECTION · SHOWCASE · BOOKMARKS",
    "hero.line1": "Useful OSINT tools,",
    "hero.line2": "all in one place.",
    "hero.description": "Built around collection, categorization, search and fast access. Most entries open the official tool; only a small number of selected TAO projects run directly inside the platform.",
    "stats.collected": "Collected", "stats.tools": "tools", "stats.categories": "Categories", "stats.groups": "groups", "stats.integrated": "Direct use", "stats.taoTools": "TAO tools",
    "filters.category": "Category", "filters.mode": "Interaction", "filters.cost": "Cost", "filters.reset": "Reset",
    "interaction.external": "External tools", "interaction.integrated": "Integrated tools",
    "cost.free": "Free", "cost.partiallyFree": "Partially free", "cost.paid": "Paid",
    "search.placeholder": "Search tools, use cases or tags…",
    "favorites.title": "Favorites",
    "catalog.kicker": "CURATED COLLECTION",
    "catalog.title": "Tool library",
    "empty.title": "No matching tools",
    "empty.text": "Try another keyword, category or filter.",
    "principles.collect.title": "Collect first", "principles.collect.text": "Prefer collecting and linking mature tools instead of rebuilding them.",
    "principles.organize.title": "Clear structure", "principles.organize.text": "Category, tags, cost, platform and limitations should be easy to scan.",
    "principles.integrate.title": "Integrate selectively", "principles.integrate.text": "Only TAO tools worth maintaining should run directly inside the platform.",
    "footer.tagline": "Curated tools. Clear context. Fast access.",
    "count.one": "Showing {shown} of {total} tools",
    "launch.external": "Open official tool ↗", "launch.integrated": "Use directly →",
    "badge.external": "External", "badge.integrated": "Integrated", "badge.taoOptimized": "TAO Optimized",
    "account.no": "No account", "account.yes": "Account required"
  }
};

const $ = (id) => document.getElementById(id);
let language = loadSetting(LANGUAGE_KEY, "zh-CN");
let selectedCategory = "all";
let favoritesOnly = false;
let favorites = new Set(loadJSON(FAVORITES_KEY, []));
let searchTerm = "";

function loadSetting(key, fallback) {
  try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
}
function loadJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); } catch { return fallback; }
}
function saveSetting(key, value) {
  try { localStorage.setItem(key, value); } catch {}
}
function saveFavorites() {
  try { localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites])); } catch {}
}
function t(key) { return I18N[language]?.[key] ?? I18N["zh-CN"][key] ?? key; }
function categoryLabel(id) {
  const item = CATEGORIES.find(([key]) => key === id);
  return item ? (language === "zh-CN" ? item[1] : item[2]) : id;
}
function costLabel(cost) {
  return cost === "free" ? t("cost.free") : cost === "partially-free" ? t("cost.partiallyFree") : t("cost.paid");
}

function activeFilterValues(type) {
  return [...document.querySelectorAll(`[data-filter="${type}"]:checked`)].map((node) => node.value);
}

function filteredTools() {
  const interaction = activeFilterValues("interaction");
  const costs = activeFilterValues("cost");
  const query = searchTerm.trim().toLowerCase();

  return TOOLS.filter((tool) => {
    if (selectedCategory !== "all" && tool.category !== selectedCategory) return false;
    if (!interaction.includes(tool.interaction)) return false;
    if (!costs.includes(tool.cost)) return false;
    if (favoritesOnly && !favorites.has(tool.id)) return false;

    if (!query) return true;
    const haystack = [
      tool.name,
      tool.description["zh-CN"],
      tool.description.en,
      tool.category,
      ...tool.tags,
      ...tool.platform
    ].join(" ").toLowerCase();
    return haystack.includes(query);
  });
}

function renderCategories() {
  const target = $("category-list");
  target.innerHTML = "";
  for (const [id] of CATEGORIES) {
    const count = id === "all" ? TOOLS.length : TOOLS.filter((tool) => tool.category === id).length;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-button" + (selectedCategory === id ? " active" : "");
    button.innerHTML = `<span>${categoryLabel(id)}</span><small>${count}</small>`;
    button.addEventListener("click", () => {
      selectedCategory = id;
      render();
    });
    target.appendChild(button);
  }
}

function toolCard(tool) {
  const card = document.createElement("article");
  card.className = "tool-card";

  const favorite = favorites.has(tool.id);
  const launchText = tool.interaction === "integrated" ? t("launch.integrated") : t("launch.external");

  card.innerHTML = `
    <div class="tool-card-top">
      <span class="tool-category">${categoryLabel(tool.category)}</span>
      <button class="favorite-button ${favorite ? "active" : ""}" type="button" aria-label="${t("favorites.title")}">${favorite ? "★" : "☆"}</button>
    </div>
    <h3>${tool.name}</h3>
    <p class="tool-description">${tool.description[language]}</p>
    <div class="tool-badges">
      <span class="tool-badge ${tool.interaction === "integrated" ? "integrated" : ""}">${tool.interaction === "integrated" ? t("badge.integrated") : t("badge.external")}</span>
      ${tool.type === "tao-optimized" ? `<span class="tool-badge integrated">${t("badge.taoOptimized")}</span>` : ""}
      <span class="tool-badge">${costLabel(tool.cost)}</span>
    </div>
    <div class="tool-tags">${tool.tags.slice(0, 4).map((tag) => `<span>#${tag}</span>`).join("")}</div>
    <div class="tool-card-footer">
      <div class="tool-meta">${tool.platform.join(" · ")} · ${tool.accountRequired ? t("account.yes") : t("account.no")}</div>
      <a class="launch-link" href="${tool.url}" ${tool.interaction === "external" ? 'target="_blank" rel="noreferrer"' : ""}>${launchText}</a>
    </div>
  `;

  card.querySelector(".favorite-button").addEventListener("click", () => {
    if (favorites.has(tool.id)) favorites.delete(tool.id);
    else favorites.add(tool.id);
    saveFavorites();
    render();
  });

  return card;
}

function renderTools() {
  const grid = $("tool-grid");
  const items = filteredTools();
  grid.innerHTML = "";
  items.forEach((tool) => grid.appendChild(toolCard(tool)));

  $("empty-state").hidden = items.length !== 0;
  $("result-count").textContent = t("count.one")
    .replace("{shown}", items.length)
    .replace("{total}", TOOLS.length);
}

function renderStats() {
  $("stat-tools").textContent = TOOLS.length;
  $("stat-categories").textContent = new Set(TOOLS.map((tool) => tool.category)).size;
  $("stat-integrated").textContent = TOOLS.filter((tool) => tool.interaction === "integrated").length;
  $("favorite-count").textContent = favorites.size;
}

function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

function render() {
  applyLanguage();
  renderCategories();
  renderStats();
  renderTools();
  $("favorites-toggle").classList.toggle("active", favoritesOnly);
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    language = button.dataset.language;
    saveSetting(LANGUAGE_KEY, language);
    render();
  });
});

$("search-input").addEventListener("input", (event) => {
  searchTerm = event.target.value;
  renderTools();
});

document.querySelectorAll("[data-filter]").forEach((input) => {
  input.addEventListener("change", renderTools);
});

$("favorites-toggle").addEventListener("click", () => {
  favoritesOnly = !favoritesOnly;
  render();
});

$("clear-filters").addEventListener("click", () => {
  selectedCategory = "all";
  favoritesOnly = false;
  searchTerm = "";
  $("search-input").value = "";
  document.querySelectorAll("[data-filter]").forEach((input) => { input.checked = true; });
  render();
});

render();
