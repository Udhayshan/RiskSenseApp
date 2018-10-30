import React from 'react';
import { Card, Badge, Icon, Divider } from 'antd';

const status={
  "hourly":'#52c41a',
  "part-time":'#f6c260',
  "full-time":'#73d1fa'
};

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
    <Card bordered={false}>
      <div style={{paddingBottom: '10px'}}>
        <div>
          <strong>{title}</strong>
          {
            availability && availability.map((value, i)=>{
              return <Badge count={value} key={i} style={{ backgroundColor: status[value], marginLeft: '10px' }} />
            })
          }
          <span style={{float:'right'}}>
            <strong>${payRate} / hr</strong>
          </span> 
        </div>
        <div><span style={{color: '#69a8f6'}}><Icon type="database" style={{paddingRight:'2px'}}/>{company} </span><Icon type="environment" style={{ color: '#7ad095' }} />{location}, {country}</div>
        <div>Reply rate: <strong>{replyRate}</strong></div>
      </div>
      <p>{description}</p>
      {
        skills && skills.map((skill, i)=><Badge key={i} count={skill} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />)
      }
      <Divider />
    </Card>
  </div>
)

