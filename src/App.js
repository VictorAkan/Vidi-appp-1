import { Routes,Route } from 'react-router-dom';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Login } from './pages/Login';
import { SignUp } from './pages/signup/SignUp';
import { UploaderSignUp } from './pages/signup/UploadersSignup';
import { UsersSignup } from './pages/signup/UsersSignup';
git remote add origin https://github.com/VictorAkan/Vidi-appp-1.gitgit remote adgit remote add origin https://github.com/VictorAkan/Vidi-appp-1.gitd origin https://github.com/VictorAkan/Vidi-appp-1.git

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/about" element={<AboutUs />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup">
        <Route index element={<SignUp />} />
        <Route path="uploader" element={<UploaderSignUp />} />
        <Route path="userSignup" element={<UsersSignup />} />
      </Route>

      </Routes>
    </ApolloProvider>
  );
}

export default App;
