import MiaJupiterIcon from '../assets/img/miajupiter-icon.svg'

const MainPage = () => {
  return (
    <div className="container d-flex w-100 vh-100 p-3 mx-auto flex-column">
      <header className="mb-1 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <a href='/' className='logo'>
            <div className="d-flex float-md-start mb-0">
              <img src={MiaJupiterIcon} alt="miajupiter-icon" />
              <div className=''>
                <div className='fs-2'>MiaJupiter</div>
                <div className='small'>Solutions for all mankind</div>
              </div>
            </div>
          </a>
          <nav className="nav nav-masthead justify-content-center float-md-end fs-3">
            <a className="nav-link fw-bold py-1 px-0" href="https://github.com/miajupiter" target="_self" >
              <svg height="60" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="60" data-view-component="true" fill="currentColor">
                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </nav>
        </div>
      </header>

      <main className="px-3">
        <h1 style={{ color: 'cornflowerblue' }}>2023-03-9</h1>
        <h3 className="">we are coming to change the world</h3>
        <hr />
        <p className="lead">
          contact@miajupiter.com
        </p>


      </main>

      <footer className="mt-auto text-white-50">
        <p>Copyright MiaJupiter 2023-Now. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default MainPage