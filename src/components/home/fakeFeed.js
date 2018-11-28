import axios from 'axios'
let image = 'https://control26.ru/documents/2018/11/27/1059580395/IMG_20181126_075422_HDR.jpg'
function getResponse (nb) {
  let res = []
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (res = response));
  return res
}
export default getResponse(10)
