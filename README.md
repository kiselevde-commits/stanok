# SingaTech Mash — лендинг промышленного оборудования

Одностраничный лендинг под запуск контекстной рекламы. Цель — сбор лидов
(главные инженеры, технологи, директора заводов) через формы и квиз-опросник.

## Стек

- **Vite 6** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (тема через CSS-токены `@theme`)
- Шрифты: Inter (текст) + Montserrat (заголовки)
- Без бэкенда: отправка форм эмулируется на фронте + тост-уведомление

## Запуск

```bash
npm install
npm run dev      # dev-сервер на http://localhost:5173
npm run build    # production-сборка в dist/
npm run preview  # предпросмотр сборки
```

## Структура

```
src/
├── components/
│   ├── ui/               # переиспользуемые компоненты
│   │   ├── Button, Card, Container, Section, SectionHeading, Reveal
│   │   ├── Modal, Toast, LeadFlowProvider   # попапы и уведомления
│   │   ├── LeadForm, TextField, Checkbox    # формы
│   │   ├── Icons, IconByName                # SVG-иконки
│   │   └── MachinePlaceholder               # заглушки изображений станков
│   ├── Header, Hero, Catalog, Quiz
│   ├── Advantages, Process, Stats, Footer
│   └── ...
├── data/site.ts          # весь контент: контакты, каталог, тексты, квиз
├── hooks/useReveal.ts    # появление блоков при скролле
├── lib/validation.ts     # валидация форм и маска телефона
└── styles/index.css      # тема Tailwind v4 + утилиты
```

## Структура лендинга (по ТЗ)

1. **Header** — закреплённый, якорное меню, телефон, кнопка «Заказать звонок».
2. **Hero** — H1, подзаголовок, 3 буллита, 2 CTA-кнопки.
3. **Каталог** — 4 карточки серий (ST-Turn, ST-Mill 5X, ST-Grind, ST-EDM).
4. **Квиз** — 3 шага + финальная форма, прогресс-бар.
5. **Преимущества** — «Почему Сингапур» + плашка 44-ФЗ/223-ФЗ/ГОЗ.
6. **Схема работы** — таймлайн из 5 шагов.
7. **Цифры и доверие** — 8 лет, 140+ станков, 98%, 45 дней.
8. **Footer** — форма связи, контакты, Telegram/WhatsApp, копирайт.

## Редактирование контента

Почти весь текст вынесен в [`src/data/site.ts`](src/data/site.ts:1):
контакты, офисы, каталог, преимущества, шаги, цифры и вопросы квиза.

## Замена изображений-заглушек

Изображения станков и цехов — это векторные заглушки
([`MachinePlaceholder.tsx`](src/components/ui/MachinePlaceholder.tsx:1)).
Чтобы заменить их на реальные фото:

1. Положите фото в `src/assets/` (или `public/`).
2. В компонентах [`Hero.tsx`](src/components/Hero.tsx:1), [`Catalog.tsx`](src/components/Catalog.tsx:1)
   и [`Quiz.tsx`](src/components/Quiz.tsx:1) замените `<MachinePlaceholder ... />`
   на `<img src={...} alt="..." className="..." />`, сохранив размеры контейнера.

## Цвета бренда

Заданы в [`src/styles/index.css`](src/styles/index.css:1) через `@theme`:

- графит — `#1A1D21` (`graphite-800`), `#0F1114` (`graphite-950`)
- акцент — яркий оранжевый `#FF6A00` (`accent-500`)
- вторичный — стальной голубой `#5B8DB8` (`steel-500`)

## Логотип

[`public/logo.svg`](public/logo.svg:1) — монограмма: шестерёнка с силуэтом
ретро-станка внутри + надпись «SingaTech Mash» с подписью.
[`public/favicon.svg`](public/favicon.svg:1) — уменьшенная версия монограммы.