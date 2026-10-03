const LANGUAGE_KEY = "tao-osint-language";
const FAVORITES_KEY = "tao-osint-favorites";

const CATEGORIES = [
  [
    "all",
    "全部",
    "All"
  ],
  [
    "search-discovery",
    "搜索与高级搜索",
    "Search & Discovery"
  ],
  [
    "username-social",
    "用户名与社交平台",
    "Username & Social"
  ],
  [
    "image-video",
    "图片与视频",
    "Image & Video"
  ],
  [
    "video-verification",
    "视频验证",
    "Video Verification"
  ],
  [
    "geolocation-maps",
    "地理定位与地图",
    "Geolocation & Maps"
  ],
  [
    "satellite-imagery",
    "卫星影像",
    "Satellite Imagery"
  ],
  [
    "metadata-files",
    "元数据与文件",
    "Metadata & Files"
  ],
  [
    "ocr-translation",
    "OCR 与翻译",
    "OCR & Translation"
  ],
  [
    "archives",
    "网页存档",
    "Archives"
  ],
  [
    "web-domains",
    "域名 / DNS / WHOIS",
    "Domains / DNS / WHOIS"
  ],
  [
    "cyber-url-analysis",
    "URL / 安全分析",
    "Cyber / URL Analysis"
  ],
  [
    "companies-organizations",
    "企业与组织",
    "Companies & Organizations"
  ],
  [
    "public-datasets",
    "公开数据集",
    "Public Datasets"
  ],
  [
    "transport-tracking",
    "航班与船舶",
    "Flights & Vessels"
  ],
  [
    "code-search",
    "GitHub / 代码搜索",
    "Code Search"
  ],
  [
    "dark-web-indexes",
    "暗网公开索引",
    "Public Dark-Web Indexes"
  ],
  [
    "contact-public-info",
    "电话 / 邮箱公开信息",
    "Public Contact Info"
  ],
  [
    "ai-research",
    "AI 辅助研究",
    "AI-Assisted Research"
  ],
  [
    "verification",
    "验证",
    "Verification"
  ],
  [
    "research-resources",
    "研究资源",
    "Research Resources"
  ],
  [
    "tao-projects",
    "TAO 项目",
    "TAO Projects"
  ]
];


const CATEGORY_ICONS = {
  "all": '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  "search-discovery": '<circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/>',
  "username-social": '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c.8-4 3.1-6 7-6s6.2 2 7 6"/>',
  "image-video": '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m6 16 4-4 3 3 2-2 3 3"/><circle cx="9" cy="9" r="1.5"/>',
  "video-verification": '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m10 9 5 3-5 3Z"/><path d="m16.5 17 1.5 1.5 3-3"/>',
  "geolocation-maps": '<path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/>',
  "satellite-imagery": '<path d="M5 19 19 5"/><rect x="8" y="8" width="8" height="8" rx="2" transform="rotate(-45 12 12)"/><path d="m4 8 3 1m9 8 1 3m3-4-3-1M8 4 9 7"/>',
  "metadata-files": '<path d="M7 3h7l4 4v14H7Z"/><path d="M14 3v5h5M10 12h5m-5 4h5"/>',
  "ocr-translation": '<path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4"/><path d="M8 10h8m-8 4h5"/>',
  "archives": '<path d="M4 7h16v13H4Z"/><path d="M3 4h18v4H3Z"/><path d="M9 12h6"/>',
  "web-domains": '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21M12 3C9.5 5.6 8.2 8.6 8.2 12S9.5 18.4 12 21"/>',
  "cyber-url-analysis": '<path d="M12 3 19 6v5c0 4.7-2.8 7.8-7 10-4.2-2.2-7-5.3-7-10V6Z"/><path d="m9 12 2 2 4-4"/>',
  "companies-organizations": '<path d="M5 21V7l7-4 7 4v14M9 10h2m2 0h2m-6 4h2m2 0h2m-6 4h6"/>',
  "public-datasets": '<ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
  "transport-tracking": '<path d="m3 13 7-2 3-7 2 1-1 6 5 1 2 2-7 1-3 5-2-1 1-4-6 1Z"/>',
  "code-search": '<path d="m9 7-5 5 5 5M15 7l5 5-5 5M13 5l-2 14"/>',
  "dark-web-indexes": '<path d="M12 3c4 2.2 7 5 7 9s-3 6.8-7 9c-4-2.2-7-5-7-9s3-6.8 7-9Z"/><path d="M9 12h6M12 8v8"/>',
  "contact-public-info": '<circle cx="12" cy="12" r="9"/><path d="M16 12a4 4 0 1 1-1.2-2.8V15c0 1.1 1.8 1.1 2.5.2"/>',
  "ai-research": '<path d="m12 3 1.3 4.2L17 9l-3.7 1.8L12 15l-1.3-4.2L7 9l3.7-1.8ZM18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8Z"/>',
  "verification": '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/>',
  "research-resources": '<path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22ZM20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22Z"/>',
  "tao-projects": '<path d="M9 3h6M10 3v5l-5 9a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 17l-5-9V3"/><path d="M8 14h8"/>'
};

