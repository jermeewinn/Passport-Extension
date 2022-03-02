import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

const googleAPIKey = "AIzaSyCiCjXRFR_Let9O68u_HE8yUEhGVFZRcUs";
const PostForm = () => {
  const [postText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        // update post array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { posts } = cache.readQuery({ query: QUERY_POSTS });
        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, addPost] } },
      });
    },
  });

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addPost({
        variables: { postText },
      });

      // clear form value
      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };
  
    const apiKey = "d0a06a26fc67ad3dcc286204f13f1864";
    //here is where we get the input onsubmit
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [weather, setWeather] = useState(null);
    const [Day, setDay] = useState(null);
    const [time, setTime] = useState(null);

    const handleSubmit = (e) => {
      e.preventDefault();
      
      getData(city);
    };
      // we will use async/await to fetch this data
      async function getData() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`);
        const data = await response.json();
        console.log(data);
        var today = new Date();
        var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear()
        var dateTime = new Date(data.dt * 1000);;
        // Hours part from the timestamp
        var hours = dateTime.getHours();
        // Minutes part from the timestamp
        var minutes = dateTime.getMinutes();
        var newTime = hours + ':' + minutes;
        setTime(`${newTime},`);
        setDay(` ${date}`);
        setWeather(`${data.main.temp} °C`);
        setCountry(`, ${data.sys.country}`);

    };
  return (
    <div className="flex-container">
      <div>
        <div className="column"></div>
          <div className="new-post-form">
            <h2>New Post</h2>
            <section className="candy-stripe">
              <ul>
                <li className="stripe1"></li>
                <li className="stripe1"></li>
                <li className="stripe1"></li>
                <li className="stripe1"></li>
                <li className="stripe1"></li>
                <li className="stripe1"></li>
                <li className="stripe1"></li>
                <li className="stripe1"></li>
                <li className="stripe1"></li>
                <li className="stripe1"></li>
              </ul>
            </section>
          <p
            className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
          >
            Character Count: {characterCount}/280
            {error && <span className="ml-2">Something went wrong...</span>}
          </p>
          <form 
            className="flex-row justify-center justify-space-between-md align-stretch"
            onSubmit={handleFormSubmit}
          >
            <div >
              <textarea
                placeholder="How was your trip to..."
                value={postText}
                className="form-input col-12 col-md-9"
                onChange={handleChange}
              ></textarea>
            </div>
            <button id="specific-button" className="button is-info" type="submit">
              Submit
            </button>
          </form>
        </div>
        </div>
        <div className="column">
          <div className="timezone-converter">
            <h2>City Stats</h2>
            <section className="candy-stripe">
              <ul>
                <li className="stripe1"></li>
                <li className="stripe1"></li>
                <li className="stripe1"></li>
                <li className="stripe1"></li>
                <li className="stripe1"></li>
                <li className="stripe1"></li>
                <li className="stripe1"></li>
                <li className="stripe1"></li>
                <li className="stripe1"></li>
                <li className="stripe1"></li>
              </ul>
            </section>
            <form onSubmit={handleSubmit}>
              <label id="display" >
                City:
                <input
                  className="input is-info"
                  type="text"
                  name="city"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </label>
              <input id="city-submit"className="button is-info is-focused" type="submit" value="Submit" />
            </form>
            <div className="label">
              <p>{city}  {country}</p>
              <p>{weather}</p>
              <p>{time}  {Day}</p>
            </div>
          </div>

      </div>
    </div>
  );
};

export default PostForm;