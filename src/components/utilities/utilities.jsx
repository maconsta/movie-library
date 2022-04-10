export const selectSource = (movie) => {
  if (movie.show.image === null) {
    return "https://picsum.photos/200/250";
  } else return movie.show.image.medium;
};

export const setValue = (movie, review, valueIsRating) => {
  if (movie.show.id in review) {
    if (valueIsRating) return review[movie.show.id].rating;
    else return review[movie.show.id].comment;
  }
  return;
};

export const addYearPremiered = (movie) => {
  if (movie.show.premiered !== null) {
    return "(" + movie.show.premiered.split("-")[0] + ")";
  }
};

export const addGenresAndDuration = (movie) => {
  const { genres, averageRuntime } = movie.show;
  const arr = [];
  if (genres.length !== 0) {
    genres.forEach((element) => {
      arr.push(element + " ");
    });
    if (averageRuntime !== null) {
      arr.push("| " + averageRuntime + " minutes");
    }
    return arr;
  }
};

export const addSummary = (movie) => {
  const { summary } = movie.show;
  if (summary) {
    const regex = new RegExp("(<p>)|(<b>)|(</p>)|(</b>)|(<i>)|(</i>)", "g");
    return summary.replaceAll(regex, "");
  }
};

export const changeButtonClass = (movie, favorites) => {
  let str = "btn-xlarge";
  if (movie.show.id in favorites) {
    str += " btn-remove-fav";
  } else {
    str += " btn-add-fav";
  }

  return str;
};

export const changeButtonText = (movie, favorites) => {
  if (movie.show.id in favorites) return "Remove from favorites";

  return "Add to favorites";
};
