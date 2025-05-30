import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const ReferFriend = () => {
  return (
    <div>
      <Header />
      <div className="refer-friend-container">
        <h2 className="refer-title">Refer a Friend</h2>

        <div className="refer-link-box">
          <input type="text" value="http://pathsynch.com/24WRE3" readOnly />
          <button className="send-btn">Send</button>
        </div>

        <p className="share-instructions">
          Share this link with your friends and ask your friend to{" "}
          <a href="/signup">Sign Up</a> with this link
        </p>
        <p className="refer-link">http://pathsynch.com/24WRE3</p>

        <hr />

        <div className="social-icons">
          <div className="icon">
            <div>
                <img src="re1.png"/>
            </div>
            <p>Facebook</p>
          </div>
          <div className="icon">
            <div>
                <img src="re2.png"/>
            </div>
            <p>Twitter</p>
          </div>
          <div className="icon">
          <div>
                <img src="re3.png"/>
            </div>
            <p>Messenger</p>
          </div>
          <div className="icon">
          <div>
                <img src="re4.png"/>
            </div>
            <p>WhatsApp</p>
          </div>
          <div className="icon">
          <div>
                <img src="re5.png"/>
            </div>
            <p>Copy</p>
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReferFriend;
