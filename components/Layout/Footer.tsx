import  {FaFacebook,FaTelegram,FaDiscord,FaTwitter} from 'react-icons/fa';
import {ReactElement} from 'react';

const Footer = ():ReactElement => {
    return (
        <div className="h-footer-section bg-gray-700 pb-5">
                  <div className="h-10 bg-gray-100"></div>
                  <div className="h-full grid grid-cols-12 bg-gray-100">

                      <div className="col-start-3 col-end-11  grid grid-cols-5">

                          <div className="flex flex-col items-center gap-2">

                                <span className="text-xl font-normal font-sans text-gray-500">Services</span>
                                <span className="text-md font-normal font-sans text-gray-500 cursor-pointer hover:text-red-500">Frontend service</span>
                                <span className="text-md font-normal font-sans text-gray-500 cursor-pointer hover:text-red-500">Backend service</span>
                          </div>
                          <div className=" flex flex-col items-center gap-2">
                                
                                <span className="text-xl font-normal font-sans text-gray-500">Use cases</span>

                                <span className="text-md font-normal font-sans text-gray-500 cursor-pointer hover:text-red-500">Frontend service use case</span>
                                <span className="text-md font-normal font-sans text-gray-500 cursor-pointer hover:text-red-500">Backend service use case</span>
                                <span className="text-md font-normal font-sans text-gray-500 cursor-pointer hover:text-red-500">full project use case</span>
                                
                          </div>
                          <div className="flex flex-col items-center gap-1">
                                <span className="text-xl font-normal font-sans text-gray-500">Resources</span>
                                <span className="text-md font-normal font-sans text-gray-500 cursor-pointer hover:text-red-500">Documentation</span>
                                <span className="text-md font-normal font-sans text-gray-500 cursor-pointer hover:text-red-500">User guides</span>
                                <span className="text-md font-normal font-sans text-gray-500 cursor-pointer hover:text-red-500">pricing info</span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                                <span className="text-xl font-normal font-sans text-gray-500">Support</span>
                                <span className="text-md font-normal font-sans text-gray-500 cursor-pointer hover:text-red-500">About us</span>
                                <span className="text-md font-normal font-sans text-gray-500 cursor-pointer hover:text-red-500">Contact us</span>
                          </div>
                          <div className="flex flex-col items-center gap-1 ">

                              <div className="flex items-center gap-3">
                               
                                <img src="/fwind.png" style={{
                                    height:'35px'
                                }}/>
                               
                                <span className="text-lg font-sans font-normal text-gray-500">Swiftbase</span>

                              </div>
                              <div className="flex items-center gap-2">
                                    <FaFacebook  style={{height:'25px'}} className="hover:text-gray-400"/>
                                    <FaTelegram  style={{height:'25px'}} className="hover:text-gray-400"/>
                                    <FaTwitter  style={{height:'25px'}} className="hover:text-gray-400"/>
                                    <FaDiscord  style={{height:'25px'}} className="hover:text-gray-400"/>
                              </div>

                          </div>
                      </div>
                  </div>
                            
                </div>
    )
                            
}

export default Footer;