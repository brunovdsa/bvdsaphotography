import data from './data.json';
import { Main } from './components/Main';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
export interface DataProps {
  id: string;
  src: string;
  title: string;
  alt: string;
  description: string;
  location: string;
}

function App() {
  const photos = data.photos;

  return (
    <div className='bg-white h-screen'>
      <Header />
      <Main>
        <section className='grid grid-cols-1 gap-8 justify-center p-10 shadow-sm '>
          {photos.map((photo: DataProps) => (
            <Card
              id={photo.id}
              src={photo.src}
              title={photo.title}
              alt={photo.alt}
              description={photo.description}
              location={photo.location}
            />
          ))}
        </section>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
