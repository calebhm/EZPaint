$(function(){
    //set up canvas
    var c = document.getElementById("c");
    var ctx = c.getContext("2d");
    var w = window.innerWidth;
    var h = window.innerHeight;
    var m = false;
    ctx.canvas.width = w;
    ctx.canvas.height = h;
    ctx.lineWidth = "1";
    ctx.strokeStyle = "#000000";
    
    //provide mouse controls
    $("#c").mousedown(function(e){
        m = true;
        e.preventDefault();
        ctx.beginPath();
        var x = e.pageX || e.clientX;
        var y = e.pageY || e.clientY;
        ctx.moveTo(x,y);
    })
    .mouseup(function(){
        m = false;
    })
    .mouseout(function(){
        m = false;
    })
    .mousemove(function(e){
        if (m) {
            e.preventDefault();
            var x = e.pageX || e.clientX;
            var y = e.pageY || e.clientY;
            ctx.lineTo(x,y);
            ctx.stroke();
        }
    });
    
    //provide touch controls
    $("#c").on("touchstart", function(e){
        e.preventDefault();
        ctx.beginPath();
        var x = e.pageX || e.clientX;
        var y = e.pageY || e.clientY;
        ctx.moveTo(x,y);
    })
    .on("touchmove", function(e){
        e.preventDefault();
        e = e.changedTouches[0];
        var x = e.pageX || e.clientX;
        var y = e.pageY || e.clientY;
        ctx.lineTo(x,y);
        ctx.stroke();
    });
    
    //add functions for clearing, changing stroke color, sizing stroke
    $("#clear").click(function(){
        ctx.clearRect(0, 0, w, h);
    });
    $("#color").change(function(){
        ctx.strokeStyle = $(this).val();
    });
    $("#size").change(function(){
        ctx.lineWidth =  $(this).val();
    });
    
    //animate the popup
    $("#popup")
    .animate({ bottom : h*0.75 }, 1000)
    .delay(5000)
    .animate({ bottom : -h*1.5 }, 1000)
    .click(function(){
        $(this).css("display", "none");
    });
});