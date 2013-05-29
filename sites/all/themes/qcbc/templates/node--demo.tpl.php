<?php

?>
<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
  <?php
  if ( isset ( $node->field_url['und'] ) ) {
	  echo '<iframe width="1920" height="1080" frameborder="0" allowtransparency="1" src="'. $node->field_url['und'][0]['url'] .'"></iframe>';
  } else {
	  echo '<div id="dframe"></div>';
  }
  ?>
</div>
