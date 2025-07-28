import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-open-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/0addf921-8ba5-4372-bbec-488ad7904b9e.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="mb-8">
            <Icon name="Heart" size={48} className="mx-auto mb-6 text-primary animate-scale-in" />
          </div>
          <h1 className="font-montserrat font-light text-5xl md:text-7xl text-primary mb-4 tracking-wide">
            Анна &amp; Дмитрий
          </h1>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            приглашают вас разделить с ними
          </p>
          <p className="text-2xl md:text-3xl font-montserrat font-medium text-primary mb-4">
            радость свадебного торжества
          </p>
          <div className="flex items-center justify-center space-x-4 text-lg text-muted-foreground">
            <Icon name="Calendar" size={20} />
            <span>15 сентября 2024</span>
            <Icon name="MapPin" size={20} />
            <span>Москва</span>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl font-medium text-primary mb-4">
              Программа торжества
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in border-0 shadow-sm bg-card/50">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-primary">
                  <Icon name="Clock" size={24} />
                  <span className="font-montserrat text-xl">15:00</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg mb-2">Церемония бракосочетания</h3>
                <p className="text-muted-foreground">
                  Торжественная регистрация брака в живописном зале с видом на сад
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in border-0 shadow-sm bg-card/50">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-primary">
                  <Icon name="Clock" size={24} />
                  <span className="font-montserrat text-xl">16:00</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg mb-2">Фотосессия</h3>
                <p className="text-muted-foreground">
                  Съемка молодоженов и гостей в парке усадьбы
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in border-0 shadow-sm bg-card/50">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-primary">
                  <Icon name="Clock" size={24} />
                  <span className="font-montserrat text-xl">17:30</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg mb-2">Коктейльный час</h3>
                <p className="text-muted-foreground">
                  Легкие закуски и напитки на открытой террасе
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in border-0 shadow-sm bg-card/50">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-primary">
                  <Icon name="Clock" size={24} />
                  <span className="font-montserrat text-xl">19:00</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg mb-2">Торжественный ужин</h3>
                <p className="text-muted-foreground">
                  Праздничное застолье, тосты и танцы до утра
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl font-medium text-primary mb-4">
              Место проведения
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Card className="border-0 shadow-sm bg-card/80">
                <CardContent className="p-8">
                  <h3 className="font-montserrat text-2xl font-medium text-primary mb-4">
                    Усадьба "Архангельское"
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start space-x-3">
                      <Icon name="MapPin" size={20} className="mt-1 text-primary" />
                      <div>
                        <p className="font-medium">Адрес:</p>
                        <p>Московская область, Красногорский район, пос. Архангельское</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="Car" size={20} className="mt-1 text-primary" />
                      <div>
                        <p className="font-medium">Как добраться:</p>
                        <p>40 минут от МКАД по Новорижскому шоссе</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="Phone" size={20} className="mt-1 text-primary" />
                      <div>
                        <p className="font-medium">Контакт:</p>
                        <p>+7 (495) 123-45-67</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="animate-fade-in">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <div className="w-full h-80 bg-secondary/40 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Icon name="Map" size={48} className="mx-auto mb-4" />
                    <p>Интерактивная карта</p>
                    <p className="text-sm mt-2">Нажмите для открытия в навигаторе</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drinks Menu Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl font-medium text-primary mb-4">
              Барная карта
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-fade-in border-0 shadow-sm bg-card/50">
              <CardHeader className="text-center pb-4">
                <CardTitle className="flex items-center justify-center space-x-2 text-primary">
                  <Icon name="Wine" size={24} />
                  <span className="font-montserrat text-xl">Шампанское</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Dom Pérignon</span>
                  <span className="text-muted-foreground">Премиум</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span>Veuve Clicquot</span>
                  <span className="text-muted-foreground">Классик</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span>Moët & Chandon</span>
                  <span className="text-muted-foreground">Стандарт</span>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in border-0 shadow-sm bg-card/50">
              <CardHeader className="text-center pb-4">
                <CardTitle className="flex items-center justify-center space-x-2 text-primary">
                  <Icon name="Wine" size={24} />
                  <span className="font-montserrat text-xl">Вина</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Красное сухое</span>
                  <span className="text-muted-foreground">Франция</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span>Белое полусухое</span>
                  <span className="text-muted-foreground">Италия</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span>Розовое сухое</span>
                  <span className="text-muted-foreground">Испания</span>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in border-0 shadow-sm bg-card/50">
              <CardHeader className="text-center pb-4">
                <CardTitle className="flex items-center justify-center space-x-2 text-primary">
                  <Icon name="Coffee" size={24} />
                  <span className="font-montserrat text-xl">Крепкие напитки</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Виски</span>
                  <span className="text-muted-foreground">Шотландия</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span>Коньяк</span>
                  <span className="text-muted-foreground">Франция</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span>Водка премиум</span>
                  <span className="text-muted-foreground">Россия</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Icon name="Heart" size={32} className="mx-auto mb-4" />
            <p className="font-montserrat text-xl font-light mb-2">
              С любовью и нетерпением ждем встречи с вами
            </p>
            <p className="text-primary-foreground/80">
              Анна и Дмитрий
            </p>
          </div>
          <Separator className="my-6 bg-primary-foreground/20" />
          <p className="text-sm text-primary-foreground/60">
            15 сентября 2024 • Усадьба "Архангельское"
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;