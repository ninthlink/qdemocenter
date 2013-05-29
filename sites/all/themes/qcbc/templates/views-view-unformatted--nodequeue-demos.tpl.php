<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php if (!empty($title)): ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
<?php foreach ($rows as $id => $row): ?>
  <div<?php if ($classes_array[$id]) {
	  if ( ( arg(0) == 'node' ) && ( arg(1) == $view->result[$id]->nid ) ) {
		  $classes_array[$id] .= ' active';
	  }
	  print ' class="' . $classes_array[$id] .'"';  } ?>>
    <?php
	  
	print $row;
	
	?>
  </div>
<?php endforeach; ?>
