import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;

}
body{
  background:${props=> props.theme.colors.background};
  color:${props=> props.theme.colors.text};
  font-family:Arial, Helvetica, sans-serif;
  height:100vh;
  width: 100vw;
  display:block;
  align-items: center;
  justify-content:center
}
`