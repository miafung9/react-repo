function Link({href, children}) {

  return(
    <a
            className="App-link"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
  )
  }
  // const Link = ({href, children}) => {
  //   return(
  //     <a
  //             className="App-link"
  //             href={href}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             {children}
  //           </a>
  //   )
  //   }
  
  export default Link