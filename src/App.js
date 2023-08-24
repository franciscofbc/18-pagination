import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let newPage = oldPage + 1;
      if (newPage > data.length - 1) {
        newPage = 0;
      }
      return newPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let newPage = oldPage - 1;
      if (newPage < 0) {
        newPage = data.length - 1;
      }
      return newPage;
    });
  };

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {loading || (
          <div className="btn-container">
            <button type="button" className="prev-btn" onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  type="button"
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : ''}`}
                  onClick={() => {
                    handlePage(index);
                  }}
                >
                  {index + 1}
                </button>
              );
            })}
            <button type="button" className="next-btn" onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;