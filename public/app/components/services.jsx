import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';

//import './apper.js';

class Services extends React.Component{
    render(){
        return <div className="services">

        <ul className="list-uslugi">
          <li>
          <h3>Парикмахерские</h3>
              <div className="uslugi-description">

              <div className="uslugi-price_container">
                <div className="uslugi-price_left">
                  <span className="uslugi-price_title">Стрижка волос женская</span>
                  <span className="uslugi-price_underline"></span>
                </div>
                <span className="uslugi-price_count">310-480 грн</span>
              </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Укладка волос</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">500-400 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Вечерняя причёска</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">350-700 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Плетение кос</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">750-1300 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Укладка на горячий инструмент</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">450 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Стрижка мужская</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">150-450 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Стрижка детская</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">150-550 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Стрижка волос детская модельная</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">165 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Частичная стрижка волос (кончики)</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">200 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Стрижка чёлки</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">120 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Полировка волос утюжком</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">120-180 грн</span>
                </div>

                  <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Окрашивание корней</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">310-600 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Мелирование</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">340-500 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Тонирование</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">150-200 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Колорирование волос</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">360-480 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Коррекция бровей</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">120 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Окрашивание ресниц</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">100 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Окрашивание бровей</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">100 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Ламинирование ресниц</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">от 600 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Наращивание ресниц (классика)</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">450 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Наращивание ресниц 2D</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">550 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Наращивание ресниц 2D</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">600 грн</span>
                </div>


              </div>

              <h4>Услуги студии тела</h4>
              <div className="uslugi-description">

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Пилинг тела «SIA of SPA» ( на столе хамам ) жен./муж.</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">570-620 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Лечебный массаж спины + массаж стоп, 45 мин.</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">400 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Оздоровительный детский массаж</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">220 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Оздоровительный детский массаж + кривошеи</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">250 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Тайский классический массаж, 90 мин</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">600 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Тайский терапевтический массаж (спина), 60 мин</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">500 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Восточный массаж шейно-воротниковой зоны, 45 мин</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">300 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Восточный массаж ног, 45 мин</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">300 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Восточный глубинный массаж лица, 45 мин</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">400 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Гидромассаж + омагничивание + лазер</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">480 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">+ подводный вакумный массаж</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">550 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Антицеллюлитная программа «Guam» + массаж спины</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">1400 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Антицеллюлитный массаж + массаж спины</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">820 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Прессотерапия + обёртывание на выбор</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">240-340 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Антицеллюлитное обёртывание хол./гор.</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">100 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Гидромассаж + жемчужная ванна, 45 мин.</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">460 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Ультра увлажняющая процедура</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">880 грн</span>
                </div>

              </div>

              <h4>Фотоэпиляция</h4>
              <div className="uslugi-description">

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Фотоэпиляция верхней губы жен. / муж.</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">180-200 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Фотоэпиляция подбородка жен. / муж.</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">220-300 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Фотоэпиляция межбровья</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">80 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Фотоэпиляция линии лба</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">150 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Фотоэпиляция висков</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">150 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Фотоэпиляция подмышечных впадин жен. / муж.</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">350-400 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Фотоэпиляция зоны декольте жен. / муж.</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">200-300 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Фотоэпиляция груди муж.</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">600-800 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Фотоэпиляция живота жен. (дорожка)</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">180 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Фотоэпиляция живота жен. / муж.</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">350-500 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Фотоэпиляция спины муж.</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">600-900 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Фотоэпиляция рук до локтя жен. / муж.</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">380-440 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Фотоэпиляция рук полностью жен. / муж.</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">450-550 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Фотоэпиляция кистей рук + пальцы жен. / муж.</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">140-200 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Фотоэпиляция голеней + коленей жен. / муж.</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">660-900 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Фотоэпиляция бёдер жен. / муж.</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">800-900 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Фотоэпиляция бёдер частично</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">400 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Фотоэпиляция ног полностью жен. / муж.</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">1200-1800 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Фотоэпиляция пальцев ног жен. / муж.</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">120-160 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Фотоэпиляция зоны бикини по линии трусиков</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">450 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Фотоэпиляция ягодиц</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">400 грн</span>
                </div>

              </div>

              <h4>Фотоомоложение кожи</h4>
              <div className="uslugi-description">

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Омоложение лица</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">800 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Омоложение шеи + зона декольте</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">800 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Омоложение лица + шея</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">1000 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Омоложение лица + шея + декольте</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">1600 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Омоложение кистей рук</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">400 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Фотодеструкция сосудов, 1 вспышка</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">25 грн</span>
                </div>

              </div>

              <h4>Микроблейдинг бровей</h4>
              <div className="uslugi-description">

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Микроблейдинг бровей</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">2000 грн</span>
                </div>

                <div className="uslugi-price_container">
                  <div className="uslugi-price_left">
                    <span className="uslugi-price_title">Коррекция</span>
                    <span className="uslugi-price_underline"></span>
                  </div>
                  <span className="uslugi-price_count">900 грн</span>
                </div>

              </div>

          </li>

          <li>
          <h3>Маникюр</h3>
          <div className="uslugi-description">

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Маникюр гигиенический жен./муж.</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">135-160 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Маникюр аппаратный жен./муж.</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">160-180 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">СПА-маникюр жен./муж.</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">280-340 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Парафинотерапия для рук</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">280-340 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Художественное оформление всех ногтей</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">от 50 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Художественное оформление одного ногтя</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">от 5 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Гелевое наращивание ногтей</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">550 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Гелевое наращивание «Френч»</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">600 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Ремонт одного ногтя</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">50 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Коррекция длины ногтей</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">50 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Снятие наращённых ногтей / “Shellac”</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">120-80 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Полировка ногтей</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">20 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Обёртывание натуральных ногтей «Френч»/“Shellac”</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">200-250 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Лечение ногтей</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">120 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Восстановление ногтей системой IBX</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">180 грн</span>
            </div>

          </div>

          <h4>Педикюр</h4>
          <div className="uslugi-description">

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Педикюр гигиенический жен., 1 ур / 2 ур</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">360 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Педикюр гигиенический муж.</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">400-420 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Педикюр аппаратный базовый лечебный</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">400 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Педикюр аппаратный жен / муж</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">380-440 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">СПА-педикюр жен./муж.</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">480-600 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Парафинотерапия для ног</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">300 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Лечебный аппаратный педикюр «SUDA»</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">350 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Лечение трещин</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">60 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Удаление вросшего ногтя</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">60 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Удаление мозолей</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">100 грн</span>
            </div>

          </div>

          <h4>Восковая депиляция (ваксинг) и шугаринг</h4>
          <div className="uslugi-description">

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Восковая депиляция ног</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">390 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Восковая депиляция ног до колена</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">220 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Восковая депиляция ног до колена</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">220 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Восковая депиляция ног выше колен</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">280 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Восковая депиляция спины</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">350-480 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Восковая депиляция рук</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">180 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Восковая депиляция зоны бикини по линии трусиков</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">280 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Восковая депиляция зоны глубокого бикини</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">500 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Восковая депиляция экстра бикини</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">650 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Восковая депиляция грудь/живот</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">330 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Восковая депиляция подмышечных впадин</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">150 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Шугаринг ног</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">460 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Шугаринг ног выше колен</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">300 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Шугаринг ног ниже колен</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">240 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Шугаринг рук</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">260 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Шугаринг зоны бикини по линии трусиков</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">300 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Шугаринг зоны глубокого бикини</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">550(ж), 660(м) грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Шугаринг экстра бикини</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">650(ж), 800(м) грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Шугаринг подмышечных впадин</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">180 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Шугаринг лица</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">120 грн (1 зона)</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Шугаринг спины</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">550 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Шугаринг грудь/живот</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">380 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Шугаринг грудь + живота</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">600 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Шугаринг ягодиц</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">160 грн</span>
            </div>

          </div>

          <h4>Пирсинг</h4>
          <div className="uslugi-description">

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Прокол мочки уха пистолетом + серьга</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">280 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Прокол носа системой Caflon</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">150 + 200 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Прокол брови + серьга</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">200 + 100 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Прокол пупка + серьга</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">200 + 150 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Прокол языка</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">300 грн</span>
            </div>

          </div>

          <h4>Криотерапия</h4>
          <div className="uslugi-description">

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Удаление бородавок</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">70 грн (1 шт.)</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Удаление папиллом</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">50 грн (1 шт.)</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Удаление стержневых мозолей</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">от 100 грн (1 шт.)</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Криомассаж</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">200 грн (1 зона)</span>
            </div>

          </div>

          <h4>Татуаж</h4>
          <div className="uslugi-description">

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Татуаж бровей</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">1700 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Татуаж губ</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">1700 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Татуаж верхнего века</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">1400 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Татуаж нижнего века</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">400 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Стрелки</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">1300 грн</span>
            </div>

            <div className="uslugi-price_container">
              <div className="uslugi-price_left">
                <span className="uslugi-price_title">Родинка (мушка)</span>
                <span className="uslugi-price_underline"></span>
              </div>
              <span className="uslugi-price_count">220 грн</span>
            </div>

          </div>

          </li>
        </ul>


        </div>;
    }
}
module.exports = Services;


