$(document).ready( function() 
{

    $(".yeti").mouseup(function()
     {

        $('.yeti').addClass('active');
        $('#popup1').addClass('visible');
    		 
     });
    var count = 0;

    $('#popup1').click(function()
    {
    	$('.penguin1').removeClass('active');
    	$('.yeti').removeClass('active');
    	$('#popup1').removeClass('visible');

            count++;
            $('#textBox').html(count + "Penguins found");
    	
    });

    $('.penguin1').click(function()
    {
    	 $('.penguin1').toggleClass('active');
    	
    });

    //penguin 2

    $('#popup1').click(function()
    {
        $('.penguin2').removeClass('active');
        $('.yeti').removeClass('active');
        $('#popup1').removeClass('visible');
        
    });

    $('.penguin2').click(function()
    {
         $('.penguin2').toggleClass('active');
        
    });

    //penguin 3
    $('#popup1').click(function()
    {
        $('.penguin3').removeClass('active');
        $('.yeti').removeClass('active');
        $('#popup1').removeClass('visible');
        
    });

    $('.penguin3').click(function()
    {
         $('.penguin3').toggleClass('active');
        
    });

    //penguin 4

    $('#popup1').click(function()
    {
        $('.penguin4').removeClass('active');
        $('.yeti').removeClass('active');
        $('#popup1').removeClass('visible');
        
    });

    $('.penguin4').click(function()
    {
         $('.penguin4').toggleClass('active');
        
    });

    //penguin 5
    $('#popup1').click(function()
    {
        $('.penguin5').removeClass('active');
        $('.yeti').removeClass('active');
        $('#popup1').removeClass('visible');
        
    });

    $('.penguin5').click(function()
    {
         $('.penguin5').toggleClass('active');
        
    });

    //penguin 6

    $('#popup1').click(function()
    {
        $('.penguin6').removeClass('active');
        $('.yeti').removeClass('active');
        $('#popup1').removeClass('visible');
        
    });

    $('.penguin6').click(function()
    {
         $('.penguin6').toggleClass('active');
        
    });

    //penguin 7
    $('#popup1').click(function()
    {
        $('.penguin7').removeClass('active');
        $('.yeti').removeClass('active');
        $('#popup1').removeClass('visible');
        
    });

    $('.penguin7').click(function()
    {
         $('.penguin7').toggleClass('active');
        
    });

    //penguin 8
    $('#popup1').click(function()
    {
        $('.penguin8').removeClass('active');
        $('.yeti').removeClass('active');
        $('#popup1').removeClass('visible');
        
    });

    $('.penguin8').click(function()
    {
         $('.penguin8').toggleClass('active');
        
    });
    	
});