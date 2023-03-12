<?php
/**
 * Plugin Name: Section Separator - Block
 * Description: Separate the section in beautiful way.
 * Version: 1.0.4
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: separator
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'SEP_PLUGIN_VERSION', isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.4' );
define( 'SEP_ASSETS_DIR', plugin_dir_url( __FILE__ ) . 'assets/' );

// Section Separator
class SEPSectionSeparator{
	function __construct(){
		add_action( 'enqueue_block_assets', [$this, 'enqueueBlockAssets'] );
		add_action( 'init', [$this, 'onInit'] );
	}

	function enqueueBlockAssets(){ wp_enqueue_script( 'paperJS', SEP_ASSETS_DIR . 'js/paper-full.min.js', [], '0.12.15', true ); }

	function onInit() {
		wp_register_style( 'sep-separator-editor-style', plugins_url( 'dist/editor.css', __FILE__ ), [ 'wp-edit-blocks' ], SEP_PLUGIN_VERSION ); // Backend Style
		wp_register_style( 'sep-separator-style', plugins_url( 'dist/style.css', __FILE__ ), [ 'wp-editor' ], SEP_PLUGIN_VERSION ); // Frontend Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'sep-separator-editor-style',
			'style'				=> 'sep-separator-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block
		
		wp_set_script_translations( 'sep-separator-editor-script', 'separator', plugin_dir_path( __FILE__ ) . 'languages' ); // Translate
	}

	function render( $attributes ){
		extract( $attributes );

		$className = $className ?? '';
		$sepBlockClassName = 'wp-block-sep-separator ' . $className . ' align' . $align;

		ob_start(); ?>
		<div class='<?php echo esc_attr( $sepBlockClassName ); ?>' id='sepSeparator-<?php echo esc_attr( $cId ) ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

		<?php return ob_get_clean();
	} // Render
}
new SEPSectionSeparator;