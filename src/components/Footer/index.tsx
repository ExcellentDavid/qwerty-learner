import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer: React.FC = () => {
  return (
    <div className="w-full text-sm text-center pb-1 ease-in">
      <a href="https://github.com/Kaiyiwing/qwerty-learner">
        <FontAwesomeIcon icon={['fab', 'github']} className="text-gray-500 mr-3" />
      </a>
      <a href="mailto:ZHANG.Kaiyi42@gmail.com">
        <FontAwesomeIcon icon={['fas', 'envelope']} className="text-gray-500 mr-3" />
      </a>

      <a className="text-gray-500 no-underline hover:no-underline" href="#/">
        @ Qwerty Learner
      </a>
    </div>
  )
}

export default Footer
