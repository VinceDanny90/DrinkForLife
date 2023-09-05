
import { Hero } from "../components";
import backImage from "../assets/image/Contact-hero.png";
import useTitle from "../useTitle";
const ContactScreen = () => {
  useTitle('Contattaci');
  return(
    <>
    <Hero img={backImage} disableOverlay>
      <div className='contact-hero container'>
        <div className='contact-hero-text'>
          <div className="contact-hero-title">
            <h2 className='contact-title'>
              Hai qualche Cocktail da proporre?
            </h2>
            <h4 className='contact-subtitle'>
              Il team è sempre disponibile a valutare nuove idee ed ad aggiungerle al database.
            </h4>
          </div>
        </div>
        <div className='contact-form-container container'>
          <form         
          action="https://formspree.io/f/meqbkzzg" 
          method="POST" 
          className='contact-form container'>
            <div className='form-group'>
              <label htmlFor='nome'>Nome</label>
              <input 
              type='text'
              id='nome'
              name='name'
              className='input'
              placeholder="Inserisci il tuo nome"
              />
              <hr/>
            </div>
            <div className='form-group'>
              <label htmlFor='cognome'>Cognome</label>
              <input 
              type='text'
              id='cognome'
              name='cognome'
              className='input'
              placeholder="Inserisci il tuo cognome"
              />
              <hr/>
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input 
              type='email'
              id='email'
              name='email'
              className='input'
              placeholder="Inserisci la tua email"
              />
              <hr/>
            </div>
            <div className='form-group'>
              <label htmlFor='cellulare'>Telefono</label>
              <input 
              type='cel'
              id='cellulare'
              name='cellulare'
              className='input'
              placeholder="Inserisci il numero di telefono"
              />
              <hr/>
            </div>
            <div className='form-group'>
              <label htmlFor='ricetta'>La tua ricetta</label>
              <input 
              type='text'
              id='ricetta'
              name='ricetta'
              className='input'
              placeholder="Descrivi la tua ricetta"
              />
              <hr/>
            </div>
            <button type="submit" className='btn btn-primary'>
              Invia la ricetta
            </button>
          </form>
        </div>
      </div>
    </Hero>
    </>
  )
};

export default ContactScreen;
