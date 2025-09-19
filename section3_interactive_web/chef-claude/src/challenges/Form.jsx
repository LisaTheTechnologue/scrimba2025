import './Form.css'
export default function Form() {
  
  function signUp(formData) {
    const data = Object.fromEntries(formData)

    const dietaryData = formData.getAll("dietaryRestrictions")

    const allData = {
      ...data,
      dietaryRestrictions: dietaryData
    }

    console.log(allData)
  }
  
  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" />
        <br />

        <fieldset>
            <legend>Employment Status</legend>
            <label>
                <input type="radio" value="unemployed" name="employmentStatus"/>Unemployed
            </label>
            <label>
                <input type="radio" value="parttime" name="employmentStatus"/>Part-time
            </label>
            <label>
                <input type="radio" value="fulltime" name="employmentStatus"/>Full-time
            </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
            Gluten-free
        </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>
        <select id="favColor" name="favColor" defaultValue="" required>
          <option value="" disabled>-- Choose a color --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <button>Submit</button>
        
      </form>
    </section>
  )
}