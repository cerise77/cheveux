import React from 'react';

class News extends React.Component{
    render(){
        return <div className="news">
        <h3 className="">Новости</h3>
        <ul>
        <li>
            <p>При покупке XCЗР от 500 000 тыс грн. - 500 га агрохимического анализа почвы, с выдачей рекомендаций БЕСПЛАТНО! Лучшие цены и условия поставки. Бесплатные консультации специалистов.</p>
            <span>2017-11-11</span>
        </li>
        <li>
            <p>Минеральное питание Удобрения «УкрХим» - гарант высоких урожаев. «УкрХим» выпускает азотные и фосфорные удобрения, а в ближайшее время планирует запуск производства калийных удобрений, что позволит и далее расширять ассортимент продукции. Вся продукция компании отличается высоким качеством.</p>
            <span>2017-11-03</span>
        </li>
          <li>
              <p>Кислотность почвы: проблемы и решение. Повышение кислотности почвы — одна из важнейших современных агрохимических проблем. Причинами ее возникновения могут служить различные природные и антропогенные факторы, каждый из которых может привести к серьезным последствиям.</p>
              <span>2017-10-22</span>
          </li>
        </ul>
        </div>;
    }
}
module.exports = News;
