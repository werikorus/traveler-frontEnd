import { citiesList } from "../../mocks/citiesList";

const createElements = (city, key) => {

  //create the card for city
  const cityCard = document.createElement('DIV');  
  cityCard.setAttribute('id',`cityCard-00${key}`);
  cityCard.setAttribute('class','divCityCard');

  //create img element
  const cityImage = document.createElement('IMG');
  cityImage.setAttribute('id', 'cityImg-id');
  cityImage.setAttribute('name','cityImg-name');
  cityImage.setAttribute('alt','x');
  cityImage.setAttribute('src', `${city?.imgUrl|| 'notUrlYet'}`);

  //create city title
  const cityName = document.createElement('h1');
  cityName.setAttribute('id', 'cityName-id');
  const cityText = document.createTextNode(city?.cityName|| 'noNameCityYet');
  cityName.appendChild(cityText);
 
  //create locals quantity label
  const localQuantity = document.createElement('label');
  localQuantity.setAttribute('id', 'quantityLocals-id');
  const localText = document.createTextNode(city?.localQuantity|| 'noLocalsYet');
  localQuantity.appendChild(localText);

  //finally[1] we put all elements inside the card
  cityCard.appendChild(cityImage);
  cityCard.appendChild(cityName);
  cityCard.appendChild(localQuantity);

  //finally[2] we pull the card on the board
  const divBoard = document.getElementById('board-main-area');
  if(divBoard){
    divBoard.appendChild(cityCard);
  };
};

export const cityCardList = () => {
  citiesList.map((item, key) => createElements(item, key));
};

