// import axios from 'axios'

const dateFormat = function(fmt = 'yyyy-MM-dd', date = new Date()) { 
    let o = { 
        "M+" : date.getMonth()+1,                 //月份 
        "d+" : date.getDate(),                    //日 
        "h+" : date.getHours(),                   //小时 
        "m+" : date.getMinutes(),                 //分 
        "s+" : date.getSeconds(),                 //秒 
        "q+" : Math.floor((date.getMonth()+3)/3), //季度 
        "S"  : date.getMilliseconds()             //毫秒 
    }; 
    if(/(y+)/.test(fmt)) {
            fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length)); 
    }
     for(let k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
         }
     }
    return fmt; 
} 

const iScrollClick = function (){
    if (/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)) return false;
    if (/Silk/i.test(navigator.userAgent)) return false;
    if (/Android/i.test(navigator.userAgent)) {
        var s=navigator.userAgent.substr(navigator.userAgent.indexOf('Android')+8,3);
        if(/Chrome/i.test(navigator.userAgent) || /Firefox/i.test(navigator.userAgent)){
            return true;
        }
        return parseFloat(s[0]+s[3]) < 44 ? false : true
    }
    return true;
}

const CircularRing = class {
    constructor() {
        this.startAngle = 3*Math.PI/2; // 弧形开始位置
        this.strokeStyle = '#eef2f5'; // 边背景色
        this.lineCap = 'round'; // 端点样式
        this.startLgColor = '#00a4ff'; // 渐变起点色
        this.endLgColor = '#30e8ff'; // 渐变终点色
        this.lineWidth = 0; // 圆环边宽
        this.percent = 0; // 圆弧比例
        this.size = 0; // 大小
        this.radius = 0; // 圆环半径
        this.anglePerSec = 0; // 弧形的angle
        this.endAngle = this.startAngle; // 弧形结束位置
    }

    drawMap(canvas) {
        let dom = document.querySelector('html');
        let scale = 1;
        let ctx = canvas.getContext('2d');

        this.lineWidth = canvas.dataset.line;
        this.percent = canvas.dataset.percent;
        this.size = canvas.width;
        this.radius = this.size/2 - this.lineWidth/2;
        this.anglePerSec = 2 * Math.PI / (100 / this.percent);

        if(dom.style.fontSize == '50px'){
            this.size = this.size/2;
            this.lineWidth = this.lineWidth/2;
            this.radius = this.size/2 - this.lineWidth/2;
            canvas.width = this.size;
            canvas.height = this.size;
            scale = 2;
        }

        this.drawCircle(ctx);
        this.drawArc(ctx);
        ctx.closePath();
        return {ctx, scale};
    }

    drawCircle(ctx) {
        ctx.beginPath();
        ctx.arc(this.size/2, this.size/2, this.radius, 0, Math.PI*2, true); 
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.strokeStyle;
        ctx.stroke();  
    }

    drawArc(ctx) {
        if(this.endAngle >= this.startAngle + this.anglePerSec){
            window.cancelAnimationFrame(this.raf);
            return;
        }
        let lg = ctx.createLinearGradient(0,0,0,this.size);
        lg.addColorStop(0, this.startLgColor);
        lg.addColorStop(1, this.endLgColor);
        ctx.beginPath();
        ctx.arc(this.size/2, this.size/2, this.radius, this.startAngle, this.endAngle , false);
        ctx.strokeStyle = lg;
        ctx.lineCap = this.lineCap;
        ctx.stroke();
        this.endAngle += .02;
        this.raf = window.requestAnimationFrame(() => {
            this.drawArc(ctx);
        })
    }
}

export default {
    dateFormat,
    iScrollClick,
    CircularRing
}