function categoryIcon(id, extraClass = "") {
  const body = CATEGORY_ICONS[id] || CATEGORY_ICONS.all;
  return `<span class="category-icon ${extraClass}" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round">${body}</svg></span>`;
}

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
    lastReviewed: "2026-10-04",
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
    lastReviewed: "2026-10-04",
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
    lastReviewed: "2026-10-04",
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
    lastReviewed: "2026-10-04",
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
    lastReviewed: "2026-10-04",
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
    lastReviewed: "2026-10-04",
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
    lastReviewed: "2026-10-04",
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
    lastReviewed: "2026-10-04",
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
    lastReviewed: "2026-10-04",
    description: {
      "zh-CN": "TAO 优化的星空照片定位辅助工具，通过恒星几何关系生成候选位置并进行聚类。",
      en: "TAO-optimized night-sky photo positioning aid using stellar geometry and candidate clustering."
    }
  },
  {
    "id": "google-advanced-search",
    "name": "Google Advanced Search",
    "category": "search-discovery",
    "type": "external",
    "interaction": "external",
    "url": "https://www.google.com/advanced_search",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "web"
    ],
    "tags": [
      "search",
      "operators",
      "advanced-search"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "Google 官方高级搜索页面，可按精确短语、排除词、站点、文件类型、时间、语言等条件缩小公开网页搜索范围。",
      "en": "Google's official advanced search interface for narrowing public web results by exact phrases, exclusions, site, file type, date, language and more."
    }
  },
  {
    "id": "bing",
    "name": "Microsoft Bing",
    "category": "search-discovery",
    "type": "external",
    "interaction": "external",
    "url": "https://www.bing.com/",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "web"
    ],
    "tags": [
      "search",
      "web",
      "images"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "通用网页与图片搜索引擎，可作为与 Google 不同索引和排序结果的交叉搜索入口。",
      "en": "General web and image search useful as a second index and ranking source alongside Google."
    }
  },
  {
    "id": "duckduckgo",
    "name": "DuckDuckGo",
    "category": "search-discovery",
    "type": "external",
    "interaction": "external",
    "url": "https://duckduckgo.com/",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "web"
    ],
    "tags": [
      "search",
      "privacy",
      "web"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "注重隐私的网页搜索引擎，适合作为额外搜索索引和快速网页发现入口。",
      "en": "Privacy-focused web search engine useful as an additional discovery index."
    }
  },
  {
    "id": "whatsmyname",
    "name": "WhatsMyName",
    "category": "username-social",
    "type": "external",
    "interaction": "external",
    "url": "https://whatsmyname.app/",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "web"
    ],
    "tags": [
      "username",
      "social",
      "profiles"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "基于社区维护数据集，在大量公开网站中检查用户名是否存在；用户名命中不等于身份确认。",
      "en": "Checks whether a username exists across many public sites using a community-maintained dataset; a username match does not confirm identity."
    }
  },
  {
    "id": "sherlock",
    "name": "Sherlock",
    "category": "username-social",
    "type": "external",
    "interaction": "external",
    "url": "https://github.com/sherlock-project/sherlock",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "windows",
      "macos",
      "linux",
      "python"
    ],
    "tags": [
      "username",
      "social",
      "open-source"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "开源用户名枚举工具，可检查同一公开用户名在多个社交与网站服务中的存在情况。",
      "en": "Open-source username enumeration tool for checking the presence of a public handle across many services."
    }
  },
  {
    "id": "icann-lookup",
    "name": "ICANN Lookup",
    "category": "web-domains",
    "type": "external",
    "interaction": "external",
    "url": "https://lookup.icann.org/",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "web"
    ],
    "tags": [
      "whois",
      "rdap",
      "domain",
      "asn"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "ICANN 官方注册数据查询入口，用于查询公开可见的域名、IP 网络或 ASN 注册数据。",
      "en": "ICANN's official lookup interface for publicly available domain, IP network and ASN registration data."
    }
  },
  {
    "id": "dnsdumpster",
    "name": "DNSDumpster",
    "category": "web-domains",
    "type": "external",
    "interaction": "external",
    "url": "https://dnsdumpster.com/",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "web"
    ],
    "tags": [
      "dns",
      "domain",
      "hosts",
      "research"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "面向网络研究的 DNS 公开记录查询工具，可帮助理解与域名关联的可见主机和 DNS 结构。",
      "en": "DNS research tool for exploring publicly visible records and hosts associated with a domain."
    }
  },
  {
    "id": "crt-sh",
    "name": "crt.sh",
    "category": "web-domains",
    "type": "external",
    "interaction": "external",
    "url": "https://crt.sh/",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "web"
    ],
    "tags": [
      "certificates",
      "certificate-transparency",
      "domains"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "Certificate Transparency 证书搜索工具，可按域名、组织、证书指纹等查询公开证书记录。",
      "en": "Certificate Transparency search for public certificate records by domain, organization, fingerprint and related identifiers."
    }
  },
  {
    "id": "securitytrails",
    "name": "SecurityTrails",
    "category": "web-domains",
    "type": "external",
    "interaction": "external",
    "url": "https://securitytrails.com/",
    "cost": "partially-free",
    "accountRequired": true,
    "platform": [
      "web",
      "api"
    ],
    "tags": [
      "dns",
      "whois",
      "ip",
      "domain"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "提供 DNS、WHOIS、IP 和公司相关公开基础设施数据的查询与 API 服务。",
      "en": "Web and API access to DNS, WHOIS, IP and organization-related infrastructure data."
    }
  },
  {
    "id": "opencorporates",
    "name": "OpenCorporates",
    "category": "companies-organizations",
    "type": "external",
    "interaction": "external",
    "url": "https://opencorporates.com/",
    "cost": "partially-free",
    "accountRequired": false,
    "platform": [
      "web",
      "api"
    ],
    "tags": [
      "companies",
      "registries",
      "legal-entities"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "聚合多个司法辖区官方来源的公司和法律实体记录，并保留来源可追溯性。",
      "en": "Aggregates company and legal-entity records from official sources across many jurisdictions with source provenance."
    }
  },
  {
    "id": "sec-edgar",
    "name": "SEC EDGAR",
    "category": "companies-organizations",
    "type": "external",
    "interaction": "external",
    "url": "https://www.sec.gov/search-filings",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "web"
    ],
    "tags": [
      "companies",
      "filings",
      "sec",
      "usa"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "美国 SEC 官方公司申报与公开文件搜索，可按公司名、股票代码、CIK 等查询。",
      "en": "Official U.S. SEC search for company filings and public disclosure documents by name, ticker, CIK and more."
    }
  },
  {
    "id": "companies-house",
    "name": "UK Companies House",
    "category": "companies-organizations",
    "type": "external",
    "interaction": "external",
    "url": "https://find-and-update.company-information.service.gov.uk/",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "web",
      "api"
    ],
    "tags": [
      "companies",
      "uk",
      "registry",
      "officers"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "英国官方公司注册信息服务，可查询公司状态、注册地址、文件和公开高管信息。",
      "en": "Official UK company register for company status, registered address, filings and public officer information."
    }
  },
  {
    "id": "gleif-lei-search",
    "name": "GLEIF LEI Search",
    "category": "companies-organizations",
    "type": "external",
    "interaction": "external",
    "url": "https://www.gleif.org/en/lei-search",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "web"
    ],
    "tags": [
      "lei",
      "legal-entities",
      "ownership",
      "companies"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "GLEIF 官方 LEI 搜索，可免费查询全球 Legal Entity Identifier 数据和部分企业关系结构。",
      "en": "Official GLEIF search for global Legal Entity Identifier data and related legal-entity relationships."
    }
  },
  {
    "id": "google-dataset-search",
    "name": "Google Dataset Search",
    "category": "public-datasets",
    "type": "external",
    "interaction": "external",
    "url": "https://datasetsearch.research.google.com/",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "web"
    ],
    "tags": [
      "datasets",
      "search",
      "research"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "Google 面向公开数据集的专用搜索入口，可从多个网站发现可检索的数据资源。",
      "en": "Google's dedicated search engine for discovering publicly indexed datasets across the web."
    }
  },
  {
    "id": "data-gov",
    "name": "Data.gov",
    "category": "public-datasets",
    "type": "external",
    "interaction": "external",
    "url": "https://data.gov/",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "web",
      "api"
    ],
    "tags": [
      "government",
      "open-data",
      "usa"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "美国政府开放数据门户，集中提供联邦机构数据集、工具和公开数据资源。",
      "en": "U.S. government open-data portal for federal datasets, tools and public data resources."
    }
  },
  {
    "id": "world-bank-open-data",
    "name": "World Bank Open Data",
    "category": "public-datasets",
    "type": "external",
    "interaction": "external",
    "url": "https://data.worldbank.org/",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "web",
      "api"
    ],
    "tags": [
      "development",
      "economics",
      "global-data"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "世界银行开放数据平台，提供全球发展、经济、人口、基础设施等指标。",
      "en": "World Bank open data for global development, economics, population, infrastructure and related indicators."
    }
  },
  {
    "id": "kaggle-datasets",
    "name": "Kaggle Datasets",
    "category": "public-datasets",
    "type": "external",
    "interaction": "external",
    "url": "https://www.kaggle.com/datasets",
    "cost": "free",
    "accountRequired": true,
    "platform": [
      "web",
      "api",
      "python"
    ],
    "tags": [
      "datasets",
      "machine-learning",
      "research"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "大型数据集社区和检索平台，适合查找公开 CSV、JSON、图像、文本等研究数据。",
      "en": "Large dataset discovery and sharing platform for public CSV, JSON, image, text and machine-learning datasets."
    }
  },
  {
    "id": "flightradar24",
    "name": "Flightradar24",
    "category": "transport-tracking",
    "type": "external",
    "interaction": "external",
    "url": "https://www.flightradar24.com/",
    "cost": "partially-free",
    "accountRequired": false,
    "platform": [
      "web",
      "mobile"
    ],
    "tags": [
      "flights",
      "aircraft",
      "aviation"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "全球航班与飞机活动可视化平台，基础实时跟踪免费，高级历史和分析功能需订阅。",
      "en": "Global flight and aircraft activity visualization with free basic live tracking and paid advanced history/features."
    }
  },
  {
    "id": "adsb-exchange",
    "name": "ADS-B Exchange",
    "category": "transport-tracking",
    "type": "external",
    "interaction": "external",
    "url": "https://www.adsbexchange.com/",
    "cost": "partially-free",
    "accountRequired": false,
    "platform": [
      "web",
      "api"
    ],
    "tags": [
      "ads-b",
      "flights",
      "aircraft"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "基于全球 ADS-B 接收网络的飞机活动查看服务，提供实时地图和部分历史/开发者数据。",
      "en": "Aircraft activity service built on a global ADS-B receiver network, with live maps and data products."
    }
  },
  {
    "id": "flightaware",
    "name": "FlightAware",
    "category": "transport-tracking",
    "type": "external",
    "interaction": "external",
    "url": "https://www.flightaware.com/live/",
    "cost": "partially-free",
    "accountRequired": false,
    "platform": [
      "web",
      "mobile",
      "api"
    ],
    "tags": [
      "flights",
      "airports",
      "aviation"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "航班、机场和航空活动跟踪平台，提供实时、历史和预测类航空信息。",
      "en": "Flight, airport and aviation tracking platform with real-time, historical and predictive information."
    }
  },
  {
    "id": "marinetraffic",
    "name": "MarineTraffic",
    "category": "transport-tracking",
    "type": "external",
    "interaction": "external",
    "url": "https://www.marinetraffic.com/",
    "cost": "partially-free",
    "accountRequired": false,
    "platform": [
      "web",
      "mobile"
    ],
    "tags": [
      "ships",
      "ais",
      "vessels",
      "ports"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "基于 AIS 的船舶和港口公开跟踪平台，可查看船舶位置、航迹和港口活动。",
      "en": "AIS-based vessel and port tracking for public ship positions, tracks and port activity."
    }
  },
  {
    "id": "vesselfinder",
    "name": "VesselFinder",
    "category": "transport-tracking",
    "type": "external",
    "interaction": "external",
    "url": "https://www.vesselfinder.com/",
    "cost": "partially-free",
    "accountRequired": false,
    "platform": [
      "web",
      "mobile"
    ],
    "tags": [
      "ships",
      "ais",
      "vessels"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "船舶位置和 AIS 信息查询平台，可按船名、IMO、MMSI 等公开标识查找船舶。",
      "en": "Vessel and AIS lookup service searchable by public identifiers such as ship name, IMO and MMSI."
    }
  },
  {
    "id": "copernicus-browser",
    "name": "Copernicus Browser",
    "category": "satellite-imagery",
    "type": "external",
    "interaction": "external",
    "url": "https://browser.dataspace.copernicus.eu/",
    "cost": "free",
    "accountRequired": true,
    "platform": [
      "web"
    ],
    "tags": [
      "sentinel",
      "satellite",
      "earth-observation"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "Copernicus Data Space 官方浏览器，可搜索、可视化、比较和下载 Sentinel 等地球观测数据。",
      "en": "Official Copernicus Data Space browser for searching, visualizing, comparing and downloading Sentinel and related Earth-observation data."
    }
  },
  {
    "id": "nasa-worldview",
    "name": "NASA Worldview",
    "category": "satellite-imagery",
    "type": "external",
    "interaction": "external",
    "url": "https://worldview.earthdata.nasa.gov/",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "web"
    ],
    "tags": [
      "nasa",
      "satellite",
      "earth-observation",
      "imagery"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "NASA Earthdata 的全球卫星影像浏览工具，可叠加多种近实时和历史地球观测图层。",
      "en": "NASA Earthdata browser for layered near-real-time and historical global Earth-observation imagery."
    }
  },
  {
    "id": "google-earth",
    "name": "Google Earth",
    "category": "satellite-imagery",
    "type": "external",
    "interaction": "external",
    "url": "https://earth.google.com/web/",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "web",
      "desktop",
      "mobile"
    ],
    "tags": [
      "satellite",
      "3d",
      "maps",
      "imagery"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "全球卫星影像、三维地形和地理环境浏览工具，适合视觉地理对照和场景理解。",
      "en": "Global satellite imagery, 3D terrain and geographic context useful for visual geolocation and scene understanding."
    }
  },
  {
    "id": "usgs-earthexplorer",
    "name": "USGS EarthExplorer",
    "category": "satellite-imagery",
    "type": "external",
    "interaction": "external",
    "url": "https://earthexplorer.usgs.gov/",
    "cost": "free",
    "accountRequired": true,
    "platform": [
      "web"
    ],
    "tags": [
      "landsat",
      "usgs",
      "satellite",
      "download"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "USGS 官方遥感数据搜索与下载平台，可按位置、时间、数据集和云量等条件筛选。",
      "en": "Official USGS search and download portal for remote-sensing datasets filtered by location, date, collection and cloud cover."
    }
  },
  {
    "id": "invid-weverify",
    "name": "InVID-WeVerify Verification Plugin",
    "category": "video-verification",
    "type": "external",
    "interaction": "external",
    "url": "https://weverify.eu/verification-plugin/",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "browser-extension"
    ],
    "tags": [
      "video",
      "verification",
      "keyframes",
      "metadata"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "面向记者和事实核查的图片/视频验证插件，支持视频关键帧、元数据、反向搜索和多种验证工具。",
      "en": "Image and video verification plugin for journalists and fact-checkers, with keyframes, metadata, reverse search and other verification tools."
    }
  },
  {
    "id": "google-lens",
    "name": "Google Lens",
    "category": "ocr-translation",
    "type": "external",
    "interaction": "external",
    "url": "https://lens.google.com/",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "web",
      "mobile"
    ],
    "tags": [
      "ocr",
      "visual-search",
      "image",
      "text"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "Google 的视觉搜索与文字识别工具，可从图片识别文字、物体、地点线索并进行相似图像搜索。",
      "en": "Google visual search and text recognition for extracting text, identifying objects/place clues and finding visually similar content."
    }
  },
  {
    "id": "google-translate",
    "name": "Google Translate",
    "category": "ocr-translation",
    "type": "external",
    "interaction": "external",
    "url": "https://translate.google.com/",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "web",
      "mobile"
    ],
    "tags": [
      "translation",
      "languages",
      "ocr"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "多语言文本和文档翻译工具，可辅助跨语言公开信息阅读和初步理解。",
      "en": "Multilingual text and document translation useful for first-pass understanding of public-source material."
    }
  },
  {
    "id": "deepl",
    "name": "DeepL Translator",
    "category": "ocr-translation",
    "type": "external",
    "interaction": "external",
    "url": "https://www.deepl.com/translator",
    "cost": "partially-free",
    "accountRequired": false,
    "platform": [
      "web",
      "desktop",
      "mobile"
    ],
    "tags": [
      "translation",
      "languages",
      "documents"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "高质量多语言翻译工具，适合长文本、文档和跨语言资料辅助阅读。",
      "en": "High-quality multilingual translation for long-form text, documents and cross-language research."
    }
  },
  {
    "id": "tesseract-ocr",
    "name": "Tesseract OCR",
    "category": "ocr-translation",
    "type": "external",
    "interaction": "external",
    "url": "https://github.com/tesseract-ocr/tesseract",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "windows",
      "macos",
      "linux"
    ],
    "tags": [
      "ocr",
      "open-source",
      "text-recognition"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "开源 OCR 引擎，可本地从图片中提取文字，适合隐私敏感或批量文字识别场景。",
      "en": "Open-source OCR engine for local text extraction from images, useful for privacy-sensitive or batch recognition workflows."
    }
  },
  {
    "id": "github-code-search",
    "name": "GitHub Code Search",
    "category": "code-search",
    "type": "external",
    "interaction": "external",
    "url": "https://github.com/search?type=code",
    "cost": "free",
    "accountRequired": true,
    "platform": [
      "web"
    ],
    "tags": [
      "github",
      "code",
      "repositories"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "GitHub 官方代码搜索入口，用于在公开仓库中检索代码、文件、路径和相关项目内容。",
      "en": "GitHub's official code search for public repositories, code, files, paths and related project content."
    }
  },
  {
    "id": "grep-app",
    "name": "grep.app",
    "category": "code-search",
    "type": "external",
    "interaction": "external",
    "url": "https://grep.app/",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "web"
    ],
    "tags": [
      "code",
      "github",
      "search"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "跨大量 GitHub 仓库的公开代码、文件和路径搜索服务，适合快速查找实现和字符串出现位置。",
      "en": "Public code, file and path search across a large corpus of GitHub repositories."
    }
  },
  {
    "id": "sourcegraph-code-search",
    "name": "Sourcegraph Code Search",
    "category": "code-search",
    "type": "external",
    "interaction": "external",
    "url": "https://sourcegraph.com/search",
    "cost": "partially-free",
    "accountRequired": true,
    "platform": [
      "web",
      "ide"
    ],
    "tags": [
      "code",
      "search",
      "regex",
      "repositories"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "面向大型代码库的高级代码搜索与导航平台，支持正则、布尔查询和跨仓库检索。",
      "en": "Advanced code search and navigation platform with regex, boolean queries and cross-repository search."
    }
  },
  {
    "id": "ahmia",
    "name": "Ahmia",
    "category": "dark-web-indexes",
    "type": "external",
    "interaction": "external",
    "url": "https://ahmia.fi/",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "web",
      "tor"
    ],
    "tags": [
      "tor",
      "onion",
      "search",
      "index"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "公开的 Tor/onion 服务搜索索引，适合研究公开可索引的 onion 服务；结果可能包含不安全或违法内容，应谨慎使用。",
      "en": "Public search index for discoverable Tor/onion services; results may contain unsafe or illegal material, so use cautiously."
    }
  },
  {
    "id": "hunter-domain-search",
    "name": "Hunter Domain Search",
    "category": "contact-public-info",
    "type": "external",
    "interaction": "external",
    "url": "https://hunter.io/domain-search",
    "cost": "partially-free",
    "accountRequired": true,
    "platform": [
      "web",
      "api"
    ],
    "tags": [
      "email",
      "company",
      "domain",
      "professional"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "从公开网页来源查找与企业域名关联的专业邮箱，并显示来源、发现日期和置信度等信息。",
      "en": "Finds professional email addresses associated with company domains using public web sources, with source and confidence context."
    }
  },
  {
    "id": "have-i-been-pwned",
    "name": "Have I Been Pwned",
    "category": "contact-public-info",
    "type": "external",
    "interaction": "external",
    "url": "https://haveibeenpwned.com/",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "web",
      "api"
    ],
    "tags": [
      "email",
      "breach",
      "security",
      "self-audit"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "检查邮箱地址是否出现在已知数据泄露事件中，适合个人或授权账户的安全自查。",
      "en": "Checks whether an email address appears in known data breaches, useful for personal or authorized security awareness."
    }
  },
  {
    "id": "perplexity",
    "name": "Perplexity",
    "category": "ai-research",
    "type": "external",
    "interaction": "external",
    "url": "https://www.perplexity.ai/",
    "cost": "partially-free",
    "accountRequired": true,
    "platform": [
      "web",
      "mobile"
    ],
    "tags": [
      "ai",
      "research",
      "search",
      "citations"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "AI 辅助搜索与研究工具，可汇总公开网页信息并给出来源链接，仍需人工核对原始来源。",
      "en": "AI-assisted search and research that summarizes public web information with source links; original sources still require manual verification."
    }
  },
  {
    "id": "elicit",
    "name": "Elicit",
    "category": "ai-research",
    "type": "external",
    "interaction": "external",
    "url": "https://elicit.com/",
    "cost": "partially-free",
    "accountRequired": true,
    "platform": [
      "web"
    ],
    "tags": [
      "ai",
      "papers",
      "literature-review",
      "research"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "面向学术研究的 AI 助手，可帮助检索论文、提取研究信息和整理文献证据。",
      "en": "AI research assistant for finding papers, extracting study information and organizing literature evidence."
    }
  },
  {
    "id": "consensus",
    "name": "Consensus",
    "category": "ai-research",
    "type": "external",
    "interaction": "external",
    "url": "https://consensus.app/",
    "cost": "partially-free",
    "accountRequired": true,
    "platform": [
      "web"
    ],
    "tags": [
      "ai",
      "academic",
      "papers",
      "evidence"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "基于学术论文的 AI 搜索与证据摘要工具，适合快速了解研究共识和相关文献。",
      "en": "AI search and evidence summarization over academic papers for quickly exploring research findings and relevant literature."
    }
  },
  {
    "id": "scite",
    "name": "Scite",
    "category": "ai-research",
    "type": "external",
    "interaction": "external",
    "url": "https://scite.ai/",
    "cost": "partially-free",
    "accountRequired": true,
    "platform": [
      "web",
      "api"
    ],
    "tags": [
      "citations",
      "papers",
      "ai",
      "evidence"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "学术研究与引文分析平台，可查看论文被后续研究支持、质疑或讨论的上下文。",
      "en": "Research and citation-analysis platform for seeing how later literature supports, challenges or discusses scholarly work."
    }
  },
  {
    "id": "libphonenumber",
    "name": "Google libphonenumber",
    "category": "contact-public-info",
    "type": "external",
    "interaction": "external",
    "url": "https://github.com/google/libphonenumber",
    "cost": "free",
    "accountRequired": false,
    "platform": [
      "java",
      "javascript",
      "cpp"
    ],
    "tags": [
      "phone",
      "validation",
      "metadata",
      "open-source"
    ],
    "lastReviewed": "2026-10-04",
    "description": {
      "zh-CN": "Google 开源电话号码库，用于解析、格式化和验证国际号码，并提供号码类型、地区、原始运营商等有限离线元数据。",
      "en": "Open-source library for parsing, formatting and validating international phone numbers, including number type and limited offline metadata."
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
    "filters.category": "分类", "filters.mode": "使用方式", "filters.cost": "费用", "filters.platform": "平台", "filters.reset": "重置",
    "interaction.external": "外部工具", "interaction.integrated": "内置工具",
    "cost.free": "免费", "cost.partiallyFree": "部分免费", "cost.paid": "付费",
    "platform.all": "全部平台",
    "search.placeholder": "搜索工具、用途、标签…",
    "favorites.title": "收藏",
    "sort.label": "排序", "sort.featured": "精选优先", "sort.name": "名称", "sort.category": "分类", "sort.reviewed": "最近审阅",
    "catalog.kicker": "精选工具集合", "catalog.title": "工具库",
    "empty.title": "没有找到匹配工具", "empty.text": "尝试更换关键词、分类或筛选条件。",
    "principles.collect.title": "收藏优先", "principles.collect.text": "成熟工具优先收录和跳转，不重复造轮子。",
    "principles.organize.title": "组织清晰", "principles.organize.text": "分类、标签、费用、平台和限制一眼可见。",
    "principles.integrate.title": "少量内置", "principles.integrate.text": "只有真正值得维护的 TAO 工具才直接集成。",
    "footer.tagline": "精选工具，清晰说明，快速访问。",
    "count.one": "显示 {shown} / {total} 个工具",
    "launch.external": "打开官方工具 ↗", "launch.integrated": "直接使用 →",
    "badge.external": "外部", "badge.integrated": "内置", "badge.taoOptimized": "TAO 优化",
    "account.no": "无需账号", "account.yes": "需要账号",
    "reviewed": "审阅于",
    "filter.category": "分类：", "filter.platform": "平台：", "filter.favorites": "仅收藏", "filter.search": "搜索："
  },
  en: {
    "hero.eyebrow": "OSINT COLLECTION · SHOWCASE · BOOKMARKS",
    "hero.line1": "Useful OSINT tools,",
    "hero.line2": "all in one place.",
    "hero.description": "Built around collection, categorization, search and fast access. Most entries open the official tool; only a small number of selected TAO projects run directly inside the platform.",
    "stats.collected": "Collected", "stats.tools": "tools", "stats.categories": "Categories", "stats.groups": "groups", "stats.integrated": "Direct use", "stats.taoTools": "TAO tools",
    "filters.category": "Category", "filters.mode": "Interaction", "filters.cost": "Cost", "filters.platform": "Platform", "filters.reset": "Reset",
    "interaction.external": "External tools", "interaction.integrated": "Integrated tools",
    "cost.free": "Free", "cost.partiallyFree": "Partially free", "cost.paid": "Paid",
    "platform.all": "All platforms",
    "search.placeholder": "Search tools, use cases or tags…",
    "favorites.title": "Favorites",
    "sort.label": "Sort", "sort.featured": "Featured", "sort.name": "Name", "sort.category": "Category", "sort.reviewed": "Recently reviewed",
    "catalog.kicker": "CURATED COLLECTION", "catalog.title": "Tool library",
    "empty.title": "No matching tools", "empty.text": "Try another keyword, category or filter.",
    "principles.collect.title": "Collect first", "principles.collect.text": "Prefer collecting and linking mature tools instead of rebuilding them.",
    "principles.organize.title": "Clear structure", "principles.organize.text": "Category, tags, cost, platform and limitations should be easy to scan.",
    "principles.integrate.title": "Integrate selectively", "principles.integrate.text": "Only TAO tools worth maintaining should run directly inside the platform.",
    "footer.tagline": "Curated tools. Clear context. Fast access.",
    "count.one": "Showing {shown} of {total} tools",
    "launch.external": "Open official tool ↗", "launch.integrated": "Use directly →",
    "badge.external": "External", "badge.integrated": "Integrated", "badge.taoOptimized": "TAO Optimized",
    "account.no": "No account", "account.yes": "Account required",
    "reviewed": "Reviewed",
    "filter.category": "Category:", "filter.platform": "Platform:", "filter.favorites": "Favorites only", "filter.search": "Search:"
  }
};



