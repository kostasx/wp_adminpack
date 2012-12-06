<?php
/*
Plugin Name: WP Dashboard Pack
Plugin URI: https://github.com/kostasx/wp_adminpack
Description: Dashboard Enhancements
Version: 0.3
Author: Kostas X
Author URI: http://www.creativecollective.gr
License: GPLv2
*/

/* Add General Functionality in Dashboard:
   1. Hide / Unhide Update Messages on Dashboard
   2. Posts / Pages Editor (/wp-admin/edit.php)
      2.1 Auto refresh posts listing when specific
          category or dates are selected.
   3. Theme Editor Functionality (wp-admin/theme-editor.php)
      3.1 Add Ctrl+S shortcut for updating files.
      3.2 Auto refresh page when different theme is selected. (No need to select theme and click 'Select')
*/ 
add_action( 'admin_head', 'dashboard_general');

/* Add Auto Refresh on edit.php */
add_action( 'admin_head-edit.php', 'posts_auto_filter');

add_action( 'admin_head-theme-editor.php', 'theme_editor');

function dashboard_general(){
	wp_enqueue_script('dashboard', plugins_url() . '/wp_adminpack/js/dashboard.js');
	wp_enqueue_style('dashboard', plugins_url() . '/wp_adminpack/style/dashboard.css');
}

function posts_auto_filter(){
	wp_enqueue_script('posts_auto_filter', plugins_url() . '/wp_adminpack/js/posts_auto_filter.js');
}

function theme_editor(){
	wp_enqueue_script('shortcut', plugins_url() . '/wp_adminpack/js/shortcut.js');
	wp_enqueue_script('theme_editor', plugins_url() . '/wp_adminpack/js/theme_editor.js');
	wp_enqueue_style('theme_editor', plugins_url() . '/wp_adminpack/style/theme_editor.css');
}

?>