/*<table className="products">
<caption><b>Парикмахерские</b></caption>
  <tr>
    <td>Женская стрижка (короткие волосы)</td>
    <td>310 грн</td>
    <td>Укладка EASY</td>
    <td>310 грн</td>
  </tr>
  <tr>
    <td>Женская стрижка (средние волосы)</td>
    <td>330 грн</td>
  </tr>
  <tr>
    <td>Женская стрижка (длинные волосы)</td>
    <td>360 грн</td>
  </tr>
  <tr>
    <td>Коррекция челки</td>
    <td>200 грн</td>
  </tr>
  <tr>
    <td>Плетение кос</td>
    <td>400 – 800 грн</td>
  </tr>
</table>*/

/*const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;
const NavLink = ReactRouterDOM.NavLink;
const phones =[
                {id: 1, name: "iPhone 7"},
                {id: 2, name: "Google Pixel"},
                {id: 3, name: "HTC U Ultra"}
            ];

class Home extends React.Component{
    render(){
        return <h2>Главная</h2>;
    }
}
class About extends React.Component{
    render(){
        return <h2>О сайте</h2>;
    }
}
class NotFound extends React.Component{
    render(){
        return <h2>Ресурс не найден</h2>;
    }
}
 class ProductsList extends React.Component{
    render(){
        return <div>
                <h2>Список товаров</h2>
                <ul>
                {
                    phones.map(function(item){
                        return <li key={item.id}>
                                 <NavLink to={`/products/${item.id}`}>{item.name}</NavLink>
                               </li>
                    })
                }
            </ul>
        </div>;
    }
}
class Product extends React.Component{
    render(){
        const prodId = this.props.match.params.id;
        let phone;
        for(var i=0; i<phones.length; i++){
            if(phones[i].id==prodId){
                phone = phones[i];
                break;
            }
        }
        if(phone===undefined)
            return <h2>Товар не найден</h2>;
        else
            return <h2>Товар {phone.name}</h2>;
    }
}
class Products extends React.Component{
    render(){
        return <div>
                    <Switch>
                        <Route path="/products/:id" component={Product} />
                    </Switch>
                </div>;
    }
}
ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route path="/products" component={Products} />
            </Switch>
        </div>
    </Router>,
    document.getElementById("app")
)*/
