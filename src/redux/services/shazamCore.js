import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


/*  realizado con axios
const options = {
  method: 'GET',
  url: 'https://shazam-core.p.rapidapi.com/v1/charts/world',
  headers: {
    'X-RapidAPI-Key': '846934f9famsh091a5b1bdda4a71p1eb2b3jsn73273ca1e701',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
/* 
export const ShazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => 'v1/charts/world' }),
    getSongsByGenre: builder.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}` }),
    getSongsByCountry: builder.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    getArtistDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),
    getSongDetails: builder.query({ query: ({ songid }) => `v1/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `v1/tracks/related?track_id=${songid}` }),
  }),
}); 

*/

export const ShazamCoreApi= createApi({
  reducerPath: 'ShazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',

    prepareHeaders : (headers) => {
      headers.set('X-RapidAPI-Key','846934f9famsh091a5b1bdda4a71p1eb2b3jsn73273ca1e701' )
      return headers;
    },
  
  }),
  endpoints : (builder) => ({
    getTopCharts : builder.query({query : () => '/charts/world'}),
  }),
}) ;

export const {
  useGetTopChartsQuery,
 /*  useGetSongsByGenreQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery, */
} = ShazamCoreApi;