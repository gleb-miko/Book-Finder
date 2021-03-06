import React, { Component } from 'react';
import './App.scss';
import RenderBookCards from './components/RenderBookCards';
import NoResults from './components/NoResults';
import Loader from './components/Loader';
import Error from './components/Error';
import Input from './components/Input';
import queryAPI from './utilities/queryAPI';

class App extends Component {
  constructor(props) {
    super(props);
    this.starterText = 'Здесь пока пусто';
    this.nothingFoundText = 'По вашему запросу ничего не нашлось!';
    this.state = {
      loading: false,
      error: false,
      results: [],
      noResultsText: this.starterText,
    }
  }

  handleSubmitQuery = (input) => {
    this.setState({ results: [] });
    if (input !== '') {
      this.setState({ loading: true, error: false });
      return queryAPI(input, this.handleSuccess, this.handleError);
    } else {
      this.setState({ error: 'Пожалуйста, введите сначала поисковый запрос' })
    }
  }

  handleError = (err) => {
    this.setState({ error: err, loading: false })
  }

  handleSuccess = (result) => {
    this.setState({ loading: false, results: result, noResultsText: this.nothingFoundText });
  }

  clearApp = () => {
    this.setState({ error: false, results: [] });
  }

  render() {
    let { results, error, loading, noResultsText } = this.state;
    return (
      <div className="App">
        <h1 className='app-title'>Книжный Поисковик</h1>
        <Input onSubmit={this.handleSubmitQuery} clearApp={this.clearApp} />
        { error && <Error error={error} /> }
        { loading && <Loader /> }
        <section className='book-results'>
          {results.length > 0 && <RenderBookCards array={results} />}
          {results.length === 0 && !loading && <NoResults text={noResultsText} />}
        </section>
      </div>
    );
  }
}

export default App;