Object.assign(I18N["zh-CN"], {
  "hero.explore": "热门分类",
  "nav.tools": "工具",
  "nav.favorites": "收藏",
  "nav.about": "关于",
  "hero.browse": "浏览工具库",
  "stats.favorites": "本地收藏",
  "stats.saved": "已保存",
  "recent.kicker": "最近使用",
  "recent.title": "最近访问",
  "recent.clear": "清空",
  "filters.title": "筛选",
  "filters.resetShort": "重置",
  "detail.button": "详情",
  "detail.platform": "平台",
  "detail.account": "账号",
  "detail.reviewed": "最近审阅",
  "detail.favorite": "加入收藏",
  "detail.unfavorite": "取消收藏",
  "loadMore": "加载更多（{shown} / {total}）",
  "view.list": "列表视图",
  "view.grid": "网格视图"
});
Object.assign(I18N.en, {
  "hero.explore": "Explore categories",
  "nav.tools": "Tools",
  "nav.favorites": "Favorites",
  "nav.about": "About",
  "hero.browse": "Browse tools",
  "stats.favorites": "Local favorites",
  "stats.saved": "saved",
  "recent.kicker": "RECENT",
  "recent.title": "Recently opened",
  "recent.clear": "Clear",
  "filters.title": "Filters",
  "filters.resetShort": "Reset",
  "detail.button": "Details",
  "detail.platform": "Platform",
  "detail.account": "Account",
  "detail.reviewed": "Last reviewed",
  "detail.favorite": "Add favorite",
  "detail.unfavorite": "Remove favorite",
  "loadMore": "Load more ({shown} / {total})",
  "view.list": "List view",
  "view.grid": "Grid view"
});

