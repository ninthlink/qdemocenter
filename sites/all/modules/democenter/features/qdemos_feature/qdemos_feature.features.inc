<?php
/**
 * @file
 * qdemos_feature.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function qdemos_feature_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function qdemos_feature_views_api() {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function qdemos_feature_image_default_styles() {
  $styles = array();

  // Exported image style: sidethumb-touchscreen.
  $styles['sidethumb-touchscreen'] = array(
    'name' => 'sidethumb-touchscreen',
    'effects' => array(
      3 => array(
        'label' => 'Scale and crop',
        'help' => 'Scale and crop will maintain the aspect-ratio of the original image, then crop the larger dimension. This is most useful for creating perfectly square thumbnails without stretching the image.',
        'effect callback' => 'image_scale_and_crop_effect',
        'dimensions callback' => 'image_resize_dimensions',
        'form callback' => 'image_resize_form',
        'summary theme' => 'image_resize_summary',
        'module' => 'image',
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 241,
          'height' => 136,
        ),
        'weight' => 1,
      ),
    ),
  );

  // Exported image style: thumbnail-touchscreen.
  $styles['thumbnail-touchscreen'] = array(
    'name' => 'thumbnail-touchscreen',
    'effects' => array(
      2 => array(
        'label' => 'Scale and crop',
        'help' => 'Scale and crop will maintain the aspect-ratio of the original image, then crop the larger dimension. This is most useful for creating perfectly square thumbnails without stretching the image.',
        'effect callback' => 'image_scale_and_crop_effect',
        'dimensions callback' => 'image_resize_dimensions',
        'form callback' => 'image_resize_form',
        'summary theme' => 'image_resize_summary',
        'module' => 'image',
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 352,
          'height' => 198,
        ),
        'weight' => 1,
      ),
    ),
  );

  return $styles;
}

/**
 * Implements hook_node_info().
 */
function qdemos_feature_node_info() {
  $items = array(
    'demo' => array(
      'name' => t('Demo'),
      'base' => 'node_content',
      'description' => t('Use <em>demos</em> to specify Title + blurb + thumbnail + URL to link to a Qualcomm Demo. (the reason this site exists)'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
