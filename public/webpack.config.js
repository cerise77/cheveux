var path = require('path');

module.exports = {
   entry: "./app/appp.jsx", // входная точка - исходный файл
   output:{
       path: path.resolve(__dirname, './dist'),     // путь к каталогу выходных файлов - папка public
       publicPath: '/dist/',
       filename: "bundle.js"       // название создаваемого файла
       //path: path.resolve(__dirname, 'dist')
   },
   devServer: {
     historyApiFallback: true,
   },
   module:{
       rules:[   //загрузчик для jsx
           {
               test: /\.jsx$/, // определяем тип файлов
               exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
               loader: "babel-loader",   // определяем загрузчик
               options:{
                   presets:["env", "react"]    // используемые плагины
               }
           },
           {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
           },
           {
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            use: [
           'file-loader'
         ]
       }
       ]
   }
}
