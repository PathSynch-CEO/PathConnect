import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const BlogDetail = () => {
  return (
    <div>
      <Header />
      <section class="product-section">
        <div class="container">
          <h1>Blog</h1>
          <p>Donec pulvinar ligula sit amet ultricies tincidunt.</p>
          {/* <button className="common_btn">
            Create a free account to get started
          </button> */}
        </div>
        <div class="circle-decor top-left"></div>
        <div class="circle-decor bottom-right"></div>
      </section>
      <div class="container-detail ">
        <div class="post-header">
          <p class="post-date">02 June, 2024</p>
          <p class="post-category">Lifestyle</p>
        </div>
        <h1 class="title">Mauris dapibus euismod</h1>
        <p class="subtitle">
          Mauris dapibus euismod magna at pharetra. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Duis porttitor, erat in aliquet
          posuere, ligula velit scelerisque turpis, eu efficitur nulla urna non
          sem
        </p>

        <img src="bd-1.png" alt="Blog Header Image" class="header-image" />

        <p className="subtitle">
          Proin id turpis tempor, vulputate risus in, volutpat quam. Nam non
          eros ut eros elementum dignissim. Duis facilisis ligula erat, ac
          fringilla magna luctus et. Proin efficitur nunc ut tincidunt iaculis.
          Donec maximus malesuada tellus, et suscipit enim tristique eu. Nunc
          efficitur rutrum dui eu porta. Integer et malesuada magna, et eleifend
          metus. Duis porta arcu quis pellentesque vestibulum. Nam dapibus
          sapien mattis, pretium justo sed, varius elit. Mauris convallis justo
          sit amet feugiat pretium. Nulla elementum quis orci vel fermentum.
          Proin molestie orci ac ex consectetur laoreet. Fusce porta porta
          vehicula.
        </p>

        <p className="subtitle">
          Sed rutrum rutrum dui, id facilisis justo aliquam at. Vestibulum leo
          tellus, consectetur id commodo et, laoreet sit amet ante. Quisque
          porttitor neque non diam lobortis, sit amet congue justo mattis. 
        </p>

        <div class="info-box">
          <img src="lic.svg" />

          <strong>
            Suspendisse placerat sem scelerisque tellus dignissim mattis sed eu
            velit
          </strong>
        </div>
        <div class="info-box">
          <img src="lic.svg" />

          <strong>
            Suspendisse placerat sem scelerisque tellus dignissim mattis sed eu
            velit
          </strong>
        </div>
        <div class="info-box">
          <img src="lic.svg" />

          <strong>
            Suspendisse placerat sem scelerisque tellus dignissim mattis sed eu
            velit
          </strong>
        </div>

        <div class="icon-boxes">
          <div class="icon-box">
            <img src="dice.svg" class="icon" />
            <p className="bold">Nulla nec congue</p>
            <p>
              Nulla nec congue orci, at vulputate nunc. Vestibulum convallis
              neque eu mauris consectetur volutpat. In euismod odio metus, in
              faucibus nisl rhoncus nec.{" "}
            </p>
          </div>
          <div class="icon-box">
            <img src="dice.svg" class="icon" />
            <p className="bold">Nulla nec congue</p>
            <p>
              Nulla nec congue orci, at vulputate nunc. Vestibulum convallis
              neque eu mauris consectetur volutpat. In euismod odio metus, in
              faucibus nisl rhoncus nec.{" "}
            </p>
          </div>
        </div>

        <h2>Nam eget tempus sem. Aenean tellus felis</h2>
        <ul className="lib">
          <li>
            {" "}
            <img src="lib.svg" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li>
            <img src="lib.svg" />
            Morbi egestas arcu vel massa rhoncus, a tristique ante lacinia. 
          </li>
          <li>
            <img src="lib.svg" />
            Maecenas mollis varius orci et tincidunt.
          </li>
          <li>
            <img src="lib.svg" />
            Curabitur gravida sit amet enim eu congue.
          </li>
          <li>
            <img src="lib.svg" />
            Nunc neque odio, tempus feugiat ultrices id, vehicula ut felis.
          </li>
          <li>
            <img src="lib.svg" />
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. 
          </li>
          <li>
            <img src="lib.svg" />
            Praesent libero est, gravida sit amet est id, congue mollis tortor.
          </li>
          <li>
            <img src="lib.svg" />
            Etiam porta vehicula felis, quis blandit purus facilisis ac.
          </li>
        </ul>

        <div class="callout">
          <p>
            “Aliquam congue lacinia ultrices. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Proin semper ex quis leo posuere, quis
            congue nisi varius. Fusce sem nulla, molestie sit amet placerat ut,
            convallis ut elit.”
          </p>
        </div>

        <p className="subtitle">
          Proin id turpis tempor, vulputate risus in, volutpat quam. Nam non
          eros ut eros elementum dignissim. Duis facilisis ligula erat, ac
          fringilla magna luctus et. Proin efficitur nunc ut tincidunt iaculis.
          Donec maximus malesuada tellus, et suscipit enim tristique eu. Nunc
          efficitur rutrum dui eu porta. Integer et malesuada magna, et eleifend
          metus. Duis porta arcu quis pellentesque vestibulum. Nam dapibus
          sapien mattis, pretium justo sed, varius elit. Mauris convallis justo
          sit amet feugiat pretium. Nulla elementum quis orci vel fermentum.
          Proin molestie orci ac ex consectetur laoreet. Fusce porta porta
          vehicula. 
        </p>
        <p className="subtitle">
        Sed rutrum rutrum dui, id facilisis justo aliquam at.
          Vestibulum leo tellus, consectetur id commodo et, laoreet sit amet
          ante. Quisque porttitor neque non diam lobortis, sit amet congue justo
          mattis. 
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;
