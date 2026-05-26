jQuery(function($){
    var frame;
    $('#wdl-select-file').on('click',function(e){
        e.preventDefault();
        var f=wp.media({title:'Выберите файл',button:{text:'Использовать файл'},multiple:false});
        f.on('select',function(){ var a=f.state().get('selection').first().toJSON(); $('#wdl_file_id').val(a.id); $('#wdl_file_url').val(a.url); });
        f.open();
    });
    $('#wdl-remove-file').on('click',function(e){ e.preventDefault(); $('#wdl_file_id').val(''); $('#wdl_file_url').val(''); });
});
