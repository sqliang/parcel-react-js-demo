/**
 * @file fis-deploy
 *
 * @usage
 * fis3 release --root=./dist/ --file=./fis-conf.js
 * fis3具体内容学习参考：http://fis.baidu.com/
 */

const path = require('path');
// 应用程序名称
const appName = 'parcelReactJs';

// 本地
fis.media('local').match('*', {
    useCompile: false,
    deploy: fis.plugin('local-deliver', {
        to: path.resolve(__dirname,'./output')
    })
});

// 配置想要把前端代码 push 到 xxx 开发机 xxx 目录
const devUrls = {
    sqliang: {
        host: 'http://xxx.yyy.com:8999',
        dir: '/home/work/odp'
    }
};

// 使用 fis3 内置的 http-push 插件将打包好的文件部署到相应开发机下的 odp 环境
Object.keys(devUrls).forEach(key => {
    // 静态资源 deploy
    fis.media(key).match('!(*.html)', {
        useCompile: false,
        deploy: fis.plugin('http-push', {
            receiver: `${devUrls[key].host}/receiver.php`,
            to: `${devUrls[key].dir}/webroot/static/${appName}`
        })
    });
    // html 文件 deploy
    fis.media(key).match('*.html', {
        useCompile: false,
        deploy: fis.plugin('http-push', {
            receiver: `${devUrls[key].host}/receiver.php`,
            to: `${devUrls[key].dir}/template/${appName}`
        })
    });
});
