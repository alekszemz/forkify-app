import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // This for parcel v2.Also need to include type="module" to script link in html file

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

  _generateMarkup() {
    // console.log(this._data);
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
