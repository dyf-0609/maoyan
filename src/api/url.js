export const HOST = 'http://localhost:8080/ajax'

//************************************电影/影院*********************************************
//热映
export const RATED_API = '/topRatedMovies?token=&optimus_uuid=B39C9160F8AB11EAB94C672295D2B5495F1BFE74A4C548B0A5E7301D03004A70&optimus_risk_level=71&optimus_code=10';

export const MOVIE_LIST_API = '/coming.json'

//影院
export const CINEMASINFO_API = '/cinemasInfo.json'

//待映
export const COMING_API = '/mostExpected?ci=30&limit=10&offset=0&token=&optimus_uuid=B39C9160F8AB11EAB94C672295D2B5495F1BFE74A4C548B0A5E7301D03004A70&optimus_risk_level=71&optimus_code=10'

export const UNSHOW_API = '/unshow.json'

//经典电影
export const CLASSICS_API = '/classics.json'

//************************************视频*********************************************
//预告片
export const PRESHOW_API= '/preShow.json'