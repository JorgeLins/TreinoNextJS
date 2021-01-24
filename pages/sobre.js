import Link from "next/link";

function Title(props) {
    return (
        <h1 style= {{color: props.color}}>{props.children}</h1>
    )

}

export default function Sobre() {
    return (
      <div>
        <header>
            <Title color= "black">Sobre o blog</Title>
            <img src="https://lh3.googleusercontent.com/proxy/2bZMfxtEExNp8xByvaJ0nCaTMVfOpouFCkmDgZFSoSmb3USYFxhBXbg3k9JgMEMIa2F-6U5PlfUumH4vGtWbZ4FnsDgsA4HGQMBCnISOPQ" />
        </header>

        <Link href="/">
        <button>
            Link para a home  
        </button>
        </Link>

      </div>
  
    )
  }
  