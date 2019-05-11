<template>
  <footer>
    <div class="flex-container">
      <div class="flex-promise">
        <hr class="promise"></hr>
      </div>
      <div class="flex-promise slogan">
        <span class="tagline">Fulfilling</span>
        <span class="article">the</span>
        <span class="tagline">Promise</span>
      </div>
      <div class="flex-promise">
        <hr class="promise"></hr>
      </div>
    </div>
    <div class="legal">
      <img
        src="../assets/iu-sig.2x.png"
        width="236"
        height="36"
        alt="Indiana University"
      />
      <p class="copyright">
        <a
          href="http://www.iu.edu/comments/copyright.shtml"
          target="_blank"
        >Copyright</a>
        © 2018 The Trustees of
        <a
          href="http://www.iu.edu/"
          target="_blank"
        >Indiana University</a>
        |
        <a
          href="http://www.iu.edu/comments/complaint.shtml"
          target="_blank"
        >Copyright Complaints</a>
        |
        <a href="#/privacy">Privacy Notice</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
footer {
	font-family: "BentonSansCondBold", "Arial Narrow", Arial, Helvetica, sans-serif;
}
div.flex-container {
	display: flex;
}
div.flex-promise {
	flex-grow: 1;
}
hr.promise {
	border: 5px solid #7a1705;
}
div.slogan {
	max-width: 380px;
	color: #fff;
	background-color: #7a1705;
	text-align: center;
	padding-top: 5px;
}
span.tagline {
	font-weight: bold;
	letter-spacing: 0.2em;
	font-size: 1.5em;
	text-transform: uppercase;
}
span.article {
	padding: 0 4px 0 0px;
	font-style: italic;
}
div.legal {
	margin: 25px 36px 0 36px;
	padding: 0 15px;
	font-size: 0.6875em;
}
p.copyright {
	margin-top: 10px;
}
p.copyright a {
	color: #7d110c;
}
</style>