import styled from "styled-components";
import { device } from "../../assets/mediaQuery";


const StyleForm = styled.form`
  gap:1rem;

  & .form > div{
    display:flex;
    flex-direction:column;
    justify-contents:center;
  }
  & label{
    color:#11468F;
    font-weight:bold;
  }
  & input,button{
    width:15rem;
    height:2.5rem;
    margin:.4rem 0;
    border:.5px solid lightgrey;
    border-radius:.5rem;
  }

  & input{
    padding-left:.8rem;
  } 

  & button{
     height:2.8rem;
     background-color:#11468F;
     color:white;
     border:1px solid #11468F;
  }

  @media ${device.tablet} { 
   & .form{
     width:100%;
     margin:auto;
     display:grid;
     grid-template-columns:1fr 1fr;
     gap:1rem;
   }
 }

  @media ${device.laptop} { 
     display:grid;
     grid-template-columns:1fr 1fr;
     align-items:baseline;
     & .btn{
       height:100%;
       display:grid;
       grid-template-rows:1fr 1fr;
       gap:1rem;
       
     }
     & button{
      align-self:end;
     }
  }

  
`
export default StyleForm
