import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { 
  getArticles, 
  getBooks, 
  getVideos, 
  saveContent, 
  Article, 
  Book, 
  BookChapter, 
  Video 
} from '@/data/content';

const ADMIN_PASSWORD = 'admin123';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      loadContent();
    }
  }, [isAuthenticated]);

  const loadContent = () => {
    setArticles(getArticles());
    setBooks(getBooks());
    setVideos(getVideos());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Неверный пароль');
    }
  };

  const handleSaveAll = () => {
    saveContent({ articles, books, videos });
    alert('Все изменения сохранены!');
  };

  const handleArticleSave = () => {
    if (!editingArticle) return;
    
    const index = articles.findIndex(a => a.id === editingArticle.id);
    if (index >= 0) {
      const newArticles = [...articles];
      newArticles[index] = editingArticle;
      setArticles(newArticles);
    } else {
      setArticles([...articles, { ...editingArticle, id: Date.now().toString() }]);
    }
    setEditingArticle(null);
  };

  const handleBookSave = () => {
    if (!editingBook) return;
    
    const index = books.findIndex(b => b.id === editingBook.id);
    if (index >= 0) {
      const newBooks = [...books];
      newBooks[index] = editingBook;
      setBooks(newBooks);
    } else {
      setBooks([...books, { ...editingBook, id: Date.now().toString() }]);
    }
    setEditingBook(null);
  };

  const handleVideoSave = () => {
    if (!editingVideo) return;
    
    const index = videos.findIndex(v => v.id === editingVideo.id);
    if (index >= 0) {
      const newVideos = [...videos];
      newVideos[index] = editingVideo;
      setVideos(newVideos);
    } else {
      setVideos([...videos, { ...editingVideo, id: Date.now().toString() }]);
    }
    setEditingVideo(null);
  };

  const handleDeleteArticle = (id: string) => {
    if (confirm('Удалить эту статью?')) {
      setArticles(articles.filter(a => a.id !== id));
    }
  };

  const handleDeleteBook = (id: string) => {
    if (confirm('Удалить эту книгу?')) {
      setBooks(books.filter(b => b.id !== id));
    }
  };

  const handleDeleteVideo = (id: string) => {
    if (confirm('Удалить это видео?')) {
      setVideos(videos.filter(v => v.id !== id));
    }
  };

  const addChapter = () => {
    if (!editingBook) return;
    const newChapter: BookChapter = {
      id: Date.now().toString(),
      number: editingBook.chapters.length + 1,
      title: '',
      content: ''
    };
    setEditingBook({
      ...editingBook,
      chapters: [...editingBook.chapters, newChapter]
    });
  };

  const updateChapter = (index: number, field: keyof BookChapter, value: string | number) => {
    if (!editingBook) return;
    const newChapters = [...editingBook.chapters];
    newChapters[index] = { ...newChapters[index], [field]: value };
    setEditingBook({ ...editingBook, chapters: newChapters });
  };

  const deleteChapter = (index: number) => {
    if (!editingBook) return;
    const newChapters = editingBook.chapters.filter((_, i) => i !== index);
    setEditingBook({ ...editingBook, chapters: newChapters });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Админ-панель</CardTitle>
            <CardDescription>Введите пароль для доступа</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" className="w-full">Войти</Button>
              <p className="text-sm text-muted-foreground text-center">
                Пароль по умолчанию: admin123
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-light mb-2">Админ-панель</h1>
            <p className="text-muted-foreground">Управление контентом сайта</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleSaveAll} size="lg">
              <Icon name="Save" className="mr-2" size={20} />
              Сохранить все
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '/'}>
              <Icon name="Home" className="mr-2" size={20} />
              На сайт
            </Button>
          </div>
        </div>

        <Tabs defaultValue="articles" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="articles">Статьи</TabsTrigger>
            <TabsTrigger value="books">Книги</TabsTrigger>
            <TabsTrigger value="videos">Видео</TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="space-y-4">
            <Button onClick={() => setEditingArticle({ id: '', title: '', date: '', excerpt: '', content: '', image: '' })}>
              <Icon name="Plus" className="mr-2" size={20} />
              Добавить статью
            </Button>

            {editingArticle && (
              <Card>
                <CardHeader>
                  <CardTitle>{editingArticle.id ? 'Редактировать статью' : 'Новая статья'}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Заголовок"
                    value={editingArticle.title}
                    onChange={(e) => setEditingArticle({ ...editingArticle, title: e.target.value })}
                  />
                  <Input
                    placeholder="Дата"
                    value={editingArticle.date}
                    onChange={(e) => setEditingArticle({ ...editingArticle, date: e.target.value })}
                  />
                  <Input
                    placeholder="URL изображения"
                    value={editingArticle.image}
                    onChange={(e) => setEditingArticle({ ...editingArticle, image: e.target.value })}
                  />
                  <Textarea
                    placeholder="Краткое описание"
                    value={editingArticle.excerpt}
                    onChange={(e) => setEditingArticle({ ...editingArticle, excerpt: e.target.value })}
                    rows={3}
                  />
                  <Textarea
                    placeholder="Полный текст статьи"
                    value={editingArticle.content}
                    onChange={(e) => setEditingArticle({ ...editingArticle, content: e.target.value })}
                    rows={10}
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleArticleSave}>Сохранить</Button>
                    <Button variant="outline" onClick={() => setEditingArticle(null)}>Отмена</Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid gap-4">
              {articles.map((article) => (
                <Card key={article.id}>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <span>{article.title}</span>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" onClick={() => setEditingArticle(article)}>
                          <Icon name="Edit" size={16} />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteArticle(article.id)}>
                          <Icon name="Trash2" size={16} />
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription>{article.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="books" className="space-y-4">
            <Button onClick={() => setEditingBook({ id: '', title: '', year: '', description: '', cover: '', chapters: [] })}>
              <Icon name="Plus" className="mr-2" size={20} />
              Добавить книгу
            </Button>

            {editingBook && (
              <Card>
                <CardHeader>
                  <CardTitle>{editingBook.id ? 'Редактировать книгу' : 'Новая книга'}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Название книги"
                    value={editingBook.title}
                    onChange={(e) => setEditingBook({ ...editingBook, title: e.target.value })}
                  />
                  <Input
                    placeholder="Год издания"
                    value={editingBook.year}
                    onChange={(e) => setEditingBook({ ...editingBook, year: e.target.value })}
                  />
                  <Input
                    placeholder="URL обложки"
                    value={editingBook.cover}
                    onChange={(e) => setEditingBook({ ...editingBook, cover: e.target.value })}
                  />
                  <Textarea
                    placeholder="Описание"
                    value={editingBook.description}
                    onChange={(e) => setEditingBook({ ...editingBook, description: e.target.value })}
                    rows={3}
                  />
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">Главы</h3>
                      <Button onClick={addChapter} size="sm">
                        <Icon name="Plus" className="mr-2" size={16} />
                        Добавить главу
                      </Button>
                    </div>
                    
                    {editingBook.chapters.map((chapter, index) => (
                      <Card key={chapter.id} className="mb-4">
                        <CardContent className="pt-6 space-y-3">
                          <div className="flex justify-between items-start">
                            <Input
                              placeholder="Номер главы"
                              type="number"
                              value={chapter.number}
                              onChange={(e) => updateChapter(index, 'number', parseInt(e.target.value))}
                              className="w-24"
                            />
                            <Button variant="ghost" size="sm" onClick={() => deleteChapter(index)}>
                              <Icon name="Trash2" size={16} />
                            </Button>
                          </div>
                          <Input
                            placeholder="Название главы"
                            value={chapter.title}
                            onChange={(e) => updateChapter(index, 'title', e.target.value)}
                          />
                          <Textarea
                            placeholder="Текст главы"
                            value={chapter.content}
                            onChange={(e) => updateChapter(index, 'content', e.target.value)}
                            rows={5}
                          />
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={handleBookSave}>Сохранить</Button>
                    <Button variant="outline" onClick={() => setEditingBook(null)}>Отмена</Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid gap-4">
              {books.map((book) => (
                <Card key={book.id}>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <span>{book.title}</span>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" onClick={() => setEditingBook(book)}>
                          <Icon name="Edit" size={16} />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteBook(book.id)}>
                          <Icon name="Trash2" size={16} />
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription>{book.year} • {book.chapters.length} глав</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{book.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-4">
            <Button onClick={() => setEditingVideo({ id: '', title: '', url: '', thumbnail: '', description: '' })}>
              <Icon name="Plus" className="mr-2" size={20} />
              Добавить видео
            </Button>

            {editingVideo && (
              <Card>
                <CardHeader>
                  <CardTitle>{editingVideo.id ? 'Редактировать видео' : 'Новое видео'}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Название"
                    value={editingVideo.title}
                    onChange={(e) => setEditingVideo({ ...editingVideo, title: e.target.value })}
                  />
                  <Input
                    placeholder="URL видео"
                    value={editingVideo.url}
                    onChange={(e) => setEditingVideo({ ...editingVideo, url: e.target.value })}
                  />
                  <Input
                    placeholder="URL превью"
                    value={editingVideo.thumbnail}
                    onChange={(e) => setEditingVideo({ ...editingVideo, thumbnail: e.target.value })}
                  />
                  <Textarea
                    placeholder="Описание"
                    value={editingVideo.description}
                    onChange={(e) => setEditingVideo({ ...editingVideo, description: e.target.value })}
                    rows={3}
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleVideoSave}>Сохранить</Button>
                    <Button variant="outline" onClick={() => setEditingVideo(null)}>Отмена</Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid gap-4">
              {videos.map((video) => (
                <Card key={video.id}>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <span>{video.title}</span>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" onClick={() => setEditingVideo(video)}>
                          <Icon name="Edit" size={16} />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteVideo(video.id)}>
                          <Icon name="Trash2" size={16} />
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
