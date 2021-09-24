/*
*  1.其中params为查询到的图片数据的整个对象
*/
export default function HandlerUrl(params){
    var originalUrl=[]
    originalUrl=params.data.list
    var i=0
    for(i=0;i<originalUrl.length;i++){
        //这里拼接的目的是因为动态绑定的src不能展示图片，必须使用require包裹
        originalUrl[i].url="require("+originalUrl[i].url+")"
    }
    return originalUrl
}