<?php
if (! defined('ABSPATH')) { exit; }
class WDL_Taxonomies {
    public function __construct(){ add_action('init', array(__CLASS__,'register_taxonomy')); }
    public static function register_taxonomy(){
        register_taxonomy('wdl_document_category', array('wdl_document'), array(
            'hierarchical'=>true,'labels'=>array('name'=>'Категории документов','singular_name'=>'Категория документа','menu_name'=>'Категории документов'),
            'public' => true,
            'show_ui'=>true,
            'show_admin_column'=>true,
            'show_in_rest'=>true,
            'rest_base' => 'document-categories',
            'show_in_menu' => true,
            'show_in_nav_menus' => true,
            'show_tagcloud' => false,
            'rewrite'=>array('slug'=>'document-category', 'with_front' => false)
        ));

        register_taxonomy_for_object_type('wdl_document_category', 'wdl_document');
    }
}
