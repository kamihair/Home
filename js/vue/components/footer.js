import { ref } from '../../vue.js'

export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  /*html*/
  template: `
    <footer class="footer-area section_gap">
		<div class="container">
			<div class="row">
				<div class="col-lg-3  col-md-6 col-sm-6">
					<div class="single-footer-widget">
						<h6>About Us</h6>
						<p>
							<div>Doha - from KAMI HAIR</div>
							<div>Human hair for extensions</div>
							<div>⭐️We supply hair extensions from Vietnam with many types.</div>
							<div>🤝Please contact us to exchange hair and best prices.</div>
						</p>
					</div>
				</div>
				<div class="col-lg-4  col-md-6 col-sm-6">
					<div class="single-footer-widget">
						<h6>Newsletter</h6>
						<p>Stay update with our latest</p>
						<div class="" id="mc_embed_signup">

							<form target="_blank" novalidate="true" action="#"
							 method="get" class="form-inline">

								<div class="d-flex flex-row">

									<input class="form-control" name="EMAIL" placeholder="Enter Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '"
									 required="" type="email">


									<button class="click-btn btn btn-default"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
									<div style="position: absolute; left: -5000px;">
										<input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text">
									</div>

									<!-- <div class="col-lg-4 col-md-4">
												<button class="bb-btn btn"><span class="lnr lnr-arrow-right"></span></button>
											</div>  -->
								</div>
								<div class="info"></div>
							</form>
						</div>
					</div>
				</div>
				<div class="col-lg-3  col-md-6 col-sm-6">
					<div class="single-footer-widget mail-chimp">
						<h6 class="mb-20">Instragram Feed</h6>
						<ul class="instafeed d-flex flex-wrap">
							<li><a target="_blank" href="https://www.instagram.com/reel/C4YJLd4JWnJ/"><img style="width: 58px; height:58px" src="img/instagram/1.png" alt=""></a></li>
							<li><a target="_blank" href="https://www.instagram.com/p/C4S5Ykfhx-w/"><img style="width: 58px; height:58px" src="img/instagram/2.png" alt=""></a></li>
							<li><a target="_blank" href="https://www.instagram.com/p/C3zcxcHR6PJ/"><img style="width: 58px; height:58px" src="img/instagram/3.png" alt=""></a></li>
							<li><a target="_blank" href="https://www.instagram.com/p/C3xLoFsxT7Y/"><img style="width: 58px; height:58px" src="img/instagram/4.png" alt=""></a></li>
							<li><a target="_blank" href="https://www.instagram.com/p/C3j3ciMh3z-/"><img style="width: 58px; height:58px" src="img/instagram/5.png" alt=""></a></li>
							<li><a target="_blank" href="https://www.instagram.com/p/C3j1hN3hrvO/"><img style="width: 58px; height:58px" src="img/instagram/6.png" alt=""></a></li>
							<li><a target="_blank" href="https://www.instagram.com/p/C4ZvoevRqOS/"><img style="width: 58px; height:58px" src="img/instagram/7.png" alt=""></a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-2 col-md-6 col-sm-6">
					<div class="single-footer-widget">
						<h6>Follow Us</h6>
						<p>Let us be social</p>
						<div class="footer-social d-flex align-items-center">
							<a target="_blank" href="https://www.instagram.com/kamihair_extensions/"><i class="fa fa-instagram"></i></a>
							<a target="_blank" href="https://wa.me/817084781961?text=Hi"><i class="fa fa-whatsapp"></i></a>
						</div>
					</div>
				</div>
			</div>
			<div class="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
				<p class="footer-text m-0">
					Kami hair | Best quality best price.
				</p>
			</div>
		</div>
	</footer>
    `
}