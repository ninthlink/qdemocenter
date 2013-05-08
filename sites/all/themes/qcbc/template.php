<?php

/* hmm... */

/**
* Preprocesses the wrapping HTML.
*
* @param array &$variables
*   Template variables.
*/
function qcbc_preprocess_html(&$vars) {
// <meta name="HandheldFriendly" content="True" />
    $metatag = array(
        '#type' => 'html_tag',
        '#tag' => 'meta',
        '#attributes' => array(
            'name' =>  'HandheldFriendly',
            'content' => 'True',
        )
    );
    drupal_add_html_head($metatag, 'meta_handheldfriendly');

// <meta name="MobileOptimized" content="1366" />
    $metatag = array(
        '#type' => 'html_tag',
        '#tag' => 'meta',
        '#attributes' => array(
            'name' =>  'MobileOptimized',
            'content' => '1920',
        )
    );
    drupal_add_html_head($metatag, 'meta_mobileoptimized');
    
// <meta name="viewport" content="width=1366,maximum-scale=1.0" />
    $metatag = array(
        '#type' => 'html_tag',
        '#tag' => 'meta',
        '#attributes' => array(
            'name' =>  'viewport',
            'content' => 'width=1920,maximum-scale=1.0',
        )
    );
    drupal_add_html_head($metatag, 'meta_viewport');
}