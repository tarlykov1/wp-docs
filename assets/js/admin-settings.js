jQuery(function ($) {
    var frame;

    $('#wdl-select-default-thumbnail').on('click', function (e) {
        e.preventDefault();

        if (frame) {
            frame.open();
            return;
        }

        frame = wp.media({
            title: 'Выберите миниатюру по умолчанию',
            button: {
                text: 'Использовать это изображение'
            },
            multiple: false
        });

        frame.on('select', function () {
            var attachment = frame.state().get('selection').first().toJSON();
            var previewUrl = attachment.sizes && attachment.sizes.medium ? attachment.sizes.medium.url : attachment.url;

            $('#wdl-default-thumbnail-id').val(attachment.id);
            $('#wdl-default-thumbnail-preview').html(
                '<img src="' + previewUrl + '" style="max-width:160px;height:auto;" alt="">'
            );
        });

        frame.open();
    });

    $('#wdl-remove-default-thumbnail').on('click', function (e) {
        e.preventDefault();
        $('#wdl-default-thumbnail-id').val('');
        $('#wdl-default-thumbnail-preview').empty();
    });
});
