export const getFavoriteFromLocaleStorage = () => {
  let favorite = [];

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('favoriteStore')) {
      const store = JSON.parse(localStorage.getItem('favoriteStore'))

      if (
        store.favoriteState.favorites &&
        store.favoriteState.favorites.length
      ) {
        favorite = store.favoriteState.favorites;
      }
    }
  }
  return favorite;
}