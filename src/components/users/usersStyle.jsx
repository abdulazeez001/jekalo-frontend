import styled from "styled-components";

const StyleUser = styled.section`

padding:0 .6em;
display:flex;
justify-content:space-between;
width:calc(100% - 1.2em);
font-weight:600;
border-bottom:0.5px solid #E7E7E7;

& > div{
  display:flex;
  gap:1.5rem;
}

& .name_prefix{
    color:white;
    background-color:#11468F;
    border-radius:100%;
    padding:.3rem;
  }

& .del-btn img{
  padding-top:.3rem;
  margin:100% auto;
}
`
export default StyleUser;