const RECENT_KEY = "tao-osint-recent";
const VIEW_KEY = "tao-osint-view";
const PAGE_SIZE = 18;
const $ = (id) => document.getElementById(id);

let language = loadSetting(LANGUAGE_KEY, "zh-CN");
if (!I18N[language]) language = "zh-CN";
let selectedCategory = "all";
let selectedPlatform = "all";
let favoritesOnly = false;
let favorites = new Set(loadJSON(FAVORITES_KEY, []));
let recent = loadJSON(RECENT_KEY, []).filter((id) => TOOLS.some((tool) => tool.id === id)).slice(0, 8);
let searchTerm = "";
let sortMode = "featured";
let viewMode = loadSetting(VIEW_KEY, "list");
if (!["list","grid"].includes(viewMode)) viewMode = "list";
let visibleCount = PAGE_SIZE;
let activeDialogTool = null;

function loadSetting(key, fallback) {
  try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
}
function loadJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); } catch { return fallback; }
}
function saveSetting(key, value) {
  try { localStorage.setItem(key, value); } catch {}
}
function saveJSON(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}
function saveFavorites() { saveJSON(FAVORITES_KEY, [...favorites]); }
function saveRecent() { saveJSON(RECENT_KEY, recent); }
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
function allPlatforms() {
  return ["all", ...new Set(TOOLS.flatMap((tool) => tool.platform))].sort((a,b) => a === "all" ? -1 : b === "all" ? 1 : a.localeCompare(b));
}
function resetPagination() { visibleCount = PAGE_SIZE; }
function recordRecent(tool) {
  recent = [tool.id, ...recent.filter((id) => id !== tool.id)].slice(0, 8);
  saveRecent();
  renderRecent();
}
function toggleFavorite(id) {
  if (favorites.has(id)) favorites.delete(id);
  else favorites.add(id);
  saveFavorites();
  render();
}
function openOfficial(tool) {
  recordRecent(tool);
}

