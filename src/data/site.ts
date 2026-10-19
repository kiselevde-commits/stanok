export const company = {
  name: 'SingaTech Mash',
  tagline: 'Высокоточное оборудование из Сингапура',
  phone: '8 (800) 555-35-99',
  phoneHref: 'tel:88005553599',
  email: 'info@singatech-mash.ru',
  telegram: 'https://t.me/singatech_mash',
  whatsapp: 'https://wa.me/78005553599',
  offices: [
    { label: 'Офис продаж', city: 'Москва', address: 'Пресненская наб., 12' },
    { label: 'Склад и шоурум', city: 'Екатеринбург', address: 'ул. Машиностроителей, 19' },
  ],
}

export const nav = [
  { id: 'catalog', label: 'Каталог' },
  { id: 'quiz', label: 'Подбор станка' },
  { id: 'advantages', label: 'Преимущества' },
  { id: 'leasing', label: 'Лизинг и доставка' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'about', label: 'О нас' },
  { id: 'contacts', label: 'Контакты' },
]

export interface CatalogItem {
  id: string
  series: string
  title: string
  variant: 'turn' | 'mill' | 'grind' | 'edm'
  specs: string[]
}

export const catalog: CatalogItem[] = [
  {
    id: 'st-turn',
    series: 'ST-Turn',
    title: 'Токарно-фрезерные обрабатывающие центры',
    variant: 'turn',
    specs: [
      'Диаметр обработки до 650 мм',
      'РМЦ до 1500 мм',
      'Приводной инструмент',
      'ЧПУ Fanuc / Siemens',
    ],
  },
  {
    id: 'st-mill',
    series: 'ST-Mill 5X',
    title: '5-осевые вертикальные фрезерные центры',
    variant: 'mill',
    specs: [
      'Стол Ø500 мм',
      'Скорость шпинделя 15 000 об/мин',
      'Сложная геометрия и лопатки турбин',
      'Одновременная обработка 5 осей',
    ],
  },
  {
    id: 'st-grind',
    series: 'ST-Grind',
    title: 'Плоскошлифовальные и круглошлифовальные станки',
    variant: 'grind',
    specs: [
      'Точность до 1 мкм',
      'Гидравлика Yuken',
      'Автоматическая правка круга',
      'ЧПУ и цифровая индикация',
    ],
  },
  {
    id: 'st-edm',
    series: 'ST-EDM',
    title: 'Электроэрозионные проволочно-вырезные станки',
    variant: 'edm',
    specs: [
      'Обработка закалённых сталей и титана',
      'Шероховатость Ra 0.4 мкм',
      'Автозаправка проволоки',
      'Высокая точность контура',
    ],
  },
]

export interface Advantage {
  icon: 'shield' | 'layers' | 'wrench' | 'clock'
  title: string
  text: string
}

export const advantages: Advantage[] = [
  {
    icon: 'shield',
    title: 'Никаких блокировок ПО',
    text: 'Лицензионные стойки ЧПУ без риска дистанционного отключения — оборудование полностью автономно на вашем производстве.',
  },
  {
    icon: 'layers',
    title: 'Тяжёлые литые станины',
    text: 'Чугун Meehanite, прошедший естественное старение: никакой вибрации на высоких подачах и стабильная точность.',
  },
  {
    icon: 'wrench',
    title: 'Шеф-монтаж и ПНР',
    text: 'Бригада инженеров приедет на завод, выставит станок по уровню, запустит и сдаст первую годную деталь.',
  },
  {
    icon: 'clock',
    title: 'Сервис 24/7',
    text: 'Выезд сервисного инженера по РФ в течение 48 часов при любой поломке. Свой склад запчастей.',
  },
]

export interface Step {
  icon: 'file' | 'calculator' | 'factory' | 'truck' | 'wrench'
  title: string
  text: string
  /** Ориентировочный срок этапа */
  duration: string
}

