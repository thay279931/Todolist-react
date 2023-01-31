# Visual Studio Code 中的 CRA 專案 ESLint 與 Prettier 設定方式

- 註: 以下 Create-React-App 簡稱為 CRA
- 註: 以下 Visual Studio Code 簡稱為 VS Code
- 註: [yarn](https://yarnpkg.com/) 需要額外安裝，Yarn 是 Facebook 提供的替代 npm 的工具，可以加速 node 模組的下載，推薦使用。

## CRA 專案部份

### 第 1 步: 建立新的專案

```sh
npx create-react-app my-app
```

或

> 注意(2022/7): 以下指令在 Windows 10 平台仍然會安裝失敗: 參考[yarn issue#5560](https://github.com/yarnpkg/yarn/issues/5560)，如果失敗請使用上面的 NPM 指令。

```sh
yarn create react-app my-app
```

### 第 2 步: 安裝 ESLint 與 Prettier 模組

在終端機裡，對應專案的根目錄，輸入以下的指令(選擇其一):

yarn 使用:

```sh
yarn add eslint-plugin-prettier prettier eslint-config-react-app eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

或

npm 使用:

```sh
npm install --save-dev eslint-plugin-prettier prettier eslint-config-react-app eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

### 第 3 步: 加入 eslint 與 prettier 設定檔案

下載 `.eslintrc` 與 `.prettierrc` 與 `.prettierignore` 與 `.eslintignore` 的設定檔，拷貝到專案的根目錄。

---

## VS Code 開發工具部份

### 第 1 步: 安裝 VS Code 中的 ESLint 與 Prettier 擴充

安裝以下兩個 VS Code 擴充 (使用擴充套件搜尋名稱即可，安裝下載量最多的。):

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### 第 2 步: 更新 VS Code 設定

請將以下的設定加到你的 VSCode 使用者設定之中(選單->喜好設定)：

```json
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "eslint.alwaysShowStatus": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
```

---

## 其它事項

### 專案目錄

- 專案目錄整個路徑中不能有中文或空白字元
- 專案目錄不可直接建立在路徑 `/Users/YourName/` 中，這會和 npm 全域模組衝突；建立於`文件(Documents)`、另個磁碟機或其它目錄均可以

### VSCode 使用

- VSCode 只有一個視窗一個資料夾目錄管理單一個專案的能力，如果要開發多種不同專案(例如 Node 與 React 兩者)，請分開兩個不同視窗開發管理
- Windows 平台請使用命令提示字元終端機(不要用 powershell，會需要設定權限問題)

### macOS 與 Windows 電腦存取隱藏檔案

#### macOS

- [三招讓 Mac 顯示出隱藏檔案](https://macuknow.com/2017/08/26/1428/%E4%B8%89%E6%8B%9B%E8%AE%93-mac-%E9%A1%AF%E7%A4%BA%E5%87%BA%E9%9A%B1%E8%97%8F%E6%AA%94%E6%A1%88/)
- [How to Show Hidden Files and Folders on Your Mac](https://news.trendmicro.com/2018/03/12/how-to-show-hidden-files-and-folders-on-your-mac/)

#### Windows

- [在 Windows 中檢視隱藏的檔案和資料夾](https://support.microsoft.com/zh-tw/windows/%E5%9C%A8-windows-10-%E4%B8%AD%E6%AA%A2%E8%A6%96%E9%9A%B1%E8%97%8F%E7%9A%84%E6%AA%94%E6%A1%88%E5%92%8C%E8%B3%87%E6%96%99%E5%A4%BE-97fbc472-c603-9d90-91d0-1166d1d9f4b5)
