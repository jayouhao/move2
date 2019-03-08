/*
* @Author: banjiajia
* @Date:   2019-03-07 13:58:51
* @Last Modified by:   banjiajia
* @Last Modified time: 2019-03-08 10:33:51
*/

$(function(){
	$(".second-li .second-button,.prize-bottom img,.activity img,\
		.popup .popup-download,.popup .popup-close").mouseover(function (){  
        var tsurl=$(this).attr("src");
        this.tsurl=tsurl;
        if(tsurl.includes("默认")){
        	var enter=tsurl.replace("默认","鼠标经过");        	
        	$(this).attr("src",enter)
        }else{
        	this.tsurl="";
        }        
    }).mouseout(function (){    
    	if(this.tsurl){
    		  var enter=this.tsurl.replace("鼠标经过","默认");        	
        	$(this).attr("src",enter)
    	}         
    }); 
     // 关闭
    $(".popup .popup-close").click(function(event) {
      $(this).parents(".popup-backgrund").fadeOut();        
    });
})