import { useEffect, useState } from "react";
import { Hero, Cocktails, Loading, ErrorMessage, Cocktail } from "../components";
import { FaSearch } from "react-icons/fa";
import Lottie from "react-lottie";
import animationData from "../assets/animation/drink-animation.json";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import useTitle from "../useTitle";

const HomeScreen = () => {
  useTitle('Home');
  const { 
    data,
    isLoading,
    query,  
    isError,
    count,
    searchCocktail,
    deleteScrollPosition,
    scrollPosition,
  }= useGlobalContext();
  const [input, setInput] = useState(query);

  const handleSubmit = (e) =>{
    e.preventDefault();
    searchCocktail(input);
  };

  useEffect(() => {
    if(scrollPosition){
      window.scrollTo(0, scrollPosition);
      deleteScrollPosition();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  return(
    <>
      <Hero>
        <div className='home-hero'>
          <div className='home-hero-text'>
            <div className='home-hero-title'>
              <h2 className='brand-color'>Drink 4 Life</h2>
              <h4>I cocktail più famosi a portata di un click</h4>
            </div>
            <p>
              Drink 4 Life è un database che mette a disposizione le ricette dei tuoi drink preferiti in maniera totalmente <span className='brand-color'>gratuita</span>.
            </p>
            <Link to='/about' className='btn btn-primary'>
              Se vuoi saperne di più.
            </Link>
          </div>
          <div className='home-hero-img'>
            <Lottie 
            options={{
              loop:true,
              autoplay:true,
              animationData,
              reverse:true,
            }}
            height={350}
            />
          </div>
        </div>
      </Hero>
      <section className='container home-screen'>
        <div className='search-bar'>
          <div className='form-container'>
            <form onSubmit={handleSubmit}>
              <label htmlFor='drink'>
                <h4>Cerca il tuo Cocktail</h4>
              </label>
              <div className='input-search'>
                <input
                id='drink'
                className='input'
                placeholder={query} 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                />
                <button className='btn icon-btn' type='submit'>
                  <FaSearch className='icon'/>
                </button>
              </div>
            </form>
          </div>
          <p className='result'>
              {count} risultati
          </p>
        </div>
        {
          !isLoading && isError ? (<ErrorMessage>
            Nessun Cocktail trovato
          </ErrorMessage>)
          : !isLoading && !isError ? 
          (<Cocktails data={data.drinks}/>)
          : (<Loading/>)
        }
      </section>
    </>
  )
};

export default HomeScreen;
