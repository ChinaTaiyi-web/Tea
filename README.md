# 安徽太一茶业 Netlify 动态网页

这个项目已经改成 Netlify 免费部署版本：

- `public/`：静态网页文件。
- `netlify/functions/api.cjs`：后端 API。
- `Netlify Blobs`：保存留言、点赞、茶品、案例、轮播图等动态数据。
- `data/site-data.json`：首次部署时使用的初始化数据。

Netlify Functions 会把函数部署为 API 端点；Netlify Blobs 可以作为轻量 key/value 数据库使用，适合这个小型官网。参考官方文档：

- Netlify Functions: https://docs.netlify.com/functions/get-started/
- Netlify Blobs: https://docs.netlify.com/build/data-and-storage/netlify-blobs/

## 项目结构

```text
太一官网项目/
├─ public/
│  ├─ index.html
│  ├─ styles.css
│  ├─ script.js
│  └─ img/
│     └─ .gitkeep
├─ netlify/
│  └─ functions/
│     └─ api.cjs
├─ data/
│  └─ site-data.json
├─ netlify.toml
├─ package.json
├─ .gitignore
└─ README.md
```

## 部署到 Netlify

### 1. 上传到 GitHub

把整个项目上传到 GitHub。必须包含这些路径：

```text
public/index.html
public/styles.css
public/script.js
public/img/.gitkeep
netlify/functions/api.cjs
data/site-data.json
netlify.toml
package.json
README.md
.gitignore
```

如果 GitHub 网页端传不上文件夹，就用 `Add file -> Create new file`，文件名输入完整路径，例如：

```text
netlify/functions/api.cjs
data/site-data.json
public/index.html
```

GitHub 会自动创建文件夹。

### 2. 在 Netlify 创建站点

进入 Netlify 后选择：

```text
Add new project -> Import an existing project
```

连接你的 GitHub 仓库。

### 3. 构建设置

Netlify 会读取 `netlify.toml`。如果需要手动填写：

```text
Build command: npm run build
Publish directory: public
Functions directory: netlify/functions
```

### 4. 环境变量

在 Netlify 的 Site configuration 里添加：

```text
ADMIN_PASSWORD=你的管理员密码
```

网站后台登录：

```text
用户名：admin
密码：你设置的 ADMIN_PASSWORD
```

如果不设置，默认密码是：

```text
taiyi2026
```

### 5. 访问网站

部署成功后，Netlify 会给你一个网址，例如：

```text
https://your-site-name.netlify.app
```

打开后右上角显示“动态模式”，说明 API 和数据存储已连接。

## 注意

这个版本适合免费部署和小型官网演示。Netlify Blobs 更适合频繁读取、低频写入的轻量数据；如果后续留言量很大或需要复杂后台查询，建议升级为 Supabase/Postgres 数据库。
