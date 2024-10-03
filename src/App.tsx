import './App.css'
import { graphql } from './graphql';

const _comboQuery = graphql(`
  query Hello {
    ...PingFragment
  }

  fragment PingFragment on Query {
    ping
  }
`);

export const comboQuery = graphql.persisted<typeof _comboQuery>(
  "sha256:undefined"
);

console.log(comboQuery);

function App() {

  return (
    <>
    </>
  )
}

export default App
