import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonImg, IonLabel, IonThumbnail } from '@ionic/react';
import React, { useState } from 'react';
import Movie from '../testjson/testJson';

const Home: React.FunctionComponent = () => {

  const [listing, setTest ] = useState(Movie)

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Movie list</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {listing.map((item, index) => {return(
            <IonItem key={index}>
              <IonThumbnail slot="start">
                <IonImg src={item.img} style={{width:'70px'}}/>
              </IonThumbnail>
                <IonLabel>{item.description}</IonLabel>
            </IonItem>
          )} )}
        </IonList>
      </IonContent>
    </>
  );
};

export default Home;