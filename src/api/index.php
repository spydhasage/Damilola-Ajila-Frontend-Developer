<?php

function myplugin_register_api_routes() {
    register_rest_route( 'myplugin/v1', '/spacex-data', array(
        'methods' => 'GET',
        'callback' => 'myplugin_get_spacex_data',
        'permission_callback' => function () {
            return is_user_logged_in();
        },
    ) );
}

function myplugin_get_spacex_data() {
    $url = 'https://api.spacexdata.com/v4/capsules';
    $response = wp_remote_get( $url );

    if ( is_wp_error( $response ) ) {
        return new WP_Error( 'Error', __( 'Unable to fetch data from SpaceX API', 'myplugin' ) );
    }

    $body = wp_remote_retrieve_body( $response );
    $data = json_decode( $body );

    return $data;
}

add_action( 'rest_api_init', 'myplugin_register_api_routes' );
