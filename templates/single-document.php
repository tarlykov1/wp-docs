<?php
get_header();
?>
<!-- FONDPP DOCUMENT LIBRARY SINGLE TEMPLATE LOADED -->
<?php
while (have_posts()) :
    the_post();
    include WDL_PLUGIN_DIR . 'templates/parts/single-document-content.php';
endwhile;
get_footer();