function filteredTools() {
  const interaction = activeFilterValues("interaction");
  const costs = activeFilterValues("cost");
  const query = searchTerm.trim().toLowerCase();

  const items = TOOLS.filter((tool) => {
    if (selectedCategory !== "all" && tool.category !== selectedCategory) return false;
    if (selectedPlatform !== "all" && !tool.platform.includes(selectedPlatform)) return false;
    if (!interaction.includes(tool.interaction)) return false;
    if (!costs.includes(tool.cost)) return false;
    if (favoritesOnly && !favorites.has(tool.id)) return false;
    if (!query) return true;
    const haystack = [
      tool.name, tool.description["zh-CN"], tool.description.en, tool.category,
      ...tool.tags, ...tool.platform
    ].join(" ").toLowerCase();
    return haystack.includes(query);
  });

  return items.sort((a,b) => {
    if (sortMode === "name") return a.name.localeCompare(b.name);
    if (sortMode === "category") return categoryLabel(a.category).localeCompare(categoryLabel(b.category), language);
    if (sortMode === "reviewed") return b.lastReviewed.localeCompare(a.lastReviewed) || a.name.localeCompare(b.name);
    const score = (x) => x.interaction === "integrated" ? 0 : x.type === "tao-optimized" ? 1 : 2;
    return score(a) - score(b) || a.name.localeCompare(b.name);
  });
}


