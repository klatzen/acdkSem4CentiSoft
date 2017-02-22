/*"success", "danger", "info"*/
function myAlert(msg, type){
    $(".alert").alert('close');
    $('#alerts').prepend('<div class="alert alert-'+type+' alert-dismissible"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' +  msg + '</div>');
}