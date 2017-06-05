 /*
 _colmData ={
                id:index,
                tit:elem['tit'],
                subtit:elem['subtit'],
                abstract:elem['abstract'],
                bgintit:true,
                url:elem['url'],
                pic:elem['pic'],
                mode:colmSet['mode']||comColmSet['mode']||'Mc1',
                skinclass:colmSet['skinclass']||comColmSet['skinclass']||'SKc1',
                titSwitch:colmSet['titSwitch']||comColmSet['titSwitch']||true,//off
                css:colmSet['css']||comColmSet['css']||''
            }

  */


 define(['../../../setting/checklive.js'],function(checklive){
    function modeClomTemp(data){
        const tit =`<span class='tit'><a href="${data.url}">${data.tit}</a></span>`;
        const subtit =checklive(data.subtit)?`<span class='subtit'>${data.subtit}</span>`:'';
        const abstract =checklive(data.abstract)?`<span class='abstract'>${data.abstract}</span>`:'';
        const bgpic =`background:url(${data.pic}) center top no-repeat;`;
        const temp =`<div id="colmtit${data.id}" class='colmtit ${data.skinclass}' style="${data.bgpic}${data.css}">${tit}${subtit}${abstract}</div>`;
        // console.log('MC1 模板输出'+temp);
        return temp
    }
    return modeClomTemp
});