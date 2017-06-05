/*
* @Author: 白明辉
* @Date:   2017-05-23 09:17:17
* @Last Modified by:   白明辉
* @Last Modified time: 2017-05-23 09:17:17
* @Email: 916402001@qq.com
*/
const data={
    comSet:{
        tit:'标题',
        subtit:'副标题',
        abstract:'摘要',
        url:'链接地址',
        pic:'标题对象',
        /*引题开始*/
        cite:{
            skinclass:'SK1',
            style:{},
            animePage:'Ap1',
            headSet:{
                mode:'Mhd1',
                skinclass:'SKhd1',
                height:'400',
                titSwitch:true,
                titWidth:'300px',
                tittop:'10px',
                css:''
            },
            colmSet:{
                sort:[1,2,3,4],
                mode:'Mc1',
                skinclass:'SKc1',
                css:''
            }
        }
        /*引题结束*/
    },
/*----栏目内容和设置 开始-----*/
    content:[
    /*----每个对象为一个栏目（节点)====开始-----*/
        {
            tit:'标题',
            subtit:'副标题',
            abstract:'摘要',
            url:'链接地址',
            pic:'标题对象',
            /*引题开始*/
            cite:{
                colmSet:{
                        mode:'Mc1',
                        bgintit:true,
                        skinclass:'SKc1',
                        titSwitch:true,//off
                        css:''
                },
                animeMode:'Am1',
                morepage:{
                    conMode:'Mcon1',
                    skinclass:'SK1',
                    style:{}
                },
                endpage:{
                    endMode:'Mend1',
                    skinclass:'SK1',
                    style:{}
                },
                modeSelc:{
                    Mt1:{
                        elem:[
                            {type:'1',num:2,tit:'小标题'},
                            {type:'2',num:2,tit:'小标题'}
                        ],
                        skinclass:'SKm1',
                        css:''
                    }
                }
            },
            /*引题结束*/


            /*内容和属性开始*/
            modeCon:{
                type01:[
                    {tit:'标题typenomal-1',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题typenomal-2',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题typenomal-3',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题typenomal-4',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题typenomal-5',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题typenomal-6',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},

                ],
                type02:[
                    {tit:'标题typepic-1',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题typepic-2',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题typepic-3',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题typepic-4',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题typepic-5',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题typepic-6',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},

                ],
                type03:[
                    {tit:'标题typetop-1',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题typetop-2',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题typetop-3',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题typetop-4',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题typetop-5',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题typetop-6',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},

                ],
                type1:[
                    {tit:'标题type1-1',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type1-2',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type1-3',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type1-4',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type1-5',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type1-6',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                ],
                type2:[
                    {tit:'标题type2-1',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type2-2',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type2-3',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type2-4',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type2-5',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type2-6',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},

                ],
                type3:[
                    {tit:'标题type3-1',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type3-2',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type3-3',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type3-4',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type3-5',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type3-6',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},

                ],
                type4:[
                    {tit:'标题type4-1',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type4-2',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type4-3',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type4-4',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type4-5',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type4-6',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},

                ],
                type5:[
                    {tit:'标题type5-1',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type5-2',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type5-3',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type5-4',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type5-5',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type5-6',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},

                ],
                type6:[
                    {tit:'标题type6-1',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type6-2',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type6-3',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type6-4',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type6-5',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type6-6',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},

                ],
                type7:[
                    {tit:'标题type7-1',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type7-2',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type7-3',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type7-4',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type7-5',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type7-6',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},

                ],
                type8:[
                    {tit:'标题type8-1',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type8-2',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type8-3',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type8-4',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type8-5',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type8-6',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},

                ],
                type9:[
                    {tit:'标题type9-1',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type9-2',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type9-3',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type9-4',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type9-5',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},
                    {tit:'标题type9-6',subtit:'副题',abstract:'摘要',cite:'引题',url:'链接地址' ,pic:'图片地址'},

                ],


            }
            /*内容和属性结束*/
        }
    /*----每个对象为一个栏目（节点)====结束-----*/
    ]
/*----栏目内容和设置 结束-----*/
}
define(function(){
    return data;
})