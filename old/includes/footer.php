<footer>
    <div class="container">
        <div class="footer-nav">
            <ul class="footer-nav-list">
                <li><a href="/">Home</a></li>
                <li><a href="/portfolio.php">Work</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact.php">Contact</a></li>
            </ul>
            <ul class="footer-nav-icons">
                <li>
                    <a href="#" target="_blank" rel="follow"><img src="/img/icon-tw.png"></a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="follow"><img src="/img/icon-in.png"></a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="follow"><img src="/img/icon-ig.png"></a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="follow"><img src="/img/icon-cp.png"></a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="follow"><img src="/img/icon-gh.png"></a>
                </li>
            </ul>
        </div>
        <div class="footer-copyright">
            &copy; Copyright <?= date("Y"); ?>
        </div>
    </div>
</footer>
<!--Scripts-->
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="/js/main.js"></script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-79513081-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-79513081-1');
</script>

<!--Index Styles-->
<?php if (($current_uri == '/') || ($current_uri == '/index.php')) { ?>
    <script type="text/javascript" src="/js/particles.js"></script>
<?php include_once('index-script.php'); } ?>