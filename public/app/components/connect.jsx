import React from 'react';

class Connect extends React.Component{
    render(){
        return <div className="connect">
        <h3 className="hcontact">Написать нам</h3>
        <form className="clearfix">
          <div className="half clearfix">
            <input type="text" className="input-name" placeholder="Ваше имя:"/>
            <input type="email" className="input-email" placeholder="Ваш E-Mail:"/>
          </div>
          <div className="half clearfix">
            <textarea name="message" type="text" className="input-message" placeholder="Ваш вопрос:"></textarea>
          </div>
          <input type="submit" value="Отправить" className="input-submit"/>
        </form>
        </div>;
    }
}
module.exports = Connect;
