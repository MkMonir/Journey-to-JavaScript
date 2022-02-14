import icons from './../../img/icons.svg';
import View from './view';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipe found for this query! Please try again :)';
  _successMessage = '';

  _generateRecipe() {
    return this._data.map(this._generateRecipePreview).join('');
  }
  _generateRecipePreview(result) {
    return `
    <li class="preview">
      <a class="preview__link" href="#${result.id}">
        <figure class="preview__fig">
          <img src="${result.image}"/> alt="${result.title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${result.title}</h4>
          <p class="preview__publisher">${result.publisher}</p>
        </div>
      </a>
    </li>`;
  }
}

export default new ResultsView();
