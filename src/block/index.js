import edit from './edit';


const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

if ( ! wp.blocks.getBlockType( 'myplugin/spacex-block' ) ) {


registerBlockType( 'myplugin/spacex-block', {
    title: __( 'SpaceX Block', 'myplugin' ),
    description: __( 'A block to display SpaceX data', 'myplugin' ),
    category: 'widgets',
    icon: 'rocket',
    keywords: [ __( 'SpaceX', 'myplugin' ), __( 'Rocket', 'myplugin' ), __( 'Capsule', 'myplugin' ) ],
    supports: {
        html: false,
    },
    edit,
    save: () => {
        return null;
    },
} );

}