function renderHeroCategories() {
  const target = $("hero-category-cloud");
  if (!target) return;
  const ranked = CATEGORIES
    .filter(([id]) => id !== "all")
    .map(([id]) => ({id, count: TOOLS.filter((tool) => tool.category === id).length}))
    .filter((item) => item.count > 0)
    .sort((a,b) => b.count - a.count || categoryLabel(a.id).localeCompare(categoryLabel(b.id), language))
    .slice(0, 7);

  target.innerHTML = "";
  for (const item of ranked) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "hero-category-pill";
    button.innerHTML = `${categoryIcon(item.id)}<span>${categoryLabel(item.id)}</span><small>${item.count}</small>`;
    button.addEventListener("click", () => {
      selectedCategory = item.id;
      resetPagination();
      render();
      $("catalog").scrollIntoView({behavior:"smooth"});
    });
    target.appendChild(button);
  }
}

function renderCategories() {
  const target = $("category-list");
  target.innerHTML = "";
  for (const [id] of CATEGORIES) {
    const count = id === "all" ? TOOLS.length : TOOLS.filter((tool) => tool.category === id).length;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-button" + (selectedCategory === id ? " active" : "");
    button.innerHTML = `<span class="category-button-main">${categoryIcon(id)}<span>${categoryLabel(id)}</span></span><small>${count}</small>`;
    button.addEventListener("click", () => {
      selectedCategory = id;
      resetPagination();
      closeSidebar();
      render();
    });
    target.appendChild(button);
  }
}

