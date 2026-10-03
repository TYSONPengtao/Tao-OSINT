# TAO OSINT

[English](README.md) · **简体中文**

**一个以 OSINT 工具收集、陈列、收藏和快速访问为核心的平台，只有少数 TAO 精选工具直接内置使用。**

TAO OSINT 与 **TAO Digital Twin** 平级，是 TAO 技术体系中的独立主项目。

## 项目定位

核心原则非常简单：

> **收集有用的 OSINT 工具，整理清楚，展示清楚，方便收藏和再次使用。只有确实值得维护的少量工具才自己集成。**

大多数工具：

- 收集
- 分类
- 描述
- 标记
- 收藏
- 跳转官方入口

少数工具：

- TAO 优化
- TAO 自研
- 可直接在平台中使用

## 产品结构

```text
TAO OSINT
│
├── COLLECTION
│   ├── 搜索与发现
│   ├── 图片与视频
│   ├── 地理定位与地图
│   ├── 元数据与文件
│   ├── 网页存档
│   ├── 网站与域名
│   ├── URL / 安全分析
│   └── 研究资源
│
├── SHOWCASE
│   ├── 工具卡片
│   ├── 用途说明
│   ├── 免费 / 付费
│   ├── 是否需要账号
│   ├── 支持平台
│   └── 局限与隐私说明
│
├── BOOKMARKS
│   ├── 收藏
│   ├── 自定义合集
│   ├── 置顶
│   └── 最近使用
│
└── TAO TOOLS
    ├── Photo Stargazing Positioning
    └── 少量后续精选工具
```

## 当前 Web MVP

`frontend/` 已经包含第一版双语工具聚合页面：

- **中文 / English 即时切换**
- 记忆语言选择
- 工具搜索
- 分类浏览
- 外部 / 内置工具筛选
- 免费 / 部分免费 / 付费筛选
- 响应式工具卡片
- 浏览器本地收藏
- External / Integrated / TAO Optimized 标识
- 官方工具快速跳转
- 少量 TAO 内置工具直接打开
- 桌面与移动端适配

## 第一批工具

当前目录已经包含：

- Bellingcat Online Investigations Toolkit
- TinEye
- ExifTool
- OpenStreetMap
- SunCalc
- Internet Archive / Wayback Machine
- urlscan.io
- VirusTotal
- Photo Stargazing Positioning

其中绝大多数是**外部工具收藏项**。

### Photo Stargazing Positioning

第一个 **TAO Optimized + Integrated** 项目。

已经具备：

- Python 核心
- 可复现样例
- 单元测试
- JSON / CSV 导出
- 候选地理聚类
- 本地浏览器 Web MVP
- 中文 / English 切换

## 产品原则

1. **收藏优先。**
2. **展示清晰。**
3. **方便搜索和再次访问。**
4. **成熟工具优先跳转官方，不重复造轮子。**
5. **内置 TAO 工具保持少而精。**
6. **搜索、分类和收藏比功能堆叠更重要。**
7. **费用、账号、平台、隐私和局限应该明确。**
8. **桌面和移动端都应该好用。**
9. **不以跟踪、开盒、骚扰或未经授权访问为产品目标。**

## 路线图

```text
v0.1  工具目录基础
  ↓
v0.2  搜索 + 分类 + 工具陈列
  ↓
v0.3  收藏 + 合集 + 书签
  ↓
v0.4  少量 TAO 内置工具
  ↓
v0.5  链接维护 + 社区提交
  ↓
v1.0  稳定 OSINT 工具收藏平台
```

详细内容见 [docs/roadmap.md](docs/roadmap.md)。

## 相关项目

- [TAO Digital Twin](https://github.com/TYSONPengtao/Tao-Digital-Twin)
- [TAO Personal Technology Lab](https://tysonpengtao.github.io)

## 当前状态

**工具收藏平台基础建设中。**
