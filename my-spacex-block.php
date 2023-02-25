<?php
/**
 * Plugin Name: My SpaceX Block
 * Plugin URI: https://damilolasteven.com/
 * Description: A Gutenberg block to display SpaceX data for logged-in users.
 * Version: 1.0.0
 * Author: Damilola Ajila
 * Author URI: https://damilolasteven.com.com/
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 *
 * @package my-spacex-block
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Enqueue block assets for the editor
 */
function my_spacex_block_editor_assets() {
    wp_enqueue_script(
        'my-spacex-block-editor-js',
        plugins_url( 'build/index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-components', 'wp-api' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
    );

    wp_enqueue_style(
        'my-spacex-block-editor-css',
        plugins_url( 'src/block/style.scss', __FILE__ ),
        array( 'wp-edit-blocks' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'src/block/style.scss' )
    );
}

add_action( 'enqueue_block_editor_assets', 'my_spacex_block_editor_assets' );

/**
 * Enqueue block assets for the frontend
 */
function my_spacex_block_assets() {
    wp_enqueue_script(
        'my-spacex-block-frontend-js',
        plugins_url( 'build/index.js', __FILE__ ),
        array( 'wp-api', 'wp-i18n', 'wp-element', 'wp-components' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
    );

    wp_enqueue_style(
        'my-spacex-block-frontend-css',
        plugins_url( 'src/block/style.scss', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'src/block/style.scss' )
    );
}

add_action( 'enqueue_block_assets', 'my_spacex_block_assets' );


/**
 * Create REST API endpoint for fetching SpaceX data
 */
function my_spacex_block_register_api() {
    register_rest_route( 'my-spacex-block/v1', '/capsules', array(
        'methods'  => 'GET',
        'callback' => 'my_spacex_block_get_capsules',
        'permission_callback' => function () {
            return current_user_can( 'edit_posts' );
        },
    ) );
}

add_action( 'rest_api_init', 'my_spacex_block_register_api' );

/**
 * Fetch and return SpaceX capsule data
 *
 * @return array|WP_Error
 */
function my_spacex_block_get_capsules() {
    $url = 'https://api.spacexdata.com/v4/capsules';

    $response = wp_remote_get( $url );

    if ( is_wp_error( $response ) ) {
        return $response;
    }

    $body = wp_remote_retrieve_body( $response );
    $data = json_decode( $body );

    return $data;
}
