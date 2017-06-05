/*
* @Author: baiminghui
* @Date:   2017-06-04 22:09:52
* @Last Modified by:   baiminghui
* @Last Modified time: 2017-06-04 23:32:17
*/

/*
    组装模块
    组装组件
    组装栏目
 */

function module(id,dom){
    // 模块循环
}

function column(data,Columnset){
    getTemplate(templateName);
    getTemplate(templateName);
}

function getTemplate(templateName) {
       return  require('bundle-loader?lazy&name=mode!../libary/component/'+templateName+'/index.js');
}
export {
    module:module,
    column:column
};