//Create a button , on click of which you should be able to hide a paragraph text, 
//create another button onclick of which this paragraph should be visible.

$("#Hide").click(function(){
    $("#heading").css("display","none");
})
$("#visible").click(function(){
    $("#heading").css("display","block");
})


//Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" 
//and print the title as the heading of the page.

    function jqueryAjax(){

        $.ajax({
            url: "https://jsonplaceholder.typicode.com/todos/12",
            type: "GET",
            success:function(data){
                console.log(data);
            },
            erroe:function(err){
                console.log(err);
            }
        })
    };
    $("#button").click(function(){
        jqueryAjax();
    })


   