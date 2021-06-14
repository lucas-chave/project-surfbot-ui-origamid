function Banner() {
  return (
    <div>
      <h1 className="h1">Escola de Surf</h1>
      <form className="form-email">
        <label htmlFor="email">
        <input
          className="input-email"
          placeholder="Email" 
          type="email"
          name="email"
        />
        </label>
        <button className="button-registre">MATRICULE-SE</button>
      </form>
    </div>
  );
}

export default Banner;
