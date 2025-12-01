import { Github, Linkedin, Mail, Code, Rocket, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import profileImage from '/public/images/profile.jpg';

function App() {
  // Обработчики для кнопок
  const handleContact = () => {
    window.open('https://t.me/Mikhail14030', '_blank');
  };

  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGithub = () => {
    window.open('https://github.com/mikhailantipov', '_blank');
  };

  const handleLinkedin = () => {
    window.open('https://linkedin.com/in/mikhailantipov', '_blank');
  };

  const handleEmail = () => {
    window.open('https://t.me/Mikhail14030', '_blank');
  };

  const handleProjectClick = (link: string) => {
    if (link !== '#') {
      window.open(link, '_blank');
    }
  };

  const skills = [
    'React', 'TypeScript', 'JavaScript', 'Node.js', 'Python',
    'HTML/CSS', 'Tailwind CSS', 'Git', 'REST API', 'SQL',
    'Express', 'MongoDB', 'PostgreSQL', 'Docker'
  ];

  const projects = [
    {
      title: 'Boomerang Wear',
      description: 'Интернет-магазин футболок с современным дизайном и удобной навигацией',
      tags: ['E-commerce', 'React', 'Responsive Design'],
      link: 'https://www.boomerangwear.ru/'
    },
    {
      title: 'Сайт для писателя',
      description: 'Создание персонального сайта для писателя Андрея Смитта',
      tags: ['React', 'Node.js', 'Responsive Design'],
      link: 'https://andreysmitt.ru/'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-shrink-0">
            <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-primary/20 shadow-2xl">
              <AvatarImage src={profileImage} alt="Михаил Антипов" />
              <AvatarFallback className="text-6xl">МА</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Code className="w-4 h-4" />
              <span className="text-sm font-medium">Доступен для проектов</span>
            </div>
            
            <h1 className="heading-xl mb-4">
              Привет, я <span className="text-gradient">Михаил Антипов</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Fullstack разработчик. Создаю современные веб-приложения с фокусом на производительность, 
              качественный код и отличный пользовательский опыт.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button size="lg" className="gap-2" onClick={handleContact}>
                <Mail className="w-5 h-5" />
                Связаться
              </Button>
              <Button size="lg" variant="outline" className="gap-2" onClick={handleViewProjects}>
                <Rocket className="w-5 h-5" />
                Мои проекты
              </Button>
            </div>
            
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <Button variant="ghost" size="icon" className="rounded-full" onClick={handleGithub}>
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" onClick={handleLinkedin}>
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" onClick={handleEmail}>
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Rocket className="w-8 h-8 text-primary" />
            <h2 className="heading-lg">Обо мне</h2>
          </div>
          
          <Card className="border-2">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Я увлеченный разработчик с опытом создания масштабируемых веб-приложений. 
                Специализируюсь на современных JavaScript фреймворках и люблю решать сложные 
                технические задачи. Постоянно изучаю новые технологии и лучшие практики разработки.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-3xl font-bold text-primary mb-1">3+</div>
                  <div className="text-sm text-muted-foreground">Года опыта</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Качество</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-8 h-8 text-primary" />
            <h2 className="heading-lg">Навыки</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="px-4 py-2 text-base hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Rocket className="w-8 h-8 text-primary" />
            <h2 className="heading-lg">Мои работы</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 cursor-pointer"
                onClick={() => handleProjectClick(project.link)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Давайте работать вместе!</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ищете разработчика для вашего проекта? Свяжитесь со мной, и давайте создадим что-то потрясающее!
          </p>
          
          <Button size="lg" className="gap-2" onClick={handleContact}>
            <Mail className="w-5 h-5" />
            Написать мне
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t">
        <div className="text-center text-muted-foreground">
          <p>© 2025 Михаил Антипов. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;