export const processSteps: Step[] = [
  { icon: 'file', title: 'Заявка и аудит', text: 'Технический аудит вашего ТЗ или чертежей', duration: '1–2 дня' },
  { icon: 'calculator', title: 'Подбор и договор', text: 'Комплектация, договор, одобрение лизинга или рассрочки', duration: '3–5 дней' },
  { icon: 'factory', title: 'Производство и таможня', text: 'Отгрузка с завода в Сингапуре и таможенная очистка', duration: '25–30 дней' },
  { icon: 'truck', title: 'Доставка', text: 'Тралом до ворот вашего цеха', duration: '5–7 дней' },
  { icon: 'wrench', title: 'Пусконаладка', text: 'Сдача точности и обучение персонала', duration: '3–4 дня' },
]

export interface Stat {
  icon: 'factory' | 'gear' | 'clock' | 'award'
  value: string
  label: string
}

export const stats: Stat[] = [
  { icon: 'award', value: '8 лет', label: 'на рынке промышленного оборудования' },
  { icon: 'factory', value: '140+', label: 'запущенных станков в РФ за 2 года' },
  { icon: 'clock', value: '98%', label: 'станков приходят раньше срока' },
  { icon: 'gear', value: '45 дней', label: 'средняя поставка под ключ' },
]

export interface Review {
  company: string
  /** Отрасль / тип производства */
  industry: string
  /** Имя + должность */
  author: string
  text: string
  /** Серия станка */
  machine: string
  rating: 5 | 4
}

export const reviews: Review[] = [
  {
    company: 'АО «УралТитан»',
    industry: 'Аэрокосмическое машиностроение',
    author: 'Дмитрий Семёнов, главный технолог',
    machine: 'ST-Mill 5X',
    rating: 5,
    text: 'Запустили 5-осевой центр за 38 дней — на неделю раньше договора. Геометрия лопаток турбин попала с первой детали. Сервис работает чётко: заявка утром — инженер вечером.',
  },
  {
    company: 'ООО «СибМашСервис»',
    industry: 'Нефтегазовое машиностроение',
    author: 'Алексей Корнев, директор производства',
    machine: 'ST-Turn',
    rating: 5,
    text: 'Взяли три токарных центра в лизинг с авансом 0%. Оформление заняло 5 дней, включая одобрение банка. Станки стоят уже 18 месяцев без единой внеплановой остановки.',
  },
  {
    company: 'ЗАО «ПромДеталь»',
    industry: 'Оборонная промышленность (ГОЗ)',
    author: 'Игорь Власов, технический директор',
    machine: 'ST-Grind',
    rating: 5,
    text: 'Работаем по 223-ФЗ, нужен был полный пакет документов и сертификаты. SingaTech Mash подготовил всё сопровождение за две недели. Точность шлифовки — стабильно в допуск 0.8 мкм.',
  },
  {
    company: 'ИП Харченко В.С.',
    industry: 'Инструментальное производство',
    author: 'Виктор Харченко, владелец',
    machine: 'ST-EDM',
    rating: 5,
    text: 'Небольшой цех, но станок загружен в три смены. Обрабатываем штампы и пресс-формы для автопрома. Проволока заправляется автоматически — оператор успевает вести 2 машины одновременно.',
  },
]

export interface QuizStep {
  question: string
  options: string[]
}

export const quizSteps: QuizStep[] = [
  {
    question: 'Какой тип обработки требуется?',
    options: ['Токарная', 'Фрезерная 3-оси', 'Фрезерная 5-осей', 'Шлифовка', 'Комплексная линия'],
  },
  {
    question: 'Какой материал обрабатываете?',
    options: ['Конструкционная сталь', 'Нержавейка и жаропрочка', 'Титан', 'Цветные металлы'],
  },
  {
    question: 'Нужен ли расчёт по вашему чертежу?',
    options: ['Да, прикреплю файл', 'Нет, нужен просто прайс'],
  },
]