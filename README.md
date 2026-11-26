# Keepsake — Digital & Branding Agency

Навчальний проєкт лендінгу агентства Keepsake, реалізований за допомогою Vite, Pug, модульного SCSS, Sharp для оптимізації зображень та PostCSS / Autoprefixer із контролем якості коду через Prettier, Stylelint і Husky.

Посилання на сайт (GitHub Pages): [https://demianmysiv.github.io/landing-keepsake-vite/](https://www.google.com/search?q=https://demianmysiv.github.io/landing-keepsake-vite/)

## Використані технології та інструменти

* Vite — збірка та локальний сервер розробки й перегляду
* Vituum та @vituum/vite-plugin-pug — компіляція Pug-шаблонів, макетів, компонентів і даних
* Sass (SCSS) — модульна архітектура стилів (abstracts, base, layout, components із @use та @forward, міксини й змінні)
* Sharp (process-images.js) — генерація оптимізованих зображень у форматах AVIF, WebP та JPEG (400w / 800w) для тегу picture
* PostCSS та Autoprefixer (.browserslistrc) — автоматичне додавання вендорних префіксів для цільових браузерів
* Prettier, Stylelint, Husky та lint-staged — автоматичне форматування та лінтинг коду перед комітом

## Запуск проєкту

### 1. Встановлення залежностей

```bash
npm install

```

### 2. Режим розробки

```bash
npm run dev

```

### 3. Оптимізація зображень (за потреби)

```bash
node process-images.js

```

### 4. Збірка для продакшну

```bash
npm run build

```

### 5. Локальний перегляд зібраної версії

```bash
npm run preview

```

## Структура проєкту

```text
landing-keepsake-vite/
 ├─ .husky/               # Git-хуки (перевірка перед комітом)
 ├─ src/
 │   ├─ assets/           # вихідні та оптимізовані зображення
 │   ├─ components/       # Pug-компоненти секцій (header, hero, works, cta, services, stats, clients, journal, footer)
 │   ├─ data/             # дані для генерації списків і карток через цикли Pug
 │   ├─ layouts/          # базовий макет main.pug
 │   ├─ mixins/           # Pug-міксини (зокрема +picture)
 │   └─ styles/           # модульний SCSS (abstracts, base, layout, components, main.scss)
 ├─ .browserslistrc       # список цільових браузерів для Autoprefixer
 ├─ .gitignore            # виключення node_modules, dist, package-lock.json тощо
 ├─ .prettierrc           # налаштування форматування коду
 ├─ .stylelintrc.json     # правила лінтингу CSS/SCSS
 ├─ main.js               # точка входу для Vite
 ├─ package.json          # залежності та npm-скрипти
 ├─ postcss.config.js     # конфігурація PostCSS та Autoprefixer
 ├─ process-images.js     # скрипт нарізки та конвертації зображень
 └─ vite.config.js        # конфігурація Vite + Vituum

```
