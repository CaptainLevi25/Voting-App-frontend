import React, { forwardRef } from 'react'

import {  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue} from "framer-motion/dist/framer-motion";
import Progress_bar from '../components/ProgressBar/ProgressBar';

export default function Cards({giveeVotee}) {
  return (
<>

  
<div  className="wrap">
   <div className="card ">
     <img
       src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no"
       alt="Person"
       class="card__image"
     />
     <p class="card__name">Lily-Grace Colley</p>
     <div class="grid-container">
       <div class="grid-child-posts">156 Post</div>

       <div class="grid-child-followers">1012 Likes</div>
     </div>
     <ul class="social-icons">
       <li>
         <a href="#">
           <i class="fa fa-instagram"></i>
         </a>
       </li>
       <li>
         <a href="#">
           <i class="fa fa-twitter"></i>
         </a>
       </li>
       <li>
         <a href="#">
           <i class="fa fa-linkedin"></i>
         </a>
       </li>
       <li>
         <a href="#">
           <i class="fa fa-codepen"></i>
         </a>
       </li>
     </ul>
     <button class="btn draw-border" onClick={giveeVotee}>Vote</button>
     {/* <button class="btn draw-border">Message</button> */}
   </div>
 </div>  
   <Progress_bar className="progress" bgcolor="#99ff66" progress="50" height={50} />
</>   
)
}