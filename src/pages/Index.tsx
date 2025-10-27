import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: "Sparkles",
    title: "Керамические коронки",
    description: "Высокопрочные коронки из диоксида циркония с естественной эстетикой"
  },
  {
    icon: "Smile",
    title: "Виниры",
    description: "Тончайшие керамические пластины для идеальной улыбки"
  },
  {
    icon: "Waves",
    title: "Мостовидные протезы",
    description: "Несъемные конструкции для восстановления зубного ряда"
  },
  {
    icon: "Award",
    title: "Индивидуальные абатменты",
    description: "Персональные решения для имплантации"
  }
];

const technologies = [
  {
    icon: "Cpu",
    title: "CAD/CAM технологии",
    description: "Компьютерное проектирование и фрезеровка"
  },
  {
    icon: "Scan",
    title: "3D-сканирование",
    description: "Прецизионное цифровое моделирование"
  },
  {
    icon: "Flame",
    title: "Прессованная керамика",
    description: "E.max для максимальной эстетики"
  },
  {
    icon: "Layers",
    title: "Многослойное окрашивание",
    description: "Естественный градиент цвета"
  }
];

const portfolio = [
  {
    id: 1,
    before: "https://cdn.poehali.dev/projects/4d2a3438-523b-4d1d-b221-5fbe39a88275/files/111ad0f8-019e-4cd2-b1b5-882458ed97d5.jpg",
    after: "https://cdn.poehali.dev/projects/4d2a3438-523b-4d1d-b221-5fbe39a88275/files/4d3ef627-37ff-4c87-91a3-5c5452ab3a4a.jpg",
    title: "Керамические коронки"
  },
  {
    id: 2,
    before: "https://cdn.poehali.dev/projects/4d2a3438-523b-4d1d-b221-5fbe39a88275/files/4d3ef627-37ff-4c87-91a3-5c5452ab3a4a.jpg",
    after: "https://cdn.poehali.dev/projects/4d2a3438-523b-4d1d-b221-5fbe39a88275/files/1c5a0f20-4bf6-451f-bbef-862dcd242cf1.jpg",
    title: "Виниры"
  },
  {
    id: 3,
    before: "https://cdn.poehali.dev/projects/4d2a3438-523b-4d1d-b221-5fbe39a88275/files/1c5a0f20-4bf6-451f-bbef-862dcd242cf1.jpg",
    after: "https://cdn.poehali.dev/projects/4d2a3438-523b-4d1d-b221-5fbe39a88275/files/111ad0f8-019e-4cd2-b1b5-882458ed97d5.jpg",
    title: "Мостовидный протез"
  }
];

const pricing = [
  { service: "Керамическая коронка", price: "от 15 000 ₽" },
  { service: "Винир керамический", price: "от 18 000 ₽" },
  { service: "Мостовидный протез", price: "от 35 000 ₽" },
  { service: "Индивидуальный абатмент", price: "от 12 000 ₽" },
  { service: "Временная коронка", price: "от 3 000 ₽" },
  { service: "Культевая вкладка", price: "от 8 000 ₽" }
];

const BeforeAfterSlider = ({ before, after, title }: { before: string; after: string; title: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg cursor-ew-resize group" onMouseMove={handleMouseMove}>
      <div className="absolute inset-0">
        <img src={after} alt={`${title} - После`} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 transition-all duration-75" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
        <img src={before} alt={`${title} - До`} className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg transition-all duration-75" style={{ left: `${sliderPosition}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <Icon name="MoveHorizontal" size={20} className="text-primary" />
        </div>
      </div>
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">
        До
      </div>
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">
        После
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-primary-foreground">
        {title}
      </div>
    </div>
  );
};

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="https://cdn.poehali.dev/files/2161f45f-af5b-420d-886e-f6199ecbf580.jpg" alt="LIPIN DENTAL LAB" className="h-12 w-auto" />
              <span className="text-2xl font-bold text-primary">LIPIN DENTAL LAB</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Главная', 'Услуги', 'О лаборатории', 'Технологии', 'Портфолио', 'Прайс', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 bg-gradient-to-br from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <img src="https://cdn.poehali.dev/files/2161f45f-af5b-420d-886e-f6199ecbf580.jpg" alt="LIPIN DENTAL LAB" className="h-48 w-auto" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-primary">LIPIN DENTAL LAB</span><br />
              Зуботехническая лаборатория премиум-класса
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Создаём идеальные улыбки с использованием передовых технологий CAD/CAM и высококачественных материалов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Icon name="Calendar" size={20} className="mr-2" />
                Заказать работу
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('портфолио')}>
                <Icon name="Image" size={20} className="mr-2" />
                Смотреть работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр зуботехнических работ с гарантией качества
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon name={service.icon} size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="о-лаборатории" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">О лаборатории</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы работаем с 2010 года и за это время создали более 50 000 качественных зубных протезов для клиник по всей России.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">15+ лет опыта</h3>
                    <p className="text-muted-foreground">Команда сертифицированных зубных техников</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Быстрое изготовление</h3>
                    <p className="text-muted-foreground">Срочные работы от 1 дня</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Гарантия качества</h3>
                    <p className="text-muted-foreground">5 лет гарантии на все работы</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Выполненных работ</div>
              </Card>
              <Card className="p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Партнёров</div>
              </Card>
              <Card className="p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </Card>
              <Card className="p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Лет на рынке</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="технологии" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Современные технологии</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Используем передовое оборудование для создания протезов высочайшего качества
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={tech.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{tech.title}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Наведите курсор и двигайте для сравнения результатов "до" и "после"
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolio.map((item) => (
              <BeforeAfterSlider key={item.id} before={item.before} after={item.after} title={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section id="прайс" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Прайс-лист</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачные цены на все виды работ
            </p>
          </div>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                {pricing.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-4 border-b last:border-b-0">
                    <span className="font-medium">{item.service}</span>
                    <span className="text-xl font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-secondary/30 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  * Точная стоимость рассчитывается индивидуально после консультации
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="контакты" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-muted-foreground">info@dentallab.ru</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Адрес</h3>
              <p className="text-muted-foreground">Москва, ул. Примерная, 10</p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="https://cdn.poehali.dev/files/2161f45f-af5b-420d-886e-f6199ecbf580.jpg" alt="LIPIN DENTAL LAB" className="h-10 w-auto" />
                <span className="text-xl font-bold">LIPIN DENTAL LAB</span>
              </div>
              <p className="text-sm text-gray-400">
                Профессиональная зуботехническая лаборатория с 2010 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Коронки</li>
                <li>Виниры</li>
                <li>Протезы</li>
                <li>Абатменты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О лаборатории</li>
                <li>Технологии</li>
                <li>Портфолио</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@dentallab.ru</li>
                <li>Москва, ул. Примерная, 10</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 LIPIN DENTAL LAB. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;