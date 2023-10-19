* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  .loader_bg {
    position: fixed;
    z-index: 9999999;
    background: #fff;
    width: 100%;
    height: 100%;
  }
  
  .loader {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .loader img {
    width: 280px;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: linear-gradient(135deg, #f57308, #fff, rgb(11, 242, 7));
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #1a6ad2, #fff, rgb(245, 5, 53));
  }
  
  /*  Simillar  */
  
  section {
    padding: 100px 0;
  }
  
  .max-width {
    max-width: 1300px;
    padding: 0 80px;
    margin: auto;
  }
  
  .about,
  .services,
  .skills,
  .projects,
  .contact,
  footer {
    font-family: "Poppins", sans-serif;
  }
  
  .about .about-content,
  .services .serv-content,
  .skills .skills-content,
  .contact .contact-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  
  section .title {
    position: relative;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 60px;
    padding-bottom: 20px;
    font-family: "Ubuntu", sans-serif;
  }
  
  section .title::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 180px;
    height: 3px;
    transform: translateX(-50%);
  }
  
  section .title::after {
    position: absolute;
    bottom: -8px;
    left: 50%;
    font-size: 20px;
    color: #1e3551;
    padding: 0 5px;
    transform: translateX(-50%);
  }
  
  /*  Navbar  */
  .navbar {
    position: fixed;
    width: 100%;
    z-index: 999;
    padding: 30px 0;
    font-family: "Ubuntu", sans-serif;
    transition: all 0.3s ease;
  }
  
  .navbar.sticky {
    padding: 15px 0;
    background: #1e3551;
  }
  
  .navbar .max-width {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .navbar .logo a {
    color: #fff;
    font-size: 35px;
    font-weight: 600;
  }
  
  /*  Nav Logo Span Linear-Gradient  */
  .navbar .logo a span {
    background: linear-gradient(135deg, #041d3d, #fff, crimson);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease;
  }
  
  .navbar.sticky .logo a span {
    color: #fff;
  }
  
  .navbar .menu li {
    list-style: none;
    display: inline-block;
  }
  
  .navbar .menu li a {
    display: block;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    margin-left: 25px;
    transition: color 0.3s ease;
  }
  
  .navbar .menu li a:hover {
    color: #1e3551;
  }
  
  .navbar.sticky .menu li a:hover {
    color: #fff;
  }
  
  /*  Menu Btn  */
  .menu-btn {
    color: #fff;
    font-size: 23px;
    cursor: pointer;
    display: none;
  }
  
  .scroll-up-btn {
    position: fixed;
    height: 45px;
    width: 42px;
    background: #1e3551;
    right: 30px;
    bottom: 10px;
    text-align: center;
    line-height: 45px;
    color: #fff;
    z-index: 9999;
    font-size: 30px;
    border-radius: 6px;
    border-bottom-width: 2px;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
  }
  
  .scroll-up-btn.show {
    bottom: 30px;
    opacity: 1;
    pointer-events: auto;
  }
  
  .scroll-up-btn:hover {
    filter: brightness(90%);
  }
  
  /*  Home  */
  .home {
    display: flex;
    background: url("https://source.unsplash.com/720x600/?dark,laptop") no-repeat
      center;
    height: 100vh;
    color: #fff;
    min-height: 500px;
    background-size: cover;
    background-attachment: fixed;
    font-family: "Ubuntu", sans-serif;
  }
  
  .home .max-width {
    width: 100%;
    display: flex;
  }
  
  .home .max-width .row {
    margin-right: 0;
  }
  
  .home .home-content .text-1 {
    font-size: 27px;
  }
  
  .home .home-content .text-2 {
    font-size: 75px;
    font-weight: 600;
    margin-left: -3px;
  }
  
  .home .home-content .text-3 {
    font-size: 40px;
    margin: 5px 0;
  }
  
  /* Linear Gradient */
  .home .home-content .text-3 span {
    color: #1e3551;
    background: linear-gradient(135deg, #041d3d, #fff, crimson);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 500;
  }
  
  .home .home-content a {
    display: inline-block;
    background: #1e3551;
    color: #fff;
    font-size: 25px;
    padding: 12px 36px;
    margin-top: 20px;
    font-weight: 400;
    border-radius: 6px;
    border: 2px solid #1e3551;
    transition: all 0.3s ease;
  }
  
  .home .home-content a:hover {
    color: #1e3551;
    background: none;
    animation: pulsate 1s ease-in-out;
  }
  
  /*  About  */
  .about {
    background: radial-gradient(#e1efff, white);
  }
  .about .title::after {
    content: "—Who I Am ?—";
    text-overflow: ellipsis;
    display: -webkit-inline-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  
  .about .about-content .left {
    width: 45%;
  }
  
  .about .about-content .left img {
    height: 400px;
    width: 400px;
    object-fit: cover;
    border-radius: 6px;
  }
  
  .about .about-content .right {
    width: 55%;
  }
  
  .about .about-content .right .text {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  /* Linear Gradiant */
  .about .about-content .right .text span {
    /* color: #1e3551; */
    background: linear-gradient(135deg, #041d3d, #fff, crimson);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .about .about-content .right p {
    text-align: justify;
  }
  
  .about .about-content .right a {
    display: inline-block;
    background: #1e3551;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 30px;
    margin-top: 20px;
    border-radius: 6px;
    border: 2px solid #1e3551;
    transition: all 0.3s ease;
  }
  
  .about .about-content .right a:hover {
    color: #1e3551;
    background: none;
    animation: pulsate 1s ease-in-out;
  }
  
  /*  Service  */
  .services,
  .projects {
    color: #fff;
    background: #111;
  }
  
  .services .title::before,
  .projects .title::before {
    background: #fff;
  }
  
  .services .title::after,
  .projects .title::after {
    background: #111;
    content: "What I Provide ?";
  }
  
  .services .serv-content .card {
    width: calc(33% - 20px);
    background: #222;
    text-align: center;
    border-radius: 10px;
    padding: 50px 25px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .services .serv-content .card:hover {
    background: #1e3551;
  }
  
  .services .serv-content .card .box {
    transition: all 0.3s ease;
  }
  
  .services .serv-content .card:hover .box {
    transform: scale(1.05);
  }
  
  .services .serv-content .card i {
    font-size: 50px;
    color: #888e8d;
    background: linear-gradient(135deg, #041d3d, #fff, crimson);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: color 0.3s ease;
  }
  
  .services .serv-content .card:hover i {
    color: #fff;
  }
  
  .services .serv-content .card .text {
    font-size: 25px;
    font-weight: 500;
    margin: 10px 0 7px 0;
  }
  
  /*  Skills  */
  .skills {
    background: radial-gradient(#e1efff, white);
  }
  .skills .title::after {
    content: "—What I Know ?—";
  }
  
  .skills .skills-content .column {
    width: calc(50% - 30px);
  }
  
  .skills .skills-content .left .text {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  .skills .skills-content .left p {
    text-align: justify;
  }
  
  .skills .skills-content .left a {
    display: inline-block;
    background: #1e3551;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    padding: 8px 16px;
    margin-top: 20px;
    border-radius: 6px;
    border: 2px solid #1e3551;
    transition: all 0.3s ease;
  }
  
  .skills .skills-content .left a:hover {
    color: #1e3551;
    background: none;
    animation: pulsate 1s ease-in-out;
  }
  
  .intern,
  .project {
    list-style: none;
  }
  
  .intern::before,
  .project::before {
    content: "✪ ";
    color: #1e3551;
  }
  
  .skills .skills-content .right .bars {
    margin-bottom: 15px;
  }
  
  .skills .skills-content .right .info {
    display: flex;
    margin-bottom: 5px;
    align-items: center;
    justify-content: space-between;
  }
  
  .skills .skills-content .right span {
    font-weight: 500;
    font-size: 18px;
  }
  
  .skills .skills-content .right .line {
    height: 5px;
    width: 100%;
    background: lightgrey;
    position: relative;
  }
  
  .skills .skills-content .right .line::before {
    content: "";
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background: #1e3551;
  }
  
  .skills-content .right .python::before {
    width: 90%;
  }
  
  .skills-content .right .html::before {
    width: 80%;
  }
  
  .skills-content .right .css::before {
    width: 60%;
  }
  
  .skills-content .right .js::before {
    width: 40%;
  }
  
  .skills-content .right .bootstraps::before {
    width: 60%;
  }
  
  .skills-content .right .django::before {
    width: 70%;
  }
  
  /*  Projects  */
  .projects .title::after {
    content: "What I did ?";
  }
  
  .projects .carousel .card {
    background: #222;
    border-radius: 6px;
    padding: 25px 35px;
    text-align: center;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  
  .projects .carousel .card:hover {
    background: #1e3551;
  }
  
  .projects .carousel .card .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }
  
  .projects .carousel .card:hover .box {
    transform: scale(1.05);
  }
  
  .projects .carousel .card .text {
    font-size: 25px;
    font-weight: 500;
    margin: 10px 0 7px 0;
  }
  
  .projects .carousel .card img {
    height: 150px;
    width: 150px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid #888c8d;
    transition: all 0.3s ease;
  }
  
  .projects .carousel .card:hover img {
    border-color: #fff;
  }
  
  .owl-dots {
    text-align: center;
    margin-top: 20px;
  }
  
  .owl-dot {
    height: 13px;
    width: 13px;
    margin: 0 5px;
    outline: none !important;
    border-radius: 50%;
    border: 2px solid #888c8d !important;
    transition: all 0.3s ease;
  }
  
  .owl-dot.active {
    width: 35px;
    border-radius: 14px;
  }
  
  .owl-dot.active,
  .owl-dot:hover {
    background: #18365a !important;
  }
  
  /*  Contact  */
  .contact {
    background: radial-gradient(#e1efff, white);
  }
  
  .contact .title::after {
    content: "—Get in Touch—";
  }
  
  .contact .contact-content .column {
    width: calc(50% - 30px);
  }
  
  .contact .contact-content .text {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  .contact .contact-content .left p {
    text-align: justify;
  }
  
  .contact .contact-content .left .icons {
    margin: 10px 0;
  }
  
  .contact .contact-content .row {
    display: flex;
    height: 65px;
    align-items: center;
  }
  
  .contact .contact-content .row .info {
    margin-left: 30px;
  }
  
  .contact .contact-content .row i {
    font-size: 25px;
    color: #1e3551;
  }
  
  .contact .contact-content .info .head {
    font-weight: 500;
    color: #000;
  }
  
  .contact .contact-content .info .sub-title {
    color: #333;
  }
  
  .contact .right form .fields {
    display: flex;
  }
  
  .contact .right form .field,
  .contact .right form .fields .field {
    height: 45px;
    width: 100%;
    margin-bottom: 15px;
  }
  
  .contact .right form .textarea {
    height: 80px;
    width: 100%;
  }
  
  .contact .right form .name {
    margin-right: 10px;
  }
  
  .contact .right form .field input,
  .contact .right form .textarea textarea {
    height: 100%;
    width: 100%;
    border: 1px solid lightgrey;
    border-radius: 6px;
    outline: none;
    padding: 0 15px;
    font-size: 17px;
    font-family: "Poppins", sans-serif;
    transition: all 0.3s ease;
  }
  
  .contact .right form .field input:focus,
  .contact .right form .textarea textarea:focus {
    border-color: #b3b3b3;
  }
  
  .contact .right form .textarea textarea {
    padding-top: 10px;
    resize: none;
  }
  
  .contact .right form .button-area {
    display: flex;
    align-items: center;
  }
  
  .right form .button-area button {
    color: #fff;
    display: block;
    width: 160px !important;
    height: 45px;
    outline: none;
    font-size: 18px;
    font-weight: 500;
    border-radius: 6px;
    cursor: pointer;
    flex-wrap: nowrap;
    background: #1e3551;
    border: 2px solid #1e3551;
    transition: all 0.3s ease;
  }
  
  .right form .button-area button:hover {
    color: #1e3551;
    background: none;
    animation: pulsate 1s ease-in-out;
  }
  
  /*  Social  */
  .col-4 {
    background: #d8d8d8;
  }
  
  .social-menu ul {
    position: absolute;
    left: 20%;
    padding: 0;
    margin: 0;
    transform: translate(-50%, -50%);
    display: flex;
  }
  
  .social-menu ul li {
    list-style: none;
    margin: 0 15px;
  }
  
  .social-menu ul li .fa {
    font-size: 30px;
    line-height: 60px;
    transition: 0.6s;
    color: #000;
  }
  
  .social-menu ul li .fa:hover {
    color: #fff;
  }
  
  .social-menu ul li a {
    left: px;
    right: 12px;
    padding-top: 3px;
    position: relative;
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #1e3551;
    text-align: center;
    transition: 0.6s;
    box-shadow: 0 5px 4px rgba(0, 0, 0, 0.5);
  }
  
  .social-menu ul li a:hover {
    transform: translate(0, -10px);
  }
  
  .social-menu ul li:nth-child(1) a:hover {
    background-color: #131418;
  }
  
  .social-menu ul li:nth-child(2) a:hover {
    background-color: #0a66c2;
  }
  
  .social-menu ul li:nth-child(3) a:hover {
    background-color: #e4405f;
  }
  .social-menu ul li:nth-child(4) a:hover {
    background-color: #1da1f2;
  }
  
  .social-menu ul li:nth-child(5) a:hover {
    background-color: #e33054;
  }
  
  .social-menu ul li:nth-child(6) a:hover {
    background-color: #fc4f08;
  }
  
  .fa-brands {
    color: #fff;
  }
  
  .fa-solid {
    color: #fff;
  }
  
  /*  Footer  */
  footer {
    background: #111;
    padding: 6px 16px;
    color: #888c8d;
    text-align: center;
  }
  
  footer span a {
    color: #1e3551;
    text-decoration: none;
  }
  
  footer span a:hover {
    text-decoration: underline;
  }
  
  /*  Media Query  */
  @keyframes pulsate {
    0% {
      box-shadow: 0 0 25px #888e8d, 0 0 50px #1e3551;
    }
  }
  
  @media (max-width: 1104px) {
    .about .about-content .left img {
      height: 350px;
      width: 350px;
    }
    section .title::after {
      bottom: -8px;
      font-size: 16px;
    }
  }
  
  @media (max-width: 991px) {
    .social-menu ul li a {
      left: 114px;
    }
  }
  
  @media (max-width: 947px) {
    .menu-btn {
      display: block;
      z-index: 999;
    }
    .menu-btn i.active:before {
      content: "\f00d";
    }
    .navbar .menu {
      position: fixed;
      height: 100vh;
      width: 100%;
      left: -100%;
      top: 0;
      background: #111;
      text-align: center;
      padding-top: 80px;
      transition: all 0.3s ease;
    }
    .navbar .menu.active {
      left: 0;
    }
    .navbar .menu li {
      display: block;
    }
    .navbar .menu li a {
      display: inline-block;
      margin: 20px 0;
      font-size: 25px;
    }
    .home .home-content .text-2 {
      font-size: 70px;
    }
    .home .home-content .text-3 {
      font-size: 35px;
    }
    .home .home-content a {
      font-size: 23px;
      padding: 10px 30px;
    }
    .max-width {
      max-width: 930px;
    }
    .about .about-content .column {
      width: 100%;
    }
    .about .about-content .left {
      display: flex;
      justify-content: center;
      margin: 0 auto 60px;
    }
    .about .about-content .right {
      flex: 100%;
    }
    .services .serv-content .card {
      width: calc(50% - 10px);
      margin-bottom: 20px;
    }
    .skills .skills-content .column,
    .contact .contact-content .column {
      width: 100%;
      margin-bottom: 35px;
    }
  }
  
  @media (max-width: 690px) {
    .max-width {
      padding: 0 23px;
    }
    .home .home-content .text-2 {
      font-size: 60px;
    }
    .home .home-content .text-3 {
      font-size: 32px;
    }
    .home .home-content a {
      font-size: 20px;
    }
    .services .serv-content .card {
      width: 100%;
    }
  }
  
  @media (max-width: 500px) {
    .home .home-content .text-2 {
      font-size: 50px;
    }
    .home .home-content .text-3 {
      font-size: 27px;
    }
    .about .about-content .right .text,
    .skills .skills-content .left .text {
      font-size: 19px;
    }
    .contact .right form .fields {
      flex-direction: column;
    }
    .contact .right form .name,
    .contact .right form .email {
      margin: 0;
    }
    .right form .error-box {
      width: 150px;
    }
    .scroll-up-btn {
      right: 15px;
      bottom: 15px;
      height: 38px;
      width: 35px;
      font-size: 23px;
      line-height: 38px;
    }
  }