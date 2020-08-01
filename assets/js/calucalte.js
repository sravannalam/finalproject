$(document).ready(function(){
    $("#caluclate_gpa").hide();
    $("#entries_submit").click(function(){
        let entries = $("#entries").val();
        let form="<div class='registration-page'><table class='table-form'>";
        for(let i=0;i<entries;i++)
        {
            form=form+"<tr><td style='color:white'>Letter Grade<td></td><td> \
                        <select id='grade"+i+"'  class='form-control' style='width:100%;'> \
                        <option value='4.0'>A</option> \
                        <option value='3.0'>B</option> \
                        <option value='2.0'>C</option> \
                        <option value='1.0'>D</option> \
                        <option value='0.0'>F</option> \
                        </select></td></tr> \
                        <tr><td  style='color:white'>Credit Hours<td></td><td><input id='credit_hours"+i+"' type='number' min=1 value=1 class='form-control'></td></tr>";
        }
        form =form+"</table></div>";
        
        $("#caluclate_gpa").show();
        $("#credit_hours_input").html(form);
        $("#gpa").html('');
    });
    $("#caluclate_gpa").click(function(){

        var numerator=0,denominator=0;
        let entries = $("#entries").val();
        console.log(entries);
        for (i=0;i<entries;i++){
            grade=parseFloat($("#grade"+i).val());
            credit_hours=parseInt($("#credit_hours"+i).val());
            numerator+=grade*credit_hours;
            denominator+=credit_hours;
        }
        if(entries>0){
            $("#gpa").html('<h3>Average GPA: '+ (numerator/denominator).toFixed(1)+"</h3>");
        }
    });
    
})