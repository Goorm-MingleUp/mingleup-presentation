import fs from "fs";
import path from "path";
import chalk from "chalk";

const FIX_MODE = process.argv.includes("--fix");
const root = process.cwd();

console.log(
  chalk.bold(
    `\n🔍 TailwindCSS 설정 점검 시작... ${FIX_MODE ? "(자동 수정 모드 활성)" : ""}\n`
  )
);

// ---------- 유틸 함수 ----------
const write = (file, content) => fs.writeFileSync(file, content, "utf-8");
const exists = (f) => fs.existsSync(path.join(root, f));
const read = (f) => fs.readFileSync(path.join(root, f), "utf-8");

// ---------- 1️⃣ Tailwind 설정 확인 ----------
if (!exists("tailwind.config.js")) {
  console.log(chalk.red("❌ tailwind.config.js 없음"));
  if (FIX_MODE) {
    console.log(chalk.yellow("→ 새 Tailwind 설정 파일 생성 중..."));
    write(
      "tailwind.config.js",
      `export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};`
    );
    console.log(chalk.green("✅ tailwind.config.js 생성 완료"));
  }
} else {
  console.log(chalk.green("✅ tailwind.config.js 존재"));
}

// ---------- 2️⃣ PostCSS 설정 ----------
let postcssFile = exists("postcss.config.cjs")
  ? "postcss.config.cjs"
  : exists("postcss.config.js")
  ? "postcss.config.js"
  : null;

if (!postcssFile && FIX_MODE) {
  console.log(chalk.yellow("→ PostCSS 설정 파일 생성 중..."));
  postcssFile = "postcss.config.cjs";
  write(
    postcssFile,
    `module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};`
  );
  console.log(chalk.green("✅ postcss.config.cjs 생성 완료"));
} else if (postcssFile && postcssFile.endsWith(".js") && FIX_MODE) {
  console.log(
    chalk.yellow("⚠️ postcss.config.js는 ESM에서 동작하지 않음 → .cjs로 변경 중...")
  );
  fs.renameSync("postcss.config.js", "postcss.config.cjs");
  console.log(chalk.green("✅ postcss.config.cjs로 변경 완료"));
} else if (postcssFile) {
  console.log(chalk.green("✅ PostCSS 파일 존재:"), postcssFile);
}

// ---------- 3️⃣ index.css 확인 ----------
const cssPath = "src/index.css";
if (!exists(cssPath)) {
  console.log(chalk.red("❌ src/index.css 없음"));
  if (FIX_MODE) {
    console.log(chalk.yellow("→ index.css 새로 생성 중..."));
    write(
      cssPath,
      `@import "tailwindcss/preflight";
@import "tailwindcss/utilities";
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendardvariable.css");

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #ffffff;
  color: #333;
  font-family: "Pretendard Variable", system-ui, sans-serif;
}`
    );
    console.log(chalk.green("✅ index.css 생성 완료"));
  }
} else {
  const css = read(cssPath);
  if (!css.includes("@import")) {
    console.log(chalk.red("⚠️ Tailwind import 누락"));
    if (FIX_MODE) {
      write(
        cssPath,
        `@import "tailwindcss/preflight";
@import "tailwindcss/utilities";
${css}`
      );
      console.log(chalk.green("✅ @import 문 추가 완료"));
    }
  } else {
    console.log(chalk.green("✅ index.css 정상 구성"));
  }
}

// ---------- 4️⃣ index.html 확인 ----------
const htmlPath = "index.html";
if (!exists(htmlPath)) {
  console.log(chalk.red("❌ index.html 없음"));
} else {
  const html = read(htmlPath);
  if (!html.includes("src/index.css")) {
    console.log(chalk.red("⚠️ index.html에 CSS 연결 누락"));
    if (FIX_MODE) {
      const fixed = html.replace(
        /<\/head>/i,
        `  <link rel="stylesheet" href="/src/index.css" />\n</head>`
      );
      write(htmlPath, fixed);
      console.log(chalk.green("✅ index.html에 CSS 링크 추가 완료"));
    }
  } else {
    console.log(chalk.green("✅ index.html → index.css 연결 확인"));
  }
}

// ---------- 5️⃣ Tailwind 설치 여부 ----------
const pkgPath = "package.json";
if (!exists(pkgPath)) {
  console.log(chalk.red("❌ package.json 없음"));
} else {
  const pkg = JSON.parse(read(pkgPath));
  const deps = { ...pkg.dependencies, ...pkg.devDependencies };
  if (!deps.tailwindcss) {
    console.log(chalk.red("❌ TailwindCSS 미설치"));
    console.log(
      chalk.yellow(
        "→ npm install -D tailwindcss @tailwindcss/postcss 실행 필요"
      )
    );
  } else {
    console.log(chalk.green(`✅ TailwindCSS 설치됨 (v${deps.tailwindcss})`));
  }
}

console.log(chalk.bold("\n🧩 점검 완료!\n"));
if (FIX_MODE) console.log(chalk.cyan("💡 자동 수정된 항목이 반영되었습니다.\n"));
