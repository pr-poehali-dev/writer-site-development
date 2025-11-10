export interface Article {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface BookChapter {
  id: string;
  number: number;
  title: string;
  content: string;
}

export interface Book {
  id: string;
  title: string;
  year: string;
  description: string;
  cover: string;
  chapters: BookChapter[];
}

export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  description: string;
}

const STORAGE_KEY = 'writer-site-content';

export const getStoredContent = () => {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
};

export const saveContent = (content: {
  articles: Article[];
  books: Book[];
  videos: Video[];
}) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
};

export const defaultArticles: Article[] = [
  {
    id: '1',
    title: 'О природе творчества',
    date: '15 марта 2024',
    excerpt: 'Размышления о том, откуда приходят истории и как рождается замысел произведения.',
    content: 'Творчество — это не просто процесс создания чего-то нового. Это глубокое погружение в себя, в свои переживания, страхи и надежды. Каждая история начинается с вопроса, который не дает покоя.\n\nКогда я сажусь за письменный стол, я не знаю, куда приведет меня путь. Герои начинают жить своей жизнью, диктуют свои правила. Писатель становится лишь проводником между мирами.\n\nГлавное — оставаться честным. Перед собой, перед героями, перед читателем.',
    image: 'https://cdn.poehali.dev/projects/c8dfcb43-a0d3-4c99-987e-06a7c658aa30/files/b0995b81-a587-4e7f-aae7-c6bf4bb8979a.jpg'
  },
  {
    id: '2',
    title: 'Слово как инструмент',
    date: '3 апреля 2024',
    excerpt: 'Как найти точные слова для выражения невыразимого.',
    content: 'Слово обладает невероятной силой. Одно точное слово может создать целый мир, вызвать эмоцию, изменить восприятие.\n\nНо как найти это слово? Иногда приходится перебрать десятки вариантов, прежде чем найдется единственно верный. Это как поиск правильной ноты в музыке.\n\nЯзык постоянно развивается, и задача писателя — чувствовать эти изменения, оставаясь при этом верным своему голосу.',
    image: 'https://cdn.poehali.dev/projects/c8dfcb43-a0d3-4c99-987e-06a7c658aa30/files/b0995b81-a587-4e7f-aae7-c6bf4bb8979a.jpg'
  },
  {
    id: '3',
    title: 'Читатель как соавтор',
    date: '20 апреля 2024',
    excerpt: 'Роль читателя в создании литературного произведения.',
    content: 'Книга становится по-настоящему живой только тогда, когда ее читают. До этого момента она существует в потенциале.\n\nКаждый читатель привносит в текст свой опыт, свои ассоциации. Один и тот же текст прочитывается по-разному разными людьми.\n\nЭто и есть магия литературы — она никогда не статична, всегда в движении.',
    image: 'https://cdn.poehali.dev/projects/c8dfcb43-a0d3-4c99-987e-06a7c658aa30/files/b0995b81-a587-4e7f-aae7-c6bf4bb8979a.jpg'
  }
];

export const defaultBooks: Book[] = [
  {
    id: '1',
    title: 'Тени памяти',
    year: '2023',
    description: 'Роман о поисках утраченного прошлого в лабиринтах современного города.',
    cover: 'https://cdn.poehali.dev/projects/c8dfcb43-a0d3-4c99-987e-06a7c658aa30/files/b0995b81-a587-4e7f-aae7-c6bf4bb8979a.jpg',
    chapters: [
      {
        id: '1-1',
        number: 1,
        title: 'Пробуждение',
        content: 'Город просыпался медленно, нехотя. Первые лучи солнца пробивались сквозь плотную завесу смога...'
      },
      {
        id: '1-2',
        number: 2,
        title: 'Встреча',
        content: 'Она стояла у витрины старого книжного магазина. Витрина была пыльной, книги выцвели от времени...'
      }
    ]
  },
  {
    id: '2',
    title: 'Последняя весна',
    year: '2022',
    description: 'Сборник рассказов о мимолетности времени и важности каждого мгновения.',
    cover: 'https://cdn.poehali.dev/projects/c8dfcb43-a0d3-4c99-987e-06a7c658aa30/files/b0995b81-a587-4e7f-aae7-c6bf4bb8979a.jpg',
    chapters: [
      {
        id: '2-1',
        number: 1,
        title: 'Апрельский дождь',
        content: 'Дождь начался внезапно. Крупные капли барабанили по крыше, создавая мелодию, знакомую с детства...'
      }
    ]
  }
];

export const defaultVideos: Video[] = [
  {
    id: '1',
    title: 'Творческий процесс',
    url: 'https://youtube.com/watch?v=example1',
    thumbnail: 'https://cdn.poehali.dev/projects/c8dfcb43-a0d3-4c99-987e-06a7c658aa30/files/b0995b81-a587-4e7f-aae7-c6bf4bb8979a.jpg',
    description: 'Рассказываю о том, как создаю свои произведения'
  },
  {
    id: '2',
    title: 'Интервью о новой книге',
    url: 'https://youtube.com/watch?v=example2',
    thumbnail: 'https://cdn.poehali.dev/projects/c8dfcb43-a0d3-4c99-987e-06a7c658aa30/files/b0995b81-a587-4e7f-aae7-c6bf4bb8979a.jpg',
    description: 'Беседа о "Тенях памяти" и вдохновении'
  },
  {
    id: '3',
    title: 'Мастер-класс по писательству',
    url: 'https://youtube.com/watch?v=example3',
    thumbnail: 'https://cdn.poehali.dev/projects/c8dfcb43-a0d3-4c99-987e-06a7c658aa30/files/b0995b81-a587-4e7f-aae7-c6bf4bb8979a.jpg',
    description: 'Практические советы начинающим авторам'
  }
];

export const getArticles = (): Article[] => {
  const stored = getStoredContent();
  return stored?.articles || defaultArticles;
};

export const getBooks = (): Book[] => {
  const stored = getStoredContent();
  return stored?.books || defaultBooks;
};

export const getVideos = (): Video[] => {
  const stored = getStoredContent();
  return stored?.videos || defaultVideos;
};
