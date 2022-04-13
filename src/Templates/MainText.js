import React from 'react'
import '../Templates/main-style.css'
import Collapsible from 'react-collapsible';
function MainText() {
  return (
    <div class="banner">
    <div className='Grid'>
        <div className='Aboutme'>
         <Collapsible trigger="About Me">
           <p className='Aboutme-infomation'>
           I am a hardworking enthusiastic team player who thrives on working within a group to achieve goals. 
           <br />
           I enjoy meeting new people and I am very confident in a one-on-one environment.
           <br />
           My passion is Computer Science and I have built several PCs,
          <br />
          configured my own network and written automation software.
           </p>
          </Collapsible>
        </div>
        <div className='employment'>
         <Collapsible trigger="Employment">
           <p className='employment-infomation'>
           Blue Diamond Garden Centre, Dymock Nr Newent June 2021 to date:
           <br />
           Responsibilities:
           <br />	
          Waiting within the restaurant/café
          <br />	
          Barista of coffee and hot drinks
          <br />	
          Taking of orders via tablet
          <br />	
          Taking payment via till and card payment machine
          <br />	
          General Customer Service
           </p>
          </Collapsible>
        </div>
        <div className='Skills'>
         <Collapsible trigger="Skills">
           <p className='Skills-Infomation'>
            <li>Very wide knowledge of Computers and Networks</li>
            <li>Good communicator</li>
            <li>Confident on several IT packages including Microsoft Word and Excel, Outlook and PowerPoint</li>
           </p>
          </Collapsible>
        </div>
        <div className='Languages'>
         <Collapsible trigger="Coding Languages">
           <p className='Languages-Infomation'>
            Python
            <br/>
            <br/>
            React.Js
            <br/>
            <br/>
            Sql
            <br/>
            <br/>
            Html
            <br/>
            <br/>
            Css
            <br/>
            <br/>
            Javascript
           </p>
          </Collapsible>
        </div>
        <div className='Education'>
         <Collapsible trigger="Education">
           <p className='Education-Infomation'>
            <li>The Kings School Gloucester, 2015 - 2021</li>
            <li>Cirencester College, September 2021 – Present, Studying Digital "T-Level" (equivalent to 3 A-levels)</li>
           </p>
          </Collapsible>
        </div>
        <div className='Qualifications'>
         <Collapsible trigger="Qualifications">
           <p className='Qualifications-Infomation'>
            <p className='Philosophy, Religion and Ethics'>
            Philosophy, Religion and Ethics : 6 (June 2020)
            </p>
            <p className='Computer Science'>
            Computer Science : 8 (June 2021)
            </p>
            <p className='Business Studies'>
            Business Studies : 8 (June 2021)
            </p>
            <p className='Chemistry'>
            Chemistry : 6 (June 2021)
            </p>
            <p className='English Lang'>
            English Lang : 5 (June 2021)
            </p>
            <p className='English Lit'>
            English Lit : 5 (June 2021)
            </p>
            <p className='Maths'>
            Maths : 5 (June 2021)
            </p>
            <p className='Spanish'>
            Spanish : 5 (June 2021)
            </p>
            <p className='Physics'>
            Physics : 5 (June 2021)
            </p>
           </p>
          </Collapsible>
        </div>
        <div className='Intrests'>
         <Collapsible trigger="Interests">
           <p className='Intrests-Infomation'>
           My primary interest and hobbies revolve around purchasing and re-selling high end sneakers/trainers using automated software which I have developed.
          <p/>
          I have a fascination with modern business techniques particularly with tech based entrepreneurs.
          <p/>
          I am also interested in modifying cars and motorcycles.
           </p>
          </Collapsible>
        </div>
        <div className='Contact'>
         <Collapsible trigger="Contact Me">
           <p className='Contact-Infomation'>
           <a href="tel:07490185695" className='CallMe'>Call Me</a>
           <br/>
           <br/>
           <a href = "mailto:bradjeans102@gmail.com" className='EmailMe'>Email Me</a>
           <br/>
           <br/>
           Mount Pleasant 
           <br/>
           Stoney Road
           <br/>
           Kilcot
           <br/>
           GL18 1PB
           </p>
          </Collapsible>
        </div>
    </div>
    </div>
  )
}

export default MainText