import React from 'react'
import { Link } from 'react-router-dom'

function Privacy() {
  return (
    <div className='container mx-auto p-6'>
        <h2 className="text-primary-focus 2xl:text-3xl lg:text-[1.7rem] text-2xl mt-6 px-4 underline">Privacy Policy</h2>
        <ul className="my-5 text-slate-600 pl-4">
            <li className="mb-2 text-lg md:text-xl">✅ Your privacy is important to us. It is in Kerasoft's best interest to respect your privacy regarding any information we may collect from you across our website, <Link to='/home' className='font-thin italic text-primary'>https://kerasoft.in</Link>, and other sites we own and operate.</li>
            <li className="mb-2 text-lg md:text-xl">✅ We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</li>
            <li className="mb-2 text-lg md:text-xl">✅ We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</li>
            <li className="mb-2 text-lg md:text-xl">✅ We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</li>
            <li className="mb-2 text-lg md:text-xl">✅ Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</li>
            <li className="mb-2 text-lg md:text-xl">✅ You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</li>
            <li className="mb-2 text-lg md:text-xl">✅ Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</li>
            <li className="mb-2 text-lg md:text-xl">✅ And for certain technologies used in our electronic products we are required to hold some information of the buyer and the product, as per the law. For eg; IMEI.</li>
        </ul>
    </div>
  )
}

export default Privacy