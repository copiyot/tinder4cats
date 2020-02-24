import React from "react";

import Axios from "./api";
import { useState, useEffect } from "react";
import ImageOverlay from "./ImageOverlay";
import Spinner from "./Spinner";
import persistence from "./persistence";

const Dashboard = () => {
  const [currentImage, setCurrentImage] = useState({});
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [profile, setProfile] = useState({
    id: "bqs",
    url: "https://cdn2.thecatapi.com/images/bqs.jpg"
  });

  const onLikeDislikeHandler = action => {
    if (action === "likes") {
      setLike(like + 1);
      persistence(action, currentImage.id);
    } else {
      setDislike(dislike + 1);
      persistence(action, currentImage.id);
    }
  };

  const onLoadProfileHandler = (id, url) => {
    setProfile({
      id,
      url
    });
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await Axios.get("/images/search", {});
        console.log(response);
        if (response.status === 200) {
          setCurrentImage(response.data[0]);
          //   setCurrentImage(response.data);
        }
      } catch (e) {
        console.log("Error Occured: " + e.message);
      }
    };
    fetchImage();
  }, [like, dislike]);

  //   https://cdn2.thecatapi.com/images/bqs.jpg

  return (
    <div className="app">
      <div className="row">
        <div className="col-3 mt-4">
          <div className="card testimonial-card">
            <div className="card-up indigo lighten-1">
              <p className="h4 text-white pt-3">PROFILE</p>
            </div>

            <div className="avatar mx-auto white">
              <img src={profile.url} className="rounded-circle" alt="woman avatar" />
            </div>

            <div className="card-body text-center">
              <h4 className="card-title"> Cat {profile.id}</h4>
              <h5>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <i className="far fa-star"></i>
              </h5>
              <p>Location</p>
              <hr />
              <div className="u-stats">
                <div className="u-stats-item">
                  <div className="u-stats-item-val">
                    {localStorage.getItem(profile.id)
                      ? JSON.parse(localStorage.getItem(profile.id)).likes
                      : 0}
                  </div>
                  <div className="u-stats-item-desc">
                    <i className="fas fa-heart fa-2x"></i>
                  </div>
                </div>
                <div className="u-stats-item">
                  <div className="u-stats-item-val">
                    {localStorage.getItem(profile.id)
                      ? JSON.parse(localStorage.getItem(profile.id)).dislikes
                      : 0}
                  </div>
                  <div className="u-stats-item-desc">
                    <i className="fas fa-times fa-2x"></i>
                  </div>
                </div>
              </div>

              <div className="u-contacts mt-1">
                <div className="u-contacts-item">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div className="u-contacts-item">
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="u-contacts-item">
                  <i className="fab fa-instagram"></i>
                </div>
                <div className="u-contacts-item">
                  <i className="fab fa-whatsapp"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 mx-auto mt-4">
          <div className="">
            <div className="card">
              <div
                className="imageAndSpinner"
                onClick={() => onLoadProfileHandler(currentImage.id, currentImage.url)}
              >
                {currentImage.url ? <ImageOverlay url={currentImage.url} /> : <Spinner />}
              </div>

              <div className="card-body actions">
                <h4 className="card-title">{currentImage.id}</h4>
                <div className="row justify-content-between">
                  <div className="col">
                    <button
                      onClick={() => {
                        onLikeDislikeHandler("likes");
                        setProfile({
                          id: "bqs",
                          url: "https://cdn2.thecatapi.com/images/bqs.jpg"
                        });
                      }}
                      className="btn mayai"
                    >
                      <i className="fas fa-heart fa-2x"></i>
                    </button>
                  </div>
                  <div className="col">
                    <button
                      onClick={() => {
                        onLikeDislikeHandler("dislikes");
                        setProfile({
                          id: "bqs",
                          url: "https://cdn2.thecatapi.com/images/bqs.jpg"
                        });
                      }}
                      className="btn mayai"
                    >
                      <i className="fas fa-heart-broken fa-2x"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