function renderPlatforms() {
  const target = $("platform-list");
  target.innerHTML = "";
  for (const platform of allPlatforms()) {
    const count = platform === "all" ? TOOLS.length : TOOLS.filter((tool) => tool.platform.includes(platform)).length;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "platform-button" + (selectedPlatform === platform ? " active" : "");
    button.innerHTML = `<span>${platform === "all" ? t("platform.all") : platform}</span><small>${count}</small>`;
    button.addEventListener("click", () => {
      selectedPlatform = platform;
      resetPagination();
      render();
    });
    target.appendChild(button);
  }
}

function badgeHTML(tool) {
  return `
    <span class="tool-badge ${tool.interaction === "integrated" ? "integrated" : ""}">${tool.interaction === "integrated" ? t("badge.integrated") : t("badge.external")}</span>
    ${tool.type === "tao-optimized" ? `<span class="tool-badge integrated">${t("badge.taoOptimized")}</span>` : ""}
    <span class="tool-badge">${costLabel(tool.cost)}</span>
  `;
}

function toolCard(tool) {
  const card = document.createElement("article");
  card.className = "tool-card";
  const favorite = favorites.has(tool.id);
  const launchText = tool.interaction === "integrated" ? t("launch.integrated") : t("launch.external");

  card.innerHTML = `
    <div class="tool-main">
      <div class="tool-card-top"><span class="category-mark">${categoryIcon(tool.category)}<span class="tool-category">${categoryLabel(tool.category)}</span></span></div>
      <button class="tool-name" type="button">${tool.name}</button>
      <p class="tool-description">${tool.description[language]}</p>
      <div class="tool-tags">
        ${tool.tags.slice(0,6).map((tag) => `<button type="button" class="tag-button" data-tag="${tag}">#${tag}</button>`).join("")}
      </div>
    </div>
    <div class="tool-side">
      <div class="tool-actions">
        <button class="favorite-button ${favorite ? "active" : ""}" type="button" aria-label="${t("favorites.title")}">${favorite ? "★" : "☆"}</button>
        <button class="details-button" type="button">${t("detail.button")}</button>
        <a class="launch-link" href="${tool.url}" ${tool.interaction === "external" ? 'target="_blank" rel="noreferrer"' : ""}>${launchText}</a>
      </div>
      <div class="tool-badges">${badgeHTML(tool)}</div>
    </div>
    <div class="tool-footer">
      <span>${tool.platform.join(" · ")}</span>
      <span class="meta-dot">${tool.accountRequired ? t("account.yes") : t("account.no")}</span>
      <span class="meta-dot review-meta">${t("reviewed")} ${tool.lastReviewed}</span>
    </div>
  `;

  card.querySelector(".favorite-button").addEventListener("click", () => toggleFavorite(tool.id));
  card.querySelector(".details-button").addEventListener("click", () => openDialog(tool));
  card.querySelector(".tool-name").addEventListener("click", () => openDialog(tool));
  card.querySelector(".launch-link").addEventListener("click", () => openOfficial(tool));
  card.querySelectorAll(".tag-button").forEach((button) => {
    button.addEventListener("click", () => {
      searchTerm = button.dataset.tag;
      $("search-input").value = searchTerm;
      resetPagination();
      render();
    });
  });
  return card;
}

function renderTools() {
  const target = $("tool-grid");
  const all = filteredTools();
  const shown = all.slice(0, visibleCount);
  target.dataset.view = viewMode;
  target.innerHTML = "";
  shown.forEach((tool) => target.appendChild(toolCard(tool)));

  $("empty-state").hidden = all.length !== 0;
  $("result-count").textContent = t("count.one").replace("{shown}", shown.length).replace("{total}", all.length);

  const load = $("load-more");
  if (shown.length < all.length) {
    load.hidden = false;
    load.textContent = t("loadMore").replace("{shown}", shown.length).replace("{total}", all.length);
  } else {
    load.hidden = true;
  }
}

function filterChip(label, onClear) {
  const span = document.createElement("span");
  span.className = "active-filter-chip";
  const text = document.createTextNode(label);
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "×";
  button.addEventListener("click", onClear);
  span.append(text, button);
  return span;
}

function renderActiveFilters() {
  const bar = $("active-filter-bar");
  bar.innerHTML = "";
  if (selectedCategory !== "all") bar.appendChild(filterChip(t("filter.category")+" "+categoryLabel(selectedCategory), () => { selectedCategory="all"; resetPagination(); render(); }));
  if (selectedPlatform !== "all") bar.appendChild(filterChip(t("filter.platform")+" "+selectedPlatform, () => { selectedPlatform="all"; resetPagination(); render(); }));
  if (favoritesOnly) bar.appendChild(filterChip(t("filter.favorites"), () => { favoritesOnly=false; resetPagination(); render(); }));
  if (searchTerm.trim()) bar.appendChild(filterChip(t("filter.search")+" "+searchTerm.trim(), () => { searchTerm=""; $("search-input").value=""; resetPagination(); render(); }));
}

function renderStats() {
  $("stat-tools").textContent = TOOLS.length;
  $("stat-categories").textContent = new Set(TOOLS.map((tool) => tool.category)).size;
  $("stat-integrated").textContent = TOOLS.filter((tool) => tool.interaction === "integrated").length;
  for (const id of ["favorite-count","toolbar-favorite-count","hero-favorite-count"]) $(id).textContent = favorites.size;
}

function renderRecent() {
  const section = $("recent-section");
  const list = $("recent-list");
  const tools = recent.map((id) => TOOLS.find((tool) => tool.id === id)).filter(Boolean);
  section.hidden = tools.length === 0;
  list.innerHTML = "";
  for (const tool of tools) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "recent-item";
    button.innerHTML = `<span class="recent-icon">${categoryIcon(tool.category)}</span><span class="recent-copy"><small>${categoryLabel(tool.category)}</small><strong>${tool.name}</strong></span>`;
    button.addEventListener("click", () => openDialog(tool));
    list.appendChild(button);
  }
}

function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = t(element.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => { element.placeholder = t(element.dataset.i18nPlaceholder); });
  document.querySelectorAll("[data-language]").forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
  $("view-list").title = t("view.list");
  $("view-grid").title = t("view.grid");
  const readmeLink = $("readme-link");
  const roadmapLink = $("roadmap-link");
  if (readmeLink) {
    readmeLink.href = language === "zh-CN"
      ? "https://github.com/TYSONPengtao/Tao-OSINT/blob/main/README.zh-CN.md"
      : "https://github.com/TYSONPengtao/Tao-OSINT#readme";
  }
  if (roadmapLink) {
    roadmapLink.href = language === "zh-CN"
      ? "https://github.com/TYSONPengtao/Tao-OSINT/blob/main/docs/roadmap.zh-CN.md"
      : "https://github.com/TYSONPengtao/Tao-OSINT/blob/main/docs/roadmap.md";
  }
}

function renderViewSwitch() {
  $("view-list").classList.toggle("active", viewMode === "list");
  $("view-grid").classList.toggle("active", viewMode === "grid");
}

function render() {
  applyLanguage();
  renderHeroCategories();
  renderCategories();
  renderPlatforms();
  renderStats();
  renderRecent();
  renderActiveFilters();
  renderViewSwitch();
  renderTools();
  $("favorites-toggle").classList.toggle("active", favoritesOnly);
  $("sort-select").value = sortMode;
  if (activeDialogTool && $("tool-dialog").open) fillDialog(activeDialogTool);
}

function resetFilters() {
  selectedCategory = "all";
  selectedPlatform = "all";
  favoritesOnly = false;
  searchTerm = "";
  sortMode = "featured";
  $("search-input").value = "";
  document.querySelectorAll("[data-filter]").forEach((input) => { input.checked = true; });
  resetPagination();
  render();
}

function openSidebar() {
  $("sidebar").classList.add("open");
  $("scrim").hidden = false;
  document.body.classList.add("no-scroll");
}
function closeSidebar() {
  $("sidebar").classList.remove("open");
  $("scrim").hidden = true;
  if (!$("tool-dialog").open) document.body.classList.remove("no-scroll");
}

function fillDialog(tool) {
  activeDialogTool = tool;
  $("dialog-icon").innerHTML = categoryIcon(tool.category, "dialog-category-icon");
  $("dialog-category").textContent = categoryLabel(tool.category);
  $("dialog-title").textContent = tool.name;
  $("dialog-description").textContent = tool.description[language];
  $("dialog-badges").innerHTML = badgeHTML(tool);
  $("dialog-tags").innerHTML = tool.tags.map((tag) => `<button type="button" class="tag-button" data-tag="${tag}">#${tag}</button>`).join("");
  $("dialog-platform").textContent = tool.platform.join(" · ");
  $("dialog-account").textContent = tool.accountRequired ? t("account.yes") : t("account.no");
  $("dialog-reviewed").textContent = tool.lastReviewed;
  $("dialog-favorite").textContent = favorites.has(tool.id) ? "★ "+t("detail.unfavorite") : "☆ "+t("detail.favorite");
  const launch = $("dialog-launch");
  launch.href = tool.url;
  launch.textContent = tool.interaction === "integrated" ? t("launch.integrated") : t("launch.external");
  if (tool.interaction === "external") { launch.target="_blank"; launch.rel="noreferrer"; } else { launch.removeAttribute("target"); launch.removeAttribute("rel"); }
  $("dialog-tags").querySelectorAll(".tag-button").forEach((button) => {
    button.addEventListener("click", () => {
      searchTerm = button.dataset.tag;
      $("search-input").value = searchTerm;
      closeDialog();
      resetPagination();
      render();
      document.querySelector("#catalog").scrollIntoView({behavior:"smooth"});
    });
  });
}
function openDialog(tool) {
  fillDialog(tool);
  const dialog = $("tool-dialog");
  if (!dialog.open) dialog.showModal();
  document.body.classList.add("no-scroll");
}
function closeDialog() {
  if ($("tool-dialog").open) $("tool-dialog").close();
  activeDialogTool = null;
  document.body.classList.remove("no-scroll");
}

