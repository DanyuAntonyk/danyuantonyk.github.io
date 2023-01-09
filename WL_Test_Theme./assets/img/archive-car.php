<?php get_header(); ?>

<?php
$argc = array('post_type' => 'car', 'posts_per_page' => 10);
$loop = new WP_Query($argc);
while ( $loop->have_posts() ) : $loop->the_post();
    the_title( );
    echo '<div class="entry-content">';
    the_content();
    echo'</div>';
endwhile;
?>