import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-container">
      <div data-custom-class="body">
        <span className="terms-logo" style={{
          background: "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAxNzggMzgiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRDFEMUQxIiBkPSJNNC4yODMgMjQuMTA3Yy0uNzA1IDAtMS4yNTgtLjI1Ni0xLjY2LS43NjhoLS4wODVjLjA1Ny41MDIuMDg2Ljc5Mi4wODYuODd2Mi40MzRILjk4NXYtOC42NDhoMS4zMzJsLjIzMS43NzloLjA3NmMuMzgzLS41OTQuOTUtLjg5MiAxLjcwMi0uODkyLjcxIDAgMS4yNjQuMjc0IDEuNjY1LjgyMi40MDEuNTQ4LjYwMiAxLjMwOS42MDIgMi4yODMgMCAuNjQtLjA5NCAxLjE5OC0uMjgyIDEuNjctLjE4OC40NzMtLjQ1Ni44MzMtLjgwMyAxLjA4LS4zNDcuMjQ3LS43NTYuMzd6TTMuOCAxOS4xOTNjLS40MDUgMC0uNy4xMjQtLjg4Ni4zNzMtLjE4Ny4yNDktLjI4My42Ni0uMjkgMS4yMzN2LjE3N2MwIC42NDUuMDk1IDEuMTA3LjI4NyAxLjM4Ni4xOTIuMjguNDk1LjQxOS45MS40MTkuNzM0IDAgMS4xMDEtLjYwNSAxLjEwMS0xLjgxNiAwLS41OS0uMDktMS4wMzQtLjI3LTEuMzI5LS4xODItLjI5NS0uNDY1LS40NDMtLjg1Mi0uNDQzem01LjU3IDEuNzk0YzAgLjU5NC4wOTggMS4wNDQuMjkzIDEuMzQ4LjE5Ni4zMDQuNTEzLjQ1Ny45NTQuNDU3LjQzNyAwIC43NS0uMTUyLjk0Mi0uNDU0LjE5Mi0uMzAzLjI4OC0uNzUzLjI4OC0xLjM1MSAwLS41OTUtLjA5Ny0xLjA0LS4yOS0xLjMzOC0uMTk0LS4yOTctLjUxLS40NDUtLjk1LS40NDUtLjQzOCAwLS43NTMuMTQ3LS45NDYuNDQzLS4xOTQuMjk1LS4yOS43NDItLjI5IDEuMzR6bTQuMTUzIDBjMCAuOTc3LS4yNTguMTc0LTEuNzQyLjc3NCAyLjI5My0uNTE1LjU1Mi0xLjIzMy44MjctMi4xNTQuODI3LS41NzYgMC0xLjA4NS0uMTI2LTEuNTI1LS4zNzhhMi41MiAyLjUyIDAgMCAxLTEuMDE1LTEuMDg4Yy0uMjM3LS40NzMtLjM1NS0xLjAyNC0uMzU1LTEuNjU0IDAtLjk4MS4yNTYtMS43NDQuNzY4LTIuMjg4LjUxMi0uNTQ1IDEuMjMyLS44MTcgMi4xNi0uODE3LjU3NiAwIDEuMDg1LjEyNiAxLjUyNS4zNzYuNDQuMjUxLjc3OS42MSAxLjAxNSAxLjA4LjIzNi40NjkuMzU1IDEuMDE5LjM1NSAxLjY0OXpNMTkuNzEgMjRsLS40NjItMi4xLS42MjMtMi42NTNoLS4wMzdMMTcuNDkzIDI0SDE1LjczbC0xLjcwOC02LjAwNWgxLjYzM2wuNjkzIDIuNjU5Yy4xMS40NzYuMjI0IDEuMTMzLjMzOCAxLjk3MWguMDMyYy4wMTUtLjI3Mi4wNzctLjcwNC4xODgtMS4yOTRsLjA4Ni0uNDU3Ljc0Mi0yLjg3OWgxLjgwNGwuNzA0IDIuODc5Yy4wMTQuMDc5LjAzNy4xOTUuMDY3LjM1YTIwLjk5OCAyMC45OTggMCAwIDEgLjE2NyAxLjAwMmMuMDIzLjE2NS4wMzYuMjk5LjA0LjM5OWguMDMyYy4wMzItLjI1OC4wOS0uNjExLjE3Mi0xLjA2LjA4Mi0uNDUuMTQxLS43NTQuMTc3LS45MTFsLjcyLTIuNjU5aDEuNjA2TDIxLjQ5NCAyNGgtMS43ODN6bTcuMDg2LTQuOTUyYy0uMzQ4IDAtLjYyLjExLS44MTcuMzMtLjE5Ny4yMi0uMzEuNTMzLS4zMzguOTM3aDIuMjk5Yy0uMDA4LS40MDQtLjExMy0uNzE3LS4zMTctLjkzNy0uMjA0LS4yMi0uNDgtLjMzLS44MjctLjMzem0uMjMgNS4wNmMtLjk2NiAwLTEuNzIyLS4yNjctMi4yNjYtLjgtLjU0NC0uNTM0LS44MTYtMS4yOS0uODE2LTIuMjY3IDAtMS4wMDcuMjUxLTEuNzg1Ljc1NC0yLjMzNC41MDMtLjU1IDEuMTk5LS44MjUgMi4wODctLjgyNS44NDggMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDcyLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MSAwIC43MDMtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45MS4zMmE1Ljc5IDUuNzkgMCAwIDEtMS4xOTEuMTA0em03LjI1My02LjIyNmMuMjIyIDAgLjQwNi4wMTYuNTUzLjA0OWwtLjEyNCAxLjUzNmExLjg3NyAxLjg3NyAwIDAgMC0uNDgzLS4wNTRjLS41MjMgMC0uOTMuMTM0LTEuMjIyLjQwMy0uMjkyLjI2OC0uNDM4LjY0NC0uNDM4IDEuMTI4VjI0aC0xLjYzOHYtNi4wMDVoMS4yNGwuMjQyIDEuMDFoLjA4Yy4xODctLjMzNy40MzktLjYwOC43NTYtLjgxNGExLjg2IDEuODYgMCAwIDEgMS4wMzQtLjMwOXptNC4wMjkgMS4xNjZjLS4zNDcgMC0uNjIuMTEtLjgxNy4zMy0uMTk3LjIyLS4zMS41MzMtLjMzOC45MzdoMi4yOTljLS4wMDctLjQwNC0uMTEzLS43MTctLjMxNy0uOTM3LS4yMDQtLjIyLS40OC0uMzMtLjgyNy0uMzN6bS4yMyA1LjA2Yy0uOTY2IDAtMS43MjItLjI2Ny0yLjI2Ni0uOC0uNTQ0LS41MzQtLjgxNi0xLjI5LS44MTYtMi4yNjcgMC0xLjAwNy4yNTEtMS43ODUuNzU0LTIuMzM0LjUwNC0uNTUgMS4yLS44MjUgMi4wODctLjgyNS44NDkgMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDczLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MiAwIC43MDQtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45MS4zMmE1Ljc5IDUuNzkgMCAwIDEtMS4xOTEuMTA0em01LjgwMyAwYy0uNzA2IDAtMS4yNi0uMjc1LTEuNjYzLS44MjItLjQwMy0uNTQ4LS42MDQtMS4zMDctLjYwNC0yLjI3OCAwLS45ODQgLjIwNS0xLjc1Mi42MTUtMi4zMDEuNDEtLjU1Ljk3NS0uODI1IDEuNjk1LS44MjUuNzU1IDAgMS4zMzIuMjk0IDEuNzI5Ljg4MWguMDU0YTYuNjk3IDYuNjk3IDAgMCAxLS4xMjQtMS4xOTh2LTEuOTIyaDEuNjQ0VjI0SDQ2LjQzbC0uMzE3LS43NzloLS4wN2MtLjM3Mi41OTEtLjk0Ljg4Ni0xLjcwMi44ODZ6bS41NzQtMS4zMDZjLjQyIDAgLjcyNi0uMTIxLjkyMS0uMzY1LjE5Ni0uMjQzLjMwMi0uNjU3LjMyLTEuMjR2LS4xNzhjMC0uNjQ0LS4xLTEuMTA2LS4yOTgtMS4zODYtLjE5OS0uMjc5LS41MjItLjQxOS0uOTctLjQxOWEuOTYyLjk2MiAwIDAgMC0uODUuNDY1Yy0uMjAzLjMxLS4zMDQuNzYtLjMwNCAxLjM1IDAgLjU5Mi4xMDIgMS4wMzUuMzA2IDEuMzMuMjA0LjI5Ni40OTYuNDQzLjg3NS40NDN6bTEwLjkyMi00LjkyYy43MDkgMCAxLjI2NC4yNzcgMS42NjUuODMuNC41NTMuNjAxIDEuMzEyLjYwMSAyLjI3NSAwIC45OTItLjIwNiAxLjc2LS42MiAyLjMwNC0uNDE0LjU0NC0uOTc3LjgxNi0xLjY5LjgxNi0uNzA1IDAtMS4yNTgtLjI1Ni0xLjY1OS0uNzY4aC0uMTEzbC0uMjc0LjY2MWgtMS4yNTF2LTguMzU3aDEuNjM4djEuOTQ0YzAgLjI0Ny0uMDIxLjY0My0uMDY0IDEuMTg3aC4wNjRjLjM4My0uNTk0Ljk1LS44OTIgMS43MDMtLjg5Mm0tLjUyNyAxLjMxYy0uNDA0IDAtLjctLjEyNS0uODg2LjM3NC0uMTg2LjI0OS0uMjgzLjY2LS4yOSAxLjIzM3YuMTc3YzAgLjY0NS4wOTYgMS4xMDcuMjg3IDEuMzg2LjE5Mi4yOC40OTUuNDE5LjkxLjQxOS4zMzcgMCAuNjA1LS4xNTUuODA0LS40NjUuMTk5LS4zMS4yOTgtLjc2LjI5OC0xLjM1IDAtLjU5MS0uMS0xLjAzNS0uMy0xLjMzYS45NDMuOTQzIDAgMCAwLS44MjMtLjQ0M3ptMy4xODYtMS4xOTdoMS43OTRsMS4xMzQgMy4zNzljLjA5Ni4yOTMuMTYzLjY0LjE5OCAxLjA0MmguMDMzYy4wMzktLjM3LjExNi0uNzE3LjIzLTEuMDQybDEuMTEyLTMuMzc5aDEuNzU3bC0yLjU0IDYuNzczYy0uMjM0LjYyNy0uNTY2IDEuMDk2LS45OTcgMS40MDctLjQzMi4zMTItLjkzNi40NjgtMS41MTIuNDY4LS4yODMgMC0uNTYtLjAzLS44MzMtLjA5MnYtMS4zYTIuOCAyLjggMCAwIDAgLjY0NS4wN2MuMjkgMCAuNTQzLS4wODguNzYtLjI2Ni4yMTctLjE3Ny4zODYtLjQ0NC41MDgtLjgwM2wuMDk2LS4yOTUtMi4zODUtNS45NjJ6Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzMpIj4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iMTkiIGN5PSIxOSIgcj0iMTkiIGZpbGw9IiNFMEUwRTAiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIyLjQ3NCAxNS40NDNoNS4xNjJMMTIuNDM2IDMwLjRWMTAuMzYzaDE1LjJsLTUuMTYyIDUuMDh6Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGZpbGw9IiNEMkQyRDIiIGQ9Ik0xMjEuNTQ0IDE0LjU2di0xLjcyOGg4LjI3MnYxLjcyOGgtMy4wMjRWMjRoLTIuMjR2LTkuNDRoLTMuMDA4em0xMy43NDQgOS41NjhjLTEuMjkgMC0yLjM0MS0uNDE5LTMuMTUyLTEuMjU2LS44MS0uODM3LTEuMjE2LTEuOTQ0LTEuMjE2LTMuMzJzLjQwOC0yLjQ3NyAxLjIyNC0zLjMwNGMuODE2LS44MjcgMS44NzItMS4yNCAzLjE2OC0xLjI0czIuMzYuNDAzIDMuMTkyIDEuMjA4Yy44MzIuODA1IDEuMjQ4IDEuODggMS4yNDggMy4yMjQgMCAuMzEtLjAyMS41OTctLjA2NC44NjRoLTYuNDY0Yy4wNTMuNTc2LjI2NyAxLjA0LjY0IDEuMzkyLjM3My4zNTIuODQ4LjUyOCAxLjQyNC41MjguNzc5IDAgMS4zNTUtLjMyIDEuNzI4LS45NmgyLjQzMmEzLjg5MSAzLjg5MSAwIDAgMS0xLjQ4OCAyLjA2NGMtLjczNi41MzMtMS42MjcuOC0yLjY3Mi44em0xLjQ4LTYuNjg4Yy0uNC0uMzUyLS44ODMtLjUyOC0xLjQ0OC0uNTI4cy0xLjAzNy4xN6tMS40MTYuNTI4Yy0uMzc5LjM1Mi0uNjA1LjgyMS0uNjggMS40MDhoNC4xOTJjLS4wMzItLjU4Ny0uMjQ4LTEuMDU2LS42NDgtMS40MDh6bTcuMDE2LTIuMzA0djEuNTY4Yy41OTctMS4xMyAxLjQ2MS0xLjY5NiAyLjU5Mi0xLjY5NnYyLjMwNGgtLjU2Yy0uNjcyIDAtMS4xNzkuMTY4LTEuNTIuNTA0LS4zNDEuMzM2LS41MTIuOTE1LS41MTIgMS43MzZWMjRoLTIuMjU2di04Ljg2NGgyLjI1NnpNMTY0LjkzNiAyNFYxMi4xNmgyLjI1NlYyNGgtMi4yNTZ6bTcuMDQtLjE2bC0zLjQ3Mi04LjcwNGgyLjUyOGwyLjI1NiA2LjMwNCAyLjM4NC02LjMwNGgyLjM1MmwtNS41MzYgMTMuMDU2aC0yLjM1MmxlLjg0LTQuMzUyeiIvPgogICAgPC9nPgogICAgPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAxNzggMzgiPgogICAgICAgIDxwYXRoIGZpbGw9IiNEMkQyRDIiIGQ9Ik0xMjEuNTQ0IDE0LjU2di0xLjcyOGg4LjI3MnYxLjcyOGgtMy4wMjRWMjRoLTIuMjR2LTkuNDRoLTMuMDA4em0xMy43NDQgOS41NjhjLTEuMjkgMC0yLjM0MS0uNDE5LTMuMTUyLTEuMjU2LS44MS0uODM3LTEuMjE2LTEuOTQ0LTEuMjE2LTMuMzJzLjQwOC0yLjQ3NyAxLjIyNC0zLjMwNGMuODE2LS44MjcgMS44NzItMS4yNCAzLjE2OC0xLjI0czIuMzYuNDAzIDMuMTkyIDEuMjA4Yy44MzIuODA1IDEuMjQ4IDEuODggMS4yNDggMy4yMjQgMCAuMzEtLjAyMS41OTctLjA2NC44NjRoLTYuNDY0Yy4wNTMuNTc2LjI2NyAxLjA0LjY0IDEuMzkyLjM3My4zNTIuODQ4LjUyOCAxLjQyNC41MjguNzc5IDAgMS4zNTUtLjMyIDEuNzI4LS45NmgyLjQzMmEzLjg5MSAzLjg5MSAwIDAgMS0xLjQ4OCAyLjA2NGMtLjczNi41MzMtMS42MjcuOC0yLjY3Mi44em0xLjQ4LTYuNjg4Yy0uNC0uMzUyLS44ODMtLjUyOC0xLjQ0OC0uNTI4cy0xLjAzNy4xN6tMS40MTYuNTI4Yy0uMzc5LjM1Mi0uNjA1LjgyMS0uNjggMS40MDhoNC4xOTJjLS4wMzItLjU4Ny0uMjQ4LTEuMDU2LS42NDgtMS40MDh6bTcuMDE2LTIuMzA0djEuNTY4Yy41OTctMS4xMyAxLjQ2MS0xLjY5NiAyLjU5Mi0xLjY5NnYyLjMwNGgtLjU2Yy0uNjcyIDAtMS4xNzkuMTY4LTEuNTIuNTA0LS4zNDEuMzM2LS41MTIuOTE1LS41MTIgMS43MzZWMjRoLTIuMjU2di04Ljg2NGgyLjI1NnpNMTY0LjkzNiAyNFYxMi4xNmgyLjI1NlYyNGgtMi4yNTZ6bTcuMDQtLjE2bC0zLjQ3Mi04LjcwNGgyLjUyOGwyLjI1NiA2LjMwNCAyLjM4NC02LjMwNGgyLjM1MmwtNS41MzYgMTMuMDU2aC0yLjM1MmxlLjg0LTQuMzUyeiIvPgogICAgPC9zdmc+Cjwvc3ZnPgo=) center no-repeat"
        }}></span>

        <div align="center" style={{textAlign: "left"}}>
          <div data-custom-class="title" style={{lineHeight: "1.5"}}>
            <strong><h1>TERMS OF SERVICE</h1></strong>
          </div>
          
          <div data-custom-class="subtitle" style={{lineHeight: "1.5"}}>
            <strong>Last updated</strong> March 31, 2025
          </div>
        </div>

        {/* Table of Contents */}
        <div data-custom-class="heading_1" style={{lineHeight: "1.5"}}>
          <strong><h2>TABLE OF CONTENTS</h2></strong>
        </div>

        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <ol>
            <li><a href="#agreement">AGREEMENT TO TERMS</a></li>
            <li><a href="#ip">INTELLECTUAL PROPERTY RIGHTS</a></li>
            <li><a href="#userrep">USER REPRESENTATIONS</a></li>
            <li><a href="#prohibited">PROHIBITED ACTIVITIES</a></li>
            <li><a href="#ugc">USER GENERATED CONTRIBUTIONS</a></li>
            <li><a href="#license">CONTRIBUTION LICENSE</a></li>
            <li><a href="#reviews">GUIDELINES FOR REVIEWS</a></li>
            <li><a href="#mobile">MOBILE APPLICATION LICENSE</a></li>
            <li><a href="#socialmedia">SOCIAL MEDIA</a></li>
            <li><a href="#submissions">SUBMISSIONS</a></li>
            <li><a href="#thirdparty">THIRD-PARTY WEBSITES AND CONTENT</a></li>
            <li><a href="#advertisers">ADVERTISERS</a></li>
            <li><a href="#termination">TERMINATION</a></li>
            <li><a href="#modifications">MODIFICATIONS AND INTERRUPTIONS</a></li>
            <li><a href="#law">GOVERNING LAW</a></li>
            <li><a href="#disputes">DISPUTE RESOLUTION</a></li>
            <li><a href="#corrections">CORRECTIONS</a></li>
            <li><a href="#disclaimer">DISCLAIMER</a></li>
            <li><a href="#liability">LIMITATIONS OF LIABILITY</a></li>
            <li><a href="#indemnification">INDEMNIFICATION</a></li>
            <li><a href="#userdata">USER DATA</a></li>
            <li><a href="#electronic">ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</a></li>
            <li><a href="#misc">MISCELLANEOUS</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ol>
        </div>

        {/* Company Introduction */}
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p>We are AppLab Studios ('Company', 'we', 'us', or 'our'), a company registered in Sweden at Övre Långvinkelsgatan 146B, Helsingborg, Skåne 254 36. Our VAT number is 199709261912.</p>
          
          <p>We operate the website http://www.applabstudios.com (the 'Site'), as well as any other related products and services that refer or link to these legal terms (the 'Legal Terms') (collectively, the 'Services').</p>
          
          <p>At AppLab, we're more than just developers – we're digital innovators passionate about creating transformative solutions that drive business success. Our mission is to bridge the gap between imagination and technology, delivering cutting-edge solutions that empower businesses to thrive in the digital age.</p>
          
          <p>We believe in pushing boundaries, embracing challenges, and transforming complex problems into elegant solutions. Our team combines technical expertise with creative thinking to deliver results that exceed expectations.</p>
          
          <p>You can contact us by phone at 0700363789, email at youssef.azroun.applab@gmail.com, or by mail to Övre Långvinkelsgatan 146B, Helsingborg, Skåne 254 36, Sweden.</p>
        </div>

        {/* Agreement to Terms */}
        <div data-custom-class="heading_1" id="agreement" style={{lineHeight: "1.5"}}>
          <strong>1. AGREEMENT TO TERMS</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p>These Terms of Service constitute a legally binding agreement made between you and AppLab Studios, concerning your access to and use of our services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Terms of Service.</p>
          <p>IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>
        </div>

        {/* Intellectual Property Rights */}
        <div data-custom-class="heading_1" id="ip" style={{lineHeight: "1.5"}}>
          <strong>2. INTELLECTUAL PROPERTY RIGHTS</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p>Our Services and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by AppLab Studios, its licensors, or other providers of such material and are protected by Sweden and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
        </div>

        {/* User Representations */}
        <div data-custom-class="heading_1" id="userrep" style={{lineHeight: "1.5"}}>
          <strong>3. USER REPRESENTATIONS</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p>By using the Services, you represent and warrant that:</p>
          <ol>
            <li>All registration information you submit will be true, accurate, current, and complete</li>
            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary</li>
            <li>You have the legal capacity and you agree to comply with these Terms of Service</li>
            <li>You are not under the age of 13</li>
            <li>You are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services</li>
            <li>You will not access the Services through automated or non-human means, whether through a bot, script or otherwise</li>
            <li>You will not use the Services for any illegal or unauthorized purpose</li>
            <li>Your use of the Services will not violate any applicable law or regulation</li>
          </ol>
        </div>

        {/* Prohibited Activities */}
        <div data-custom-class="heading_1" id="prohibited" style={{lineHeight: "1.5"}}>
          <strong>4. PROHIBITED ACTIVITIES</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p>You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
          <p>As a user of the Services, you agree not to:</p>
          <ul>
            <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us</li>
            <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords</li>
            <li>Circumvent, disable, or otherwise interfere with security-related features of the Services</li>
            <li>Make improper use of our support services or submit false reports of abuse or misconduct</li>
            <li>Engage in any automated use of the system</li>
            <li>Use any information obtained from the Services in order to harass, abuse, or harm another person</li>
            <li>Use the Services in a manner inconsistent with any applicable laws or regulations</li>
          </ul>
        </div>

        {/* User Generated Contributions */}
        <div data-custom-class="heading_1" id="ugc" style={{lineHeight: "1.5"}}>
          <strong>5. USER GENERATED CONTRIBUTIONS</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p>The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions").</p>
          <p>Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:</p>
          <ul>
            <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
            <li>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Terms of Service.</li>
            <li>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Terms of Service.</li>
            <li>Your Contributions are not false, inaccurate, or misleading.</li>
            <li>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
            <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
          </ul>
        </div>

        {/* Contribution License */}
        <div data-custom-class="heading_1" id="license" style={{lineHeight: "1.5"}}>
          <strong>6. CONTRIBUTION LICENSE</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p>By posting your Contributions to any part of the Services or making Contributions accessible to the Services by linking your account from the Services to any of your social networking accounts, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorize sublicenses of the foregoing.</p>
          <p>The use and distribution may occur in any media formats and through any media channels.</p>
          <p>This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide.</p>
          <p>You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions.</p>
        </div>

        {/* Guidelines for Reviews */}
        <div data-custom-class="heading_1" id="reviews" style={{lineHeight: "1.5"}}>
          <strong>7. GUIDELINES FOR REVIEWS</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p>We may provide you areas on the Services to leave reviews or ratings. When posting a review, you must comply with the following criteria:</p>
          <ul>
            <li>You should have firsthand experience with the person/entity being reviewed</li>
            <li>Your reviews should not contain offensive profanity, or abusive, racist, offensive, or hate language</li>
            <li>Your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability</li>
            <li>Your reviews should not contain references to illegal activity</li>
            <li>You should not be affiliated with competitors if posting negative reviews</li>
            <li>You should not make any conclusions as to the legality of conduct</li>
            <li>You may not post any false or misleading statements</li>
            <li>You may not organize a campaign encouraging others to post reviews, whether positive or negative</li>
          </ul>
          <p>We may accept, reject, or remove reviews in our sole discretion. We have absolutely no obligation to screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us, and do not necessarily represent our opinions or the views of any of our affiliates or partners.</p>
        </div>

        {/* Mobile Application License */}
        <div data-custom-class="heading_1" id="mobile" style={{lineHeight: "1.5"}}>
          <strong>8. MOBILE APPLICATION LICENSE</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p><strong>Use License</strong></p>
          <p>If you access the Services via a mobile application, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the mobile application on wireless electronic devices owned or controlled by you, and to access and use the mobile application on such devices strictly in accordance with the terms and conditions of this mobile application license contained in these Terms of Service.</p>
          <p>You shall not:</p>
          <ul>
            <li>Modify, decompile, reverse engineer or attempt to extract the source code of the application</li>
            <li>Make any modification, adaptation, improvement, enhancement, translation or derivative work from the application</li>
            <li>Violate any applicable laws, rules or regulations in connection with your access or use of the application</li>
            <li>Remove, alter or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the application</li>
            <li>Use the application for any revenue generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended</li>
            <li>Make the application available over a network or other environment permitting access or use by multiple devices or users at the same time</li>
            <li>Use the application for creating a product, service or software that is, directly or indirectly, competitive with or in any way a substitute for the application</li>
            <li>Use the application to send automated queries to any website or to send any unsolicited commercial e-mail</li>
            <li>Use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing or distribution of any applications, accessories or devices for use with the application</li>
          </ul>
        </div>

        {/* Social Media */}
        <div data-custom-class="heading_1" id="socialmedia" style={{lineHeight: "1.5"}}>
          <strong>9. SOCIAL MEDIA</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p>As part of the functionality of the Services, you may link your account with online accounts you have with third-party service providers (each such account, a "Third-Party Account") by either: (1) providing your Third-Party Account login information through the Services; or (2) allowing us to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account.</p>
          <p>You represent and warrant that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your Third-Party Account, without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account, and without obligating us to pay any fees or making us subject to any usage limitations imposed by the third-party service provider of the Third-Party Account.</p>
          <p>By granting us access to any Third-Party Accounts, you understand that (1) we may access, make available, and store (if applicable) any content that you have provided to and stored in your Third-Party Account (the "Social Network Content") so that it is available on and through the Services via your account, including without limitation any friend lists and (2) we may submit to and receive from your Third-Party Account additional information to the extent you are notified when you link your account with the Third-Party Account.</p>
        </div>

        {/* Submissions */}
        <div data-custom-class="heading_1" id="submissions" style={{lineHeight: "1.5"}}>
          <strong>10. SUBMISSIONS</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p>You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Services ("Submissions") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.</p>
          <p>You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.</p>
        </div>

        {/* Third-Party Websites */}
        <div data-custom-class="heading_1" id="thirdparty" style={{lineHeight: "1.5"}}>
          <strong>11. THIRD-PARTY WEBSITES AND CONTENT</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p>The Services may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content").</p>
          <p>Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Services or any Third-Party Content posted on, available through, or installed from the Services, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content.</p>
          <p>Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Services and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms of Service no longer govern.</p>
        </div>

        {/* Advertisers */}
        <div data-custom-class="heading_1" id="advertisers" style={{lineHeight: "1.5"}}>
          <strong>12. ADVERTISERS</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p>We allow advertisers to display their advertisements and other information in certain areas of the Services, such as sidebar advertisements or banner advertisements. If you are an advertiser, you shall take full responsibility for any advertisements you place on the Services and any services provided on the Services or products sold through those advertisements.</p>
          <p>Further, as an advertiser, you warrant and represent that you possess all rights and authority to place advertisements on the Services, including, but not limited to, intellectual property rights, publicity rights, and contractual rights.</p>
          <p>We simply provide the space to place such advertisements, and we have no other relationship with advertisers.</p>
        </div>

        {/* Termination */}
        <div data-custom-class="heading_1" id="termination" style={{lineHeight: "1.5"}}>
          <strong>13. TERMINATION</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p>These Terms of Service shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF SERVICE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.</p>
          <p>If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</p>
        </div>

        {/* Modifications and Interruptions */}
        <div data-custom-class="heading_1" id="modifications" style={{lineHeight: "1.5"}}>
          <strong>14. MODIFICATIONS AND INTERRUPTIONS</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p>We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We also reserve the right to modify or discontinue all or part of the Services without notice at any time.</p>
          <p>We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.</p>
          <p>We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you.</p>
          <p>You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Terms of Service will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.</p>
        </div>

        {/* Governing Law */}
        <div data-custom-class="heading_1" id="law" style={{lineHeight: "1.5"}}>
          <strong>15. GOVERNING LAW</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p>These Terms shall be governed by and defined following the laws of Sweden. AppLab Studios and yourself irrevocably consent that the courts of Sweden shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
        </div>

        {/* Dispute Resolution */}
        <div data-custom-class="heading_1" id="disputes" style={{lineHeight: "1.5"}}>
          <strong>16. DISPUTE RESOLUTION</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p><strong>Informal Negotiations</strong></p>
          <p>To expedite resolution and control the cost of any dispute, controversy, or claim related to these Terms of Service (each "Dispute" and collectively, the "Disputes") brought by either you or us (individually, a "Party" and collectively, the "Parties"), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.</p>
          
          <p><strong>Binding Arbitration</strong></p>
          <p>Any dispute arising out of or in connection with these Terms of Service, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by the International Commercial Arbitration Court under the European Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146) according to the Rules of this ICAC, which, as a result of referring to it, is considered as the part of this clause.</p>
          <p>The number of arbitrators shall be three (3). The seat, or legal place, of arbitration shall be Helsingborg, Sweden. The language of the proceedings shall be English. The governing law of these Terms shall be the substantive law of Sweden.</p>
          
          <p><strong>Restrictions</strong></p>
          <p>The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.</p>
          
          <p><strong>Exceptions to Informal Negotiations and Arbitration</strong></p>
          <p>The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations and binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief.</p>
          <p>If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.</p>
        </div>

        {/* Corrections */}
        <div data-custom-class="heading_1" id="corrections" style={{lineHeight: "1.5"}}>
          <strong>17. CORRECTIONS</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p>There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.</p>
        </div>

        {/* Disclaimer */}
        <div data-custom-class="heading_1" id="disclaimer" style={{lineHeight: "1.5"}}>
          <strong>18. DISCLAIMER</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p>THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.</p>
        </div>

        {/* Limitations of Liability */}
        <div data-custom-class="heading_1" id="liability" style={{lineHeight: "1.5"}}>
          <strong>19. LIMITATIONS OF LIABILITY</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
        </div>

        {/* Indemnification */}
        <div data-custom-class="heading_1" id="indemnification" style={{lineHeight: "1.5"}}>
          <strong>20. INDEMNIFICATION</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of your use of the Services.</p>
        </div>

        {/* User Data */}
        <div data-custom-class="heading_1" id="userdata" style={{lineHeight: "1.5"}}>
          <strong>21. USER DATA</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p>We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services.</p>
        </div>

        {/* Electronic Communications */}
        <div data-custom-class="heading_1" id="electronic" style={{lineHeight: "1.5"}}>
          <strong>22. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p>Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing.</p>
        </div>

        {/* Miscellaneous */}
        <div data-custom-class="heading_1" id="misc" style={{lineHeight: "1.5"}}>
          <strong>23. MISCELLANEOUS</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p>These Terms of Service and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Service shall not operate as a waiver of such right or provision.</p>
        </div>

        {/* Contact Us */}
        <div data-custom-class="heading_1" id="contact" style={{lineHeight: "1.5"}}>
          <strong>24. CONTACT US</strong>
        </div>
        <div data-custom-class="body_text" style={{lineHeight: "1.5"}}>
          <p>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:</p>
          <p>
            AppLab Studios<br />
            Sweden<br />
            Phone: 0700363789<br />
            Email: youssef.azroun.applab@gmail.com
          </p>
        </div>

      </div>
    </div>
  );
};

export default Terms; 