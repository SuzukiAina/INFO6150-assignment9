import React from "react";
import Card from "../Card/Card";

function About() {
  return (
    <div className="wrapper">
      <div className="aboutHead">
        <h1>About</h1>
      </div>
      <div className="row aboutPannel">
        <div className="col-4">
          <div class="card">
            <div class="card-header">Quote</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>A well-known quote, contained in a blockquote element.</p>
                <footer class="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div class="card">
            <div class="card-header">Quote</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>A well-known quote, contained in a blockquote element.</p>
                <footer class="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div class="card">
            <div class="card-header">Quote</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>A well-known quote, contained in a blockquote element.</p>
                <footer class="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <Card id="About"></Card>
    </div>
  );
}

export default About;
