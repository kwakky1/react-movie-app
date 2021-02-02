import {useEffect, useState} from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css"

interface MovieProps {
    id: number,
    year: number,
    title: string,
    summary: string,
    medium_cover_image: string
    genres : [string]
}

function App() {

    const[isLoading, setIsLoading] = useState<boolean>(true);
    const[movies, setMovies] = useState<Array<any>>([]);

    useEffect( () => {
        getMovie() ;
    },[])

    const getMovie = async ():Promise<void> => {
        await axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=rating`)
            .then(res =>{
                setMovies(res.data.data.movies);
                console.log(res.data.data.movies);
                setIsLoading(false);
            })
            .catch( error => {
                alert(`아래와 같은 오류가 발생하였습니다.\n ${error}`);
            })
    }

  return (
      <div>
          <section className="container">
              <div className="loader">
                  {isLoading ? (
                      <div>
                          <span className="loader__text">Loading...</span>
                      </div>
                  ) : (
                      <div className="movies">
                          { movies.map((movie: MovieProps) => {
                              return <Movie key={movie.id}
                                            year={movie.year}
                                            title={movie.title}
                                            summary={movie.summary}
                                            poster={movie.medium_cover_image}
                                            genres={movie.genres}/>
                          })}
                      </div>

                    )
                  }
              </div>
          </section>
      </div>

  );
}

export default App;
