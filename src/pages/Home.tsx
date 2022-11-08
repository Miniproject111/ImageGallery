import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonRow, IonCol, IonImg, IonItem } from "@ionic/react"
import { useEffect, useState } from "react"

const Home: React.FC = () => {
  const [search, setSearch] = useState("random")

  const handleChange = (ev: any) => {
    setSearch((prev) => (ev.detail.value ? ev.detail.value : prev))
  }
  const [data, setData] = useState({
    total: 0,
    results: [
      { id: "fjjf", likes: "12", alt_description: " sss", user: { name: "fg" }, urls: { small: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1513542789411-b6a5d4f31634" } },
    ],
  })

  // `https://api.unsplash.com/photos/fIq0tET6llw?client_id=A7QlyQ2pxZszePhVk3gzYaeTGy6zy4e11wUNBO7hrJc`
  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=${search}&client_id=A7QlyQ2pxZszePhVk3gzYaeTGy6zy4e11wUNBO7hrJc`)
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [search])

  console.log(data)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Image Gallery </IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar showClearButton="focus" placeholder="Random" onIonChange={(ev) => handleChange(ev)}></IonSearchbar>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonRow>
          {data.results.map((item) => (
            <IonCol size="6">
              <IonImg src={item.urls.small} />
            </IonCol>
          ))}
        </IonRow>
      </IonContent>
    </IonPage>
  )
}

export default Home
