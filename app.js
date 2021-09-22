let btn = $("#btnSubmit");
btn.click(function (e) {
    e.preventDefault()
    //  alert($('#myMessage').val() )
    // let text = 'Test h2'
    //  let h2 = $(`<h2>`+ text + `</h2>`)
    let li = $(`<li>` + $('#myMessage').val() + `</li>`)
    let ul = $("<ul></ul>")
    var colors = ['red', 'blue', 'green', 'grey']
        

    li.click(function () {
        var randColor;
        randColor = colors[Math.floor(Math.random() * colors.length)];
        li.css('background-color', randColor);
        color = randColor;
    });
    li.dblclick(function(){
     $(li).remove()


    })
    ul.appendTo($("body"))
    li.appendTo(ul)
    li.appendTo(`#testdiv`)
    li.mouseover(function () {
        li.css("borderRadius", "5px")
        li.css("backgroundColor", "blue")
    })
    li.mouseout(function () {
        li.css("borderRadius", "0px")
        li.css("backgroundColor", "white")
    })
})
$("#btnSubmit").prop('disabled', true);
$('#myMessage').change(function () {
    $("#btnSubmit").prop('disabled', false);
    if ($('#myMessage').val() == '')
        $("#btnSubmit").prop('disabled', true);
})
let div = `Test Div`
$('<div id = "testdiv">' + div + '</div>').appendTo('body')
