
// datas ={
// eachModeSet:eachModeSet,//每个横切模块内的模块设置
// colmcon:colmcon,//每个横切模块内的模块内容数据

// }

// eachModeSet={
//     elem:[{
//         type:'1',
//         num:2,
//         tit:'小标题'
//     }],
//     //elem为数组，每个对象为一个模块的设置数据，一个横切有几个模块elem.length就是几
//     type为输出内容的属性type01普通属性，type02图片属性，type03头条属性，type[1~9]为隐藏属性。type10为设置用编辑发稿不可用，
//     tit为模块上的小标题 有内容则显示没有则不显示。num为模块内显示的条数（制作模板时请设置默认值）
//     skinclass:'SKm1',//横切皮单独设置
//     css:''//模块内高级的css行内样式


//     colmcon={
//         type9(属性):[
//                 {tit:'标题',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
//             ]

//     }
// }
//looplist(num{元素数},index{模块序号},data{数据},elem{元素模型})


 define(
    [
        '../../../setting/loopList.js',
        '../../../setting/checklive.js'
    ],
    function(loopList,checklive){
        console.log('Mt1');
        function modeMt1Temp(data,templateName){
            const elem ='<li><a>${data.tit}</a></li>';


            const mdLis1 = loopList(5,0,data,elem)
            let temps;
            console.log('mdlist1:'+mdLis1);
            return temps =`
                <div class="Mt1 ${data.skinclass} ${templateName} clearfix" style='${data.css}' >
                    <div class="mode mode${data.index}">
                        <ul class="clearfix">
                           ${mdLis1 }
                        </ul>
                    </div>
                </div>`;
            }

    return modeMt1Temp
});