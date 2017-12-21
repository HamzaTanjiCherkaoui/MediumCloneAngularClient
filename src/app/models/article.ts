import {Author} from './author'
export class Article {
    slug:String
    description : String
    body : String 
    favoritesCount : Number
    comments : [{String}]
    taglist : [{String}]
    author : Author
    

}
