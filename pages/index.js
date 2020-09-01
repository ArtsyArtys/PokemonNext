import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <span className="poke-stroke">Pokemon Stadium</span> <em className="next-stroke">Next</em>!
        </h1>
      </main>

      <footer>
      </footer>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 960px;
          height: 100vh;
          background: #777;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 960px;
          height: 100vh;
          background: #777;
          margin: auto;
        }

        .poke-stroke {
          color: black;
          -webkit-text-fill-color: #FFCB05;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #3D7DCA;
        }

        .next-stroke {
          color: black;
          -webkit-text-fill-color: #3D7DCA;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #000;
        }
      `}</style>
    </div>
  )
}
