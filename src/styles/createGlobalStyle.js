import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap');
  
  @font-face {
  font-family: Roobert;
  src: url("https://static.twitchcdn.net/assets/Roobert-SemiBold-df85158a0012c224b021.woff2") format("woff2"), url("https://static.twitchcdn.net/assets/Roobert-SemiBold-48a406bf82c48cfaa849.woff") format("woff");
  font-weight: 600;

  @font-face {
  font-family: Inter;
  src: url("https://static.twitchcdn.net/assets/Inter-latin.var-812b3dd29751112389e9.woff2") format("woff2-variations"), url("https://static.twitchcdn.net/assets/Inter-400-latin-1a52538dd11362f59a59.woff2") format("woff2"), url("https://static.twitchcdn.net/assets/Inter-400-7b281ee874e613d013f5.woff") format("woff");
  font-style: normal;
  font-weight: 400;
  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
}


  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  p, small, span{
    font-family: "Inter", "Roobert";
  }

  body{
    background: #f7f7f8;
    font-family: "Roobert",'Roboto Slab', serif;
  }

  ul{
    list-style: none;
  }
`