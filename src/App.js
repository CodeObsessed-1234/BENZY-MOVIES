import Head from "./components/Head/Head";
import "./App.css"
import Main from "./components/main/Main";
import Movies from "./components/main/Movies";


let MOVIE_DETAILS =
{
  "Trending_Movies": {

    "ytb": ["https://www.youtube.com/watch?v=d9MyW72ELq0", "https://www.youtube.com/watch?v=6a1mI6LCqIo", "https://www.youtube.com/watch?v=E9-brprpvhI", "https://www.youtube.com/watch?v=EXeTwQWrcwY", "https://www.youtube.com/watch?v=b-luHrUN6hs", "https://www.youtube.com/watch?v=_Z3QKkl1WyM"],


    "src": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-w2Zy5zeaEIZHMG1FhlKwAlexmRMSI0Dkw&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6gMhcL2pFjqJWKwsNYXen2hgOr4XjXtP_5w&usqp=CAU", "https://filmfare.wwmindia.com/content/2022/oct/top-hollywood-movies-you-cant-miss-top-gun-maverick.jpg", "https://wallpapercave.com/wp/wp2162756.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs3dATQyZRC3i8eanlyFOM0ZXmEwluXsxE2w&usqp=CAU", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/5180/875180-v"],


    "name": ["Avatar", "Jumanji", "Mission Impossible", "The Dark Knight", "The Wolverine", "Black Panther"]
  },

  "Best_Of_Sports": {

    "ytb": ["https://www.youtube.com/watch?v=gUaDx5oScyU", "https://www.youtube.com/watch?v=r9B0hmb0fwg", "https://www.youtube.com/watch?v=cUW-NRAQQ30  "],


    "src": ["https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5214/1445214-h-0e27e9de9897", "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5517/1445517-h-4d9a24b0a2cc", "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5219/1445219-h-d1ec59b83546", "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5149/1445149-h-47d210fa12f3"],


    "name": ["India VS Sri Lanka", "Todays Match", "Axar Shines on India's Off Day", "7 No Balls! India's Woeful Show"]
  }
}

function App() {

  return (
    <div className="app">
      <Head />
      <Main />
      <div className="moviesDiv">
        <Movies Type="Trending" TypeName="Trending Movies" movieObject={MOVIE_DETAILS.Trending_Movies} style="fade-up" />
        <Movies Type="Trending" TypeName="Best of Sports" movieObject={MOVIE_DETAILS.Best_Of_Sports} style="zoom-in" />
        <Movies Type="Trending" TypeName="Trending Movies" movieObject={MOVIE_DETAILS.Trending_Movies} style="fade-up" />
        <Movies Type="Trending" TypeName="Best of Sports" movieObject={MOVIE_DETAILS.Best_Of_Sports} style="zoom-in" />
         <Movies Type="Trending" TypeName="Trending Movies" movieObject={MOVIE_DETAILS.Trending_Movies} style="fade-up" />
        
      </div>


    </div>
  );
}

export default App;
