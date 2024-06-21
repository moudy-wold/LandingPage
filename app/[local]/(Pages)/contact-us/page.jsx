import React from 'react'
import ContactUs from "../../components/ContactUs/PageContent"
function Page({ params: { local } })  {
  return (
    <div>
      <ContactUs local={local}/>
    </div>
  )
}

export default Page
