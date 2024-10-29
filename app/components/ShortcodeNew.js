// FEED FUNZIONANTE CON GENERAZIONE TOKEN DI LUNGA DURATA con nuova API (scade il 24 dicembre 2024)
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const INSTAGRAM_FEED_API_URL = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_NEW_API_TOKEN}`;

const NewInstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

       try {
        const response = await fetch(INSTAGRAM_FEED_API_URL, requestOptions);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

         // Filtro per mantenere solo i post con `media_type` uguale a 'IMAGE' e limitazione a 8 foto
        const imagePosts = result.data.filter(post => post.media_type === 'IMAGE').slice(0, 8);
        setPosts(imagePosts);
      } catch (error) {
        setError(error); // Gestione dell'errore
        // console.error('Errore durante il recupero del feed Instagram:', error);
      }
    };

    fetchInstagramFeed();
  }, []);

  return (
    <div className="instagram-feed flex items-center justify-center gap-[5px] flex-wrap max-w-[1400px] ">
      {error ? (
        <p>{error.message}</p>
      ) : posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="instagram-post">
            {post.media_type === 'IMAGE' && (
              <div className='w-[300px] h-[300px]'>
                <Link target='_blank' rel="noopener noreferrer" href={post.permalink}>
                  <Image className='h-full w-full object-cover' width={30} height={30} src={post.media_url} alt={post.caption} />
                </Link>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>Nessun post trovato.</p>
      )}
    </div>
  );
};

export default NewInstagramFeed;
