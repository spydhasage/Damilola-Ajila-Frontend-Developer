<?php

add_action('rest_api_init', 'register_spacex_data_endpoint');

function register_spacex_data_endpoint() {
    register_rest_route('my-spacex-block/v1', '/data', array(
        'methods' => 'GET',
        'callback' => 'get_spacex_data',
        'permission_callback' => function () {
            return current_user_can('read');
        }
    ));
}

function get_spacex_data() {
    $url = 'https://api.spacexdata.com/v3/capsules';
    $response = wp_remote_get($url);

    if (is_wp_error($response)) {
        return new WP_Error('spacex_data_error', 'There was an error fetching SpaceX data.');
    }

    $data = json_decode(wp_remote_retrieve_body($response));
    return $data;
}
