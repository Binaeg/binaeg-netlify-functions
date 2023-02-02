import React, {useState} from "react";

function Login() {
  const [message, setMessage] = useState("");
  
  const login = () => {
    console.log("login");
  };

  const addUser = () => {
    const userEntry = {
      id: "1",
      email: "q@q.de",
      firstname: "string",
      lastname: "string",
      mobile: "string",
      password: "string",
    }

    fetch("/.netlify/functions/addUser",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(userEntry)
        })
        .then(function(res){
            setMessage(`New User ${userEntry?.email} added}`);
        })
        .catch(function(res){
            setMessage(`Unable to add user ${userEntry?.lastname}`);
        })
}

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h1 className="mt-6 text-center text-5xl font-bold tracking-tight text-gray-900">
            Beatraum St. Suso
          </h1>
        </div>
        <form className="mt-8 space-y-6" action="/dashboard" method="POST">
        {/* <form className="mt-8 space-y-6"> */}
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="username" className="sr-only">
                Benutzername
              </label>
              <input
                id="username"
                name="email"
                type="email"
                autoComplete="email"
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"
                placeholder="Benutzername"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Passwort
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"
                placeholder="Passwort"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            {/* <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-lime-600 focus:ring-lime-500"
              />
              <label for="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div> */}

            <div className="text-sm">
              <a
                className="font-medium text-lime-600 hover:text-lime-500"
              >
                Passwort vergessen?
              </a>
            </div>
          </div>

          <div>
            <button
              onClick={addUser}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-lime-600 py-2 px-4 text-sm font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-lime-500 group-hover:text-lime-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Anmelden
            </button>
            <a>{message}</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
