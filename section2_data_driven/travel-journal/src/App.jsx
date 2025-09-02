import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import Contact from './components/Contact'
import Joke from './components/Joke'

import MrW from '/src/assets/mr-whiskerson.png'
import Fluffy from '/src/assets/fluffykins.png'
import JokeHeader from './components/JokeHeader'
import jokesData from './assets/jokesData'
import data from './assets/data'

function App() {

  const jokeElements = jokesData.map( joke => {
    return <Joke
          setup={joke.setup}
          punchline={joke.punchline}
        />
  })

  // Working but there is a better way
  // const entryElements = data.map( entry => {
  //   return <Entry 
  //       key={entry.id}
  //       img= {entry.img} 
  //       title={entry.title} 
  //       country={entry.country} 
  //       googleMapsLink={entry.googleMapsLink} 
  //       dates={entry.dates} 
  //       text={entry.text} 
  //       />
  // })

  const entryElements = data.map( entry => {
    return <Entry 
        key={entry.id}
        entry={entry}
                />
  })
  return (
    <>
      <Header/>
      <main className='container'>
        {entryElements}
      </main>

      <div className='jokes'>
        <JokeHeader/>
        {jokeElements}
        <Joke
          setup="I got my daughter a fridge for her birthday."
          punchline="I can't wait to see her face light up when she opens it."
          upvotes={6}
          isPun={false}
          comments={[
            { author: "ID1111", text: "This is A" },
            { author: "ID2222", text: "This is B" },
          ]}
        />
        <Joke
          setup="How did the hacker escape the police?"
          punchline="He just ransomware!"
          upvotes={10}
          isPun={true}
          comments={[
            { author: "ID3333", text: "This is A" },
            { author: "ID4444", text: "This is B" },
          ]}
        />
        <Joke
          punchline="It's hard to explain puns to kleptomaniacs because things literally."
          upvotes={4}
          isPun={false}
        />
        <Joke
          setup="Why don't pirates travel on mountain roads?"
          punchline="Scurvy."
          upvotes={2}
          isPun={false}
        />
        <Joke
          setup="Why do bees stay in the hive in the winter?"
          punchline="Swarm."
          upvotes={2}
          isPun={true}
        />
        <Joke
          setup="What's the best thing about Switzerland?"
          punchline="I don't know, but the flag is a big plus!"
          upvotes={2}
          isPun={true}
        />
      </div>


      <h2>Contact Info</h2>
      <div className='contacts'>
        <Contact
          img={MrW}
          name="Mr. Whiskerson"
          tel="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact
          img={Fluffy}
          name="Fluffykins"
          tel="(212) 555-2345"
          email="fluff@me.com"
          />
        <Contact
          img="/src/assets/felix.png"
          name="Felix"
          tel="(212) 555-4567"
          email="thecat@hotmail.com"
          />
        <Contact
          img="/src/assets/pumpkin.png"
          name="Pumpkin"
          tel="(0800) CAT KING"
          email="pumpkin@scrimba.com"
          />
      </div>
    </>
  )
}

export default App
