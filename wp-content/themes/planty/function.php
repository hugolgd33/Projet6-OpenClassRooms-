<?php
add_action('wp-enqueue_scripts','theme_enqueue_styles');
function theme_enqueue_styles()
{
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css')
}

function changement_admin_menu( $args = '' ) {
if( is_user_logged_in() ) {
	
$args['menu'] = 6;
 
} else {
	
$args['menu'] = 3;
}
return $args;
}
add_filter( 'wp_nav_menu_args', 'changement_admin_menu' );
?>