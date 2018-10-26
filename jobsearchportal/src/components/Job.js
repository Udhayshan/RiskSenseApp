import React from 'react';

export const Job = ({title,
                     location,
                     country,
                     experience,
                     payRate,
                     description,
                     company,
                     availability,
                     replyRate,
                     skills,
                     languages,
                     jobType
                    }) => (
  <div>
    <div>
      <span>Title:  </span><span>{title}</span>
    </div>
    <div>
      <span>Description:  </span><span>{description}</span>
    </div>
    <div>
      <span>Company:  </span><span>{company}</span>
    </div>
    <div>
      <span>Experience:  </span><span>{experience}</span>
    </div>
    <div>
      <span>Location:  </span><span>{location}</span>
    </div>
    <div>
      <span>Country:  </span><span>{country}</span>
    </div>
    <div>
      <span>Pay rate:  </span><span>${payRate}/hr</span>
    </div>
    <div>
      <span>Availability:  </span><span>{availability}</span>
    </div>
    <div>
      <span>Reply Rate:  </span><span>{replyRate}</span>
    </div>
    <div>
      <span>Skills:  </span><span>{skills}</span>
    </div>
    <div>
      <span>Languages:  </span><span>{languages}</span>
    </div>
    <div>
      <span>Job Type:  </span><span>{jobType}</span>
    </div>
  </div>
)

