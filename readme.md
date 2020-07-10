创建pakage.json
# npm init -y 
安装核心包
# npm i react --save
安装react-dom
# npm i react-dom --save
安装babel(JS编译器，将ES6编译为ES5=> JSX)
# npm i babel-standalone --save
新建 hello.html
新建 jsxDemo.html
新建 jsxDemo2.html
新建文件夹 jsFile ,新建index.html和index.js文件
    注意：这里有一个问题，文件夹中html中script src='text/babel' 来引入js文件直接在浏览器中打开会有一个跨域的报错，
         因为 script标签设置为text/babel ，结果其执行时间总是很晚，要晚于text/javascript这种的script标签，
         并且加载引入的js文件时使用了file协议，该协议会导致跨域，而使用htpp、https等协议时则没有跨域问题。
         而使用file协议则是因为在浏览器中查看html文件时没有起服务
         所以要看结果可以在vscode中安装插件 Live server 会临时打开一个本地服务器，在打开html文件是右键使用open with Live server的方式就可以看到结果了

新建 map_object.html
新建 com组件基础1.html
新建 com组件基础2.html
新建 classCom1.html
新建 propsDemo.html
新建 propsDemo2.html
新建 renderOutData.html
新建 state1.html
新建 state2.html
新建 ref转发.html
新建 事件与this.html
新建 条件渲染.html
新建 状态提升.html
