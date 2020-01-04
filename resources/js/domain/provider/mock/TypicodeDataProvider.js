import DataProvider from '../DataProvider';
import { urls } from '../../apiConstans';

class TypicodeDataProvider extends DataProvider {
  getAllPosts() {
    return this.axios.get(urls.post).then(request => request.data);
  }
}

export default TypicodeDataProvider;
