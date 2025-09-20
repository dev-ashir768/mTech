import React from 'react'
import { useState } from 'react'
import PricingTable from '.'
import Section from '../Div'
import Spacing from '../Spacing'

export default function PricingTableList() {
  const [tab, setTab] = useState('monthly')
  return (
    <Section className="position-relative">
      {/* <ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
        <li className={tab === 'monthly' ? "active" : ""} onClick={()=>setTab('monthly')}>Monthly</li>
        <li className={tab === 'yearly' ? "active" : ""} onClick={()=>setTab('yearly')}>Yearly</li>
      </ul> */}
      <Section className="row">
        <Section className="col-lg-4">
          {tab==='monthly' && (
            <PricingTable 
              title='Web Development'
              price='249'
              currency='£'
              timeline='project'
              features={['Custom Website Development', 'Responsive Web Design', 'E-commerce Website Development', 'CMS Development', 'Landing Page Design & Development', 'Full-Stack Development']}
              btnText='Contact Now'
              btnLink='/contact'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Standard'
              price='59'
              currency='£'
              timeline='yearly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Contact Now'
              btnLink='/contact'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
         {tab==='monthly' && (
            <PricingTable 
              title='App Development'
              price='999'
              currency='£'
              timeline='project'
              features={['Custom Mobile App Development', 'UI/UX Design', 'Cross-Platform App Development', 'Native-Like Performance', 'App Integration', 'App Maintenance & Support']}
              btnText='Contact Now'
              btnLink='/contact'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Professional'
              price='399'
              currency='£'
              timeline='yearly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Contact Now'
              btnLink='/contact'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
          {tab==='monthly' && (
            <PricingTable 
              title='Digital Marketing'
              price='129'
              currency='£'
              timeline='project'
              features={['Pay-Per-Click Advertising', 'Social Media Marketing', 'Content Marketing', 'Email Marketing', 'Conversion Rate Optimization', 'E-commerce Marketing']}
              btnText='Contact Now'
              btnLink='/contact'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Ultimate'
              price='599'
              currency='£'
              timeline='yearly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Contact Now'
              btnLink='/contact'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
      </Section>
    </Section>
  )
}
