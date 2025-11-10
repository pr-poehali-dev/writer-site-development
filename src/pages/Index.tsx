import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { getArticles, getBooks, getVideos, Article, Book, Video } from '@/data/content';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    setArticles(getArticles());
    setBooks(getBooks());
    setVideos(getVideos());
  }, []);

  const articlesOld = [
    { 
      id: 1, 
      title: 'О природе творчества', 
      excerpt: 'Размышления о том, откуда приходят идеи и как рождаются истории...',
      date: '15 октября 2024',
      content: 'Творчество — это таинственный процесс, который невозможно до конца объяснить. Идеи приходят неожиданно: во время прогулки, в момент пробуждения, в тишине ночи. Важно научиться их ловить и записывать, пока они не исчезли, как сон наяву.\n\nКаждая история требует своего времени для вызревания. Нельзя торопить процесс, как нельзя заставить цветок распуститься раньше срока. Писатель должен быть терпелив и внимателен к своему внутреннему голосу.'
    },
    { 
      id: 2, 
      title: 'Искусство слова', 
      excerpt: 'Каждое слово имеет вес и значение. Как найти точное выражение мысли...',
      date: '3 ноября 2024',
      content: 'Слово — это инструмент писателя, его кисть и краски. Выбор правильного слова может изменить весь смысл предложения, задать тон всей главе. Поэтому так важно чувствовать язык, понимать его нюансы и оттенки.\n\nВеликие писатели прошлого учили нас точности и краткости. Флобер мог искать нужное слово неделями. Чехов говорил: краткость — сестра таланта. Эти уроки остаются актуальными и сегодня.'
    },
    { 
      id: 3, 
      title: 'Вдохновение и дисциплина', 
      excerpt: 'Писательство — это не только озарение, но и ежедневный труд...',
      date: '20 ноября 2024',
      content: 'Многие начинающие авторы ждут вдохновения, как манны небесной. Но профессиональный писатель знает: вдохновение приходит в процессе работы. Нужно садиться за стол каждый день, даже когда не хочется, даже когда кажется, что нет никаких идей.\n\nДисциплина — вот что отличает писателя от мечтателя. Регулярная практика, постоянное совершенствование мастерства, работа над каждым предложением — это и есть настоящее творчество.'
    }
  ];

  const booksOld = [
    {
      id: 1,
      title: 'Тени прошлого',
      description: 'Роман о памяти, утрате и поиске себя в современном мире',
      year: 2023,
      chapters: [
        { id: 1, title: 'Глава I. Возвращение', content: 'Город встретил его дождём. Серым, холодным, бесконечным дождём, который, казалось, шёл здесь всегда — и когда он уезжал десять лет назад, и сейчас, когда он возвращался.\n\nУлицы изменились до неузнаваемости. Старые дома снесли, на их месте выросли стеклянные башни офисных центров. Парк, где он проводил детство, превратился в торговый комплекс. Даже запахи стали другими — вместо свежести каштанов и сырости после дождя теперь пахло выхлопными газами и кофе из сетевых кофеен.\n\nНо что-то всё же осталось прежним. Что-то неуловимое, что жило не в камнях и деревьях, а в самом воздухе этого места.' },
        { id: 2, title: 'Глава II. Встреча', content: 'Она сидела в том же кафе, за тем же столиком у окна. Будто время остановилось. Будто он и не уезжал никогда.\n\n— Здравствуй, — сказала она, не поднимая глаз от чашки.\n\n— Здравствуй.\n\nОн сел напротив, не зная, что сказать. Слова, которые он готовил все эти годы, вдруг показались неуместными, чужими.\n\n— Ты изменился, — заметила она.\n\n— Ты — нет.\n\nЭто была неправда. Она изменилась. В её глазах появилась усталость, которой не было раньше. Или он просто не замечал?' },
        { id: 3, title: 'Глава III. Воспоминания', content: 'Ночь пришла незаметно. Он сидел в номере гостиницы и смотрел на огни города. Где-то там, среди этих огней, была его прошлая жизнь. Дом, в котором он вырос. Школа, где он встретил её. Набережная, где они гуляли летними вечерами.\n\nВоспоминания накатывали волнами. Сначала приятные — смех, радость, ощущение бесконечности жизни. Потом — горькие. Ссоры, непонимание, та последняя встреча, после которой он уехал.\n\nОн не знал, зачем вернулся. Что надеялся найти здесь? Прощение? Или просто закрыть ту главу, которая так и осталась незаконченной?' }
      ]
    },
    {
      id: 2,
      title: 'Шёпот ветра',
      description: 'Сборник рассказов о тонкой грани между реальностью и мечтой',
      year: 2022,
      chapters: [
        { id: 1, title: 'Рассказ первый. Последний листок', content: 'За окном падал последний осенний лист. Медленно, плавно, как танцор, совершающий свой прощальный поклон. Старик сидел в кресле и наблюдал за этим танцем.\n\nОн знал: когда упадёт последний лист, придёт зима. А зима в его возрасте — это всегда риск. Последняя зима? Или ещё будет весна?\n\nЛист коснулся земли. Старик закрыл глаза.' },
        { id: 2, title: 'Рассказ второй. Станция', content: 'Поезд остановился на маленькой станции посреди леса. Станции, которой не было на карте.\n\n— Десять минут стоянки, — объявил проводник.\n\nОна вышла размять ноги. Перрон был пуст. Только ветер гулял между рельсов, поднимая пыль и старые газеты.\n\n— Красивое место, — сказал кто-то рядом.\n\nОна обернулась. На перроне никого не было.\n\nКогда она вернулась в вагон, проводник посмотрел на неё странно:\n\n— Мы тут не останавливались, мадам.' }
      ]
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="animate-fade-in">
            <div className="max-w-6xl mx-auto mb-16 py-12 grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h1 className="text-5xl md:text-6xl font-light mb-6 animate-slide-up">Александр Волков</h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide mb-6">Писатель</p>
                <Separator className="my-6 max-w-xs" />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Исследую границы человеческой души через слово. Пишу о том, что делает нас людьми — 
                  о памяти, любви, потерях и надежде.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://cdn.poehali.dev/projects/c8dfcb43-a0d3-4c99-987e-06a7c658aa30/files/3288e892-e42c-4c14-8ea2-94f52323816e.jpg"
                  alt="Александр Волков"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>

            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-4xl font-light mb-8 text-center">Последние статьи</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {articles.slice(0, 3).map((article, index) => (
                  <Card 
                    key={article.id} 
                    className="hover:shadow-lg transition-shadow cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setActiveSection('articles')}
                  >
                    <CardHeader>
                      <CardTitle className="text-2xl font-light">{article.title}</CardTitle>
                      <CardDescription>{article.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{article.excerpt}</p>
                      <Button variant="link" className="mt-4 p-0 h-auto">
                        Читать далее <Icon name="ArrowRight" className="ml-2" size={16} />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-light mb-8 text-center">Книги</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {books.map((book, index) => (
                  <Card 
                    key={book.id}
                    className="hover:shadow-lg transition-shadow cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 0.15}s` }}
                    onClick={() => {
                      setSelectedBook(book.id);
                      setActiveSection('books');
                    }}
                  >
                    <CardHeader>
                      <CardTitle className="text-3xl font-light">{book.title}</CardTitle>
                      <CardDescription className="text-base">{book.year}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed text-lg">{book.description}</p>
                      <Button variant="outline" className="mt-6">
                        Читать онлайн <Icon name="BookOpen" className="ml-2" size={18} />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case 'articles':
        return (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl font-light mb-4">Статьи</h1>
            <p className="text-xl text-muted-foreground mb-12">Размышления о литературе и творчестве</p>
            
            <div className="space-y-12">
              {articles.map((article) => (
                <article key={article.id} className="border-b pb-12 last:border-0">
                  <h2 className="text-3xl font-light mb-3">{article.title}</h2>
                  <p className="text-sm text-muted-foreground mb-6">{article.date}</p>
                  <div className="prose prose-lg max-w-none leading-relaxed text-foreground whitespace-pre-line">
                    {article.content}
                  </div>
                </article>
              ))}
            </div>
          </div>
        );

      case 'books':
        if (selectedBook && selectedChapter) {
          const book = books.find(b => b.id === selectedBook);
          const chapter = book?.chapters.find(c => c.id === selectedChapter);
          const currentChapterIndex = book?.chapters.findIndex(c => c.id === selectedChapter) ?? -1;
          
          return (
            <div className="max-w-4xl mx-auto animate-fade-in">
              <Button 
                variant="ghost" 
                className="mb-8"
                onClick={() => setSelectedChapter(null)}
              >
                <Icon name="ArrowLeft" className="mr-2" size={18} />
                Назад к главам
              </Button>
              
              <h1 className="text-5xl font-light mb-3">{book?.title}</h1>
              <h2 className="text-3xl font-light text-muted-foreground mb-12">{chapter?.title}</h2>
              
              <div className="prose prose-xl max-w-none leading-loose text-foreground whitespace-pre-line">
                {chapter?.content}
              </div>

              <Separator className="my-12" />

              <div className="flex justify-between">
                <Button 
                  variant="outline"
                  disabled={currentChapterIndex === 0}
                  onClick={() => book && setSelectedChapter(book.chapters[currentChapterIndex - 1].id)}
                >
                  <Icon name="ChevronLeft" className="mr-2" size={18} />
                  Предыдущая глава
                </Button>
                <Button 
                  variant="outline"
                  disabled={!book || currentChapterIndex === book.chapters.length - 1}
                  onClick={() => book && setSelectedChapter(book.chapters[currentChapterIndex + 1].id)}
                >
                  Следующая глава
                  <Icon name="ChevronRight" className="ml-2" size={18} />
                </Button>
              </div>
            </div>
          );
        }

        if (selectedBook) {
          const book = books.find(b => b.id === selectedBook);
          
          return (
            <div className="max-w-4xl mx-auto animate-fade-in">
              <Button 
                variant="ghost" 
                className="mb-8"
                onClick={() => setSelectedBook(null)}
              >
                <Icon name="ArrowLeft" className="mr-2" size={18} />
                Все книги
              </Button>
              
              <h1 className="text-5xl font-light mb-3">{book?.title}</h1>
              <p className="text-xl text-muted-foreground mb-2">{book?.description}</p>
              <p className="text-sm text-muted-foreground mb-12">{book?.year}</p>
              
              <h3 className="text-2xl font-light mb-6">Содержание</h3>
              <div className="space-y-3">
                {book?.chapters.map((chapter) => (
                  <Card 
                    key={chapter.id}
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setSelectedChapter(chapter.id)}
                  >
                    <CardHeader>
                      <CardTitle className="text-xl font-normal flex items-center justify-between">
                        {chapter.title}
                        <Icon name="ChevronRight" size={20} />
                      </CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          );
        }

        return (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl font-light mb-4">Книги</h1>
            <p className="text-xl text-muted-foreground mb-12">Все произведения доступны для чтения онлайн</p>
            
            <div className="space-y-8">
              {books.map((book) => (
                <Card 
                  key={book.id}
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedBook(book.id)}
                >
                  <CardHeader>
                    <CardTitle className="text-3xl font-light">{book.title}</CardTitle>
                    <CardDescription className="text-base">{book.year}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-4">{book.description}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="BookOpen" size={16} className="mr-2" />
                      {book.chapters.length} {book.chapters.length === 1 ? 'глава' : book.chapters.length < 5 ? 'главы' : 'глав'}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'videos':
        return (
          <div className="max-w-6xl mx-auto animate-fade-in">
            <h1 className="text-5xl font-light mb-4">Видео</h1>
            <p className="text-xl text-muted-foreground mb-12">Выступления, интервью и мастер-классы</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => window.open(video.url, '_blank')}>
                  <div className="relative aspect-video bg-muted">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <Icon name="Play" size={24} className="text-black ml-1" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-normal">{video.title}</CardTitle>
                    <CardDescription>{video.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h1 className="text-5xl font-light mb-4">Обратная связь</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Буду рад вашим отзывам, предложениям и вопросам
            </p>
            
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="ivan@example.com" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Тема сообщения</label>
                    <Input placeholder="О чём хотите написать?" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea 
                      placeholder="Ваше сообщение..." 
                      rows={6}
                      className="resize-none"
                    />
                  </div>
                  
                  <Button size="lg" className="w-full">
                    Отправить сообщение
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Также вы можете связаться со мной:</p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="icon">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Instagram" size={20} />
                </Button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => {
                setActiveSection('home');
                setSelectedBook(null);
                setSelectedChapter(null);
              }}
              className="text-2xl font-light tracking-wide hover:text-primary transition-colors"
            >
              А. Волков
            </button>
            
            <div className="flex gap-8">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'articles', label: 'Статьи', icon: 'FileText' },
                { id: 'books', label: 'Книги', icon: 'BookOpen' },
                { id: 'videos', label: 'Видео', icon: 'Video' },
                { id: 'contact', label: 'Контакт', icon: 'Mail' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setSelectedBook(null);
                    setSelectedChapter(null);
                  }}
                  className={`flex items-center gap-2 transition-colors ${
                    activeSection === item.id 
                      ? 'text-primary font-medium' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="hidden md:inline">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {renderContent()}
      </main>

      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-12 text-center text-muted-foreground">
          <p className="text-sm">© 2024 Александр Волков. Все права защищены.</p>
          <p className="text-xs mt-2">Литературный сайт писателя</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;