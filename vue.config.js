module.exports ={
   devServer:{
       host:'localhost',  // 主机
       port:8080, //端口
       proxy:{
        '/api':{
          target:'http://mall-pre.springboot.cn',
          changeOrigin:true,
          pathRewrite:{
            '/api':''
          }
        }
      }
   }
}