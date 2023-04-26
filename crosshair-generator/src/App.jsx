import { encode } from './data/encode.js'
import { decode } from './data/decode.js'
import { settings } from './data/data.js'


const App = () => {

  return (
    <div className="App">
      {Object.keys(settings).map((key) => (
        <label key={key}>
        {key}:
          <div >
            <input type="number"/>
          </div>
        </label>
      ))}
    </div>
  )
  
}

export default App
