import React, { Component } from 'react'
// import * as moment from 'moment';
let numeral = require('numeral')

const TMDBLogo =
  'https://www.themoviedb.org/assets/2/v4/logos/312x276-primary-green-74212f6247252a023be0f02a5a45794925c3689117da9d20ffe47742a665c518.png'
const moviePosterBaseUrl = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2'
let backdropImg

const getFormattedDate = (dateString) => {
  if (!dateString) return 'N/A'
  const dateArr = dateString.split('-')
  const date = new Date(dateArr[0], dateArr[1], dateArr[2])
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(date)
}

class MovieCard extends Component {
  render() {
    let data = this.props.movie

    let posterIMG = moviePosterBaseUrl + data.poster_path,
      genres = data.genre_ids,
      genresList = nestedDataToString(genres)
    backdropImg = 'https://image.tmdb.org/t/p/original' + data.backdrop_path

    console.log('data is: ' + JSON.stringify(data))

    if (data.poster_path === null) {
      posterIMG =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g'
    }

    return (
      <div className="col-xs-12 nopadding modal-dialog-centered rounded">
        <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5 card">
          <h1 className="card-header">{data.original_title}</h1>

          <span className="tagline">{data.tagline}</span>
          <p>{data.overview}</p>
          <div className="additional-details">
            <div className="row nopadding release-details">
              <div className="col-sm-6">
                {' '}
                Original Release:
                <span className="meta-data">
                  {' '}
                  {getFormattedDate(data.release_date)}
                </span>
              </div>
              <div className="col-sm-6">
                {' '}
                Vote Average:{' '}
                <span className="meta-data">
                  {data.vote_average ? data.vote_average : 'N/A'}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 ">
          <img
            id="postertest"
            className="img-thumbnail"
            src={posterIMG}
            alt="Poster"
          />
        </div>
      </div>
    )
  }

  componentDidUpdate() {
    document.body.style.backgroundImage = 'url(' + backdropImg + ')'
  }
}

function nestedDataToString(nestedData) {
  const nestedArray = []
  if (nestedData) {
    nestedData.forEach(function (item) {
      nestedArray.push(item.name)
    })
  }

  return nestedArray.join(', ')
}

export default MovieCard
