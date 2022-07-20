import React from "react";
import Card from "../Card/Card";

function Jobs() {
  const jobs = [
    {
      key: 1,
      name: "Software Development Engineer",
      discription: "This is a Software Development Engineer",
    },
    {
      key: 2,
      name: "Front Ended Engineer",
      discription: "This is a Front Ended Engineer",
    },
    {
      key: 3,
      name: "Back Ended Engineer",
      discription: "This is a Back Ended Engineer",
    },
  ];
  return (
    <div className="wrapper">
      <div className="accordion joblist" id="accordionExample">
        {jobs.map((job) => (
          <div class="accordion-item">
            <h2 class="accordion-header" id={"heading" + job.key}>
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#collapse" + job.key}
                aria-expanded="true"
                aria-controls={"collapse" + job.id}
              >
                {job.name}
              </button>
            </h2>
            <div
              id={"collapse" + job.key}
              class="accordion-collapse collapse show"
              aria-labelledby={"heading" + job.key}
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">{job.discription}</div>
            </div>
          </div>
        ))}
      </div>
      <Card id="Jobs"></Card>
    </div>
  );
}

export default Jobs;
