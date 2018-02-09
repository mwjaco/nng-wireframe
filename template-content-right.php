<?php get_header();
/**
 * Template Name: Right-Aligned Template
 *
 *
 */
?>
<main class='main main--page-shift-right'>
    <?php while( have_posts() ) : the_post(); ?>
    <section class='content content--shift-right'>
        
        <div class='content__title-wrapper'>
            <?php the_title( '<h1 class="content__title">', '</h1>' ); ?>
        </div>
        <div class='content__body-wrapper'>
            <div class='content__body'>
                <?php the_content(); ?>
            </div>
        </div>
    </section>
    <?php
        $show_banner = get_field('show_banner');
        $show_video = get_field('show_video');
        $video_embed_url = get_field('video_embed_url');
        if ($show_banner) {
            get_template_part('component-banner');
        }
        if ($show_video) {    
            include(locate_template('component-video.php'));
        }
    ?>
    <?php endwhile; ?>
</main>
<?php get_footer(); ?>