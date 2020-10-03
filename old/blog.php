<html>
    <head>
        <?php include_once('includes/head.php'); ?>
    </head>
    <body class="blog-page">
        <main>
            <?php include_once('includes/header.php'); ?>
            <section class="blog-items">
                <div class="container">
                    <div class="blog-grid">
                        <a class="blog-item">
                            <img src="https://placeimg.com/1000/1000/any" class="blog-item-image fluid-img">
                            <div class="blog-item-content">
                                <h2>Daily UI Day 1</h2>
                                <div class="blog-item-exerpt">
                                    Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                                </div>
                                <div class="blog-item-meta">
                                    <div class="blog-item-date">
                                        Oct 21, 2019
                                    </div>
                                    <div class="blog-item-category">
                                        Daily UI, Design
                                    </div>
                                </div>
                            </div> 
                        </a>
                        <a class="blog-item">
                            <img src="https://placeimg.com/1000/1000/any" class="blog-item-image fluid-img">
                            <div class="blog-item-content">
                                <h2>Daily UI Day 1</h2>
                                <div class="blog-item-exerpt">
                                    Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                                </div>
                                <div class="blog-item-meta">
                                    <div class="blog-item-date">
                                        Oct 21, 2019
                                    </div>
                                    <div class="blog-item-category">
                                        Daily UI, Design
                                    </div>
                                </div>
                            </div> 
                        </a>
                        <a class="blog-item">
                            <img src="https://placeimg.com/1000/1000/any" class="blog-item-image fluid-img">
                            <div class="blog-item-content">
                                <h2>Daily UI Day 1</h2>
                                <div class="blog-item-exerpt">
                                    Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                                </div>
                                <div class="blog-item-meta">
                                    <div class="blog-item-date">
                                        Oct 21, 2019
                                    </div>
                                    <div class="blog-item-category">
                                        Daily UI, Design
                                    </div>
                                </div>
                            </div> 
                        </a>
                        <a class="blog-item">
                            <img src="https://placeimg.com/1000/1000/any" class="blog-item-image fluid-img">
                            <div class="blog-item-content">
                                <h2>Daily UI Day 1</h2>
                                <div class="blog-item-exerpt">
                                    Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                                </div>
                                <div class="blog-item-meta">
                                    <div class="blog-item-date">
                                        Oct 21, 2019
                                    </div>
                                    <div class="blog-item-category">
                                        Daily UI, Design
                                    </div>
                                </div>
                            </div> 
                        </a>
                    </div>
                </div>
            </section>
            <?php include_once('includes/cta.php'); ?>
        </main>
        <!-----FOOTER----->
        <?php include_once('includes/footer.php'); ?>
    </body>
</html> 




<div class="blog-grid">

                        <?php

                            if( have_posts() ){
                                while(have_posts()){
                                    the_post();

                                    $categories = wp_get_post_categories(get_the_ID());
                        ?>
                                    <a class="blog-item" href="<?= get_permalink(); ?>">
                                        <img src="<?= get_the_post_thumbnail_url(); ?>" alt="<?= get_the_title(); ?>" class="blog-item-image fluid-img">
                                        <div class="blog-item-content">
                                            <h2><?= get_the_title(); ?></h2>
                                            <div class="blog-item-exerpt">
                                                by <?= get_the_author(); ?>
                                            </div>
                                            <div class="blog-item-exerpt">
                                                <?= get_the_excerpt(); ?>
                                            </div>
                                            <div class="blog-item-meta">
                                                <div class="blog-item-date">
                                                    <?= get_the_date(); ?>
                                                </div>
                                                <div class="blog-item-category">
                                                    <?php
                                                        $i = 0;
                                                        foreach($categories as $cat) {
                                                            $i++;
                                                            echo get_cat_name($cat);
                                                            if($i !== count($categories)) {
                                                                echo ', ';
                                                            }
                                                        }
                                                    ?>
                                                </div>
                                            </div>
                                        </div> 
                                    </a>
                        <?php
                                }
                            } 

                        ?>
                    </div>