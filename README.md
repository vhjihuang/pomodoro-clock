# Pomodoro Clock (番茄钟)

A simple and intuitive Pomodoro Clock built with React and Redux. This application helps you manage your time effectively by breaking down work into focused intervals, traditionally 25 minutes in length, separated by short breaks.

一个使用 React 和 Redux 构建的简洁直观的番茄钟应用。它通过将工作分解为专注的时间间隔（传统上为 25 分钟），并辅以短暂休息，帮助你有效地管理时间。

---

## Features (功能特性)

* **Adjustable Session & Break Lengths**: Customize your work and break intervals (1-60 minutes).
* **Countdown Timer**: A clear display of the remaining time for the current phase.
* **Automatic Phase Switching**: Seamless transition between session and break phases once the timer reaches zero.
* **Start/Stop Functionality**: Pause and resume the timer at any point.
* **Reset Option**: Reset all settings and the timer to their default states.
* **Audible Alerts**: A "beep" sound indicates the end of a session or break.
* **Responsive Design**: Built with Bootstrap for a clean and mobile-friendly interface.

* **可调节会话和休息时长**: 自定义你的工作和休息时间间隔（1-60分钟）。
* **倒计时计时器**: 清晰显示当前阶段的剩余时间。
* **自动阶段切换**: 计时器归零后，自动无缝切换会话和休息阶段。
* **开始/暂停功能**: 随时暂停和恢复计时器。
* **重置选项**: 将所有设置和计时器重置为默认状态。
* **声音提醒**: “哔”声提示会话或休息结束。
* **响应式设计**: 使用 Bootstrap 构建，界面简洁，适配移动设备。

---

## Technologies Used (使用的技术)

* **React**: A JavaScript library for building user interfaces.
* **Redux**: A predictable state container for JavaScript apps, managed efficiently with Redux Toolkit.
* **Bootstrap**: A popular CSS framework for responsive and mobile-first front-end development.
* **Vite**: A fast build tool for modern web projects.
* **SASS/SCSS (Optional)**: For enhanced CSS pre-processing capabilities.

* **React**: 用于构建用户界面的 JavaScript 库。
* **Redux**: 一个用于 JavaScript 应用的可预测状态容器，通过 Redux Toolkit 进行高效管理。
* **Bootstrap**: 一个流行的 CSS 框架，用于响应式和移动优先的前端开发。
* **Vite**: 一个用于现代 Web 项目的快速构建工具。
* **SASS/SCSS (可选)**: 用于增强 CSS 预处理能力。

---

## Setup and Installation (设置与安装)

To get this project up and running on your local machine, follow these steps:

要在你的本地机器上运行此项目，请遵循以下步骤：

1.  **Clone the repository (克隆仓库)**:
    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
    cd YOUR_REPO_NAME
    ```
    *(Remember to replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.)*
    *(请记住将 `YOUR_USERNAME` 和 `YOUR_REPO_NAME` 替换为你的 GitHub 用户名和仓库名。)*

2.  **Install dependencies (安装依赖)**:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server (运行开发服务器)**:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application should now be running in your browser, usually at `http://localhost:5173`.

    应用程序现在应该在你的浏览器中运行，通常在 `http://localhost:5173`。

---

## Deployment to GitHub Pages (部署到 GitHub Pages)

This project can be easily deployed to GitHub Pages using the `gh-pages` package.

该项目可以使用 `gh-pages` 包轻松部署到 GitHub Pages。

1.  **Install `gh-pages` (安装 `gh-pages`)**:
    ```bash
    npm install --save-dev gh-pages
    # or
    yarn add --dev gh-pages
    ```

2.  **Configure `package.json` (配置 `package.json`)**:
    Add your `homepage` URL and `predeploy`/`deploy` scripts:

    添加你的 `homepage` URL 和 `predeploy`/`deploy` 脚本：

    ```json
    {
      "name": "pomodoro-clock",
      "version": "0.1.0",
      "private": true,
      "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME", // <-- Add this line
      "scripts": {
        "dev": "vite",
        "build": "vite build",
        "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
        "preview": "vite preview",
        "predeploy": "npm run build",  // <-- Add this line
        "deploy": "gh-pages -d dist"   // <-- Add this line
      },
      "dependencies": {
        // ... your dependencies here
      },
      "devDependencies": {
        "gh-pages": "^X.Y.Z" // Make sure gh-pages version is here, e.g., "^6.1.1"
      }
    }
    ```
    *(Remember to replace `YOUR_USERNAME` and `YOUR_REPO_NAME`. Also, ensure `gh-pages` is listed in `devDependencies` with its installed version, e.g., `^6.1.1`.)*
    *(请记住替换 `YOUR_USERNAME` 和 `YOUR_REPO_NAME`。另外，请确保 `gh-pages` 存在于 `devDependencies` 中，并显示其安装版本，例如 `^6.1.1`。)*

3.  **Run deployment command (运行部署命令)**:
    ```bash
    npm run deploy
    # or
    yarn deploy
    ```

4.  **Enable GitHub Pages in repository settings (在仓库设置中启用 GitHub Pages)**:
    Go to your GitHub repository -> `Settings` -> `Pages`. Select the `gh-pages` branch as the source and click `Save`. Your site will be live at the `homepage` URL shortly.

    前往你的 GitHub 仓库 -> `Settings` -> `Pages`。选择 `gh-pages` 分支作为来源并点击 `Save`。你的网站很快就会在 `homepage` URL 上线。