import '../css/banner.css';

function Banner() {
  return (
    <div className="container-banner">
      <h1>Escola de Surf</h1>
      <form className="form-email">
        <label htmlFor="email">
        <input
          className="input-email"
          placeholder="Email" 
          type="email"
          name="email"
          id="email"
        />
        </label>
        <button className="button-register">MATRICULE-SE</button>
      </form>
    </div>
  );
}

export default Banner;
