import React from 'react'
import { Job } from './Job'
export const JobList = (props) => (
  <div>
    {props.jobs.map((job,i) => <Job
                              key = {i}
                              {...job}
                            />
    )}
  </div>
)