document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => {
  language = button.dataset.language;
  saveSetting(LANGUAGE_KEY, language);
  render();
}));
$("search-input").addEventListener("input", (event) => {
  searchTerm = event.target.value;
  resetPagination();
  renderActiveFilters();
  renderTools();
});
document.querySelectorAll("[data-filter]").forEach((input) => input.addEventListener("change", () => { resetPagination(); render(); }));
$("sort-select").addEventListener("change", (event) => { sortMode = event.target.value; resetPagination(); renderTools(); });
$("favorites-toggle").addEventListener("click", () => { favoritesOnly = !favoritesOnly; resetPagination(); render(); });
$("hero-favorites").addEventListener("click", () => { favoritesOnly = true; resetPagination(); render(); $("catalog").scrollIntoView({behavior:"smooth"}); });
$("nav-favorites").addEventListener("click", () => { favoritesOnly = true; resetPagination(); render(); $("catalog").scrollIntoView({behavior:"smooth"}); });
$("clear-filters").addEventListener("click", resetFilters);
$("sidebar-reset").addEventListener("click", resetFilters);
$("load-more").addEventListener("click", () => { visibleCount += PAGE_SIZE; renderTools(); });
$("view-list").addEventListener("click", () => { viewMode="list"; saveSetting(VIEW_KEY,viewMode); render(); });
$("view-grid").addEventListener("click", () => { viewMode="grid"; saveSetting(VIEW_KEY,viewMode); render(); });
$("mobile-filter-open").addEventListener("click", openSidebar);
$("sidebar-close").addEventListener("click", closeSidebar);
$("scrim").addEventListener("click", closeSidebar);
$("dialog-close").addEventListener("click", closeDialog);
$("tool-dialog").addEventListener("close", () => { activeDialogTool=null; document.body.classList.remove("no-scroll"); });
$("dialog-favorite").addEventListener("click", () => {
  if (!activeDialogTool) return;
  toggleFavorite(activeDialogTool.id);
  fillDialog(activeDialogTool);
});
$("dialog-launch").addEventListener("click", () => { if (activeDialogTool) recordRecent(activeDialogTool); });
$("clear-recent").addEventListener("click", () => { recent=[]; saveRecent(); renderRecent(); });

document.addEventListener("keydown", (event) => {
  const tag = document.activeElement?.tagName;
  const typing = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
  if (event.key === "/" && !typing && !$("tool-dialog").open) {
    event.preventDefault();
    $("search-input").focus();
  }
  if (event.key === "Escape") {
    if ($("tool-dialog").open) { closeDialog(); return; }
    if ($("sidebar").classList.contains("open")) { closeSidebar(); return; }
    if ($("search-input").value) {
      searchTerm="";
      $("search-input").value="";
      resetPagination();
      render();
    }
  }
});

render();
